"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.University = void 0;
var University = {
  id: function id(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).id();
  },
  name: function name(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).name();
  },
  education: function education(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).education();
  },
  department: function department(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).department();
  },
  location: function location(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).location();
  },
  desc: function desc(parent, args, ctx) {
    return ctx.db.university({
      id: parent.id
    }).desc();
  }
};
exports.University = University;
//# sourceMappingURL=University.js.map