"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colleague = void 0;
var Colleague = {
  group: function group(parent, args, ctx) {
    return ctx.db.colleague({
      id: parent.id
    }).group();
  },
  worker: function worker(parent, args, ctx) {
    return ctx.db.colleague({
      id: parent.id
    }).worker();
  }
};
exports.Colleague = Colleague;
//# sourceMappingURL=Colleague.js.map