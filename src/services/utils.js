import { verify } from 'jsonwebtoken'
import crypto from 'crypto';
import fs from 'fs';
import path from 'path'
import qs from 'querystring';
import moment from 'moment';
import { statusMap } from "../services/statusMap"
import { 
  relationIntersection,
  relationIntersectionNew,
  relationshipGenderMap ,
  relationshipTOGender,
} from "../services/relationship"
import { pubsub } from '../subscriptions';
import  {raw} from './helper'
import {HOST,PORT,AlipayTest} from './settings'

const FAMILYGROUP_CHANGED = 'familyGroupChanged'
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

const getAllFamilies= async (myFamilies,ctx)=>{
  // 获取父母-自己-儿子-孙子-重孙所有的families
  // 流程
  // 获取层数5：父母-自己-儿子-孙子-重孙
  // 1、获取自己所有的families,自己所有的families都在父母群中。自己层完毕
  // 2、获取兄弟姐妹的配偶和子女，将兄弟姐妹的配偶和子女加到父母群中。儿子层完毕
  // 3、获取自己和兄弟姐妹的子女的配偶和子女，将自己和兄弟姐妹的子女的配偶和子女加到父母群中。孙子层完毕。
  // 4、获取自己和兄弟姐妹的子女的子女的配偶和子女，将自己和兄弟姐妹的子女的子女的配偶和子女加到父母群中。重孙层完毕。
 
  let families = []
  const SON_DAUGHTER = ['son','daughter']
  const BROTHER_SISTER = ['oldbrother','youngsister','youngbrother','oldsister']
  const SPOUSE_SON_DAUGHTER = ['son','daughter','wife','husband']
  // BS:兄弟姐妹，SSD:配偶和子女，SD:子女,M:我,MBS:我和兄弟姐妹
  // 1、自己层
  families  = families.concat(myFamilies)
  // 2、儿子层
  const myBSFamilies = myFamilies.filter(family=>!!~BROTHER_SISTER.indexOf(family.relationship))
  for (const myBSFamily of myBSFamilies){
    const BS = await ctx.db.family({id:myBSFamily.id}).to().user()
    if(BS){
      const BSFamilies = await ctx.db.user({id:BS.id}).families()
      const SSDOfBS = BSFamilies.filter(family=>!!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship))
      families  = families.concat(SSDOfBS)
      // 3、孙子层
      const SDFamiliesOfBS = BSFamilies.filter(family=>!!~SON_DAUGHTER.indexOf(family.relationship))
      for (const SDFamilyOfBS of SDFamiliesOfBS){
        const SDOfBS = await ctx.db.family({id:SDFamilyOfBS.id}).to().user()
        if(SDOfBS){
          const familiesOfSDOfBS = await ctx.db.user({id:SDOfBS.id}).families()
          const SSDOfSDOfBS = familiesOfSDOfBS.filter(family=>!!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship))
          families  = families.concat(SSDOfSDOfBS)
          // 4、重孙层
          const SDfamiliesOfSDOfBS = familiesOfSDOfBS.filter(family=>!!~SON_DAUGHTER.indexOf(family.relationship))
          for (const SDfamilyOfSDOfBS of SDfamiliesOfSDOfBS){
            const SDOfSDOfBS = await ctx.db.family({id:SDfamilyOfSDOfBS.id}).to().user()
            if(SDOfSDOfBS){
              const familiesOfSDOfSDOfBS = await ctx.db.user({id:SDOfSDOfBS.id}).families()
              const SSDfamiliesOfSDOfSDOfBS = familiesOfSDOfSDOfBS.filter(family=>!!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship))
              families  = families.concat(SSDfamiliesOfSDOfSDOfBS)
            }
          }
        }
      }
    }
  }
   // 3、孙子层
   const SDFamiliesOfM = myFamilies.filter(family=>!!~SON_DAUGHTER.indexOf(family.relationship))
   for (const SDFamilyOfMe of SDFamiliesOfM){
     const SDOfMe = await ctx.db.family({id:SDFamilyOfMe.id}).to().user()
     if(SDOfMe){
       const familiesOfSDOfMe = await ctx.db.user({id:SDOfMe.id}).families()
       const SSDOfSDOfMe = familiesOfSDOfMe.filter(family=>!!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship))
       families  = families.concat(SSDOfSDOfMe)
       // 4、重孙层
       const SDfamiliesOfSDOfMe = familiesOfSDOfMe.filter(family=>!!~SON_DAUGHTER.indexOf(family.relationship))
       for (const SDfamilyOfSDOfMe of SDfamiliesOfSDOfMe){
         const SDOfSDOfMe = await ctx.db.family({id:SDfamilyOfSDOfMe.id}).to().user()
         if(SDOfSDOfMe){
           const familiesOfSDOfSDOfMe = await ctx.db.user({id:SDOfSDOfMe.id}).families()
           const SSDfamiliesOfSDOfSDOfMe = familiesOfSDOfSDOfMe.filter(family=>!!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship))
           families  = families.concat(SSDfamiliesOfSDOfSDOfMe)
         }
       }
     }
   }
  return families
}

