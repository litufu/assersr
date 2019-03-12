"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindPassWord = void 0;
var FindPassWord = {
  forgetter: function forgetter(parent, args, ctx) {
    return ctx.db.findPassWord({
      id: parent.id
    }).forgetter();
  },
  remmember: function remmember(parent, args, ctx) {
    return ctx.db.findPassWord({
      id: parent.id
    }).remmember();
  }
};
exports.FindPassWord = FindPassWord;
//# sourceMappingURL=FindPassWord.js.map