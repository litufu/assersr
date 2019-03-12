"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
var Post = {
  author: function author(parent, args, ctx) {
    return ctx.db.post({
      id: parent.id
    }).author();
  }
};
exports.Post = Post;
//# sourceMappingURL=Province.js.map