const checkExistFatherAndMother = async (userId,ctx)=>{
  const myFamilies = await ctx.db.user({id:userId}).families()
  const father = myFamilies.filter(family=>family.relationship==='father')
  const mother = myFamilies.filter(family=>family.relationship==='mother')
  if(father.length===0|| mother.length===0){
    return false
  }
  return true
}

const createFamilyGroupById=async (id,ctx)=>{
  // 创建父母familyGroup
  // 检查是否已经输入父母姓名
  const BROTHER_SISTER = ['oldbrother','youngsister','youngbrother','oldsister']
  const myFamilies = await ctx.db.user({id}).families()
  const me = await ctx.db.user({id})
  const father = myFamilies.filter(family=>family.relationship==='father')
  if(father.length===0){
    return null
    // throw new Error("尚未输入父亲姓名")
  }
  const fatherPerson = await ctx.db.family({id:father[0].id}).to()
  const mother = myFamilies.filter(family=>family.relationship==='mother')
  if(mother.length===0){
    return null
    // throw new Error("尚未输入母亲姓名")
  }
  const motherPerson = await ctx.db.family({id:mother[0].id}).to()
  // -----------------------------------------------
  // 获取我的兄弟姐妹
  const myBSFamilies = myFamilies.filter(family=>!!~BROTHER_SISTER.indexOf(family.relationship)) 
  const MBS = []
  for (const myBSFamily of myBSFamilies){
    const BS = await ctx.db.family({id:myBSFamily.id}).to().user()
    if(BS){
      MBS.push(BS)
    }
  }
  MBS.push(me)
  const MBSids = MBS.map(mbs=>({id:mbs.id}))
  const myParentsGroupFamilies = await getAllFamilies(myFamilies,ctx)
  const myParentsGroupFamiliesIds = myParentsGroupFamilies.map(family=>{
    return {id:family.id}
  })
  // 方案一：
  // 检查familyGroup中的users是否已经包含了自己和兄弟姐妹，如果都包含了则更新faimlyGroup，
  // 如果没有包含的话，则删除自己和兄弟姐妹所有的familyGroup然后，再创建一个新的familyGroup.
  // 如果familyGroup中的father和mother都是user则不可删除。
  // 情况分类：判断哪个familyGroup为真
  // A:如果mbs都没有familyGroup则直接以刷新者新建一个。
  // B:如果只有一个人有familyGroup，则以该人的familyGroup为真。
  // C:如果有超过一个人有familyGroup，则：
  // a:如果familyGroup已经包含了所有的兄弟姐妹，即所有人的familyGroup已经是同一个。则该familyGroup为真。
  // b:
  // (1)有一个人的familyGroup中的father和mother都是user,则该familyGroup为真，其他人的familyGroup不是这个的直接删除。
  // (2)没有一个人的familyGroup中的father和mother都是user.
  // (2.1)有一个人faimlyGroup中的father或者mother是user,则该familyGroup为真，其他人的familyGroup直接删除。
  // (2.2)没有一个人的familyGroup中的father或者mother是user,则以该familyGroup为真，删除其他的familyGroup。
  let familyGroup
  const mbsFamilyGroups = await ctx.db.familyGroups({
    where:{
      OR:MBSids.map(mbsId=>({users_some:mbsId}))
    }
  })
  if(mbsFamilyGroups.length===0){
    // 所有人都没有,直接创建一个
    familyGroup =  await ctx.db.createFamilyGroup({
      name:`${fatherPerson.name}和${motherPerson.name}的群`,
      creater:{connect:{id}},
      father:{connect:{id:fatherPerson.id}},
      mother:{connect:{id:motherPerson.id}},
      families:{connect:myParentsGroupFamiliesIds},
      users:{connect:MBSids}
    })
  }else if(mbsFamilyGroups.length===1){
    // 可能是只有一个人有，或者所有人有一个，则更新该familyGroup
      // 清空已有的familyGroup的families连接
      const existFamilyGroupFamilies = await ctx.db.familyGroup(
      {id:mbsFamilyGroups[0].id}
    ).families()
    const exsitFamilyGroupFamilyIds = existFamilyGroupFamilies.map(family=>({id:family.id}))
    await ctx.db.updateFamilyGroup({
      where:{id:mbsFamilyGroups[0].id},
      data:{
        families:{disconnect:exsitFamilyGroupFamilyIds},
      }
    })
    // 重新建立连接
    familyGroup = await ctx.db.updateFamilyGroup({
      where:{id:mbsFamilyGroups[0].id},
      data:{
        families:{connect:myParentsGroupFamiliesIds},
        users:{connect:MBSids}
      }
    })
  }else if(mbsFamilyGroups.length>1){
    // 有多个人有familyGroup，需要判断哪个为真。
    // (1)如果父母都为user者，则该familyGroup为真。
    const hasFatherAndMotherFamilyGroup = []
    for(const mbsFamilyGroup of mbsFamilyGroups){
      const fatherUser = await ctx.db.familyGroup({id:mbsFamilyGroup.id}).father().user()
      const motherUser = await ctx.db.familyGroup({id:mbsFamilyGroup.id}).mother().user()
      if(fatherUser && motherUser){
        hasFatherAndMotherFamilyGroup.push(mbsFamilyGroup)
      }
    }
    if(hasFatherAndMotherFamilyGroup.length>0){
      // 删除其他的familyGroup
      const nothasFatherAndMotherFaimlyGroupIds = mbsFamilyGroups.filter((mbsFamilyGroup)=>{
         return mbsFamilyGroup.id!==hasFatherAndMotherFamilyGroup[0].id
      }).map(fg=>({id:fg.id}))
      const count = await ctx.db.deleteManyFamilyGroups({
        OR:nothasFatherAndMotherFaimlyGroupIds
      })
      // 清空已有的familyGroup的families连接
      const existFamilyGroupFamilies = await ctx.db.familyGroup(
        {id:hasFatherAndMotherFamilyGroup[0].id}
      ).families()
      const exsitFamilyGroupFamilyIds = existFamilyGroupFamilies.map(family=>({id:family.id}))
      await ctx.db.updateFamilyGroup({
        where:{id:hasFatherAndMotherFamilyGroup[0].id},
        data:{
          families:{disconnect:exsitFamilyGroupFamilyIds},
        }
      })
      // 重新建立连接
      // 更新该familyGroup
      familyGroup = await ctx.db.updateFamilyGroup({
        where:{id:hasFatherAndMotherFamilyGroup[0].id},
        data:{
          families:{connect:myParentsGroupFamiliesIds},
          users:{connect:MBSids}
        }
      })
    }else{
      // 如果没有一个人的father和mother全部为user，但有一个是
      const hasFatherOrMotherFamilyGroup = []
      for(const mbsFamilyGroup of mbsFamilyGroups){
        const fatherUser = await ctx.db.familyGroup({id:mbsFamilyGroup.id}).father().user()
        const motherUser = await ctx.db.familyGroup({id:mbsFamilyGroup.id}).mother().user()
        if(fatherUser || motherUser){
          hasFatherOrMotherFamilyGroup.push(mbsFamilyGroup)
        }
      }
      if(hasFatherOrMotherFamilyGroup.length>0){
        // 删除其他的familyGroup
        const nothasFatherOrMotherFaimlyGroupIds = mbsFamilyGroups.filter((mbsFamilyGroup)=>{
           return mbsFamilyGroup.id!==hasFatherOrMotherFamilyGroup[0].id
        }).map(fg=>({id:fg.id}))

        const count = await ctx.db.deleteManyFamilyGroups({
          OR:nothasFatherOrMotherFaimlyGroupIds
        })

        // 清空已有的familyGroup的families连接
        const existFamilyGroupFamilies = await ctx.db.familyGroup(
          {id:hasFatherOrMotherFamilyGroup[0].id}
        ).families()
        const exsitFamilyGroupFamilyIds = existFamilyGroupFamilies.map(family=>({id:family.id}))
        await ctx.db.updateFamilyGroup({
          where:{id:hasFatherOrMotherFamilyGroup[0].id},
          data:{
            families:{disconnect:exsitFamilyGroupFamilyIds},
          }
        })
        // 重新建立连接
        // 更新该familyGroup
        familyGroup = await ctx.db.updateFamilyGroup({
          where:{id:hasFatherOrMotherFamilyGroup[0].id},
          data:{
            families:{connect:myParentsGroupFamiliesIds},
            users:{connect:MBSids}
          }
        })
      }else{
        // 如果所有人的father和mother都不是,则以任意一个为真,都以第一个为真
        // 删除其他的familyGroup
        const otherFaimlyGroupIds = mbsFamilyGroups.filter((mbsFamilyGroup)=>{
          return mbsFamilyGroup.id!==mbsFamilyGroups[0].id
       }).map(fg=>({id:fg.id}))

       const count = await ctx.db.deleteManyFamilyGroups({
         OR:otherFaimlyGroupIds
       })

        // 清空已有的familyGroup的families连接
        const existFamilyGroupFamilies = await ctx.db.familyGroup(
          {id:mbsFamilyGroups[0].id}
        ).families()
        const exsitFamilyGroupFamilyIds = existFamilyGroupFamilies.map(family=>({id:family.id}))

        await ctx.db.updateFamilyGroup({
          where:{id:mbsFamilyGroups[0].id},
          data:{
            families:{disconnect:exsitFamilyGroupFamilyIds},
          }
        })
        // 重新建立连接
        familyGroup = await ctx.db.updateFamilyGroup({
          where:{id:mbsFamilyGroups[0].id},
          data:{
            families:{connect:myParentsGroupFamiliesIds},
            users:{connect:MBSids}
          }
        })
      }
    }
  }

  return familyGroup
}

