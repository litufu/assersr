export const ClassGroupMessage = {
    to: (parent, args, ctx) => ctx.db.classGroupMessage({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.classGroupMessage({ id: parent.id }).from(),
    image: (parent, args, ctx) => ctx.db.classGroupMessage({ id: parent.id }).image(),
  }
  