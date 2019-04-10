import validator from 'validator'
import { getUserId,getTimeByTimeZone } from '../services/utils'
import {
  checkUsername,
  checkId,
  checkCnEnNum,
  checkPlaceCode,
  checkPhotoName
} from '../validate'
import {DateStartTime,FEESETTINGTYPES} from '../services/settings'

export const Query = {
  me: (parent, args, ctx) => {
    if (getUserId(ctx)) {
      return ctx.db.user({ uid: getUserId(ctx) })
    }
    return null
  },

  searchUser: (parent, { username }, ctx) => {
    
    checkUsername(username)

    return ctx.db.user({ username })

  },
  cities: (parent, { code }, ctx) => {
    checkPlaceCode(code)
    return ctx.db.cities({ where: { province: { code } } })
  },
  areas: (parent, { code }, ctx) => {
    checkPlaceCode(code)
    return ctx.db.areas({ where: { city: { code } } })
  },
  streets: (parent, { code }, ctx) => {
    checkPlaceCode(code)
    return ctx.db.streets({ where: { Area: { code } } })
  },
  villages: (parent, { code }, ctx) => {
    checkPlaceCode(code)

    return ctx.db.villages({ where: { street: { code } } })
  },
  families: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.families({
      where: {
        from: { uid: userId }
      }
    })
  },
  findPasswords: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.findPassWords({
      where: {
        remmember_some: { uid: userId }
      }
    })
  },
  getFamiliesById: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    if(args.id){
      checkId(args.id)
    }

    if (!args.id) {
      return ctx.db.families({
        where: {
          from: { uid: userId }
        }
      })
    }
    return ctx.db.families({
      where: {
        from: { id: args.id }
      }
    })
  },
  getSchools: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    // 输入数据校验
    checkCnEnNum(args.locationName)
    if(!validator.isAlpha(args.kind)){
      throw new Error('学校类型错误')
    }

    return ctx.db.schools({
      where: {
        AND: [{
          location: { name: args.locationName }
        }, {
          kind: args.kind
        }]
      }
    }
    )
  },
  getMajors: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    checkCnEnNum(args.majorName)

    return ctx.db.majors({
      first:10,
      where: {
        name_contains: args.majorName
      }
    })
  },
  getUniversities: (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    checkCnEnNum(args.universityName)

    return ctx.db.universities({
      first:10,
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
        student: { uid: userId }
      }
    })
    if (results.length === 0) {
      return null
    }
    return results[0]
  },
  getRegStatusApplicants: async (parent, { education, universityId, majorId }, ctx) => {
    // 输入数据校验
    checkId(universityId)
    checkId(majorId)
    if(!validator.isAlpha(education)){
      throw new Error('学历类型错误')
    }
    // 判断是否为付费会员
    const regStatusfeeSettings = await ctx.db.feeSettings({
      where:{name:FEESETTINGTYPES.regstatus}
    })
    if(regStatusfeeSettings.length>0){
      const fee = regStatusfeeSettings[0].fee
      const year = new Date().getFullYear()
      if(fee){
        const trades = await ctx.db.user({uid:userId}).trades({
          where:{
              product:{
                AND:[
                  {kind:FEESETTINGTYPES.regstatus},
                  {subject_contains:`${year}`}
                ]
              }
          }
        })
        if(trades.length>0 ){
           if(trades[0].status!=="1"){
            throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
           }
        }else{
          throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
        }
        
      }
    }

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const userExams = await ctx.db.collegeEntranceExams(
      {
        where: { student: { uid: userId } }
      }
    )
    if (userExams.length === 0) {
      throw new Error('尚未填写高考基本信息')
    }
    const userExamProvinceId = await ctx.db.collegeEntranceExam({
      id: userExams[0].id
    }).province().id()
    const userExamSubject = await ctx.db.collegeEntranceExam({
      id: userExams[0].id
    }).subject()

    const regStatuses = await ctx.db.regStatuses({
      where: {
        education,
        university: { id: universityId },
        major: { id: majorId },
      }
    })
    if (regStatuses.length === 0) {
      return []
    }

    const applicants = await ctx.db.regStatus(
      {
        id: regStatuses[0].id
      }
    ).applicants({
      where: {
        exam: {
          AND: [
            { province: { id: userExamProvinceId } },
            { subject: userExamSubject }
          ]
        }
      }
    })

    return applicants
  },
  getRegStatusApplicantsById: async (parent, { regStatusId }, ctx) => {

    checkId(regStatusId)
    // 判断是否为付费会员
    const regStatusfeeSettings = await ctx.db.feeSettings({
      where:{name:FEESETTINGTYPES.regstatus}
    })
    if(regStatusfeeSettings.length>0){
      const fee = regStatusfeeSettings[0].fee
      const year = new Date().getFullYear()
      if(fee){
        const trades = await ctx.db.user({uid:userId}).trades({
          where:{
              product:{
                AND:[
                  {kind:FEESETTINGTYPES.regstatus},
                  {subject_contains:`${year}`}
                ]
              }
          }
        })
        if(trades.length>0 ){
            if(trades[0].status!=="1"){
            throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
            }
        }else{
          throw new Error("报名前需要在设置-购买页面中购买本年度高考报名会员")
        }
      }
    }

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    
    const userExams = await ctx.db.collegeEntranceExams(
      {
        where: { student: { uid: userId } }
      }
    )
    if (userExams.length === 0) {
      throw new Error('尚未填写高考基本信息')
    }
    const userExamProvinceId = await ctx.db.collegeEntranceExam({
      id: userExams[0].id
    }).province().id()
    const userExamSubject = await ctx.db.collegeEntranceExam({
      id: userExams[0].id
    }).subject()

    const applicants = await ctx.db.regStatus(
      {
        id: regStatusId
      }
    ).applicants({
      where: {
        exam: {
          AND: [
            { province: { id: userExamProvinceId } },
            { subject: userExamSubject }
          ]
        }
      }
    })


    return applicants
  },
  getRegStatus: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.user(
      { uid: userId }
    ).regStatus()

  },
  getFamilyGroups: async (parent, args, ctx) => {
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
      const familyFather = myFamilies.filter(family => family.relationship === 'father')
      if (familyFather.length > 0) {
        const father = await ctx.db.family({ id: familyFather[0].id }).to().user()
        if (father) {
          groupUsersId.push({ id: father.id })
          const fatherFamilies = await ctx.db.user({ id: father.id }).families()
          const fatherFamilyFather = fatherFamilies.filter(family => family.relationship === 'father')
          if (fatherFamilyFather.length > 0) {
            const grandpa = await ctx.db.family({ id: fatherFamilyFather[0].id }).to().user()
            if (grandpa) {
              groupUsersId.push({ id: grandpa.id })
            }
          }

          const motherFamilyFather = fatherFamilies.filter(family => family.relationship === 'mother')
          if (motherFamilyFather.length > 0) {
            const grandma = await ctx.db.family({ id: motherFamilyFather[0].id }).to().user()
            if (grandma) {
              groupUsersId.push({ id: grandma.id })
            }
          }

        }
      }
      const familyMother = myFamilies.filter(family => family.relationship === 'mother')

      if (familyMother.length > 0) {
        const mother = await ctx.db.family({ id: familyMother[0].id }).to().user()
        if (mother) {
          groupUsersId.push({ id: mother.id })
          const motherFamilies = await ctx.db.user({ id: mother.id }).families()
          const fatherFamilyMother = motherFamilies.filter(family => family.relationship === 'father')
          if (fatherFamilyMother.length > 0) {
            const grandpa = await ctx.db.family({ id: fatherFamilyMother[0].id }).to().user()
            if (grandpa) {
              groupUsersId.push({ id: grandpa.id })
            }
          }

          const motherFamilyMother = motherFamilies.filter(family => family.relationship === 'mother')
          if (motherFamilyMother.length > 0) {
            const grandma = await ctx.db.family({ id: motherFamilyMother[0].id }).to().user()
            if (grandma) {
              groupUsersId.push({ id: grandma.id })
            }
          }

        }
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
  },
  students: (parent, { schoolEduId }, ctx) => {
    checkId(schoolEduId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.schoolEdu({ id: schoolEduId }).students()
  },
  classGroups: (parent, { schoolEduId }, ctx) => {
    checkId(schoolEduId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if (!schoolEduId) {
      return ctx.db.classGroups({
        where: {
          AND: [
            { members_some: { student: { uid: userId } } }
          ]
        }
      })
    }
    return ctx.db.classGroups({
      where: {
        AND: [
          { study: { id: schoolEduId } },
          { members_some: { student: { uid: userId } } }
        ]
      }
    })
  },
  workGroups: (parent, { companyId }, ctx) => {

    checkId(companyId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if (!companyId) {
      return ctx.db.workGroups({
        where: {
          AND: [
            { colleagues_some: { worker: { uid: userId } } }
          ]
        }
      })
    }
    return ctx.db.workGroups({
      where: {
        AND: [
          { company: { id: companyId } },
          { colleagues_some: { worker: { uid: userId } } }
        ]
      }
    })
  },
  stations: async (parent, { text }, ctx) => {

    checkCnEnNum(text)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const stations = await ctx.db.stations({
      first:10,
      where: { name_contains: text }
    })
    if (stations.length === 0) {
      return [{ id: '000', code: "000", name: "未找到相关职位,请更换关键字试一下" }]
    }
    return stations
  },
  colleagues: async (parent, { companyId }, ctx) => {

    checkId(companyId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const workers = []
    const works = await ctx.db.works({
      where: {
        AND: [
          { endTime_gt: (new Date('9999-1-1')) },
          { company: { id: companyId } },
        ]
      }
    })

    for (const work of works) {
      const worker = await ctx.db.work({ id: work.id }).worker()
      workers.push(worker)
    }

    return workers
  },
  oldColleagues: async (parent, { startTime, endTime, companyId }, ctx) => {

    checkId(companyId)


    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const workers = []
    let works
    if (new Date(endTime).getFullYear() === 9999) {
      works = await ctx.db.works({
        where: {
          AND: [
            { endTime_gte: (new Date(startTime)) },
            { company: { id: companyId } },
          ]
        }
      })
    } else {
      works = await ctx.db.works({
        where: {
          AND: [
            {
              NOT: [
                { startTime_gte: (new Date(endTime)) },
                { endTime_lte: (new Date(startTime)) },
              ]
            },
            { company: { id: companyId } },
          ]
        }
      })
    }

    for (const work of works) {
      const worker = await ctx.db.work({ id: work.id }).worker()
      if(workers.filter(w=>w.id===worker.id).length===0){
        workers.push(worker)
      }
    }

    return workers
  },
  myOldColleagues: async (parent, { companyId }, ctx) => {

    checkId(companyId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }

    if (!companyId) {
      return ctx.db.oldColleagues({
        where: {
          AND: [
            { from: { uid: userId } },
          ]
        }
      })
    }

    const myOldColleagues = await ctx.db.oldColleagues({
      where: {
        AND: [
          { from: { uid: userId } },
          { company: { id: companyId } },
        ]
      }
    })
    return myOldColleagues
  },
  locationGroups: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    return ctx.db.user({ id: user.id }).locationGroups()
  },
  locationGroupUsers: async (parent, { locationGroupId }, ctx) => {

    checkId(locationGroupId)

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    return ctx.db.locationGroup({ id: locationGroupId }).users()
  },
  photo: async (parent, { id, name }, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    if (id) {
      checkId(id)
      return ctx.db.photo({ id })
    }

    if (name) {
      checkPhotoName(name)
      return ctx.db.photo({ name })
    }

    throw new Error('没有输入id或者名称')
  },
  userInfo: async (parent, { id }, ctx) => {

    checkId(id)

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
  bootInfo: async (parent, args, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    return ctx.db.createBootCount({
      bootUser: { connect: { id: user.id } },
    })
  },
  visitCount: async (parent, args, ctx) => {

    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    return {}
  },

  advertisements: async (parent, args, ctx) => {
    const now = new Date()
    return ctx.db.advertisements({
      where: {
        AND: [
          { startTime_lte: now },
          { endTime_gt: now },
        ]
      }
    })
  },
  products:async (parent, args, ctx) => {
    return ctx.db.products()
  },

  messages: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const messages = await ctx.db.messages({
      last:30,
      where: {
        OR: [
          { from: { id: user.id } },
          { to: { id: user.id } }
        ]
      }
    })

    return messages
  },
  loveMatch:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const city = await ctx.db.user({ uid: userId }).residence().city()

    let loveMatches
    const now = new Date()
    const phase = parseInt(`${(now.getTime() - DateStartTime.getTime()) / 1000 / 60 / 60 / 24 / 7}`, 10) + 1
    if(user.gender==="male"){
      loveMatches = await ctx.db.loveMatchings({
        where: {
          AND: [
            {period:`${phase}`},
            {city:{code:city.code}},
            { man: { id: user.id } },
          ]
        }
      })
    }else{
      loveMatches = await ctx.db.loveMatchings({
        where: {
          AND: [
            {period:`${phase}`},
            {city:{code:city.code}},
            { woman: { id: user.id } },
          ]
        }
      })
    }
    if(loveMatches.length>0){
      return loveMatches[0]
    }
    return null
  },
  skills: async (parent, {name}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    if (!/^[A-Za-z0-9\u4e00-\u9fa5]+/.test(name)){
      throw new Error('技能名称错误')
    }
    return ctx.db.skills({
      where:{name_contains:name},
      first:10
    })
  },
  projects:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }

    const projects = await ctx.db.projects({
      where:{starter:{uid:userId}}
    })

    return projects
  },
  partnerConditions:async (parent, {projectId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    
    return ctx.db.partnerConditions({
      where:{project:{id:projectId}}
    })
  },
  mypartnerConditions:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    
    return ctx.db.partnerConditions({
      where:{partners_some:{id:user.id}}
    })
  },
  feeSettings:(parent, args, ctx) => ctx.db.feeSettings(),
  kefu:(parent, args, ctx) => ctx.db.user({username:"kefu"}),
  activityTypes:(parent, args, ctx) => ctx.db.activityTypes(),
  pastedPartakeActivities:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const now = getTimeByTimeZone(8)
    return ctx.db.activities({
      first:10,
      orderBy:"startTime_DESC",
      where:{AND:[
        {startTime_lte:now},
        {users_some:{id:user.id}}
      ]}
    })
  },
  pastedCreateActivities:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const now = getTimeByTimeZone(8)
    return ctx.db.activities({
      first:10,
      orderBy:"startTime_DESC",
      where:{AND:[
        {startTime_lte:now},
        {creater:{id:user.id}}
      ]}
    })
  },
  nowPartakeActivities:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const now = getTimeByTimeZone(8)
    return ctx.db.activities({
      where:{AND:[
        {startTime_gt:now},
        {users_some:{id:user.id}}
      ]}
    })
  },
  nowCreateActivities:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const now = getTimeByTimeZone(8)
    return ctx.db.activities({
      where:{AND:[
        {startTime_gt:now},
        {creater:{id:user.id}}
      ]}
    })
  },
  activities:async (parent, {typeId}, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    const city = await ctx.db.user({ uid: userId }).residence().city()
    
    const now = getTimeByTimeZone(8)
    return ctx.db.activities({
      where:{AND:[
        {city:{id:city.id}},
        {startTime_gt:now},
        {type:{id:typeId}}
      ]}
    })
  },
}
