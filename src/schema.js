import { gql } from 'apollo-server';

export const typeDefs = gql`
  scalar DateTime

  input BirthdayInput {
    calendar: String!
    date: String!
  }

  input PlaceInput {
    province:String!
    city:String
    area:String
    street:String
    village:String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
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
    getFamiliesById(id:String):[Family!]!
    getSchools(locationName:String,kind:String):[School]
    getMajors(majorName:String):[Major]
    getUniversities(universityName:String):[University]
    getExamBasicInfo:CollegeEntranceExam
    getRegStatus:RegStatus
    getRegStatusApplicants(education:String,universityId:String,majorId:String):[User]
    getRegStatusApplicantsById(regStatusId:String):[User]
    getFamilyGroups:[FamilyGroup]
    students(schoolEduId:String):[User]
    classGroups(schoolEduId:String):[ClassGroup]
    workGroups(companyId:String):[WorkGroup]
    stations(text:String):[Station]
    colleagues(companyId:String):[User]
    oldColleagues(startTime:String,endTime:String,companyId:String):[User]
    myOldColleagues(companyId:String):[OldColleague]
    locationGroups:[LocationGroup]
    photo(id:String,name:String):Photo
    userInfo(id:String):User
    messages:[Message]
    classMessages:[ClassGroupMessage]
    workMessages:[WorkGroupMessage]
    familyMessages:[FamilyGroupMessage]
    locationMessages:[LocationGroupMessage]
    regStatusMessages:[RegStatusMessage]
  }

  type Mutation {
    createDraft(title: String!, content: String!, authorEmail: String!): Post!
    deletePost(id: ID!): Post
    publish(id: ID!): Post
    signup(username: String!, password: String!): AuthPayload!
    login(username: String!, password: String!): AuthPayload!
    changePassword(currentPassword:String!,newPassword: String!):User!
    addBasicInfo(name:String!,gender:String!,birthday:BirthdayInput!,birthplace:PlaceInput!,residence:PlaceInput!):User!
    createFamily(name:String!,relationship:String!,spouseId:String):Family
    updateFamily(id:ID!, name:String,relationship:String,spouseId:String,status:String):Family
    deleteFamily(familyId:ID!,toId:ID!):Family
    connectFamily(relativeId:ID!,familyId:ID!,name:String,relationship:String):Family
    confirmFamily(familyId:ID!):Family
    addLocation(location:PlaceInput,locationName:String):Location
    addSchool(name:String,kind:String,locationName:String):School
    addStudy(year:String,schoolId:String,majorId:String,grade:Int,className:String):SchoolEdu
    addOrUpdateWork(companyName:String,startTime:String,endTime:String,department:String,stationId:String,updateId:String):Work
    addExamBasicInfo(province:String, section:String, score:String, specialScore:String, examineeCardNumber:String):CollegeEntranceExam
    updateExamBasicInfo(province:String, section:String, score:String, specialScore:String, examineeCardNumber:String):CollegeEntranceExam
    addRegStatus(education:String,universityId:String,majorId:String):RegStatus
    cancelRegStatus(id:String):RegStatus
    refreshMyFamilyGroups:[FamilyGroup]
    addClassGroup(name:String,schoolEduId:String,studentId:String):ClassGroup
    confirmClassGroup(schoolEduId:String,studentId:String):ClassGroup
    addWorkGroup(companyId:String,workerId:String):WorkGroup
    confirmWorkGroup(companyId:String,workerId:String):WorkGroup
    addColleague(companyId:String,workerId:String):Colleague
    confirmColleague(colleagueId:String):Colleague
    addOldColleague(companyId:String,workerId:String):OldColleague
    confirmOldColleague(companyId:String,workerId:String):OldColleague
    postPhoto(uri:String):Photo
    addAvatar(uri:String):Photo
    sendMessage(toId:String,text:String,image:String):Message
    sendClassMessage(toId:String,text:String,image:String):ClassGroupMessage
    sendWorkMessage(toId:String,text:String,image:String):WorkGroupMessage
    sendFamilyMessage(toId:String,text:String,image:String):FamilyGroupMessage
    sendLocationMessage(toId:String,text:String,image:String):LocationGroupMessage
    sendRegStatusMessage(toId:String,text:String,image:String):RegStatusMessage
  }

  type Subscription {
    familyConnected(familyIds:[ID!]): Family,
    familyChanged:Info
    familyGroupChanged:Info
    classGroupChanged:Info
    studentsAdded:Info
    workGroupChanged:Info
    colleaguesAdded:Info
    myOldcolleaguesChanged:Info
    locationGroupChanged:LocationGroupChangedInfo
    locationGroupAdded(userId:String):Group
    messageAdded(userId: String):Message
  }

  type LocationGroupChangedInfo{
    toId:String
    groupId:String
    userid:String
    username:String
    userAvatar:String
    type:String
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
    avatar:Photo
    birthdaycalendar:String
    birthday:String
    birthplace:Location
    residence:Location
    posts: [Post!]!
    createdAt: String!
    families:[Family]
    studies:[SchoolEdu]
    works:[Work]
    exam:CollegeEntranceExam
    regStatus:RegStatus
    regTimes:Int
    sentMessages: [Message]
    receiveMessages: [Message]
    groups: [Group]
    friends: [User]
    familyGroup:FamilyGroup
    classMate:[ClassMate]
    workGroup:WorkGroup
    colleagues:[Colleague]
    locationGroups:[LocationGroup]
  }

  type Photo {
    id:ID
    name:String
    url:String
    user:User
  }


  type Person {
    id: ID!
    name:String!
    user:User
    asFather: [FamilyGroup]
    asMother: [FamilyGroup]
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

  type Work{
    id:ID!
    startTime:String
    endTime:String
    company:Company
    department:String
    post:Station
    jobContent:String
    worker:User
  }

  type Company{
    id: ID! 
    name:String 
    code:String 
    establishmentDate:String
    representative:String
    location:Location
    BusinessScope:String
    works:[Work!]!
    workGroup:WorkGroup
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
    education:Educationkind
    department:String
    location:String
    desc:String
  }

  type CollegeEntranceExam {
    id: ID!
    province:Province!
    subject:String!
    culscore:Float!
    proscore:Float
    candidatenum:String!
    times:Int
    student:User!
  }

  type RegStatus {
    id: ID!
    education:Educationkind!
    university:University
    major:Major!
    applicants:[User]
    messages:[RegStatusMessage]
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
    borns:[User]
    lives:[User]
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

  enum GroupKind {
    Location, 
    Student,
    Work,
  }

  type Group{
  id:ID!
  name: String
  users: [User]!
  messages: [Message]
}

type FamilyGroup{
  id:ID! 
  creater:User
  father:Person 
  mother:Person
  name: String
  families: [Family]
  messages: [FamilyGroupMessage]
  users:[User]
}

type ClassMate{
  id: ID!
  student:User
  status:String!
  group:ClassGroup!
}

type ClassGroup{
  id:ID!
  study:SchoolEdu
  name:String
  members:[ClassMate]
  messages: [ClassGroupMessage]
}

type Colleague{
  id: ID! 
  worker:User
  status:String!
  group:WorkGroup
}

type OldColleague{
  id: ID!
  from:User
  to:User
  company:Company
  status:String!
}

type WorkGroup{
  id:ID! 
  company:Company
  colleagues:[Colleague]
  messages: [WorkGroupMessage]
}

enum LocationGroupKind {
  HomeVillage, #老家
  ResidenceVillage,#现住地
  VillageInResidenceVillage, #同村的在相同的街道老乡
  StreetInResidenceVillage, #同镇的在相同的街道老乡
  AreaInResidenceVillage, #同区的在相同的街道老乡
  CityInResidenceVillage, #同市的在相同的街道老乡
  ProvinceInResidenceVillage, #同省的在相同的街道老乡
  VillageInResidenceStreet, #同村的在相同的镇老乡
  StreetInResidenceStreet, #同镇的在相同的镇老乡
  AreaInResidenceStreet, #同区的在相同的镇老乡
  CityInResidenceStreet, #同市的在相同的镇老乡
  ProvinceInResidenceStreet, #同省的在相同的镇老乡
  VillageInResidenceArea, #同村的在相同的区老乡
  StreetInResidenceArea, #同镇的在相同的区老乡
  AreaInResidenceArea, #同区的在相同的区老乡
  CityInResidenceArea, #同市的在相同的区老乡
  ProvinceInResidenceArea, #同省的在相同的区老乡
  VillageInResidenceCity, #同村的在相同的市老乡
  StreetInResidenceCity, #同镇的在相同的市老乡
  AreaInResidenceCity, #同区的在相同的市老乡
  CityInResidenceCity, #同市的在相同的市老乡
  ProvinceInResidenceCity, #同省的在相同的市老乡
}

type LocationGroup{
  id:ID!
  kind:LocationGroupKind
  code:String
  name:String
  users:[User!]!
  messages:[LocationGroupMessage!]!
}


type Message {
  id:ID!
  to: User
  from: User 
  text: String
  image: Photo
  createdAt: DateTime!
}

type ClassGroupMessage{
  id:ID!
  to: ClassGroup!
  from: User
  text: String
  image: Photo
  createdAt: DateTime!
}

type WorkGroupMessage{
  id:ID!
  to: WorkGroup!
  from: User
  text: String
  image: Photo
  createdAt: DateTime!
}

type FamilyGroupMessage{
  id:ID!
  to: FamilyGroup!
  from: User
  text: String
  image: Photo
  createdAt: DateTime!
}

type LocationGroupMessage{
  id:ID!
  to: LocationGroup!
  from: User
  text: String
  image: Photo
  createdAt: DateTime!
}

type RegStatusMessage{
  id:ID!
  to: RegStatus!
  from: User
  text: String
  image: Photo
  createdAt: DateTime!
}


type Station {
  id:ID!
  code:String
  name:String
}


`
