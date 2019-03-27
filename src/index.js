import "@babel/polyfill";

import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import {verify} from 'jsonwebtoken'
import depthLimit from 'graphql-depth-limit'

import { APP_SECRET,verified,getTimeByTimeZone } from './services/utils'
import  {raw} from './services/helper'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'
import {HOST,PORT,DEVELOP,REDISHOST,REDISPWD} from './services/settings'
import EnhancedRedis from './enhancedRedis'

if(DEVELOP){
  process.on('warning', e => console.warn(e.stack));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: {
    cache: new EnhancedRedis({
      host: REDISHOST,
      port: '6379',
      password:REDISPWD,
    })
  },
  context: async ({req,connection}) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }

    return {
      req,
      db: prisma,
    }
  },
  subscriptions: {
    onConnect: async (connectionParams) => {
      if (connectionParams.authToken) {
        const {userId} = verify(connectionParams.authToken, APP_SECRET)
        if (!userId) {
          throw new Error("token错误")
        }
        const user = await prisma.user({ uid: userId })
        if(user){
          return {user,db:prisma}
          
        }
        throw new Error("用户不存在")
      }
      throw new Error('Missing auth token!');
    },
    onDisconnect: (webSocket, context) => {
      console.log('结束订阅')
    },
  },
  validationRules: [ depthLimit(10) ],// 最大深度查询限制。
});

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/alipay/notify_url',  async (req, res)=> {
  const obj = req.body
  const sign = req.body.sign
  delete obj.sign
  delete obj.sign_type

  const verRes = verified(raw(obj), sign)
  if (verRes) {
      
      /** 
       * 1、商户需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
       * 2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额）
       * 3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
       * 4、验证app_id是否为该商户本身。上述1、2、3、4有任何一个验证不通过，则表明本次通知是异常通知，务必忽略。在上述验证通过后商户必须根据支付宝不同类型的业务通知，
       * 正确的进行不同的业务处理，并且过滤重复的通知结果数据。
       * 在支付宝的业务通知中，只有交易通知状态为TRADE_SUCCESS或TRADE_FINISHED时，支付宝才会认定为买家付款成功。
      */
      // 按照支付结果异步通知中的描述，对支付结果中的业务内容进行1\2\3\4二次校验，校验成功后在response中返回success，校验失败返回failure
      const trade = await prisma.trade({id:obj.out_trade_no})
      if(trade){
        const amount = await prisma.trade({id:obj.out_trade_no}).amount()
        if(parseFloat(obj.total_amount)!==amount ||
        obj.app_id !== "2019022063305057" ||
        obj.seller_id !=="2088431374041067"  // 账户PID
        ){
          res.send('failure') 
        }else{
          const newTrade = await prisma.updateTrade({
            where:{id:obj.out_trade_no},
            data:{status:"1"}
          })

          const user = await prisma.trade({id:newTrade.id}).user()
          const product = await prisma.trade({id:newTrade.id}).product()
          const now = getTimeByTimeZone(8)
          const year = now.getFullYear() + 1
          const month = now.getMonth()
          const date = now.getDate()
          const memeberGradeEndTime =new Date(year,month,date)

          if(product.kind==="LOVE"){
            const loveSettings = await prisma.loveSettings({
              where:{user:{id:user.id}}
            })
            if(loveSettings.length>0){
              await prisma.updateLoveSetting({
                where:{id:loveSettings[0].id},
                data:{
                  memeberGrade:newTrade.number,
                  memeberGradeEndTime
                }
              })
            }else{
              await prisma.createLoveSetting({
                  memeberGrade:newTrade.number,
                  memeberGradeEndTime,
                  user:{connect:{id:user.id}}
              })
            }
          }

          res.send('success')
        }
      }
  } else {
      res.send('failure')
  }
})

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);


if(DEVELOP){
  httpServer.listen({ port: PORT,host:HOST  }, () => {
    console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Server ready at ws://${HOST}:${PORT}${server.subscriptionsPath}`)
  })
}else{
  httpServer.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Server ready at ws://${HOST}:${PORT}${server.subscriptionsPath}`)
  })
}