const pubGroupFamily = async (familyGroup, ctx) => {
  const groupFamilies = await ctx.db.familyGroup({ id: familyGroup.id }).families()
  for (const family of groupFamilies) {
    const user = await ctx.db.family({ id: family.id }).to().user()
    if (user) {
      pubsub.publish(FAMILYGROUP_CHANGED, { [FAMILYGROUP_CHANGED]: { "text": user.id } })
    }
  }
}


const refreshMyFamilyGroups = async (parent, args, ctx) => {
  const userId = getUserId(ctx)
  if (!userId) {
    throw new Error("用户不存在")
  }
  const user = await ctx.db.user({ uid: userId })
  if (!user) {
    throw new Error("用户不存在")
  }

  const groupUsersId = []
  const meAndSpousesfamilies = []
  groupUsersId.push({ id: user.id })
  const meFamilies = await ctx.db.user({ id: user.id }).families()
  meAndSpousesfamilies.push(meFamilies)
  // 配偶
  const mySpouseFamilies = meFamilies.filter(family => !!~['wife', 'husband'].indexOf(family.relationship))
  for (const mySpouseFamily of mySpouseFamilies) {
    const mySpouse = await ctx.db.family({ id: mySpouseFamily.id }).to().user()
    if (mySpouse) {
      groupUsersId.push({ id: mySpouse.id })
      const spouseFamilies = await ctx.db.user({ id: mySpouse.id }).families()
      meAndSpousesfamilies.push(spouseFamilies)
    }
  }
  for (const myFamilies of meAndSpousesfamilies) {
    // 我和配偶的家庭组全部创建
    // parents
    let p
    // father's parents
    let fp
    // father's father's parents
    let ffp
    // father's mother's parents
    let fmp
    // mother's parents
    let mp
    // mother's father's parents
    let mfp
    // mother's mother's parents
    let mmp
    // 如果有mother pa或者其上面的父母
    let mpast
    // 如果有father pa或者其上面的父母
    let fpast
    // 创建父母群
    const me = await ctx.db.family({ id: myFamilies[0].id }).from()
    if (me.id === user.id) {
      p = await createFamilyGroupById(me.id, ctx)
    } else {
      try {
        p = await createFamilyGroupById(me.id, ctx)
      } catch (error) {
        console.log(error)
      }
    }
    // 创建父母的父母群

    const familyFather = myFamilies.filter(family => family.relationship === 'father')
    const father = await ctx.db.family({ id: familyFather[0].id }).to().user()
    if (father) {
      // 创建祖父母群
      try {
        groupUsersId.push({ id: father.id })
        fp = await createFamilyGroupById(father.id, ctx)
        // 创建爷爷和奶奶的父母
        const fatherFamilies = await ctx.db.user({ id: father.id }).families()
        const fatherFamilyFather = fatherFamilies.filter(family => family.relationship === 'father')
        const grandpa = await ctx.db.family({ id: fatherFamilyFather[0].id }).to().user()
        if (grandpa) {
          // 创建曾祖父母
          groupUsersId.push({ id: grandpa.id })
          ffp = await createFamilyGroupById(grandpa.id, ctx)
        }
        const motherFamilyFather = fatherFamilies.filter(family => family.relationship === 'mother')
        const grandma = await ctx.db.family({ id: motherFamilyFather[0].id }).to().user()
        if (grandma) {
          // 创建曾外祖父
          groupUsersId.push({ id: grandma.id })
          fmp = await createFamilyGroupById(grandma.id, ctx)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    const familyMother = myFamilies.filter(family => family.relationship === 'mother')
    const mother = await ctx.db.family({ id: familyMother[0].id }).to().user()
    if (mother) {
      try {
        // 创建外祖父母群
        groupUsersId.push({ id: mother.id })
        mp = await createFamilyGroupById(mother.id, ctx)
        // 创建姥姥和姥爷的父母
        const motherFamilies = await ctx.db.user({ id: mother.id }).families()
        const fatherFamilyMother = motherFamilies.filter(family => family.relationship === 'father')
        const grandpa = await ctx.db.family({ id: fatherFamilyMother[0].id }).to().user()
        if (grandpa) {
          // 创建外曾祖父母
          groupUsersId.push({ id: grandpa.id })
          mfp = await createFamilyGroupById(grandpa.id, ctx)
        }
        const motherFamilyMother = motherFamilies.filter(family => family.relationship === 'mother')
        const grandma = await ctx.db.family({ id: motherFamilyMother[0].id }).to().user()
        if (grandma) {
          // 创建外曾外祖父母
          groupUsersId.push({ id: grandma.id })
          mmp = await createFamilyGroupById(grandma.id, ctx)
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    // 向所有的成员推送通知
    if (mmp || mfp) {
      // 分别推送到mmp中的所有family.user和mfp的所有family.user
      if (mmp) {
        pubGroupFamily(mmp, ctx)
      }
      if (mfp) {
        pubGroupFamily(mfp, ctx)
      }
      mpast = true
    } else if (mp) {
      // 推送到mp的所有family.user
      pubGroupFamily(mp, ctx)
      mpast = true
    }

    if (ffp || fmp) {
      if (ffp) {
        pubGroupFamily(ffp, ctx)
      }
      if (fmp) {
        pubGroupFamily(ffp, ctx)
      }
      fpast = true
    } else if (fp) {
      pubGroupFamily(fp, ctx)
      fpast = true
    }

    if (!fpast && !mpast) {
      // 推送到p的所有family.user
      pubGroupFamily(p, ctx)
    }
  }

  // 我的群由子女负责创建
  const sonAndDaughters = meFamilies.filter(family => !!~['son', 'daughter'].indexOf(family.relationship))
  for (const sonAndDaughter of sonAndDaughters) {
    const sd = await ctx.db.family({ id: sonAndDaughter.id }).to().user()
    if (sd) {
      groupUsersId.push({ id: sd.id })
    }
  }

  return ctx.db.familyGroups({
    where: {
      OR: groupUsersId.map(usersId => ({ users_some: usersId }))
    }
  })
}


const getFileTypeByExt=(ext)=> {
  const imgExt = ['png','jpg','gif','bmp','jpeg'];
  const videoExt = ['mp4','mov'];
  for (let i = 0; i < imgExt.length; i++){
      const type = imgExt[i];
      if (ext === type || ext === type.toUpperCase()){
          return 0;
      }
  }
  for (let i = 0; i < videoExt.length; i++){
      const type = videoExt[i];
      if (ext === type || ext === type.toUpperCase()){
          return 1;
      }
  }
  return -1;
}
const getFileExt=(filepath)=> {
  if (filepath !== "") {
      if (filepath.indexOf(".") === -1){
          return '';
      }
      const pos = filepath.replace(/.+\./, "");
      return pos;
  }
  return '';
}


const getFileName=(ext)=> {
  const timestamp = new Date().getTime();
  const randNum = Math.floor(Math.random()*1000+1);
  const fileName = `${_getNowFormatDate()}_${timestamp}_${randNum}.${ext}`;
  return fileName;
}

const _getNowFormatDate=()=> {
  const date = new Date();
  const seperator1 = "-";
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = `0${month}`;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate =`0${strDate}`;
  }
  const currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

// 支付宝生成签名
const signed =  (order)=> {
  let appId
  if(!AlipayTest){
    appId = '2019022063305057'; 
  }else{
    appId = '2016092700606595'
  }
  
  const bizContent ={
    timeout_express:"60m",
    product_code:"QUICK_MSECURITY_PAY",
    total_amount:order.total_amount,
    subject:order.subject,
    body:order.body,
    out_trade_no:order.out_trade_no
  }

  const unsigned = {
      app_id: appId,
      method: 'alipay.trade.app.pay',
      charset: 'utf-8',
      sign_type: 'RSA2',
      version: '1.0',
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      biz_content: JSON.stringify(bizContent),
      notify_url: `http://${HOST}:${PORT}/alipay/notify_url` 
  }
  const unsignedStr = raw(unsigned);

  const privateKey = fs.readFileSync(path.join(__dirname, './config/alipay_private_key.pem')); 
  const signer = crypto.createSign('RSA-SHA256');  
  signer.update(unsignedStr);  
  const sign = signer.sign(privateKey, 'base64');  

  return `${qs.stringify(unsigned)}&sign=${encodeURIComponent(sign) }`
}

// 收到支付宝异步通知进行验签
const verified = (response, sign)=>{
  let publicKeyPath
  if(!AlipayTest){
    publicKeyPath = './config/alipay_public_key.pem'
  }else{
    publicKeyPath = './config/alipay_public_key_test.pem'
  }
  
  const publicKey = fs.readFileSync(path.join(__dirname, publicKeyPath));
  const cryptoVerify = crypto.createVerify('RSA-SHA256');
  cryptoVerify.update(response);
  return cryptoVerify.verify(publicKey, sign, 'base64')
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
  getAllFamilies,
  createFamilyGroupById,
  refreshMyFamilyGroups,
  checkExistFatherAndMother,
  getFileTypeByExt,
  getFileName,
  getFileExt,
  signed,
  verified
}
