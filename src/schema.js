import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar DateTime

  input BirthdayInput {
    calendar: String!
    date: String!
  }

  input BirthplaceInput {
    province:String!
    city:String
    area:String
    street:String
    village:String
  }

  type Query {
    me: User
    users:[User]
    cities(code:String!):[City]
    areas(code:String!):[Area]
    streets(code:String!):[Street]
    villages(code:String!):[Village]
    feed: [Post!]!
    drafts: [Post!]!
    post(id: ID!): Post
    family:[Family!]!
  }

  type Mutation {
    createDraft(title: String!, content: String!, authorEmail: String!): Post!
    deletePost(id: ID!): Post
    publish(id: ID!): Post
    signup(username: String!, password: String!): User!
    login(username: String!, password: String!): User!
    changePassword(currentPassword:String!,newPassword: String!):User!
    addBasicInfo(name:String!,gender:String!,birthday:BirthdayInput!,birthplace:BirthplaceInput!):User!
    createPerson(name:String!):Person!
    updatePerson(id: ID!,username:String!):Person!
    deletePerson(id: ID!):Person
    createFamily(username:String!,personId:ID!,relationship:String!,status:String!):Family
    updateFamily(id:ID!, personId:ID,status:String):Family
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
    uid:String!
    token:String!
    name:String
    gender:String
    birthdaycalendar:String
    birthday:String
    birthProvince:Province
    birthCity:City
    birthArea:Area
    birthStreet:Street
    birthVillage:Village
    posts: [Post!]!
    createdAt: String!
  }

  type Person {
    id: ID!
    name:String!
    user:User
  }

  type Family {
    id: ID!
    from:User!
    to:Person!
    relationship:String!
    status:String!
  }

  type BasicInfo {
    id: ID!
    user:User!
  }

  type Province {
    id:ID!
    code:String!
    name:String!
    cities:[City!]!
    people:[User!]!
  }

  type City {
    id:ID!
    code:String!
    name:String!
    province:Province!
    areas:[Area!]!
    people:[User!]!
  }

  type Area {
    id:ID!
    code:String!
    name:String!
    city:City!
    towns:[Street!]!
    people:[User!]!
  }

  type Street {
    id:ID!
    code:String!
    name:String!
    Area:Area!
    villages:[Village!]!
    people:[User!]!
  }

  type Village {
    id:ID!
    code:String!
    name:String!
    street:Street!
    people:[User!]!
  }





`
