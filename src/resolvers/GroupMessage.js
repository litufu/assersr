export const GroupMessage = {
    from : (parent, args, ctx) => ctx.db.groupMessage({ id: parent.id }).from(),
    image : (parent, args, ctx) => { 
      if(parent.image) return parent.image
      return ctx.db.groupMessage({ id: parent.id }).image()
    },
  }
  