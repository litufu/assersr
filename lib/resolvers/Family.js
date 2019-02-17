"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Family = void 0;
var Family = {
  from: function from(parent, args, ctx) {
    return ctx.db.family({
      id: parent.id
    }).from();
  },
  to: function to(parent, args, ctx) {
    return ctx.db.family({
      id: parent.id
    }).to();
  },
  spouse: function spouse(parent, args, ctx) {
    return ctx.db.family({
      id: parent.id
    }).spouse();
  }
};
exports.Family = Family;
//# sourceMappingURL=Family.js.map