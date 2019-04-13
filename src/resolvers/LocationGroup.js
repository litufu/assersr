export const LocationGroup = {
    users: async (parent, args, ctx) => {
      const usersCount = await ctx.db
      .usersConnection({where:{locationGroups_some:{id:parent.id}}})
      .aggregate()
      .count()
      if (usersCount>300){
        // 人数大于300不在返回具体人员信息
        return []
      }
      return ctx.db.locationGroup({ id: parent.id }).users({first:100})
    },
    messages:async (parent, args, ctx) =>{

      const groupMessages = await ctx.db.groupMessages({
        where:{
          AND:[
            {type:"FellowTownsman"},
            {to:parent.id},
          ]
        },
        last:10
      })

      return groupMessages

    }
  }
  