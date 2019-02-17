"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationGroupMessage = void 0;
var LocationGroupMessage = {
  to: function to(parent, args, ctx) {
    return ctx.db.locationGroupMessage({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    return ctx.db.locationGroupMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    return ctx.db.locationGroupMessage({
      id: parent.id
    }).image();
  }
};
exports.LocationGroupMessage = LocationGroupMessage;
//# sourceMappingURL=LocationGroupMessage.js.map