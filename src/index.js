import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { prisma } from './generated/prisma-client'
import depthLimit from 'graphql-depth-limit';
import http from 'http'
import cors from 'cors'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'
import { APP_SECRET, getUserId,getUser } from './services/utils'

const PORT = 4000;
const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => {
    const user = getUser(req,prisma)
    if(!user) throw new Error('you must be logged in');
    return {
      ...req,
      db: prisma,
      user,
    }
  },
  validationRules: [ depthLimit(10) ],// 最大深度查询限制。
});

server.applyMiddleware({ app });
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(` Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(` Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})
