export const Project = {
    conditions: (parent, args, ctx) => ctx.db.project({ id: parent.id }).conditions(),
    starter:(parent, args, ctx) => ctx.db.project({ id: parent.id }).starter(),
    place:(parent, args, ctx) => ctx.db.project({ id: parent.id }).place(),
  }
  