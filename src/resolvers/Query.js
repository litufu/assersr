import { getUserId, } from '../services/utils'
import {ossClient} from '../services/settings'

export const Query = {
  me: (parent, args, ctx) => {
    return ctx.db.user({ uid: getUserId(ctx) })
  },
  searchUser:(parent, {username}, ctx) => ctx.db.user({username}),
  cities:(parent, {code}, ctx)=> ctx.db.cities({where:{province:{code}}}),
  areas:(parent, {code}, ctx)=> ctx.db.areas({where:{city:{code}}}),
  streets:(parent, {code}, ctx)=> ctx.db.streets({where:{Area:{code}}}),
  villages:(parent, {code}, ctx)=> ctx.db.villages({where:{street:{code}}}),
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, { id }, ctx) => ctx.db.post({ id }),
  family:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.families({
    where: {
      from: {uid:userId}
    }
  })
  },
  getFamiliesById:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if(!args.id){
      return ctx.db.families({
        where: {
          from: {uid:userId}
        }
      })
    }
    return ctx.db.families({
      where: {
        from: {id:args.id}
      }
    })
  },
  getSchools:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.schools({where: {
      AND: [{
        location: {name:args.locationName}
      }, {
        kind:args.kind
      }]
    }}
    )
  },
  getMajors:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.majors({
      where: {
        name_contains: args.majorName
      }
    })
  },
  getUniversities:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.universities({
      where: {
        name_contains: args.universityName
      }
    })
  },
  getExamBasicInfo: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const results = await ctx.db.collegeEntranceExams({
      where: {
        student: {uid:userId}
      }
    })
    if(results.length===0){
      return null
    } 
    return results[0]
  },
  getRegStatusApplicants:async (parent, {  education, universityId, majorId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const userExams = await ctx.db.collegeEntranceExams(
      {
        where:{student:{uid:userId}}
      }
    )
    if(userExams.length===0){
      throw new Error('尚未填写高考基本信息')
    }
    const userExamProvinceId = await ctx.db.collegeEntranceExam({
      id:userExams[0].id
    }).province().id()
    const userExamSubject =  await ctx.db.collegeEntranceExam({
      id:userExams[0].id
    }).subject()

    const regStatuses = await ctx.db.regStatuses({
      where: {
        education,
        university:{id:universityId},
        major:{id:majorId},
      }
    })
    if(regStatuses.length===0){
      return []
    }

    const applicants = await ctx.db.regStatus(
      {
        id:regStatuses[0].id
      }
    ).applicants({
      where:{
        exam:{
          AND:[
            {province:{id:userExamProvinceId}},
            {subject:userExamSubject}
          ]
        }
      }
    })
    
    return applicants
  },
  getRegStatusApplicantsById:async (parent, {  regStatusId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const userExams = await ctx.db.collegeEntranceExams(
      {
        where:{student:{uid:userId}}
      }
    )
    if(userExams.length===0){
      throw new Error('尚未填写高考基本信息')
    }
    const userExamProvinceId = await ctx.db.collegeEntranceExam({
      id:userExams[0].id
    }).province().id()
    const userExamSubject =  await ctx.db.collegeEntranceExam({
      id:userExams[0].id
    }).subject()

    const applicants = await ctx.db.regStatus(
      {
        id:regStatusId
      }
    ).applicants({
      where:{
        exam:{
          AND:[
            {province:{id:userExamProvinceId}},
            {subject:userExamSubject}
          ]
        }
      }
    })

  
    return applicants
  },
  getRegStatus:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return  ctx.db.user(
      {uid:userId}
    ).regStatus()

  },
  getFamilyGroups:async (parent, args, ctx) => {
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
    groupUsersId.push({id:user.id})
    const meFamilies = await ctx.db.user({id:user.id}).families()
    meAndSpousesfamilies.push(meFamilies)
    // 配偶
    const mySpouseFamilies = meFamilies.filter(family=>!!~['wife','husband'].indexOf(family.relationship))
    for (const mySpouseFamily of mySpouseFamilies ){
      const mySpouse = await ctx.db.family({id:mySpouseFamily.id}).to().user()
      if(mySpouse){
        groupUsersId.push({id:mySpouse.id})
        const spouseFamilies = await ctx.db.user({id:mySpouse.id}).families()
        meAndSpousesfamilies.push(spouseFamilies)
      }
    }
    for(const myFamilies of meAndSpousesfamilies){
      const familyFather = myFamilies.filter(family=>family.relationship==='father')
      if(familyFather.length>0){
        const father = await ctx.db.family({id:familyFather[0].id}).to().user()
        if(father){
          groupUsersId.push({id:father.id})
          const fatherFamilies = await ctx.db.user({id:father.id}).families()
          const fatherFamilyFather = fatherFamilies.filter(family=>family.relationship==='father')
          const grandpa = await ctx.db.family({id:fatherFamilyFather[0].id}).to().user()
          if(grandpa){
            groupUsersId.push({id:grandpa.id})
          }
          const motherFamilyFather = fatherFamilies.filter(family=>family.relationship==='mother')
          const grandma =  await ctx.db.family({id:motherFamilyFather[0].id}).to().user()
          if(grandma){
            groupUsersId.push({id:grandma.id})
          }
        }
      }
      const familyMother = myFamilies.filter(family=>family.relationship==='mother')
      
      if(familyMother.length>0){
        const mother = await ctx.db.family({id:familyMother[0].id}).to().user()
        if(mother){
          groupUsersId.push({id:mother.id})
          const motherFamilies = await ctx.db.user({id:mother.id}).families()
          const fatherFamilyMother = motherFamilies.filter(family=>family.relationship==='father')
          const grandpa = await ctx.db.family({id:fatherFamilyMother[0].id}).to().user()
          if(grandpa){
            groupUsersId.push({id:grandpa.id})
          }
          const motherFamilyMother = motherFamilies.filter(family=>family.relationship==='mother')
          const grandma =  await ctx.db.family({id:motherFamilyMother[0].id}).to().user()
          if(grandma){
            groupUsersId.push({id:grandma.id})
          }
        }
      }
    }
    
    // 我的群由子女负责创建
    const sonAndDaughters = meFamilies.filter(family=>!!~['son','daughter'].indexOf(family.relationship))
    for(const sonAndDaughter of sonAndDaughters){
      const sd = await ctx.db.family({id:sonAndDaughter.id}).to().user()
      if(sd){
        groupUsersId.push({id:sd.id})
      }
    }
    return  ctx.db.familyGroups({
      where:{
        OR:groupUsersId.map(usersId=>({users_some:usersId}))
      }
    })
  },
  students: (parent, {schoolEduId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.schoolEdu({id:schoolEduId}).students()
  },
  classGroups: (parent, {schoolEduId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.classGroups({
      where:{AND:[
        {study:{id:schoolEduId}},
        {members_some:{student:{uid:userId}}}
      ]}
    })
  },
  workGroups:(parent, {companyId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.workGroups({
      where:{AND:[
        {company:{id:companyId}},
        {colleagues_some:{worker:{uid:userId}}}
      ]}
    })
  },
  stations: async (parent, {text}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const stations =   await ctx.db.stations({
      where:{name_contains:text}
    })
    if(stations.length===0){
      return [{id:'000',code:"000",name:"未找到相关职位,请更换关键字试一下"}]
    }
    return stations
  },
  colleagues: async (parent, {companyId}, ctx) => {
  
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const workers = []
    const works = await ctx.db.works({
      where:{
        AND:[
          {endTime_gt:(new Date('9999-1-1'))},
          {company:{id:companyId}},
        ]
      }
    })
    
    for(const work of works){
      const worker = await ctx.db.work({id:work.id}).worker()
      workers.push(worker)
    }
    
    return workers
  },
  oldColleagues: async (parent, {startTime,endTime,companyId}, ctx) => {
  
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const workers = []
    let works
    if(new Date(endTime).getFullYear()===9999){
      works = await ctx.db.works({
        where:{
          AND:[
            {startTime_gte:(new Date(startTime))},
            {endTime_lt:(new Date(endTime))},
            {company:{id:companyId}},
          ]
        }
      })
    }else{
      works = await ctx.db.works({
        where:{
          AND:[
            {OR:[
            {startTime_gte:(new Date(startTime))},
            {endTime_lte:(new Date(endTime))},
          ]},
            {company:{id:companyId}},
          ]
        }
      })
    }
   
    
    for(const work of works){
      const worker = await ctx.db.work({id:work.id}).worker()
      workers.push(worker)
    }
    
    return workers
  },
  myOldColleagues:async (parent, {companyId}, ctx) => {
  
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    const myOldColleagues = await ctx.db.oldColleagues({
      where:{
        AND:[
          {from:{uid:userId}},
          {company:{id:companyId}},
        ]
      }
    })
    return myOldColleagues
  },
  locationGroups:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    return ctx.db.user({id:user.id}).locationGroups()
  },
  photo:async (parent, {id,name}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    let url
    let imgName
    let photo
    const options = { expires:1800 }
    if(id){
      console.log(id)
      photo = await ctx.db.photo({id})
      imgName = photo.name
      url = ossClient.signatureUrl(`images/${imgName}`,options);
    }

    if(name){
      console.log(name)
      photo = await ctx.db.photo({name})
      imgName = name
      url = ossClient.signatureUrl(`images/${imgName}`,options);
      console.log(url)
    }
    
    return {id:photo.id,name:imgName,url}
  },
  userInfo:async (parent, {id}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ id })
    if (!user) {
      throw new Error("用户不存在")
    }
    
    return user
  },

  group: (parent, {id}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return  ctx.db.group( {id})
  },
  
  messages: (parent, {groupId,userId}, ctx) => {
    const uid = getUserId(ctx)
    if (!uid) {
      throw new Error("用户不存在")
    }
    if(groupId){
      return ctx.db.group({id:groupId}).messages()
    }
    if(userId){
      return  ctx.db.user( {id:userId}).messages()
    }
  },
}
