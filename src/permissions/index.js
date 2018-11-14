import { rule, and, shield } from 'graphql-shield'

import { getUserId } from '../services/utils'

const rules = {
  isUser: rule()(async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    const user = await ctx.db.user({uid:userId})

    return !!user
  }),
  validateAuthor: rule()(async (parent, { authorEmail }, ctx) => {
    const userId = getUserId(ctx)
    const author = await ctx.db.user({
      uid: userId,
    })

    return authorEmail === author.email
  }),
  isPostOwner: rule()(async (parent, { id }, ctx) => {
    const userId = getUserId(ctx)
    const author = await ctx.db
      .post({
        id,
      })
      .author()

    return userId === author.uid
  }),
}

const permissions = shield({
  Query: {
    me: rules.isUser,
  },
  Mutation: {
    changePassword:rules.isUser,
    createDraft: and(rules.isUser, rules.validateAuthor),
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner,
  },
})

module.exports = {
  permissions,
}
