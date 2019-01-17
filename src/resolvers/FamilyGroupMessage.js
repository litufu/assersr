export const FamilyGroupMessage = {
    to: (parent, args, ctx) => ctx.db.familyGroupMessage({ id: parent.id }).to(),
    from: (parent, args, ctx) => ctx.db.familyGroupMessage({ id: parent.id }).from(),
    image: (parent, args, ctx) => ctx.db.familyGroupMessage({ id: parent.id }).image(),
  }