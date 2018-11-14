import { getUserId } from '../services/utils'

export const Query = {
  me: (parent, args, ctx) => {
    return ctx.db.user({ uid: getUserId(ctx) })
  },
  users:(parent, args, ctx)=> ctx.db.users(),
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, { id }, ctx) => ctx.db.post({ id }),
}
