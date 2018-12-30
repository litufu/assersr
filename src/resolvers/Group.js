export const Group = {
    users: (parent, args, ctx) => ctx.db.group({ id: parent.id }).users(),
    messages: (parent, args, ctx) => ctx.db.group({ id: parent.id }).messages(),
  }
  