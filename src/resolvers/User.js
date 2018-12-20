export const User = {
  id:(parent, args, ctx) => ctx.db.user({ id: parent.id }).id(),
  name:(parent, args, ctx) => ctx.db.user({ id: parent.id }).name(),
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
  birthday: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthday(),
  birthplace: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthplace(),
  families: (parent, args, ctx) => ctx.db.user({ id: parent.id }).families(),
  studies: (parent, args, ctx) => ctx.db.user({ id: parent.id }).studies({orderBy:"startTime_ASC"}),
  works: (parent, args, ctx) => ctx.db.user({ id: parent.id }).works(),
}
