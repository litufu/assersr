import { gql } from 'apollo-server';

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
    searchUser(username:String!):User
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
    signup(username: String!, password: String!): AuthPayload!
    login(username: String!, password: String!): AuthPayload!
    changePassword(currentPassword:String!,newPassword: String!):User!
    addBasicInfo(name:String!,gender:String!,birthday:BirthdayInput!,birthplace:BirthplaceInput!):User!
    createFamily(name:String!,relationship:String!,spouseId:String):Family
    updateFamily(id:ID!, name:String,relationship:String,spouseId:String,status:String):Family
    deleteFamily(familyId:ID!,toId:ID!):Family
    connectFamily(relativeId:ID!,familyId:ID!,name:String,relationship:String):Family
    confirmFamily(familyId:ID!):Family
  }

  type Subscription {
    familyConnected(familyIds:[ID!]): Family,
    familyChanged:Info
  }

  type Info {
    text:String
  }

  type BatchPayload {
    count: Int!
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
    gender:String
    avatar:String
    birthdaycalendar:String
    birthday:String
    birthplace:Location
    birthProvince:Province
    birthCity:City
    birthArea:Area
    birthStreet:Street
    birthVillage:Village
    posts: [Post!]!
    createdAt: String!
    studies:[SchoolEdu]
    works:[CompanyJob]
    lifes:[Live]
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
    spouse:Family
  }

  type BasicInfo {
    id: ID!
    user:User!
  }

 
  type Live {
    id: ID!
    startTime:String!
    endTime:String!
    location:Location
    title:String
    description:String
    user:User
  }

  type CompanyJob {
    id: ID!
    company:Company
    startTime:String!
    department:String
    post:String
    jobContent:String
    workers:[User!]!
  }

  type Company{
    id: ID!
    name:String
    code:String
    establishmentDate:DateTime
    representative:String
    location:Location
    BusinessScope:String
  }

  enum Educationkind {
    PrimarySchool, #初等教育-小学
    JuniorMiddleSchool,#中等教育-初中
    HighSchool, #中等教育-高中
    VocationalHighSchool, #中等教育-职业中学教育
    TechnicalSchool, #中等教育-技工学校教育
    SecondarySpecializedSchool, #中等教育-中等专业教育
    JuniorCollege,#普通高等教育-大专
    Undergraduate,#普通高等教育-本科
    Master,#普通高等教育-硕士研究生
    Doctor,#普通高等教育-博士研究生
    JuniorToCollege ,#成人高等教育-专科起点本科
    HighToCollege,#成人高等教育-高中起点升本科
    HighToJunior,#成人高等教育-高中起点升专科
  }

  # 学校
  type School {
    id: ID!
    name:String
    kind:Educationkind
    location:Location
  }
  # 学校开设的课程
  type SchoolEdu{
    id: ID!
    school:School
    startTime:String!
    major:Major
    grade:Int
    className:String
    students:[User]
  }

  type Major {
    id: ID!
    name: String!
    category:String!
    education:Educationkind!
    universities:[University!]!
  }

  type University {
    id: ID!
    name: String!
    location:Location
    major:[Major!]!
  }

  type Location {
    id: ID! 
    name:String
    province:Province
    city:City
    area:Area
    street:Street
    village:Village
    schools:[School]
    companies:[Company]
    universities:[University]
    people:[User]
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
