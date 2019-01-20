export const RegStatus = {
    university:(parent, args, ctx) => ctx.db.regStatus({ id: parent.id }).university(),
    major:(parent, args, ctx) => ctx.db.regStatus({ id: parent.id }).major(),
    applicants:(parent, args, ctx) => ctx.db.regStatus({ id: parent.id }).applicants(),
    messages:async (parent, args, ctx) =>{

      const groupMessages = await ctx.db.groupMessages({
        where:{
          AND:[
            {type:"RegStatus"},
            {to:parent.id},
          ]
        }
      })

      return groupMessages

    }

  }
  