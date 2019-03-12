"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveSignUp = void 0;
var LoveSignUp = {
  person: function person(parent, args, ctx) {
    return ctx.db.loveSignUp({
      id: parent.id
    }).person();
  },
  city: function city(parent, args, ctx) {
    return ctx.db.loveSignUp({
      id: parent.id
    }).city();
  }
};
exports.LoveSignUp = LoveSignUp;
//# sourceMappingURL=LoveSignUp.js.map