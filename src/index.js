import { ApolloServer } from 'apollo-server'
import depthLimit from 'graphql-depth-limit'

import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { typeDefs } from './schema'

const PORT = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (req) => {
    return {
      ...req,
      db: prisma,
    }
  },
  validationRules: [ depthLimit(10) ],// 最大深度查询限制。
});

server.listen({ port: PORT }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));



