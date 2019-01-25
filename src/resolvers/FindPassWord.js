export const FindPassWord = {
    forgetter: (parent, args, ctx) =>ctx.db.findPassWord({ id: parent.id }).forgetter(),
    remmember: (parent, args, ctx) => ctx.db.findPassWord({ id: parent.id }).remmember(),
  }