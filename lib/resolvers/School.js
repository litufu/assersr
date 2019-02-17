"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.School = void 0;
var School = {
  location: function location(parent, args, ctx) {
    return ctx.db.school({
      id: parent.id
    }).location();
  }
};
exports.School = School;
//# sourceMappingURL=School.js.map