export const Trade = {
    product:(parent, args, ctx) => ctx.db.trade({ id: parent.id }).product(),
    user:(parent, args, ctx) => ctx.db.trade({ id: parent.id }).user(),
  }
  