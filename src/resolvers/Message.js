export const Message = {
    to: (parent, args, ctx) => ctx.db.message({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.message({ id: parent.id }).from(),
  }
  