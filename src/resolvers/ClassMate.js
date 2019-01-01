export const ClassMate = {
    student: (parent, args, ctx) => ctx.db.classMate({ id: parent.id }).student(),
    group: (parent, args, ctx) => ctx.db.classMate({ id: parent.id }).group(),
  }
  