export const RegStatusMessage = {
    to: (parent, args, ctx) => ctx.db.regStatusMessage({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.regStatusMessage({ id: parent.id }).from(),
    image: (parent, args, ctx) => ctx.db.regStatusMessage({ id: parent.id }).image(),
  }
  