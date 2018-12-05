import { verify } from 'jsonwebtoken'
import { statusMap } from "../services/statusMap"
import { relationIntersection,relationIntersectionNew,relationshipGenderMap } from "../services/relationship"

const APP_SECRET = 'appsecret321'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

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

const getCommonFamilies = (relationship, families,id) => {
  // 判断自己的家人中那些是共同的家人，如父亲与我共同的家人是（母亲、兄弟姐妹）
  // id代表被判断的那个人。即父亲的id
  return families.filter(
    family => (family.relationship in relationIntersection[relationship])
  ).filter(
    f=>f.id!==id
  )
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
  console.log('relative',relative)
  const relativePerson = await ctx.db
  .persons({
    where: {
      user:{id: relative.id}
    }
  })
  console.log('relativePerson',relativePerson)

  const commonUser = await ctx.db.family({ id: myCommonFamily.id }).to().user()
  console.log('commonUser',commonUser)
  
  const commonUserToRelativeFamily = await ctx.db.user({ id: commonUser.id }).families(
    { where: { to: { name: relative.name } } }
  )
  console.log('commonUserToRelativeFamily',commonUserToRelativeFamily)
  // 判断共同家庭成员中是否已经存在relative
  if (commonUserToRelativeFamily.length > 0) {
    // 存在则修改
    const update2 = await ctx.db.updateFamily({
      where: { id: commonUserToRelativeFamily[0].id },
      data: {
        status: statusMap[myCommonFamily.status],
        to: { connect: { id: relativePerson[0].id } },
      }
    })
    console.log('update2',update2)
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
      console.log('computeRelationship',computeRelationship)
      const isSonOrDaughter = ~["son", "daughter"].indexOf(computeRelationship)
      console.log('isSonOrDaughter',isSonOrDaughter)
      
      if(isSonOrDaughter){
        // 计算出配偶是谁
      // 如果我与commonUser的关系是父母与子女的关系，则commonUser中已经包含了配偶，该配偶同时也是relative的对应的
      // 如果我与commonUser的关系是夫妻关系，则我就是commonUser的配偶
        const commonUserToMeFamily = await ctx.db.user({ id: commonUser.id }).families(
          { where: { to: { name: me.name } } }
        )
        console.log('commonUserToMeFamily',commonUserToMeFamily)
        console.log('88')
        console.log('commonUser.id',commonUser.id)
        console.log(' relativePerson[0].id', relativePerson[0].id)
        if (~["wife", "husband"].indexOf(myCommonFamily.relationship) ) {
          const update3 = await ctx.db.createFamily({
            from: { connect: { id: commonUser.id } },
            to: { connect: { id: relativePerson[0].id } },
            status: statusMap[myCommonFamily.status],
            spouse: { connect: { id: commonUserToMeFamily[0].id } },
            relationship:computeRelationship
          })
          console.log('update3',update3)
        } else {
          const spouse = await ctx.db.family({ id: commonUserToMeFamily[0].id }).spouse()
          console.log(spouse)
          const update4 = await ctx.db.createFamily({
            from: { connect: { id: commonUser.id } },
            to: { connect: { id: relativePerson[0].id } },
            status: statusMap[myCommonFamily.status],
            spouse: { connect: { id: spouse.id } },
            relationship:computeRelationship
          })
          console.log("update4",update4)
        }
      }else{
          // 无需计算配偶
          const update5 = await ctx.db.createFamily({
          from: { connect: { id: commonUser.id } },
          to: { connect: { id: relativePerson[0].id } },
          status: statusMap[myCommonFamily.status],
          relationship:computeRelationship
        })
        console.log('update5',update5)
      }
    }
  }
}

const syncFamilies= async (me,myCommonFamilies,myRelationship,relative,relativeFamily,relativeRelationship,ctx) => {
  for (const myCommonFamily of myCommonFamilies) {
    const myCommonFamilyTo = await ctx.db.family({ id: myCommonFamily.id }).to()
    const relativeToCommonUserFamily = await ctx.db.user({ id: relative.id }).families(
      { where: { to: { name: myCommonFamilyTo.name } } }
    )
    // 如果对方也存在共同的家庭成员,则判断哪一方需要更新
    if (relativeToCommonUserFamily.length > 0) {
      if (myCommonFamily.status >= relativeToCommonUserFamily[0].status) {
        // 如果我的家庭成员status大于relative的status,则更新relative的family
        // 更新relative的family
        await ctx.db.updateFamily({
          where: { id: relativeToCommonUserFamily[0].id },
          data: {
            status: myCommonFamily.status,
            to: { where: { id: myCommonFamilyTo.id } }
          }
        })
        if (myCommonFamily.status > "0") {
          // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
          updateCommonUserFamily(me,myRelationship,myCommonFamily, relative,relativeRelationship, ctx)
        }
      }
      else {
        // 如果relative的status大于我的家庭成员的status，则更新我的family
        // 更新我的family
        const relativeToCommonUserFamilyTo = await ctx.db.family({ id: relativeToCommonUserFamily[0].id }).to()
        await ctx.db.updateFamily({
          where: { id: myCommonFamily.id },
          data: {
            status: relativeToCommonUserFamily[0].status,
            to: { where: { id: relativeToCommonUserFamilyTo.id } }
          }
        })

        if (relativeToCommonUserFamily[0].status > 0) {
          // 如果等于0,则还没有共同的user,无需更新,如果大于0，则要更新CommonUser
          updateCommonUserFamily(me,myRelationship,myCommonFamily, relative,relativeRelationship, ctx)
        }
      }
      
    } else{
      const isHusbandOrWife = ~["husband", "wife"].indexOf(relativeToCommonUserFamily.relationshp)
      if(isHusbandOrWife){
        await ctx.db.createFamily({
          data: {
            from:{connect:{id:relative.id}},
            status: myCommonFamily.status,
            to: { where: { id: myCommonFamilyTo.id } },
            spouse:{connect:{id:relativeFamily.id}},
          }
        })
      }else{
        const relativeSpouse = await ctx.db.family({id:relativeFamily.id}).spouse()
        await ctx.db.createFamily({
          data: {
            from:{connect:{id:relative.id}},
            status: myCommonFamily.status,
            to: { where: { id: myCommonFamilyTo.id } },
            spouse:{connect:{id:relativeSpouse.id}},
          }
        })
      }
    }
  }
}

module.exports = {
  getUserId,
  APP_SECRET,
  getUser,
  updateCommonUserFamily,
  getCommonFamilies,
  syncFamilies,
  getIntersectionFamiles,
  getDifferentFamilies
}
