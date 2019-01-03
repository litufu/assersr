export const Company = {
    workGroup: (parent, args, ctx) => ctx.db.company({ id: parent.id }).workGroup(),
  }
  