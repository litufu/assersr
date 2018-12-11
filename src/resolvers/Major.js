export const Major = {
    universities:(parent, args, ctx) => ctx.db.major({ id: parent.id }).universities(),
  }