export const ClassGroup = {
    study: (parent, args, ctx) => ctx.db.classGroup({ id: parent.id }).study(),
    members: (parent, args, ctx) => ctx.db.classGroup({ id: parent.id }).members(),
  }
  