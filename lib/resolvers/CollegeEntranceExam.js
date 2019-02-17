"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollegeEntranceExam = void 0;
var CollegeEntranceExam = {
  student: function student(parent, args, ctx) {
    return ctx.db.collegeEntranceExam({
      id: parent.id
    }).student();
  },
  province: function province(parent, args, ctx) {
    return ctx.db.collegeEntranceExam({
      id: parent.id
    }).province();
  }
};
exports.CollegeEntranceExam = CollegeEntranceExam;
//# sourceMappingURL=CollegeEntranceExam.js.map