import { AuthenticationError, ForbiddenError } from 'apollo-server';

// reusable function to check for a user with context
function getAuthenticatedUser(ctx) {
  return ctx.user.then((user) => {
    if (!user) {
      throw new AuthenticationError('未验证');
    }
    return user;
  });
}

export const subscriptionLogic = {
  locationGroupChanged(params, args, ctx) {
      return getAuthenticatedUser(ctx)
        .then((user) => {
          if (user.id !== args.userId) {
            throw new ForbiddenError('未授权');
          }
  
          return Promise.resolve();
        });
    },
  
  };