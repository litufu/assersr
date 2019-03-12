"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveSetting = void 0;
var LoveSetting = {
  user: function user(parent, args, ctx) {
    return ctx.db.loveSetting({
      id: parent.id
    }).user();
  }
};
exports.LoveSetting = LoveSetting;
//# sourceMappingURL=LoveSetting.js.map