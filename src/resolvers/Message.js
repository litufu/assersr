export const Message = {
    to: (parent, args, ctx) => {
      if(parent.to){return parent.to}
      return ctx.db.message({ id: parent.id }).to()},
    from: (parent, args, ctx) => {
      if(parent.from) return parent.from
      return ctx.db.message({ id: parent.id }).from()},
    image: (parent, args, ctx) => {
      if(parent.image) return parent.image
      return ctx.db.message({ id: parent.id }).image()
    },
  }
  