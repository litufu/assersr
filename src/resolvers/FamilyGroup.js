export const FamilyGroup = {
    father:(parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).father(),
    mother:(parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).mother(),
    families: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).families(),
    users: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).users(),
    creater: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).creater(),
    messages:async (parent, args, ctx) =>{

      const groupMessages = await ctx.db.groupMessages({
        where:{
          AND:[
            {type:"Family"},
            {to:parent.id},
          ]
        },
        first:10
      })

      return groupMessages

    }
  }
  