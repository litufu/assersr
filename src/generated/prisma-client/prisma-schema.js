module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCity {
  count: Int!
}

type AggregateCollegeEntranceExam {
  count: Int!
}

type AggregateCounty {
  count: Int!
}

type AggregateEducation {
  count: Int!
}

type AggregateMajor {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProvince {
  count: Int!
}

type AggregateRegStatus {
  count: Int!
}

type AggregateSubject {
  count: Int!
}

type AggregateTown {
  count: Int!
}

type AggregateUniversity {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type City {
  id: ID!
  name: String!
  province: Province!
  counties(where: CountyWhereInput, orderBy: CountyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [County!]
}

type CityConnection {
  pageInfo: PageInfo!
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
  counties: CountyCreateManyWithoutCityInput
}

input CityCreateManyWithoutProvinceInput {
  create: [CityCreateWithoutProvinceInput!]
  connect: [CityWhereUniqueInput!]
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

input CityCreateOneWithoutCountiesInput {
  create: CityCreateWithoutCountiesInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutCountiesInput {
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
}

input CityCreateWithoutProvinceInput {
  name: String!
  counties: CountyCreateManyWithoutCityInput
}

type CityEdge {
  node: City!
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CityWhereInput
  AND: [CitySubscriptionWhereInput!]
  OR: [CitySubscriptionWhereInput!]
  NOT: [CitySubscriptionWhereInput!]
}

input CityUpdateDataInput {
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  counties: CountyUpdateManyWithoutCityInput
}

input CityUpdateInput {
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  counties: CountyUpdateManyWithoutCityInput
}

input CityUpdateManyWithoutProvinceInput {
  create: [CityCreateWithoutProvinceInput!]
  delete: [CityWhereUniqueInput!]
  connect: [CityWhereUniqueInput!]
  disconnect: [CityWhereUniqueInput!]
  update: [CityUpdateWithWhereUniqueWithoutProvinceInput!]
  upsert: [CityUpsertWithWhereUniqueWithoutProvinceInput!]
}

input CityUpdateOneRequiredInput {
  create: CityCreateInput
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
  connect: CityWhereUniqueInput
}

input CityUpdateOneRequiredWithoutCountiesInput {
  create: CityCreateWithoutCountiesInput
  update: CityUpdateWithoutCountiesDataInput
  upsert: CityUpsertWithoutCountiesInput
  connect: CityWhereUniqueInput
}

input CityUpdateWithoutCountiesDataInput {
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
}

input CityUpdateWithoutProvinceDataInput {
  name: String
  counties: CountyUpdateManyWithoutCityInput
}

input CityUpdateWithWhereUniqueWithoutProvinceInput {
  where: CityWhereUniqueInput!
  data: CityUpdateWithoutProvinceDataInput!
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityUpsertWithoutCountiesInput {
  update: CityUpdateWithoutCountiesDataInput!
  create: CityCreateWithoutCountiesInput!
}

input CityUpsertWithWhereUniqueWithoutProvinceInput {
  where: CityWhereUniqueInput!
  update: CityUpdateWithoutProvinceDataInput!
  create: CityCreateWithoutProvinceInput!
}

input CityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  province: ProvinceWhereInput
  counties_every: CountyWhereInput
  counties_some: CountyWhereInput
  counties_none: CountyWhereInput
  AND: [CityWhereInput!]
  OR: [CityWhereInput!]
  NOT: [CityWhereInput!]
}

input CityWhereUniqueInput {
  id: ID
}

type CollegeEntranceExam {
  id: ID!
  province: Province!
  subject: Subject!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  student: User!
}

type CollegeEntranceExamConnection {
  pageInfo: PageInfo!
  edges: [CollegeEntranceExamEdge]!
  aggregate: AggregateCollegeEntranceExam!
}

input CollegeEntranceExamCreateInput {
  province: ProvinceCreateOneInput!
  subject: SubjectCreateOneInput!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  student: UserCreateOneInput!
}

type CollegeEntranceExamEdge {
  node: CollegeEntranceExam!
  cursor: String!
}

enum CollegeEntranceExamOrderByInput {
  id_ASC
  id_DESC
  culscore_ASC
  culscore_DESC
  proscore_ASC
  proscore_DESC
  candidatenum_ASC
  candidatenum_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollegeEntranceExamPreviousValues {
  id: ID!
  culscore: Float!
  proscore: Float
  candidatenum: String!
}

type CollegeEntranceExamSubscriptionPayload {
  mutation: MutationType!
  node: CollegeEntranceExam
  updatedFields: [String!]
  previousValues: CollegeEntranceExamPreviousValues
}

input CollegeEntranceExamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CollegeEntranceExamWhereInput
  AND: [CollegeEntranceExamSubscriptionWhereInput!]
  OR: [CollegeEntranceExamSubscriptionWhereInput!]
  NOT: [CollegeEntranceExamSubscriptionWhereInput!]
}

input CollegeEntranceExamUpdateInput {
  province: ProvinceUpdateOneRequiredInput
  subject: SubjectUpdateOneRequiredInput
  culscore: Float
  proscore: Float
  candidatenum: String
  student: UserUpdateOneRequiredInput
}

input CollegeEntranceExamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  province: ProvinceWhereInput
  subject: SubjectWhereInput
  culscore: Float
  culscore_not: Float
  culscore_in: [Float!]
  culscore_not_in: [Float!]
  culscore_lt: Float
  culscore_lte: Float
  culscore_gt: Float
  culscore_gte: Float
  proscore: Float
  proscore_not: Float
  proscore_in: [Float!]
  proscore_not_in: [Float!]
  proscore_lt: Float
  proscore_lte: Float
  proscore_gt: Float
  proscore_gte: Float
  candidatenum: String
  candidatenum_not: String
  candidatenum_in: [String!]
  candidatenum_not_in: [String!]
  candidatenum_lt: String
  candidatenum_lte: String
  candidatenum_gt: String
  candidatenum_gte: String
  candidatenum_contains: String
  candidatenum_not_contains: String
  candidatenum_starts_with: String
  candidatenum_not_starts_with: String
  candidatenum_ends_with: String
  candidatenum_not_ends_with: String
  student: UserWhereInput
  AND: [CollegeEntranceExamWhereInput!]
  OR: [CollegeEntranceExamWhereInput!]
  NOT: [CollegeEntranceExamWhereInput!]
}

input CollegeEntranceExamWhereUniqueInput {
  id: ID
}

type County {
  id: ID!
  name: String!
  city: City!
  towns(where: TownWhereInput, orderBy: TownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Town!]
}

type CountyConnection {
  pageInfo: PageInfo!
  edges: [CountyEdge]!
  aggregate: AggregateCounty!
}

input CountyCreateInput {
  name: String!
  city: CityCreateOneWithoutCountiesInput!
  towns: TownCreateManyWithoutCountyInput
}

input CountyCreateManyWithoutCityInput {
  create: [CountyCreateWithoutCityInput!]
  connect: [CountyWhereUniqueInput!]
}

input CountyCreateOneWithoutTownsInput {
  create: CountyCreateWithoutTownsInput
  connect: CountyWhereUniqueInput
}

input CountyCreateWithoutCityInput {
  name: String!
  towns: TownCreateManyWithoutCountyInput
}

input CountyCreateWithoutTownsInput {
  name: String!
  city: CityCreateOneWithoutCountiesInput!
}

type CountyEdge {
  node: County!
  cursor: String!
}

enum CountyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CountyPreviousValues {
  id: ID!
  name: String!
}

type CountySubscriptionPayload {
  mutation: MutationType!
  node: County
  updatedFields: [String!]
  previousValues: CountyPreviousValues
}

input CountySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CountyWhereInput
  AND: [CountySubscriptionWhereInput!]
  OR: [CountySubscriptionWhereInput!]
  NOT: [CountySubscriptionWhereInput!]
}

input CountyUpdateInput {
  name: String
  city: CityUpdateOneRequiredWithoutCountiesInput
  towns: TownUpdateManyWithoutCountyInput
}

input CountyUpdateManyWithoutCityInput {
  create: [CountyCreateWithoutCityInput!]
  delete: [CountyWhereUniqueInput!]
  connect: [CountyWhereUniqueInput!]
  disconnect: [CountyWhereUniqueInput!]
  update: [CountyUpdateWithWhereUniqueWithoutCityInput!]
  upsert: [CountyUpsertWithWhereUniqueWithoutCityInput!]
}

input CountyUpdateOneRequiredWithoutTownsInput {
  create: CountyCreateWithoutTownsInput
  update: CountyUpdateWithoutTownsDataInput
  upsert: CountyUpsertWithoutTownsInput
  connect: CountyWhereUniqueInput
}

input CountyUpdateWithoutCityDataInput {
  name: String
  towns: TownUpdateManyWithoutCountyInput
}

input CountyUpdateWithoutTownsDataInput {
  name: String
  city: CityUpdateOneRequiredWithoutCountiesInput
}

input CountyUpdateWithWhereUniqueWithoutCityInput {
  where: CountyWhereUniqueInput!
  data: CountyUpdateWithoutCityDataInput!
}

input CountyUpsertWithoutTownsInput {
  update: CountyUpdateWithoutTownsDataInput!
  create: CountyCreateWithoutTownsInput!
}

input CountyUpsertWithWhereUniqueWithoutCityInput {
  where: CountyWhereUniqueInput!
  update: CountyUpdateWithoutCityDataInput!
  create: CountyCreateWithoutCityInput!
}

input CountyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  city: CityWhereInput
  towns_every: TownWhereInput
  towns_some: TownWhereInput
  towns_none: TownWhereInput
  AND: [CountyWhereInput!]
  OR: [CountyWhereInput!]
  NOT: [CountyWhereInput!]
}

input CountyWhereUniqueInput {
  id: ID
}

scalar DateTime

type Education {
  id: ID!
  name: String!
}

type EducationConnection {
  pageInfo: PageInfo!
  edges: [EducationEdge]!
  aggregate: AggregateEducation!
}

input EducationCreateInput {
  name: String!
}

input EducationCreateOneInput {
  create: EducationCreateInput
  connect: EducationWhereUniqueInput
}

type EducationEdge {
  node: Education!
  cursor: String!
}

enum EducationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EducationPreviousValues {
  id: ID!
  name: String!
}

type EducationSubscriptionPayload {
  mutation: MutationType!
  node: Education
  updatedFields: [String!]
  previousValues: EducationPreviousValues
}

input EducationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EducationWhereInput
  AND: [EducationSubscriptionWhereInput!]
  OR: [EducationSubscriptionWhereInput!]
  NOT: [EducationSubscriptionWhereInput!]
}

input EducationUpdateDataInput {
  name: String
}

input EducationUpdateInput {
  name: String
}

input EducationUpdateOneRequiredInput {
  create: EducationCreateInput
  update: EducationUpdateDataInput
  upsert: EducationUpsertNestedInput
  connect: EducationWhereUniqueInput
}

input EducationUpsertNestedInput {
  update: EducationUpdateDataInput!
  create: EducationCreateInput!
}

input EducationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [EducationWhereInput!]
  OR: [EducationWhereInput!]
  NOT: [EducationWhereInput!]
}

input EducationWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Major {
  id: ID!
  name: String!
  category: String!
  education: Education!
  code: String
}

type MajorConnection {
  pageInfo: PageInfo!
  edges: [MajorEdge]!
  aggregate: AggregateMajor!
}

input MajorCreateInput {
  name: String!
  category: String!
  education: EducationCreateOneInput!
  code: String
}

input MajorCreateOneInput {
  create: MajorCreateInput
  connect: MajorWhereUniqueInput
}

type MajorEdge {
  node: Major!
  cursor: String!
}

enum MajorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  category_ASC
  category_DESC
  code_ASC
  code_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MajorPreviousValues {
  id: ID!
  name: String!
  category: String!
  code: String
}

type MajorSubscriptionPayload {
  mutation: MutationType!
  node: Major
  updatedFields: [String!]
  previousValues: MajorPreviousValues
}

input MajorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MajorWhereInput
  AND: [MajorSubscriptionWhereInput!]
  OR: [MajorSubscriptionWhereInput!]
  NOT: [MajorSubscriptionWhereInput!]
}

input MajorUpdateDataInput {
  name: String
  category: String
  education: EducationUpdateOneRequiredInput
  code: String
}

input MajorUpdateInput {
  name: String
  category: String
  education: EducationUpdateOneRequiredInput
  code: String
}

