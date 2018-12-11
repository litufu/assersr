export const School = {
    location:(parent, args, ctx) => ctx.db.school({ id: parent.id }).location(),
  }
  