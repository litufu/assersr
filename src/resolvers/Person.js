export const Person = {
  user: (parent, args, ctx) => ctx.db.person({ id: parent.id }).user(),
}
