export const WorkGroup = {
    company: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).company(),
    wokers: (parent, args, ctx) => ctx.db.workGroup({ id: parent.id }).wokers(),
  }
  