export const WorkGroup = {
    company: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).company(),
    colleagues: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).colleagues(),
    messages:async (parent, args, ctx) =>{
      const groupMessages = await ctx.db.groupMessages({
        where:{
          AND:[
            {type:"Colleague"},
            {to:parent.id},
          ]
        },
        last:10
      })

      return groupMessages

    }
  }
  