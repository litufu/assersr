export const LocationGroup = {
    users: async (parent, args, ctx) => {
      const usersCount = await ctx.db
      .usersConnection({where:{locationGroups_some:{id:parent.id}}})
      .aggregate()
      .count()
      if (usersCount>500){
        // 人数大于500不在返回具体人员信息
        return []
      }
      return ctx.db.locationGroup({ id: parent.id }).users()
    },
    messages: (parent, args, ctx) => ctx.db.locationGroup({ id: parent.id }).messages(),
  }
  