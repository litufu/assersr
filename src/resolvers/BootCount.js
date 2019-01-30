export const BootCount = {
    bootUser:(parent, args, ctx) => ctx.db.bootCount({ id: parent.id }).bootUser(),
}
  