"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Work = void 0;
var Work = {
  company: function company(parent, args, ctx) {
    return ctx.db.work({
      id: parent.id
    }).company();
  },
  post: function post(parent, args, ctx) {
    return ctx.db.work({
      id: parent.id
    }).post();
  },
  worker: function worker(parent, args, ctx) {
    return ctx.db.work({
      id: parent.id
    }).worker();
  }
};
exports.Work = Work;
//# sourceMappingURL=Work.js.map