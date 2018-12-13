import { verify } from 'jsonwebtoken'
import { statusMap } from "../services/statusMap"
import { 
  relationIntersection,
  relationIntersectionNew,
  relationshipGenderMap ,
  relationshipTOGender,
} from "../services/relationship"
import { pubsub } from '../subscriptions';

const APP_SECRET = 'appsecret321'

function getUserId(context) {
  const Authorization = (context.req.headers && context.req.headers.authorization) || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }
}



async function getUser(req, prisma) {
  const Authorization = (req.headers && req.headers.authorization) || '';
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    const userId = verifiedToken.userId
    const user = await prisma.user({ uid:userId })
    return user
  }
  return null
}


const checkeCtxUserExist = async (ctx)=>{
  const userId = getUserId(ctx)
    if (!userId) {
      return false
    }
  const user = await ctx.db.user({ uid: userId })
  if (!user) {
    return false
  }
  return true
}

const getCommonFamilies = async (relationship, families,id,ctx) => {
  // 判断自己的家人中那些是共同的家人，如父亲与我共同的家人是（母亲、兄弟姐妹）
  // id代表被判断的那个人。即父亲的id
  // 如果父亲有两任妻子，或母亲有两任丈夫，则需要判断哪个才是父亲、母亲和亲身兄弟姐妹。
  const commonFamilies =  families.filter(
    family => (family.relationship in relationIntersection[relationship])
  ).filter(
    f=>f.id!==id
  )

  if(~['father','mother'].indexOf(relationship)){
    const gender = relationshipTOGender[relationship]
    let hasManySpouses
    if(gender==="female"){
      hasManySpouses = families.filter(family=>family.relationship==='husband').length>1
    }else{
      hasManySpouses = families.filter(family=>family.relationship==='wife').length>1
    }
    const fatherOrMother = await ctx.db.family({id}).spouse()
    if(hasManySpouses){
        const commonFamilies2 = []
        for(const commonFamily of commonFamilies){
          const spouse = await ctx.db.family({id:commonFamily.id}).spouse()
          if(spouse){
            // 兄弟姐妹
            if(spouse.id === fatherOrMother.id){
              commonFamilies2.push(commonFamily)
            }
          }else{
            // 父母
            const isFatherorMother = commonFamily.id === fatherOrMother.id
            if(isFatherorMother){
              commonFamilies2.push(commonFamily)
            }
          }
        }
      return  commonFamilies2
    }
  }
  return commonFamilies
}

const getIntersectionFamiles= async (myFamilies,relativeFamiles,ctx)=>{
  const myIntersectionFamilies = []
  const relativeIntersectionFamilies = []
  for(const myFamily of myFamilies){
    for(const relativeFamily of relativeFamiles){
      const myFamilyTo = await ctx.db.family({id:myFamily.id}).to()
      const relativeFamilyTo = await ctx.db.family({id:relativeFamily.id}).to()
      if(myFamilyTo.name===relativeFamilyTo.name){
        myIntersectionFamilies.push(myFamily)
        relativeIntersectionFamilies.push(relativeFamily)
      }
    }
  }
  return {myIntersectionFamilies,relativeIntersectionFamilies}
}

const getDifferentFamilies = (myFamilies,myCommonFamilies)=>{
  let differentFamilies = []
  if(myCommonFamilies.length===0){
    differentFamilies = [...myFamilies]
    return differentFamilies
  }

  const myCommonFamiliesIds = myCommonFamilies.map(mycommonFamily=>mycommonFamily.id)
  

  for (const myFamily of myFamilies){
    if(!~myCommonFamiliesIds.indexOf(myFamily.id)){
      differentFamilies.push(myFamily)
    }
   
  }
  return differentFamilies
}

const updateCommonUserFamily = async (me,myRelationship,myCommonFamily, relative,relativeRelationship, ctx) => {
  const relativePerson = await ctx.db
  .persons({
    where: {
      user:{id: relative.id}
    }
  })

  const commonUser = await ctx.db.family({ id: myCommonFamily.id }).to().user()
  const commonUserToRelativeFamily = await ctx.db.user({ id: commonUser.id }).families(
    { where: { to: { name: relative.name } } }
  )
  // 判断共同家庭成员中是否已经存在relative
  if (commonUserToRelativeFamily.length > 0) {
    // 存在则修改
    await ctx.db.updateFamily({
      where: { id: commonUserToRelativeFamily[0].id },
      data: {
        status: statusMap[myCommonFamily.status],
        to: { connect: { id: relativePerson[0].id } },
      }
    })
  } else {
    // 如果是自己的话不要增加。
    const isNotYourself = relativePerson[0].name!==commonUser.name
    if(isNotYourself){
      // 不存在则增加,如果relative增加的是父亲或母亲的话，commonUser在增加子女时需要计算配偶是谁
      let computeRelationship = relationshipGenderMap[relative.gender][relationIntersectionNew[relativeRelationship][myCommonFamily.relationship]]
      if(computeRelationship==="sister"){
        if(Date.parse(relative.birthday)>Date.parse(commonUser.birthday)){
          computeRelationship="youngsister"
        }else{
          computeRelationship="oldsister"
        }
      }else if(computeRelationship==="brother"){
        if(Date.parse(relative.birthday)>Date.parse(commonUser.birthday)){
          computeRelationship="youngbrother"
        }else{
          computeRelationship="oldbrother"
        }
      }
      const isSonOrDaughter = ~["son", "daughter"].indexOf(computeRelationship)
      if(isSonOrDaughter){
        // 计算出配偶是谁
      // 如果我与commonUser的关系是父母与子女的关系，则commonUser中已经包含了配偶，该配偶同时也是relative的对应的
      // 如果我与commonUser的关系是夫妻关系，则我就是commonUser的配偶
        const commonUserToMeFamily = await ctx.db.user({ id: commonUser.id }).families(
          { where: { to: { name: me.name } } }
        )
        if (~["wife", "husband"].indexOf(myCommonFamily.relationship) ) {
          await ctx.db.createFamily({
            from: { connect: { id: commonUser.id } },
            to: { connect: { id: relativePerson[0].id } },
            status: statusMap[myCommonFamily.status],
            spouse: { connect: { id: commonUserToMeFamily[0].id } },
            relationship:computeRelationship
          })
        } else {
          const spouse = await ctx.db.family({ id: commonUserToMeFamily[0].id }).spouse()
          await ctx.db.createFamily({
            from: { connect: { id: commonUser.id } },
            to: { connect: { id: relativePerson[0].id } },
            status: statusMap[myCommonFamily.status],
            spouse: { connect: { id: spouse.id } },
            relationship:computeRelationship
          })
        }
      }else{
          // 无需计算配偶
          await ctx.db.createFamily({
          from: { connect: { id: commonUser.id } },
          to: { connect: { id: relativePerson[0].id } },
          status: statusMap[myCommonFamily.status],
          relationship:computeRelationship
        })
      }
    }
  }
  // 向commonuser推送familychanged
  pubsub.publish('familyChanged',{"familyChanged":{"text":commonUser.id}})
}


module.exports = {
  getUserId,
  checkeCtxUserExist,
  APP_SECRET,
  getUser,
  updateCommonUserFamily,
  getCommonFamilies,
  getIntersectionFamiles,
  getDifferentFamilies,
}
