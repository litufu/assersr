export const ClassGroup = {
    study: (parent, args, ctx) => ctx.db.classGroup({ id: parent.id }).study(),
    members: (parent, args, ctx) => ctx.db.classGroup({ id: parent.id }).members(),
    messages:async (parent, args, ctx) =>{

      const groupMessages = await ctx.db.groupMessages({
        where:{
          AND:[
            {type:"ClassMate"},
            {to:parent.id},
          ]
        },
        first:10
      })

      return groupMessages

    }
  }
  