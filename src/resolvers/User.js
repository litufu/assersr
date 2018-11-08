export const User = {
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
}
