export const User = {
  id:(parent, args, ctx) => ctx.db.user({ id: parent.id }).id(),
  uid:(parent, args, ctx) => ctx.db.user({ id: parent.id }).uid(),
  name:(parent, args, ctx) => ctx.db.user({ id: parent.id }).name(),
  token:(parent, args, ctx) => ctx.db.user({ id: parent.id }).token(),
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
}
