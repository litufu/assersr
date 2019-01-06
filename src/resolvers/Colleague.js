export const Colleague = {
    group: (parent, args, ctx) => ctx.db.colleague({ id: parent.id }).group(),
    worker: (parent, args, ctx) => ctx.db.colleague({ id: parent.id }).worker(),
  }
  