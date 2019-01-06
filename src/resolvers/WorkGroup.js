export const WorkGroup = {
    company: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).company(),
    colleagues: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).colleagues(),
  }
  