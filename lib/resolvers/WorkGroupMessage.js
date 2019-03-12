"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkGroupMessage = void 0;
var WorkGroupMessage = {
  to: function to(parent, args, ctx) {
    return ctx.db.workGroupMessage({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    return ctx.db.workGroupMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    return ctx.db.workGroupMessage({
      id: parent.id
    }).image();
  }
};
exports.WorkGroupMessage = WorkGroupMessage;
//# sourceMappingURL=WorkGroupMessage.js.map