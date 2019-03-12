"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassGroupMessage = void 0;
var ClassGroupMessage = {
  to: function to(parent, args, ctx) {
    return ctx.db.classGroupMessage({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    return ctx.db.classGroupMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    return ctx.db.classGroupMessage({
      id: parent.id
    }).image();
  }
};
exports.ClassGroupMessage = ClassGroupMessage;
//# sourceMappingURL=ClassGroupMessage.js.map