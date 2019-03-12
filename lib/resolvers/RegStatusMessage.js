"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegStatusMessage = void 0;
var RegStatusMessage = {
  to: function to(parent, args, ctx) {
    return ctx.db.regStatusMessage({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    return ctx.db.regStatusMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    return ctx.db.regStatusMessage({
      id: parent.id
    }).image();
  }
};
exports.RegStatusMessage = RegStatusMessage;
//# sourceMappingURL=RegStatusMessage.js.map