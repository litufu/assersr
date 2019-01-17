export const LocationGroupMessage = {
    to: (parent, args, ctx) => ctx.db.locationGroupMessage({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.locationGroupMessage({ id: parent.id }).from(),
    image: (parent, args, ctx) => ctx.db.locationGroupMessage({ id: parent.id }).image(),
  }