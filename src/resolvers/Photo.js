import { ossClient } from '../services/settings'

export const Photo = {
    user: (parent, args, ctx) => ctx.db.photo({ id: parent.id }).user(),
    // url: async (parent, args, ctx) => {
    //     const name = await ctx.db.photo({ id: parent.id }).name()
    //     const url = ossClient.signatureUrl(`images/${name}`, { expires: 1800 });
    //     return url
    // },
}
