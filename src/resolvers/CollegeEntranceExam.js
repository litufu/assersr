export const CollegeEntranceExam = {
    student: (parent, args, ctx) => ctx.db.collegeEntranceExam({ id: parent.id }).student(),
    province: (parent, args, ctx) => ctx.db.collegeEntranceExam({ id: parent.id }).province(),
  }
  