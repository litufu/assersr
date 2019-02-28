// import 'babel-polyfill';
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import {verify} from 'jsonwebtoken'
import depthLimit from 'graphql-depth-limit'

import { APP_SECRET } from './services/utils'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'

import {HOST,PORT} from './services/settings'

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

// server.listen({ port: PORT ,host:"192.168.43.75"   }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
app.listen({ port: PORT ,host:HOST}, () =>
  console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`)
);
// ,host:"192.168.0.102" 

