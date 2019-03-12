"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveMatching = void 0;
var LoveMatching = {
  woman: function woman(parent, args, ctx) {
    return ctx.db.loveMatching({
      id: parent.id
    }).woman();
  },
  man: function man(parent, args, ctx) {
    return ctx.db.loveMatching({
      id: parent.id
    }).man();
  },
  city: function city(parent, args, ctx) {
    return ctx.db.loveMatching({
      id: parent.id
    }).city();
  }
};
exports.LoveMatching = LoveMatching;
//# sourceMappingURL=LoveMatching.js.map