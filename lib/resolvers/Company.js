"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = void 0;
var Company = {
  workGroup: function workGroup(parent, args, ctx) {
    return ctx.db.company({
      id: parent.id
    }).workGroup();
  }
};
exports.Company = Company;
//# sourceMappingURL=Company.js.map