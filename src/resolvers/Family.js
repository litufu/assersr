export const Family = {
  from: (parent, args, ctx) => ctx.db.family({ id: parent.id }).from(),
  to: (parent, args, ctx) => ctx.db.family({ id: parent.id }).to(),
}
