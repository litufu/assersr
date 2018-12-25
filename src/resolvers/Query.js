import { getUserId } from '../services/utils'

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
    return await ctx.db.user(
      {uid:userId}
    ).regStatus()

  },
}