input MajorUpdateOneRequiredInput {
  create: MajorCreateInput
  update: MajorUpdateDataInput
  upsert: MajorUpsertNestedInput
  connect: MajorWhereUniqueInput
}

input MajorUpsertNestedInput {
  update: MajorUpdateDataInput!
  create: MajorCreateInput!
}

input MajorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  education: EducationWhereInput
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  AND: [MajorWhereInput!]
  OR: [MajorWhereInput!]
  NOT: [MajorWhereInput!]
}

input MajorWhereUniqueInput {
  id: ID
}

type Mutation {
  createCity(data: CityCreateInput!): City!
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateManyCities(data: CityUpdateInput!, where: CityWhereInput): BatchPayload!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  deleteCity(where: CityWhereUniqueInput!): City
  deleteManyCities(where: CityWhereInput): BatchPayload!
  createCollegeEntranceExam(data: CollegeEntranceExamCreateInput!): CollegeEntranceExam!
  updateCollegeEntranceExam(data: CollegeEntranceExamUpdateInput!, where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  updateManyCollegeEntranceExams(data: CollegeEntranceExamUpdateInput!, where: CollegeEntranceExamWhereInput): BatchPayload!
  upsertCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!, create: CollegeEntranceExamCreateInput!, update: CollegeEntranceExamUpdateInput!): CollegeEntranceExam!
  deleteCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  deleteManyCollegeEntranceExams(where: CollegeEntranceExamWhereInput): BatchPayload!
  createCounty(data: CountyCreateInput!): County!
  updateCounty(data: CountyUpdateInput!, where: CountyWhereUniqueInput!): County
  updateManyCounties(data: CountyUpdateInput!, where: CountyWhereInput): BatchPayload!
  upsertCounty(where: CountyWhereUniqueInput!, create: CountyCreateInput!, update: CountyUpdateInput!): County!
  deleteCounty(where: CountyWhereUniqueInput!): County
  deleteManyCounties(where: CountyWhereInput): BatchPayload!
  createEducation(data: EducationCreateInput!): Education!
  updateEducation(data: EducationUpdateInput!, where: EducationWhereUniqueInput!): Education
  updateManyEducations(data: EducationUpdateInput!, where: EducationWhereInput): BatchPayload!
  upsertEducation(where: EducationWhereUniqueInput!, create: EducationCreateInput!, update: EducationUpdateInput!): Education!
  deleteEducation(where: EducationWhereUniqueInput!): Education
  deleteManyEducations(where: EducationWhereInput): BatchPayload!
  createMajor(data: MajorCreateInput!): Major!
  updateMajor(data: MajorUpdateInput!, where: MajorWhereUniqueInput!): Major
  updateManyMajors(data: MajorUpdateInput!, where: MajorWhereInput): BatchPayload!
  upsertMajor(where: MajorWhereUniqueInput!, create: MajorCreateInput!, update: MajorUpdateInput!): Major!
  deleteMajor(where: MajorWhereUniqueInput!): Major
  deleteManyMajors(where: MajorWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProvince(data: ProvinceCreateInput!): Province!
  updateProvince(data: ProvinceUpdateInput!, where: ProvinceWhereUniqueInput!): Province
  updateManyProvinces(data: ProvinceUpdateInput!, where: ProvinceWhereInput): BatchPayload!
  upsertProvince(where: ProvinceWhereUniqueInput!, create: ProvinceCreateInput!, update: ProvinceUpdateInput!): Province!
  deleteProvince(where: ProvinceWhereUniqueInput!): Province
  deleteManyProvinces(where: ProvinceWhereInput): BatchPayload!
  createRegStatus(data: RegStatusCreateInput!): RegStatus!
  updateRegStatus(data: RegStatusUpdateInput!, where: RegStatusWhereUniqueInput!): RegStatus
  updateManyRegStatuses(data: RegStatusUpdateInput!, where: RegStatusWhereInput): BatchPayload!
  upsertRegStatus(where: RegStatusWhereUniqueInput!, create: RegStatusCreateInput!, update: RegStatusUpdateInput!): RegStatus!
  deleteRegStatus(where: RegStatusWhereUniqueInput!): RegStatus
  deleteManyRegStatuses(where: RegStatusWhereInput): BatchPayload!
  createSubject(data: SubjectCreateInput!): Subject!
  updateSubject(data: SubjectUpdateInput!, where: SubjectWhereUniqueInput!): Subject
  updateManySubjects(data: SubjectUpdateInput!, where: SubjectWhereInput): BatchPayload!
  upsertSubject(where: SubjectWhereUniqueInput!, create: SubjectCreateInput!, update: SubjectUpdateInput!): Subject!
  deleteSubject(where: SubjectWhereUniqueInput!): Subject
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
  createTown(data: TownCreateInput!): Town!
  updateTown(data: TownUpdateInput!, where: TownWhereUniqueInput!): Town
  updateManyTowns(data: TownUpdateInput!, where: TownWhereInput): BatchPayload!
  upsertTown(where: TownWhereUniqueInput!, create: TownCreateInput!, update: TownUpdateInput!): Town!
  deleteTown(where: TownWhereUniqueInput!): Town
  deleteManyTowns(where: TownWhereInput): BatchPayload!
  createUniversity(data: UniversityCreateInput!): University!
  updateUniversity(data: UniversityUpdateInput!, where: UniversityWhereUniqueInput!): University
  updateManyUniversities(data: UniversityUpdateInput!, where: UniversityWhereInput): BatchPayload!
  upsertUniversity(where: UniversityWhereUniqueInput!, create: UniversityCreateInput!, update: UniversityUpdateInput!): University!
  deleteUniversity(where: UniversityWhereUniqueInput!): University
  deleteManyUniversities(where: UniversityWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
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

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  content: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  content: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Province {
  id: ID!
  name: String!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City!]
}

type ProvinceConnection {
  pageInfo: PageInfo!
  edges: [ProvinceEdge]!
  aggregate: AggregateProvince!
}

input ProvinceCreateInput {
  name: String!
  cities: CityCreateManyWithoutProvinceInput
}

input ProvinceCreateOneInput {
  create: ProvinceCreateInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateOneWithoutCitiesInput {
  create: ProvinceCreateWithoutCitiesInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateWithoutCitiesInput {
  name: String!
}

type ProvinceEdge {
  node: Province!
  cursor: String!
}

enum ProvinceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProvincePreviousValues {
  id: ID!
  name: String!
}

type ProvinceSubscriptionPayload {
  mutation: MutationType!
  node: Province
  updatedFields: [String!]
  previousValues: ProvincePreviousValues
}

input ProvinceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProvinceWhereInput
  AND: [ProvinceSubscriptionWhereInput!]
  OR: [ProvinceSubscriptionWhereInput!]
  NOT: [ProvinceSubscriptionWhereInput!]
}

input ProvinceUpdateDataInput {
  name: String
  cities: CityUpdateManyWithoutProvinceInput
}

input ProvinceUpdateInput {
  name: String
  cities: CityUpdateManyWithoutProvinceInput
}

input ProvinceUpdateOneRequiredInput {
  create: ProvinceCreateInput
  update: ProvinceUpdateDataInput
  upsert: ProvinceUpsertNestedInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateOneRequiredWithoutCitiesInput {
  create: ProvinceCreateWithoutCitiesInput
  update: ProvinceUpdateWithoutCitiesDataInput
  upsert: ProvinceUpsertWithoutCitiesInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateWithoutCitiesDataInput {
  name: String
}

input ProvinceUpsertNestedInput {
  update: ProvinceUpdateDataInput!
  create: ProvinceCreateInput!
}

input ProvinceUpsertWithoutCitiesInput {
  update: ProvinceUpdateWithoutCitiesDataInput!
  create: ProvinceCreateWithoutCitiesInput!
}

input ProvinceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cities_every: CityWhereInput
  cities_some: CityWhereInput
  cities_none: CityWhereInput
  AND: [ProvinceWhereInput!]
  OR: [ProvinceWhereInput!]
  NOT: [ProvinceWhereInput!]
}

input ProvinceWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  city(where: CityWhereUniqueInput!): City
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  collegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  collegeEntranceExams(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollegeEntranceExam]!
  collegeEntranceExamsConnection(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollegeEntranceExamConnection!
  county(where: CountyWhereUniqueInput!): County
  counties(where: CountyWhereInput, orderBy: CountyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [County]!
  countiesConnection(where: CountyWhereInput, orderBy: CountyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountyConnection!
  education(where: EducationWhereUniqueInput!): Education
  educations(where: EducationWhereInput, orderBy: EducationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Education]!
  educationsConnection(where: EducationWhereInput, orderBy: EducationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EducationConnection!
  major(where: MajorWhereUniqueInput!): Major
  majors(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Major]!
  majorsConnection(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MajorConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  regStatus(where: RegStatusWhereUniqueInput!): RegStatus
  regStatuses(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatus]!
  regStatusesConnection(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegStatusConnection!
  subject(where: SubjectWhereUniqueInput!): Subject
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  town(where: TownWhereUniqueInput!): Town
  towns(where: TownWhereInput, orderBy: TownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Town]!
  townsConnection(where: TownWhereInput, orderBy: TownOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TownConnection!
  university(where: UniversityWhereUniqueInput!): University
  universities(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [University]!
  universitiesConnection(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UniversityConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type RegStatus {
  id: ID!
  university: University
  major: Major!
  applicants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RegStatusConnection {
  pageInfo: PageInfo!
  edges: [RegStatusEdge]!
  aggregate: AggregateRegStatus!
}

input RegStatusCreateInput {
  university: UniversityCreateOneInput
  major: MajorCreateOneInput!
  applicants: UserCreateManyWithoutRegStatusInput
}

input RegStatusCreateOneWithoutApplicantsInput {
  create: RegStatusCreateWithoutApplicantsInput
  connect: RegStatusWhereUniqueInput
}

input RegStatusCreateWithoutApplicantsInput {
  university: UniversityCreateOneInput
  major: MajorCreateOneInput!
}

type RegStatusEdge {
  node: RegStatus!
  cursor: String!
}

enum RegStatusOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RegStatusPreviousValues {
  id: ID!
}

type RegStatusSubscriptionPayload {
  mutation: MutationType!
  node: RegStatus
  updatedFields: [String!]
  previousValues: RegStatusPreviousValues
}

input RegStatusSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegStatusWhereInput
  AND: [RegStatusSubscriptionWhereInput!]
  OR: [RegStatusSubscriptionWhereInput!]
  NOT: [RegStatusSubscriptionWhereInput!]
}

input RegStatusUpdateInput {
  university: UniversityUpdateOneInput
  major: MajorUpdateOneRequiredInput
  applicants: UserUpdateManyWithoutRegStatusInput
}

input RegStatusUpdateOneWithoutApplicantsInput {
  create: RegStatusCreateWithoutApplicantsInput
  update: RegStatusUpdateWithoutApplicantsDataInput
  upsert: RegStatusUpsertWithoutApplicantsInput
  delete: Boolean
  disconnect: Boolean
  connect: RegStatusWhereUniqueInput
}

input RegStatusUpdateWithoutApplicantsDataInput {
  university: UniversityUpdateOneInput
  major: MajorUpdateOneRequiredInput
}

input RegStatusUpsertWithoutApplicantsInput {
  update: RegStatusUpdateWithoutApplicantsDataInput!
  create: RegStatusCreateWithoutApplicantsInput!
}

input RegStatusWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  university: UniversityWhereInput
  major: MajorWhereInput
  applicants_every: UserWhereInput
  applicants_some: UserWhereInput
  applicants_none: UserWhereInput
  AND: [RegStatusWhereInput!]
  OR: [RegStatusWhereInput!]
  NOT: [RegStatusWhereInput!]
}

input RegStatusWhereUniqueInput {
  id: ID
}

type Subject {
  id: ID!
  name: String!
}

type SubjectConnection {
  pageInfo: PageInfo!
  edges: [SubjectEdge]!
  aggregate: AggregateSubject!
}

input SubjectCreateInput {
  name: String!
}

input SubjectCreateOneInput {
  create: SubjectCreateInput
  connect: SubjectWhereUniqueInput
}

type SubjectEdge {
  node: Subject!
  cursor: String!
}

enum SubjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubjectPreviousValues {
  id: ID!
  name: String!
}

type SubjectSubscriptionPayload {
  mutation: MutationType!
  node: Subject
  updatedFields: [String!]
  previousValues: SubjectPreviousValues
}

input SubjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubjectWhereInput
  AND: [SubjectSubscriptionWhereInput!]
  OR: [SubjectSubscriptionWhereInput!]
  NOT: [SubjectSubscriptionWhereInput!]
}

input SubjectUpdateDataInput {
  name: String
}

input SubjectUpdateInput {
  name: String
}

input SubjectUpdateOneRequiredInput {
  create: SubjectCreateInput
  update: SubjectUpdateDataInput
  upsert: SubjectUpsertNestedInput
  connect: SubjectWhereUniqueInput
}

input SubjectUpsertNestedInput {
  update: SubjectUpdateDataInput!
  create: SubjectCreateInput!
}

input SubjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SubjectWhereInput!]
  OR: [SubjectWhereInput!]
  NOT: [SubjectWhereInput!]
}

input SubjectWhereUniqueInput {
  id: ID
}

type Subscription {
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  collegeEntranceExam(where: CollegeEntranceExamSubscriptionWhereInput): CollegeEntranceExamSubscriptionPayload
  county(where: CountySubscriptionWhereInput): CountySubscriptionPayload
  education(where: EducationSubscriptionWhereInput): EducationSubscriptionPayload
  major(where: MajorSubscriptionWhereInput): MajorSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  regStatus(where: RegStatusSubscriptionWhereInput): RegStatusSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  town(where: TownSubscriptionWhereInput): TownSubscriptionPayload
  university(where: UniversitySubscriptionWhereInput): UniversitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Town {
  id: ID!
  name: String!
  county: County!
}

type TownConnection {
  pageInfo: PageInfo!
  edges: [TownEdge]!
  aggregate: AggregateTown!
}

input TownCreateInput {
  name: String!
  county: CountyCreateOneWithoutTownsInput!
}

input TownCreateManyWithoutCountyInput {
  create: [TownCreateWithoutCountyInput!]
  connect: [TownWhereUniqueInput!]
}

input TownCreateWithoutCountyInput {
  name: String!
}

type TownEdge {
  node: Town!
  cursor: String!
}

enum TownOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TownPreviousValues {
  id: ID!
  name: String!
}

type TownSubscriptionPayload {
  mutation: MutationType!
  node: Town
  updatedFields: [String!]
  previousValues: TownPreviousValues
}

input TownSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TownWhereInput
  AND: [TownSubscriptionWhereInput!]
  OR: [TownSubscriptionWhereInput!]
  NOT: [TownSubscriptionWhereInput!]
}

input TownUpdateInput {
  name: String
  county: CountyUpdateOneRequiredWithoutTownsInput
}

input TownUpdateManyWithoutCountyInput {
  create: [TownCreateWithoutCountyInput!]
  delete: [TownWhereUniqueInput!]
  connect: [TownWhereUniqueInput!]
  disconnect: [TownWhereUniqueInput!]
  update: [TownUpdateWithWhereUniqueWithoutCountyInput!]
  upsert: [TownUpsertWithWhereUniqueWithoutCountyInput!]
}

input TownUpdateWithoutCountyDataInput {
  name: String
}

input TownUpdateWithWhereUniqueWithoutCountyInput {
  where: TownWhereUniqueInput!
  data: TownUpdateWithoutCountyDataInput!
}

input TownUpsertWithWhereUniqueWithoutCountyInput {
  where: TownWhereUniqueInput!
  update: TownUpdateWithoutCountyDataInput!
  create: TownCreateWithoutCountyInput!
}

input TownWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  county: CountyWhereInput
  AND: [TownWhereInput!]
  OR: [TownWhereInput!]
  NOT: [TownWhereInput!]
}

input TownWhereUniqueInput {
  id: ID
}

type University {
  id: ID!
  name: String!
  education: Education!
  identifier: String!
  city: City!
}

type UniversityConnection {
  pageInfo: PageInfo!
  edges: [UniversityEdge]!
  aggregate: AggregateUniversity!
}

input UniversityCreateInput {
  name: String!
  education: EducationCreateOneInput!
  identifier: String!
  city: CityCreateOneInput!
}

input UniversityCreateOneInput {
  create: UniversityCreateInput
  connect: UniversityWhereUniqueInput
}

type UniversityEdge {
  node: University!
  cursor: String!
}

enum UniversityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  identifier_ASC
  identifier_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UniversityPreviousValues {
  id: ID!
  name: String!
  identifier: String!
}

type UniversitySubscriptionPayload {
  mutation: MutationType!
  node: University
  updatedFields: [String!]
  previousValues: UniversityPreviousValues
}

input UniversitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UniversityWhereInput
  AND: [UniversitySubscriptionWhereInput!]
  OR: [UniversitySubscriptionWhereInput!]
  NOT: [UniversitySubscriptionWhereInput!]
}

input UniversityUpdateDataInput {
  name: String
  education: EducationUpdateOneRequiredInput
  identifier: String
  city: CityUpdateOneRequiredInput
}

input UniversityUpdateInput {
  name: String
  education: EducationUpdateOneRequiredInput
  identifier: String
  city: CityUpdateOneRequiredInput
}

input UniversityUpdateOneInput {
  create: UniversityCreateInput
  update: UniversityUpdateDataInput
  upsert: UniversityUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UniversityWhereUniqueInput
}

input UniversityUpsertNestedInput {
  update: UniversityUpdateDataInput!
  create: UniversityCreateInput!
}

input UniversityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  education: EducationWhereInput
  identifier: String
  identifier_not: String
  identifier_in: [String!]
  identifier_not_in: [String!]
  identifier_lt: String
  identifier_lte: String
  identifier_gt: String
  identifier_gte: String
  identifier_contains: String
  identifier_not_contains: String
  identifier_starts_with: String
  identifier_not_starts_with: String
  identifier_ends_with: String
  identifier_not_ends_with: String
  city: CityWhereInput
  AND: [UniversityWhereInput!]
  OR: [UniversityWhereInput!]
  NOT: [UniversityWhereInput!]
}

input UniversityWhereUniqueInput {
  id: ID
  name: String
  identifier: String
}

type User {
  id: ID!
  username: String!
  password: String!
  name: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
  regStatus: RegStatus
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
  name: String
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
}

input UserCreateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  username: String!
  password: String!
  name: String
  regStatus: RegStatusCreateOneWithoutApplicantsInput
}

input UserCreateWithoutRegStatusInput {
  username: String!
  password: String!
  name: String
  posts: PostCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  name: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
}

input UserUpdateInput {
  username: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
}

input UserUpdateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRegStatusInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRegStatusInput!]
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  password: String
  name: String
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
}

input UserUpdateWithoutRegStatusDataInput {
  username: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRegStatusDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRegStatusDataInput!
  create: UserCreateWithoutRegStatusInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  regStatus: RegStatusWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    