"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriptionLogic = void 0;

var _apolloServer = require("apollo-server");

// reusable function to check for a user with context
function getAuthenticatedUser(ctx) {
  return ctx.user.then(function (user) {
    if (!user) {
      throw new _apolloServer.AuthenticationError('未验证');
    }

    return user;
  });
}

var subscriptionLogic = {
  locationGroupChanged: function locationGroupChanged(params, args, ctx) {
    return getAuthenticatedUser(ctx).then(function (user) {
      if (user.id !== args.userId) {
        throw new _apolloServer.ForbiddenError('未授权');
      }

      return Promise.resolve();
    });
  }
};
exports.subscriptionLogic = subscriptionLogic;
//# sourceMappingURL=logic.js.map