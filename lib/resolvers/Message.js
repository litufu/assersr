"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
var Message = {
  to: function to(parent, args, ctx) {
    if (parent.to) {
      return parent.to;
    }

    return ctx.db.message({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    if (parent.from) return parent.from;
    return ctx.db.message({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    if (parent.image) return parent.image;
    return ctx.db.message({
      id: parent.id
    }).image();
  }
};
exports.Message = Message;
//# sourceMappingURL=Message.js.map