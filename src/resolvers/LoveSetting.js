export const LoveSetting = {
  user:(parent, args, ctx) => ctx.db.loveSetting({ id: parent.id }).user(),
  }