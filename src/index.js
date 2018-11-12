import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { prisma } from './generated/prisma-client'
import http from 'http'
import cors from 'cors'
import { resolvers } from './resolvers'
import { permissions } from './permissions'
import { typeDefs } from './schema'

const PORT = 4000;
const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      db: prisma,
    }
  },
});

server.applyMiddleware({ app });
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(` Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(` Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})
