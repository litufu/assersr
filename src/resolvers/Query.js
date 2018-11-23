import { getUserId } from '../services/utils'

export const Query = {
  me: (parent, args, ctx) => {
    return ctx.db.user({ uid: getUserId(ctx) })
  },
  users:(parent, args, ctx)=> ctx.db.users(),
  cities:(parent, {code}, ctx)=> ctx.db.cities({where:{province:{code}}}),
  areas:(parent, {code}, ctx)=> ctx.db.areas({where:{city:{code}}}),
  streets:(parent, {code}, ctx)=> ctx.db.streets({where:{Area:{code}}}),
  villages:(parent, {code}, ctx)=> ctx.db.villages({where:{street:{code}}}),
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, { id }, ctx) => ctx.db.post({ id }),
  family:(parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    return ctx.db.families({
    where: {
      from: {uid:userId}
    }
  })
  },
}
