export const OldColleague = {
    from: (parent, args, ctx) => ctx.db.oldColleague({ id: parent.id }).from(),
    to: (parent, args, ctx) => ctx.db.oldColleague({ id: parent.id }).to(),
    company: (parent, args, ctx) => ctx.db.oldColleague({ id: parent.id }).company(),
  }
  