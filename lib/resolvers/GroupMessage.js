"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMessage = void 0;
var GroupMessage = {
  from: function from(parent, args, ctx) {
    return ctx.db.groupMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    if (parent.image) return parent.image;
    return ctx.db.groupMessage({
      id: parent.id
    }).image();
  }
};
exports.GroupMessage = GroupMessage;
//# sourceMappingURL=GroupMessage.js.map