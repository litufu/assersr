export const WorkGroupMessage = {
    to: (parent, args, ctx) => ctx.db.workGroupMessage({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.workGroupMessage({ id: parent.id }).from(),
    image: (parent, args, ctx) => ctx.db.workGroupMessage({ id: parent.id }).image(),
  }