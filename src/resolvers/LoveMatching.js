export const LoveMatching = {
    woman:(parent, args, ctx) => ctx.db.loveMatching({ id: parent.id }).woman(),
    man:(parent, args, ctx) => ctx.db.loveMatching({ id: parent.id }).man(),
    city:(parent, args, ctx) => ctx.db.loveMatching({ id: parent.id }).city(),
    }