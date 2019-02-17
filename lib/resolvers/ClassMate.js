"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassMate = void 0;
var ClassMate = {
  student: function student(parent, args, ctx) {
    return ctx.db.classMate({
      id: parent.id
    }).student();
  },
  group: function group(parent, args, ctx) {
    return ctx.db.classMate({
      id: parent.id
    }).group();
  }
};
exports.ClassMate = ClassMate;
//# sourceMappingURL=ClassMate.js.map