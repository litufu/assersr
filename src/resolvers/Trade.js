import {signed} from '../services/utils'

export const Trade = {
    product:(parent, args, ctx) => ctx.db.trade({ id: parent.id }).product(),
    user:(parent, args, ctx) => ctx.db.trade({ id: parent.id }).user(),
    signedStr:async (parent, args, ctx) => {
      const body = await ctx.db.trade({ id: parent.id }).product().info()
      const subject = await ctx.db.trade({ id: parent.id }).product().subject()
      const totalAmount =await ctx.db.trade({ id: parent.id }).amount()
      const signedStr = signed({
        body,
        subject,
        out_trade_no:parent.id, 
        total_amount:totalAmount   
    })
      return signedStr
    },
  }
  