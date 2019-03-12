"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterCount = void 0;
var RegisterCount = {
  addUser: function addUser(parent, args, ctx) {
    return ctx.db.registerCount({
      id: parent.id
    }).addUser();
  }
};
exports.RegisterCount = RegisterCount;
//# sourceMappingURL=RegisterCount.js.map