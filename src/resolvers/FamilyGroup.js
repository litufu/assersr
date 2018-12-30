export const FamilyGroup = {
    father:(parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).father(),
    mother:(parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).mother(),
    families: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).families(),
    messages: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).messages(),
    users: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).users(),
    creater: (parent, args, ctx) => ctx.db.familyGroup({ id: parent.id }).creater(),
  }
  