export const RegisterCount = {
    addUser:(parent, args, ctx) => ctx.db.registerCount({ id: parent.id }).addUser(),
  }
  