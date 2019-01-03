export const Work = {
    company: (parent, args, ctx) => ctx.db.work({ id: parent.id }).company(),
    post: (parent, args, ctx) => ctx.db.work({ id: parent.id }).post(),
  }
  