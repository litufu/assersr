"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootCount = void 0;
var BootCount = {
  bootUser: function bootUser(parent, args, ctx) {
    return ctx.db.bootCount({
      id: parent.id
    }).bootUser();
  }
};
exports.BootCount = BootCount;
//# sourceMappingURL=BootCount.js.map