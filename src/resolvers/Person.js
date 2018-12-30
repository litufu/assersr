export const Person = {
  user: (parent, args, ctx) => ctx.db.person({ id: parent.id }).user(),
  asFather: (parent, args, ctx) => ctx.db.person({ id: parent.id }).asFather(),
  asMother: (parent, args, ctx) => ctx.db.person({ id: parent.id }).asMother(),
}
