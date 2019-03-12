"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;
var Person = {
  user: function user(parent, args, ctx) {
    return ctx.db.person({
      id: parent.id
    }).user();
  },
  asFather: function asFather(parent, args, ctx) {
    return ctx.db.person({
      id: parent.id
    }).asFather();
  },
  asMother: function asMother(parent, args, ctx) {
    return ctx.db.person({
      id: parent.id
    }).asMother();
  }
};
exports.Person = Person;
//# sourceMappingURL=Person.js.map