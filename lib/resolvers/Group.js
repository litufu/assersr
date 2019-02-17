"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;
var Group = {
  users: function users(parent, args, ctx) {
    return ctx.db.group({
      id: parent.id
    }).users();
  },
  messages: function messages(parent, args, ctx) {
    return ctx.db.group({
      id: parent.id
    }).messages();
  }
};
exports.Group = Group;
//# sourceMappingURL=Group.js.map