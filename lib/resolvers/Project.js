"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = void 0;
var Project = {
  conditions: function conditions(parent, args, ctx) {
    return ctx.db.project({
      id: parent.id
    }).conditions();
  },
  starter: function starter(parent, args, ctx) {
    return ctx.db.project({
      id: parent.id
    }).starter();
  },
  place: function place(parent, args, ctx) {
    return ctx.db.project({
      id: parent.id
    }).place();
  }
};
exports.Project = Project;
//# sourceMappingURL=Project.js.map