import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar DateTime
  type Query {
    me: User
    users:[User]
    feed: [Post!]!
    drafts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createDraft(title: String!, content: String!, authorEmail: String!): Post!
    deletePost(id: ID!): Post
    publish(id: ID!): Post
    signup(username: String!, password: String!): AuthPayload!
    login(username: String!, password: String!): AuthPayload!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Post {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    isPublished: Boolean!
    title: String!
    content: String!
    author: User!
  }

  type User {
    id: ID!
    username: String!
    name:String
    posts: [Post!]!
    createdAt: DateTime!
  }
`
