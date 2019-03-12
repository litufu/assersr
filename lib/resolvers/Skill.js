"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skill = void 0;
var Skill = {
  persons: function persons(parent, args, ctx) {
    return ctx.db.skill({
      id: parent.id
    }).persons();
  }
};
exports.Skill = Skill;
//# sourceMappingURL=Skill.js.map