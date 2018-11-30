export const User = {
  id:(parent, args, ctx) => ctx.db.user({ id: parent.id }).id(),
  name:(parent, args, ctx) => ctx.db.user({ id: parent.id }).name(),
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
  birthday: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthday(),
  birthProvince: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthProvince(),
  birthCity: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthCity(),
  birthArea: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthArea(),
  birthStreet: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthStreet(),
  birthVillage: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthVillage(),
}
