"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photo = void 0;

var _settings = require("../services/settings");

var Photo = {
  user: function user(parent, args, ctx) {
    return ctx.db.photo({
      id: parent.id
    }).user();
  } // url: async (parent, args, ctx) => {
  //     const name = await ctx.db.photo({ id: parent.id }).name()
  //     const url = ossClient.signatureUrl(`images/${name}`, { expires: 1800 });
  //     return url
  // },

};
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map