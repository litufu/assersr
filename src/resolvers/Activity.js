export const Activity = {
    image:(parent, args, ctx) => ctx.db.activity({ id: parent.id }).image(),
    type:(parent, args, ctx) => ctx.db.activity({ id: parent.id }).type(),
    creater:(parent, args, ctx) => ctx.db.activity({ id: parent.id }).creater(),
    users:(parent, args, ctx) => ctx.db.activity({ id: parent.id }).users(),
    city:(parent, args, ctx) => ctx.db.activity({ id: parent.id }).city(),
    messages:async (parent, args, ctx) =>{
        const groupMessages = await ctx.db.groupMessages({
          where:{
            AND:[
              {type:"Activity"},
              {to:parent.id},
            ]
          },
          first:10
        })
        return groupMessages
      }
}
  