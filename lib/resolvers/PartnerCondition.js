"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartnerCondition = void 0;
var PartnerCondition = {
  partners: function partners(parent, args, ctx) {
    return ctx.db.partnerCondition({
      id: parent.id
    }).partners();
  },
  passedPartners: function passedPartners(parent, args, ctx) {
    return ctx.db.partnerCondition({
      id: parent.id
    }).passedPartners();
  },
  project: function project(parent, args, ctx) {
    return ctx.db.partnerCondition({
      id: parent.id
    }).project();
  }
};
exports.PartnerCondition = PartnerCondition;
//# sourceMappingURL=PartnerCondition.js.map