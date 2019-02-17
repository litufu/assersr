"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FamilyGroupMessage = void 0;
var FamilyGroupMessage = {
  to: function to(parent, args, ctx) {
    return ctx.db.familyGroupMessage({
      id: parent.id
    }).to();
  },
  from: function from(parent, args, ctx) {
    return ctx.db.familyGroupMessage({
      id: parent.id
    }).from();
  },
  image: function image(parent, args, ctx) {
    return ctx.db.familyGroupMessage({
      id: parent.id
    }).image();
  }
};
exports.FamilyGroupMessage = FamilyGroupMessage;
//# sourceMappingURL=FamilyGroupMessage.js.map