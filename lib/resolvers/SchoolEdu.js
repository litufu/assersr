"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchoolEdu = void 0;
var SchoolEdu = {
  school: function school(parent, args, ctx) {
    return ctx.db.schoolEdu({
      id: parent.id
    }).school();
  },
  major: function major(parent, args, ctx) {
    return ctx.db.schoolEdu({
      id: parent.id
    }).major();
  },
  students: function students(parent, args, ctx) {
    return ctx.db.schoolEdu({
      id: parent.id
    }).students();
  }
};
exports.SchoolEdu = SchoolEdu;
//# sourceMappingURL=SchoolEdu.js.map