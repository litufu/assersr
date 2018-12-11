export const SchoolEdu = {
    school:(parent, args, ctx) => ctx.db.schoolEdu({ id: parent.id }).school(),
    major:(parent, args, ctx) => ctx.db.schoolEdu({ id: parent.id }).major(),
    students: (parent, args, ctx) => ctx.db.schoolEdu({ id: parent.id }).students(),
  }