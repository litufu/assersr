import {
  getUserId,
} from '../services/utils'

export const User = {
  id:(parent, args, ctx) => ctx.db.user({ id: parent.id }).id(),
  name:(parent, args, ctx) => ctx.db.user({ id: parent.id }).name(),
  avatar:(parent, args, ctx) => ctx.db.user({ id: parent.id }).avatar(),
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
  birthday: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthday(),
  birthplace: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthplace(),
  residence: (parent, args, ctx) => ctx.db.user({ id: parent.id }).residence(),
  families: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if (userId !== parent.uid) {
      throw new Error('Author Invalid')
    }

     return ctx.db.user({ id: parent.id }).families()
    },

  studies: (parent, args, ctx) => ctx.db.user({ id: parent.id }).studies({orderBy:"startTime_ASC"}),
  regStatus: (parent, args, ctx) => ctx.db.user({ id: parent.id }).regStatus(),
  works: (parent, args, ctx) => ctx.db.user({ id: parent.id }).works(),
  exam: (parent, args, ctx) => ctx.db.user({ id: parent.id }).exam(),
  messages:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if (userId !== parent.uid) {
      return []
      // throw new Error('Author Invalid')
    }
    const messages = await ctx.db.messages({
      where:{OR:[
        {from:{id:parent.id}},
        {to:{id:parent.id}}
      ]},
      first:10
    })
    return messages
  },
  friends: (parent, args, ctx) => ctx.db.user({ id: parent.id }).friends(),
  relativefamilyGroups:async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    const user = await ctx.db.user({ uid: userId })
    if (!user) {
      throw new Error("用户不存在")
    }
    if (userId !== parent.uid) {
      return []
      // throw new Error('Author Invalid')
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
          if(fatherFamilyFather.length>0){
            const grandpa = await ctx.db.family({id:fatherFamilyFather[0].id}).to().user()
            if(grandpa){
              groupUsersId.push({id:grandpa.id})
            }
          }
          const motherFamilyFather = fatherFamilies.filter(family=>family.relationship==='mother')
          if(motherFamilyFather.length>0){
            const grandma =  await ctx.db.family({id:motherFamilyFather[0].id}).to().user()
            if(grandma){
              groupUsersId.push({id:grandma.id})
            }
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
          if(fatherFamilyMother.length>0){
            const grandpa = await ctx.db.family({id:fatherFamilyMother[0].id}).to().user()
            if(grandpa){
              groupUsersId.push({id:grandpa.id})
            }
          }
          
          const motherFamilyMother = motherFamilies.filter(family=>family.relationship==='mother')
          if(motherFamilyMother.length>0){
            const grandma =  await ctx.db.family({id:motherFamilyMother[0].id}).to().user()
            if(grandma){
              groupUsersId.push({id:grandma.id})
            }
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
  workGroups:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (userId !== parent.uid) {
      return []
    }
    return  ctx.db.workGroups({
      where:{AND:[
        {colleagues_some:{worker:{uid:userId}}}
      ]}
    })
  },
  classGroups:(parent, args, ctx)=>{
    const userId = getUserId(ctx)
    if (userId !== parent.uid) {
      return []
    }
    return ctx.db.classGroups({
      where:{AND:[
        {members_some:{student:{uid:userId}}}
      ]}
    })
  },
  
  colleagues:(parent, args, ctx) => ctx.db.user({ id: parent.id }).colleagues(),
  groupMessages:(parent, args, ctx) => ctx.db.user({ id: parent.id }).groupMessages(),
  locationGroups:(parent, args, ctx) => ctx.db.user({ id: parent.id }).locationGroups(),
  loveSetting:(parent, args, ctx) => ctx.db.user({ id: parent.id }).loveSetting(),
  loveWoman:(parent, args, ctx) => ctx.db.user({ id: parent.id }).loveWoman(),
  loveMan:(parent, args, ctx) => ctx.db.user({ id: parent.id }).loveMan(),
  signUpLove:(parent, args, ctx) => ctx.db.user({ id: parent.id }).signUpLove(),
}
