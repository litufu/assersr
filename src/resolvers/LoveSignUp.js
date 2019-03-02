export const LoveSignUp = {
    person:(parent, args, ctx) => ctx.db.loveSignUp({ id: parent.id }).person(),
    city:(parent, args, ctx) => ctx.db.loveSignUp({ id: parent.id }).city(),
  }