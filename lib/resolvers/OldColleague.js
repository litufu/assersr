"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OldColleague = void 0;
var OldColleague = {
  from: function from(parent, args, ctx) {
    return ctx.db.oldColleague({
      id: parent.id
    }).from();
  },
  to: function to(parent, args, ctx) {
    return ctx.db.oldColleague({
      id: parent.id
    }).to();
  },
  company: function company(parent, args, ctx) {
    return ctx.db.oldColleague({
      id: parent.id
    }).company();
  }
};
exports.OldColleague = OldColleague;
//# sourceMappingURL=OldColleague.js.map