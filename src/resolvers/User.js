import {
  getUserId,
} from '../services/utils'

export const User = {
  id:(parent, args, ctx) => ctx.db.user({ id: parent.id }).id(),
  name:(parent, args, ctx) => ctx.db.user({ id: parent.id }).name(),
  avatar:(parent, args, ctx) => ctx.db.user({ id: parent.id }).avatar(),
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
  birthday: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthday(),
  birthplace: (parent, args, ctx) => ctx.db.user({ id: parent.id }).birthplace(),
  residence: (parent, args, ctx) => ctx.db.user({ id: parent.id }).residence(),
  families: async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    if (!userId) {
      throw new Error("用户不存在")
    }
    if (userId !== parent.uid) {
      throw new Error('Author Invalid')
    }

     return ctx.db.user({ id: parent.id }).families()
    },

  studies: (parent, args, ctx) => ctx.db.user({ id: parent.id }).studies({orderBy:"startTime_ASC"}),
  regStatus: (parent, args, ctx) => ctx.db.user({ id: parent.id }).regStatus(),
  works: (parent, args, ctx) => ctx.db.user({ id: parent.id }).works(),
  exam: (parent, args, ctx) => ctx.db.user({ id: parent.id }).exam(),
  sentMessages: (parent, args, ctx) => ctx.db.user({ id: parent.id }).sentMessages(),
  receiveMessages: (parent, args, ctx) => ctx.db.user({ id: parent.id }).receiveMessages(),
  groups: (parent, args, ctx) => ctx.db.user({ id: parent.id }).groups(),
  friends: (parent, args, ctx) => ctx.db.user({ id: parent.id }).friends(),
  familyGroup:(parent, args, ctx) => ctx.db.user({ id: parent.id }).familyGroup(),
  workGroup:(parent, args, ctx) => ctx.db.user({ id: parent.id }).workGroup(),
  colleagues:(parent, args, ctx) => ctx.db.user({ id: parent.id }).colleagues(),
  locationGroups:(parent, args, ctx) => ctx.db.user({ id: parent.id }).locationGroups(),
}
