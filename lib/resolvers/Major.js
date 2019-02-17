"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Major = void 0;
var Major = {
  universities: function universities(parent, args, ctx) {
    return ctx.db.major({
      id: parent.id
    }).universities();
  }
};
exports.Major = Major;
//# sourceMappingURL=Major.js.map