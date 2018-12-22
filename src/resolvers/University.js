export const University = {
    id:(parent, args, ctx) => ctx.db.university({ id: parent.id }).id(),
    name:(parent, args, ctx) => ctx.db.university({ id: parent.id }).name(),
    education: (parent, args, ctx) => ctx.db.university({ id: parent.id }).education(),
    department: (parent, args, ctx) => ctx.db.university({ id: parent.id }).department(),
    location: (parent, args, ctx) => ctx.db.university({ id: parent.id }).location(),
    desc: (parent, args, ctx) => ctx.db.university({ id: parent.id }).desc(),
  }
  