module.exports = {
        typeDefs: /* GraphQL */ `type AggregateArea {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateClassGroup {
  count: Int!
}

type AggregateClassMate {
  count: Int!
}

type AggregateCollegeEntranceExam {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateFamily {
  count: Int!
}

type AggregateFamilyGroup {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateLogs {
  count: Int!
}

type AggregateMajor {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregatePerson {
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

type AggregateSchool {
  count: Int!
}

type AggregateSchoolEdu {
  count: Int!
}

type AggregateStreet {
  count: Int!
}

type AggregateUniversity {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVillage {
  count: Int!
}

type AggregateWork {
  count: Int!
}

type Area {
  id: ID!
  code: String!
  name: String!
  city: City!
  towns(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Street!]
}

type AreaConnection {
  pageInfo: PageInfo!
  edges: [AreaEdge]!
  aggregate: AggregateArea!
}

input AreaCreateInput {
  code: String!
  name: String!
  city: CityCreateOneWithoutAreasInput!
  towns: StreetCreateManyWithoutAreaInput
}

input AreaCreateManyWithoutCityInput {
  create: [AreaCreateWithoutCityInput!]
  connect: [AreaWhereUniqueInput!]
}

input AreaCreateOneInput {
  create: AreaCreateInput
  connect: AreaWhereUniqueInput
}

input AreaCreateOneWithoutTownsInput {
  create: AreaCreateWithoutTownsInput
  connect: AreaWhereUniqueInput
}

input AreaCreateWithoutCityInput {
  code: String!
  name: String!
  towns: StreetCreateManyWithoutAreaInput
}

input AreaCreateWithoutTownsInput {
  code: String!
  name: String!
  city: CityCreateOneWithoutAreasInput!
}

type AreaEdge {
  node: Area!
  cursor: String!
}

enum AreaOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AreaPreviousValues {
  id: ID!
  code: String!
  name: String!
}

type AreaSubscriptionPayload {
  mutation: MutationType!
  node: Area
  updatedFields: [String!]
  previousValues: AreaPreviousValues
}

input AreaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AreaWhereInput
  AND: [AreaSubscriptionWhereInput!]
  OR: [AreaSubscriptionWhereInput!]
  NOT: [AreaSubscriptionWhereInput!]
}

input AreaUpdateDataInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
  towns: StreetUpdateManyWithoutAreaInput
}

input AreaUpdateInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
  towns: StreetUpdateManyWithoutAreaInput
}

input AreaUpdateManyMutationInput {
  code: String
  name: String
}

input AreaUpdateManyWithoutCityInput {
  create: [AreaCreateWithoutCityInput!]
  delete: [AreaWhereUniqueInput!]
  connect: [AreaWhereUniqueInput!]
  disconnect: [AreaWhereUniqueInput!]
  update: [AreaUpdateWithWhereUniqueWithoutCityInput!]
  upsert: [AreaUpsertWithWhereUniqueWithoutCityInput!]
}

input AreaUpdateOneInput {
  create: AreaCreateInput
  update: AreaUpdateDataInput
  upsert: AreaUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AreaWhereUniqueInput
}

input AreaUpdateOneRequiredWithoutTownsInput {
  create: AreaCreateWithoutTownsInput
  update: AreaUpdateWithoutTownsDataInput
  upsert: AreaUpsertWithoutTownsInput
  connect: AreaWhereUniqueInput
}

input AreaUpdateWithoutCityDataInput {
  code: String
  name: String
  towns: StreetUpdateManyWithoutAreaInput
}

input AreaUpdateWithoutTownsDataInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
}

input AreaUpdateWithWhereUniqueWithoutCityInput {
  where: AreaWhereUniqueInput!
  data: AreaUpdateWithoutCityDataInput!
}

input AreaUpsertNestedInput {
  update: AreaUpdateDataInput!
  create: AreaCreateInput!
}

input AreaUpsertWithoutTownsInput {
  update: AreaUpdateWithoutTownsDataInput!
  create: AreaCreateWithoutTownsInput!
}

input AreaUpsertWithWhereUniqueWithoutCityInput {
  where: AreaWhereUniqueInput!
  update: AreaUpdateWithoutCityDataInput!
  create: AreaCreateWithoutCityInput!
}

input AreaWhereInput {
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
  towns_every: StreetWhereInput
  towns_some: StreetWhereInput
  towns_none: StreetWhereInput
  AND: [AreaWhereInput!]
  OR: [AreaWhereInput!]
  NOT: [AreaWhereInput!]
}

input AreaWhereUniqueInput {
  id: ID
  code: String
}

type BatchPayload {
  count: Long!
}

type City {
  id: ID!
  code: String!
  name: String!
  province: Province!
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area!]
}

type CityConnection {
  pageInfo: PageInfo!
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  code: String!
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
  areas: AreaCreateManyWithoutCityInput
}

input CityCreateManyWithoutProvinceInput {
  create: [CityCreateWithoutProvinceInput!]
  connect: [CityWhereUniqueInput!]
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

input CityCreateOneWithoutAreasInput {
  create: CityCreateWithoutAreasInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutAreasInput {
  code: String!
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
}

input CityCreateWithoutProvinceInput {
  code: String!
  name: String!
  areas: AreaCreateManyWithoutCityInput
}

type CityEdge {
  node: City!
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CityPreviousValues {
  id: ID!
  code: String!
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
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  areas: AreaUpdateManyWithoutCityInput
}

input CityUpdateInput {
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  areas: AreaUpdateManyWithoutCityInput
}

input CityUpdateManyMutationInput {
  code: String
  name: String
}

input CityUpdateManyWithoutProvinceInput {
  create: [CityCreateWithoutProvinceInput!]
  delete: [CityWhereUniqueInput!]
  connect: [CityWhereUniqueInput!]
  disconnect: [CityWhereUniqueInput!]
  update: [CityUpdateWithWhereUniqueWithoutProvinceInput!]
  upsert: [CityUpsertWithWhereUniqueWithoutProvinceInput!]
}

input CityUpdateOneInput {
  create: CityCreateInput
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CityWhereUniqueInput
}

input CityUpdateOneRequiredWithoutAreasInput {
  create: CityCreateWithoutAreasInput
  update: CityUpdateWithoutAreasDataInput
  upsert: CityUpsertWithoutAreasInput
  connect: CityWhereUniqueInput
}

input CityUpdateWithoutAreasDataInput {
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
}

input CityUpdateWithoutProvinceDataInput {
  code: String
  name: String
  areas: AreaUpdateManyWithoutCityInput
}

input CityUpdateWithWhereUniqueWithoutProvinceInput {
  where: CityWhereUniqueInput!
  data: CityUpdateWithoutProvinceDataInput!
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityUpsertWithoutAreasInput {
  update: CityUpdateWithoutAreasDataInput!
  create: CityCreateWithoutAreasInput!
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
  areas_every: AreaWhereInput
  areas_some: AreaWhereInput
  areas_none: AreaWhereInput
  AND: [CityWhereInput!]
  OR: [CityWhereInput!]
  NOT: [CityWhereInput!]
}

input CityWhereUniqueInput {
  id: ID
  code: String
}

type ClassGroup {
  id: ID!
  study: SchoolEdu
  name: String
  members(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassMate!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type ClassGroupConnection {
  pageInfo: PageInfo!
  edges: [ClassGroupEdge]!
  aggregate: AggregateClassGroup!
}

input ClassGroupCreateInput {
  study: SchoolEduCreateOneInput
  name: String
  members: ClassMateCreateManyWithoutGroupInput
  messages: MessageCreateManyInput
}

input ClassGroupCreateOneWithoutMembersInput {
  create: ClassGroupCreateWithoutMembersInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupCreateWithoutMembersInput {
  study: SchoolEduCreateOneInput
  name: String
  messages: MessageCreateManyInput
}

type ClassGroupEdge {
  node: ClassGroup!
  cursor: String!
}

enum ClassGroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassGroupPreviousValues {
  id: ID!
  name: String
}

type ClassGroupSubscriptionPayload {
  mutation: MutationType!
  node: ClassGroup
  updatedFields: [String!]
  previousValues: ClassGroupPreviousValues
}

input ClassGroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassGroupWhereInput
  AND: [ClassGroupSubscriptionWhereInput!]
  OR: [ClassGroupSubscriptionWhereInput!]
  NOT: [ClassGroupSubscriptionWhereInput!]
}

input ClassGroupUpdateInput {
  study: SchoolEduUpdateOneInput
  name: String
  members: ClassMateUpdateManyWithoutGroupInput
  messages: MessageUpdateManyInput
}

input ClassGroupUpdateManyMutationInput {
  name: String
}

input ClassGroupUpdateOneRequiredWithoutMembersInput {
  create: ClassGroupCreateWithoutMembersInput
  update: ClassGroupUpdateWithoutMembersDataInput
  upsert: ClassGroupUpsertWithoutMembersInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupUpdateWithoutMembersDataInput {
  study: SchoolEduUpdateOneInput
  name: String
  messages: MessageUpdateManyInput
}

input ClassGroupUpsertWithoutMembersInput {
  update: ClassGroupUpdateWithoutMembersDataInput!
  create: ClassGroupCreateWithoutMembersInput!
}

input ClassGroupWhereInput {
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
  study: SchoolEduWhereInput
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
  members_every: ClassMateWhereInput
  members_some: ClassMateWhereInput
  members_none: ClassMateWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [ClassGroupWhereInput!]
  OR: [ClassGroupWhereInput!]
  NOT: [ClassGroupWhereInput!]
}

input ClassGroupWhereUniqueInput {
  id: ID
}

type ClassMate {
  id: ID!
  student: User
  status: String!
  group: ClassGroup!
}

type ClassMateConnection {
  pageInfo: PageInfo!
  edges: [ClassMateEdge]!
  aggregate: AggregateClassMate!
}

input ClassMateCreateInput {
  student: UserCreateOneWithoutClassMateInput
  status: String!
  group: ClassGroupCreateOneWithoutMembersInput!
}

input ClassMateCreateManyWithoutGroupInput {
  create: [ClassMateCreateWithoutGroupInput!]
  connect: [ClassMateWhereUniqueInput!]
}

input ClassMateCreateManyWithoutStudentInput {
  create: [ClassMateCreateWithoutStudentInput!]
  connect: [ClassMateWhereUniqueInput!]
}

input ClassMateCreateWithoutGroupInput {
  student: UserCreateOneWithoutClassMateInput
  status: String!
}

input ClassMateCreateWithoutStudentInput {
  status: String!
  group: ClassGroupCreateOneWithoutMembersInput!
}

type ClassMateEdge {
  node: ClassMate!
  cursor: String!
}

enum ClassMateOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassMatePreviousValues {
  id: ID!
  status: String!
}

type ClassMateSubscriptionPayload {
  mutation: MutationType!
  node: ClassMate
  updatedFields: [String!]
  previousValues: ClassMatePreviousValues
}

input ClassMateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassMateWhereInput
  AND: [ClassMateSubscriptionWhereInput!]
  OR: [ClassMateSubscriptionWhereInput!]
  NOT: [ClassMateSubscriptionWhereInput!]
}

input ClassMateUpdateInput {
  student: UserUpdateOneWithoutClassMateInput
  status: String
  group: ClassGroupUpdateOneRequiredWithoutMembersInput
}

input ClassMateUpdateManyMutationInput {
  status: String
}

input ClassMateUpdateManyWithoutGroupInput {
  create: [ClassMateCreateWithoutGroupInput!]
  delete: [ClassMateWhereUniqueInput!]
  connect: [ClassMateWhereUniqueInput!]
  disconnect: [ClassMateWhereUniqueInput!]
  update: [ClassMateUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ClassMateUpsertWithWhereUniqueWithoutGroupInput!]
}

input ClassMateUpdateManyWithoutStudentInput {
  create: [ClassMateCreateWithoutStudentInput!]
  delete: [ClassMateWhereUniqueInput!]
  connect: [ClassMateWhereUniqueInput!]
  disconnect: [ClassMateWhereUniqueInput!]
  update: [ClassMateUpdateWithWhereUniqueWithoutStudentInput!]
  upsert: [ClassMateUpsertWithWhereUniqueWithoutStudentInput!]
}

input ClassMateUpdateWithoutGroupDataInput {
  student: UserUpdateOneWithoutClassMateInput
  status: String
}

input ClassMateUpdateWithoutStudentDataInput {
  status: String
  group: ClassGroupUpdateOneRequiredWithoutMembersInput
}

input ClassMateUpdateWithWhereUniqueWithoutGroupInput {
  where: ClassMateWhereUniqueInput!
  data: ClassMateUpdateWithoutGroupDataInput!
}

input ClassMateUpdateWithWhereUniqueWithoutStudentInput {
  where: ClassMateWhereUniqueInput!
  data: ClassMateUpdateWithoutStudentDataInput!
}

input ClassMateUpsertWithWhereUniqueWithoutGroupInput {
  where: ClassMateWhereUniqueInput!
  update: ClassMateUpdateWithoutGroupDataInput!
  create: ClassMateCreateWithoutGroupInput!
}

input ClassMateUpsertWithWhereUniqueWithoutStudentInput {
  where: ClassMateWhereUniqueInput!
  update: ClassMateUpdateWithoutStudentDataInput!
  create: ClassMateCreateWithoutStudentInput!
}

input ClassMateWhereInput {
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
  student: UserWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  group: ClassGroupWhereInput
  AND: [ClassMateWhereInput!]
  OR: [ClassMateWhereInput!]
  NOT: [ClassMateWhereInput!]
}

input ClassMateWhereUniqueInput {
  id: ID
}

type CollegeEntranceExam {
  id: ID!
  province: Province!
  subject: String!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  times: Int
  student: User!
}

type CollegeEntranceExamConnection {
  pageInfo: PageInfo!
  edges: [CollegeEntranceExamEdge]!
  aggregate: AggregateCollegeEntranceExam!
}

input CollegeEntranceExamCreateInput {
  province: ProvinceCreateOneInput!
  subject: String!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  times: Int
  student: UserCreateOneWithoutExamInput!
}

input CollegeEntranceExamCreateOneWithoutStudentInput {
  create: CollegeEntranceExamCreateWithoutStudentInput
  connect: CollegeEntranceExamWhereUniqueInput
}

input CollegeEntranceExamCreateWithoutStudentInput {
  province: ProvinceCreateOneInput!
  subject: String!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  times: Int
}

type CollegeEntranceExamEdge {
  node: CollegeEntranceExam!
  cursor: String!
}

enum CollegeEntranceExamOrderByInput {
  id_ASC
  id_DESC
  subject_ASC
  subject_DESC
  culscore_ASC
  culscore_DESC
  proscore_ASC
  proscore_DESC
  candidatenum_ASC
  candidatenum_DESC
  times_ASC
  times_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CollegeEntranceExamPreviousValues {
  id: ID!
  subject: String!
  culscore: Float!
  proscore: Float
  candidatenum: String!
  times: Int
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
  subject: String
  culscore: Float
  proscore: Float
  candidatenum: String
  times: Int
  student: UserUpdateOneRequiredWithoutExamInput
}

input CollegeEntranceExamUpdateManyMutationInput {
  subject: String
  culscore: Float
  proscore: Float
  candidatenum: String
  times: Int
}

input CollegeEntranceExamUpdateOneWithoutStudentInput {
  create: CollegeEntranceExamCreateWithoutStudentInput
  update: CollegeEntranceExamUpdateWithoutStudentDataInput
  upsert: CollegeEntranceExamUpsertWithoutStudentInput
  delete: Boolean
  disconnect: Boolean
  connect: CollegeEntranceExamWhereUniqueInput
}

input CollegeEntranceExamUpdateWithoutStudentDataInput {
  province: ProvinceUpdateOneRequiredInput
  subject: String
  culscore: Float
  proscore: Float
  candidatenum: String
  times: Int
}

input CollegeEntranceExamUpsertWithoutStudentInput {
  update: CollegeEntranceExamUpdateWithoutStudentDataInput!
  create: CollegeEntranceExamCreateWithoutStudentInput!
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
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
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
  times: Int
  times_not: Int
  times_in: [Int!]
  times_not_in: [Int!]
  times_lt: Int
  times_lte: Int
  times_gt: Int
  times_gte: Int
  student: UserWhereInput
  AND: [CollegeEntranceExamWhereInput!]
  OR: [CollegeEntranceExamWhereInput!]
  NOT: [CollegeEntranceExamWhereInput!]
}

input CollegeEntranceExamWhereUniqueInput {
  id: ID
  candidatenum: String
}

type Company {
  id: ID!
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: Location
  BusinessScope: String
  works(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Work!]
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationCreateOneWithoutCompaniesInput
  BusinessScope: String
  works: WorkCreateManyWithoutCompanyInput
}

input CompanyCreateManyWithoutLocationInput {
  create: [CompanyCreateWithoutLocationInput!]
  connect: [CompanyWhereUniqueInput!]
}

input CompanyCreateOneWithoutWorksInput {
  create: CompanyCreateWithoutWorksInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutLocationInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  BusinessScope: String
  works: WorkCreateManyWithoutCompanyInput
}

input CompanyCreateWithoutWorksInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationCreateOneWithoutCompaniesInput
  BusinessScope: String
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  code_ASC
  code_DESC
  establishmentDate_ASC
  establishmentDate_DESC
  representative_ASC
  representative_DESC
  BusinessScope_ASC
  BusinessScope_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  BusinessScope: String
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationUpdateOneWithoutCompaniesInput
  BusinessScope: String
  works: WorkUpdateManyWithoutCompanyInput
}

input CompanyUpdateManyMutationInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  BusinessScope: String
}

input CompanyUpdateManyWithoutLocationInput {
  create: [CompanyCreateWithoutLocationInput!]
  delete: [CompanyWhereUniqueInput!]
  connect: [CompanyWhereUniqueInput!]
  disconnect: [CompanyWhereUniqueInput!]
  update: [CompanyUpdateWithWhereUniqueWithoutLocationInput!]
  upsert: [CompanyUpsertWithWhereUniqueWithoutLocationInput!]
}

input CompanyUpdateOneWithoutWorksInput {
  create: CompanyCreateWithoutWorksInput
  update: CompanyUpdateWithoutWorksDataInput
  upsert: CompanyUpsertWithoutWorksInput
  delete: Boolean
  disconnect: Boolean
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateWithoutLocationDataInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  BusinessScope: String
  works: WorkUpdateManyWithoutCompanyInput
}

input CompanyUpdateWithoutWorksDataInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationUpdateOneWithoutCompaniesInput
  BusinessScope: String
}

input CompanyUpdateWithWhereUniqueWithoutLocationInput {
  where: CompanyWhereUniqueInput!
  data: CompanyUpdateWithoutLocationDataInput!
}

input CompanyUpsertWithoutWorksInput {
  update: CompanyUpdateWithoutWorksDataInput!
  create: CompanyCreateWithoutWorksInput!
}

input CompanyUpsertWithWhereUniqueWithoutLocationInput {
  where: CompanyWhereUniqueInput!
  update: CompanyUpdateWithoutLocationDataInput!
  create: CompanyCreateWithoutLocationInput!
}

input CompanyWhereInput {
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
  establishmentDate: DateTime
  establishmentDate_not: DateTime
  establishmentDate_in: [DateTime!]
  establishmentDate_not_in: [DateTime!]
  establishmentDate_lt: DateTime
  establishmentDate_lte: DateTime
  establishmentDate_gt: DateTime
  establishmentDate_gte: DateTime
  representative: String
  representative_not: String
  representative_in: [String!]
  representative_not_in: [String!]
  representative_lt: String
  representative_lte: String
  representative_gt: String
  representative_gte: String
  representative_contains: String
  representative_not_contains: String
  representative_starts_with: String
  representative_not_starts_with: String
  representative_ends_with: String
  representative_not_ends_with: String
  location: LocationWhereInput
  BusinessScope: String
  BusinessScope_not: String
  BusinessScope_in: [String!]
  BusinessScope_not_in: [String!]
  BusinessScope_lt: String
  BusinessScope_lte: String
  BusinessScope_gt: String
  BusinessScope_gte: String
  BusinessScope_contains: String
  BusinessScope_not_contains: String
  BusinessScope_starts_with: String
  BusinessScope_not_starts_with: String
  BusinessScope_ends_with: String
  BusinessScope_not_ends_with: String
  works_every: WorkWhereInput
  works_some: WorkWhereInput
  works_none: WorkWhereInput
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

enum Educationkind {
  PrimarySchool
  JuniorMiddleSchool
  HighSchool
  VocationalHighSchool
  TechnicalSchool
  SecondarySpecializedSchool
  JuniorCollege
  Undergraduate
  Master
  Doctor
  JuniorToCollege
  HighToCollege
  HighToJunior
}

type Family {
  id: ID!
  from: User!
  to: Person!
  relationship: String!
  spouse: Family
  status: String!
}

type FamilyConnection {
  pageInfo: PageInfo!
  edges: [FamilyEdge]!
  aggregate: AggregateFamily!
}

input FamilyCreateInput {
  from: UserCreateOneWithoutFamiliesInput!
  to: PersonCreateOneWithoutFamiliesInput!
  relationship: String!
  spouse: FamilyCreateOneInput
  status: String!
}

input FamilyCreateManyInput {
  create: [FamilyCreateInput!]
  connect: [FamilyWhereUniqueInput!]
}

input FamilyCreateManyWithoutFromInput {
  create: [FamilyCreateWithoutFromInput!]
  connect: [FamilyWhereUniqueInput!]
}

input FamilyCreateManyWithoutToInput {
  create: [FamilyCreateWithoutToInput!]
  connect: [FamilyWhereUniqueInput!]
}

input FamilyCreateOneInput {
  create: FamilyCreateInput
  connect: FamilyWhereUniqueInput
}

input FamilyCreateWithoutFromInput {
  to: PersonCreateOneWithoutFamiliesInput!
  relationship: String!
  spouse: FamilyCreateOneInput
  status: String!
}

input FamilyCreateWithoutToInput {
  from: UserCreateOneWithoutFamiliesInput!
  relationship: String!
  spouse: FamilyCreateOneInput
  status: String!
}

type FamilyEdge {
  node: Family!
  cursor: String!
}

type FamilyGroup {
  id: ID!
  father: Person
  mother: Person
  creater: User
  name: String
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type FamilyGroupConnection {
  pageInfo: PageInfo!
  edges: [FamilyGroupEdge]!
  aggregate: AggregateFamilyGroup!
}

input FamilyGroupCreateInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: MessageCreateManyInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateManyWithoutFatherInput {
  create: [FamilyGroupCreateWithoutFatherInput!]
  connect: [FamilyGroupWhereUniqueInput!]
}

input FamilyGroupCreateManyWithoutMotherInput {
  create: [FamilyGroupCreateWithoutMotherInput!]
  connect: [FamilyGroupWhereUniqueInput!]
}

input FamilyGroupCreateOneWithoutCreaterInput {
  create: FamilyGroupCreateWithoutCreaterInput
  connect: FamilyGroupWhereUniqueInput
}

input FamilyGroupCreateOneWithoutUsersInput {
  create: FamilyGroupCreateWithoutUsersInput
  connect: FamilyGroupWhereUniqueInput
}

input FamilyGroupCreateWithoutCreaterInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  name: String
  families: FamilyCreateManyInput
  messages: MessageCreateManyInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutFatherInput {
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: MessageCreateManyInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutMotherInput {
  father: PersonCreateOneWithoutAsFatherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: MessageCreateManyInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutUsersInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: MessageCreateManyInput
}

type FamilyGroupEdge {
  node: FamilyGroup!
  cursor: String!
}

enum FamilyGroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FamilyGroupPreviousValues {
  id: ID!
  name: String
}

type FamilyGroupSubscriptionPayload {
  mutation: MutationType!
  node: FamilyGroup
  updatedFields: [String!]
  previousValues: FamilyGroupPreviousValues
}

input FamilyGroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FamilyGroupWhereInput
  AND: [FamilyGroupSubscriptionWhereInput!]
  OR: [FamilyGroupSubscriptionWhereInput!]
  NOT: [FamilyGroupSubscriptionWhereInput!]
}

input FamilyGroupUpdateInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: MessageUpdateManyInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateManyMutationInput {
  name: String
}

input FamilyGroupUpdateManyWithoutFatherInput {
  create: [FamilyGroupCreateWithoutFatherInput!]
  delete: [FamilyGroupWhereUniqueInput!]
  connect: [FamilyGroupWhereUniqueInput!]
  disconnect: [FamilyGroupWhereUniqueInput!]
  update: [FamilyGroupUpdateWithWhereUniqueWithoutFatherInput!]
  upsert: [FamilyGroupUpsertWithWhereUniqueWithoutFatherInput!]
}

input FamilyGroupUpdateManyWithoutMotherInput {
  create: [FamilyGroupCreateWithoutMotherInput!]
  delete: [FamilyGroupWhereUniqueInput!]
  connect: [FamilyGroupWhereUniqueInput!]
  disconnect: [FamilyGroupWhereUniqueInput!]
  update: [FamilyGroupUpdateWithWhereUniqueWithoutMotherInput!]
  upsert: [FamilyGroupUpsertWithWhereUniqueWithoutMotherInput!]
}

input FamilyGroupUpdateOneWithoutCreaterInput {
  create: FamilyGroupCreateWithoutCreaterInput
  update: FamilyGroupUpdateWithoutCreaterDataInput
  upsert: FamilyGroupUpsertWithoutCreaterInput
  delete: Boolean
  disconnect: Boolean
  connect: FamilyGroupWhereUniqueInput
}

input FamilyGroupUpdateOneWithoutUsersInput {
  create: FamilyGroupCreateWithoutUsersInput
  update: FamilyGroupUpdateWithoutUsersDataInput
  upsert: FamilyGroupUpsertWithoutUsersInput
  delete: Boolean
  disconnect: Boolean
  connect: FamilyGroupWhereUniqueInput
}

input FamilyGroupUpdateWithoutCreaterDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  name: String
  families: FamilyUpdateManyInput
  messages: MessageUpdateManyInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutFatherDataInput {
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: MessageUpdateManyInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutMotherDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: MessageUpdateManyInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutUsersDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: MessageUpdateManyInput
}

input FamilyGroupUpdateWithWhereUniqueWithoutFatherInput {
  where: FamilyGroupWhereUniqueInput!
  data: FamilyGroupUpdateWithoutFatherDataInput!
}

input FamilyGroupUpdateWithWhereUniqueWithoutMotherInput {
  where: FamilyGroupWhereUniqueInput!
  data: FamilyGroupUpdateWithoutMotherDataInput!
}

input FamilyGroupUpsertWithoutCreaterInput {
  update: FamilyGroupUpdateWithoutCreaterDataInput!
  create: FamilyGroupCreateWithoutCreaterInput!
}

input FamilyGroupUpsertWithoutUsersInput {
  update: FamilyGroupUpdateWithoutUsersDataInput!
  create: FamilyGroupCreateWithoutUsersInput!
}

input FamilyGroupUpsertWithWhereUniqueWithoutFatherInput {
  where: FamilyGroupWhereUniqueInput!
  update: FamilyGroupUpdateWithoutFatherDataInput!
  create: FamilyGroupCreateWithoutFatherInput!
}

input FamilyGroupUpsertWithWhereUniqueWithoutMotherInput {
  where: FamilyGroupWhereUniqueInput!
  update: FamilyGroupUpdateWithoutMotherDataInput!
  create: FamilyGroupCreateWithoutMotherInput!
}

input FamilyGroupWhereInput {
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
  father: PersonWhereInput
  mother: PersonWhereInput
  creater: UserWhereInput
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
  families_every: FamilyWhereInput
  families_some: FamilyWhereInput
  families_none: FamilyWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [FamilyGroupWhereInput!]
  OR: [FamilyGroupWhereInput!]
  NOT: [FamilyGroupWhereInput!]
}

input FamilyGroupWhereUniqueInput {
  id: ID
}

enum FamilyOrderByInput {
  id_ASC
  id_DESC
  relationship_ASC
  relationship_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FamilyPreviousValues {
  id: ID!
  relationship: String!
  status: String!
}

type FamilySubscriptionPayload {
  mutation: MutationType!
  node: Family
  updatedFields: [String!]
  previousValues: FamilyPreviousValues
}

input FamilySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FamilyWhereInput
  AND: [FamilySubscriptionWhereInput!]
  OR: [FamilySubscriptionWhereInput!]
  NOT: [FamilySubscriptionWhereInput!]
}

input FamilyUpdateDataInput {
  from: UserUpdateOneRequiredWithoutFamiliesInput
  to: PersonUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  spouse: FamilyUpdateOneInput
  status: String
}

input FamilyUpdateInput {
  from: UserUpdateOneRequiredWithoutFamiliesInput
  to: PersonUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  spouse: FamilyUpdateOneInput
  status: String
}

input FamilyUpdateManyInput {
  create: [FamilyCreateInput!]
  update: [FamilyUpdateWithWhereUniqueNestedInput!]
  upsert: [FamilyUpsertWithWhereUniqueNestedInput!]
  delete: [FamilyWhereUniqueInput!]
  connect: [FamilyWhereUniqueInput!]
  disconnect: [FamilyWhereUniqueInput!]
}

input FamilyUpdateManyMutationInput {
  relationship: String
  status: String
}

input FamilyUpdateManyWithoutFromInput {
  create: [FamilyCreateWithoutFromInput!]
  delete: [FamilyWhereUniqueInput!]
  connect: [FamilyWhereUniqueInput!]
  disconnect: [FamilyWhereUniqueInput!]
  update: [FamilyUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [FamilyUpsertWithWhereUniqueWithoutFromInput!]
}

input FamilyUpdateManyWithoutToInput {
  create: [FamilyCreateWithoutToInput!]
  delete: [FamilyWhereUniqueInput!]
  connect: [FamilyWhereUniqueInput!]
  disconnect: [FamilyWhereUniqueInput!]
  update: [FamilyUpdateWithWhereUniqueWithoutToInput!]
  upsert: [FamilyUpsertWithWhereUniqueWithoutToInput!]
}

input FamilyUpdateOneInput {
  create: FamilyCreateInput
  update: FamilyUpdateDataInput
  upsert: FamilyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FamilyWhereUniqueInput
}

input FamilyUpdateWithoutFromDataInput {
  to: PersonUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  spouse: FamilyUpdateOneInput
  status: String
}

input FamilyUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  spouse: FamilyUpdateOneInput
  status: String
}

input FamilyUpdateWithWhereUniqueNestedInput {
  where: FamilyWhereUniqueInput!
  data: FamilyUpdateDataInput!
}

input FamilyUpdateWithWhereUniqueWithoutFromInput {
  where: FamilyWhereUniqueInput!
  data: FamilyUpdateWithoutFromDataInput!
}

input FamilyUpdateWithWhereUniqueWithoutToInput {
  where: FamilyWhereUniqueInput!
  data: FamilyUpdateWithoutToDataInput!
}

input FamilyUpsertNestedInput {
  update: FamilyUpdateDataInput!
  create: FamilyCreateInput!
}

input FamilyUpsertWithWhereUniqueNestedInput {
  where: FamilyWhereUniqueInput!
  update: FamilyUpdateDataInput!
  create: FamilyCreateInput!
}

input FamilyUpsertWithWhereUniqueWithoutFromInput {
  where: FamilyWhereUniqueInput!
  update: FamilyUpdateWithoutFromDataInput!
  create: FamilyCreateWithoutFromInput!
}

input FamilyUpsertWithWhereUniqueWithoutToInput {
  where: FamilyWhereUniqueInput!
  update: FamilyUpdateWithoutToDataInput!
  create: FamilyCreateWithoutToInput!
}

input FamilyWhereInput {
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
  from: UserWhereInput
  to: PersonWhereInput
  relationship: String
  relationship_not: String
  relationship_in: [String!]
  relationship_not_in: [String!]
  relationship_lt: String
  relationship_lte: String
  relationship_gt: String
  relationship_gte: String
  relationship_contains: String
  relationship_not_contains: String
  relationship_starts_with: String
  relationship_not_starts_with: String
  relationship_ends_with: String
  relationship_not_ends_with: String
  spouse: FamilyWhereInput
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  AND: [FamilyWhereInput!]
  OR: [FamilyWhereInput!]
  NOT: [FamilyWhereInput!]
}

input FamilyWhereUniqueInput {
  id: ID
}

type Group {
  id: ID!
  type: GroupKind
  typeId: String
  name: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  type: GroupKind
  typeId: String
  name: String
  users: UserCreateManyWithoutGroupsInput
  messages: MessageCreateManyWithoutToInput
}

input GroupCreateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutMessagesInput {
  create: GroupCreateWithoutMessagesInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutMessagesInput {
  type: GroupKind
  typeId: String
  name: String
  users: UserCreateManyWithoutGroupsInput
}

input GroupCreateWithoutUsersInput {
  type: GroupKind
  typeId: String
  name: String
  messages: MessageCreateManyWithoutToInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupKind {
  Location
  Student
  Work
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  typeId_ASC
  typeId_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  type: GroupKind
  typeId: String
  name: String
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  type: GroupKind
  typeId: String
  name: String
  users: UserUpdateManyWithoutGroupsInput
  messages: MessageUpdateManyWithoutToInput
}

input GroupUpdateManyMutationInput {
  type: GroupKind
  typeId: String
  name: String
}

input GroupUpdateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUsersInput!]
}

input GroupUpdateOneRequiredWithoutMessagesInput {
  create: GroupCreateWithoutMessagesInput
  update: GroupUpdateWithoutMessagesDataInput
  upsert: GroupUpsertWithoutMessagesInput
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutMessagesDataInput {
  type: GroupKind
  typeId: String
  name: String
  users: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateWithoutUsersDataInput {
  type: GroupKind
  typeId: String
  name: String
  messages: MessageUpdateManyWithoutToInput
}

input GroupUpdateWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUsersDataInput!
}

input GroupUpsertWithoutMessagesInput {
  update: GroupUpdateWithoutMessagesDataInput!
  create: GroupCreateWithoutMessagesInput!
}

input GroupUpsertWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutUsersDataInput!
  create: GroupCreateWithoutUsersInput!
}

input GroupWhereInput {
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
  type: GroupKind
  type_not: GroupKind
  type_in: [GroupKind!]
  type_not_in: [GroupKind!]
  typeId: String
  typeId_not: String
  typeId_in: [String!]
  typeId_not_in: [String!]
  typeId_lt: String
  typeId_lte: String
  typeId_gt: String
  typeId_gte: String
  typeId_contains: String
  typeId_not_contains: String
  typeId_starts_with: String
  typeId_not_starts_with: String
  typeId_ends_with: String
  typeId_not_ends_with: String
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
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  name: String
  province: Province
  city: City
  area: Area
  street: Street
  village: Village
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School!]
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company!]
  universities(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [University!]
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  name: String
  province: ProvinceCreateOneInput
  city: CityCreateOneInput
  area: AreaCreateOneInput
  street: StreetCreateOneInput
  village: VillageCreateOneInput
  schools: SchoolCreateManyWithoutLocationInput
  companies: CompanyCreateManyWithoutLocationInput
  universities: UniversityCreateManyInput
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutCompaniesInput {
  create: LocationCreateWithoutCompaniesInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutSchoolsInput {
  create: LocationCreateWithoutSchoolsInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutCompaniesInput {
  name: String
  province: ProvinceCreateOneInput
  city: CityCreateOneInput
  area: AreaCreateOneInput
  street: StreetCreateOneInput
  village: VillageCreateOneInput
  schools: SchoolCreateManyWithoutLocationInput
  universities: UniversityCreateManyInput
}

input LocationCreateWithoutSchoolsInput {
  name: String
  province: ProvinceCreateOneInput
  city: CityCreateOneInput
  area: AreaCreateOneInput
  street: StreetCreateOneInput
  village: VillageCreateOneInput
  companies: CompanyCreateManyWithoutLocationInput
  universities: UniversityCreateManyInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  name: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  schools: SchoolUpdateManyWithoutLocationInput
  companies: CompanyUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
}

input LocationUpdateInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  schools: SchoolUpdateManyWithoutLocationInput
  companies: CompanyUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
}

input LocationUpdateManyMutationInput {
  name: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateOneWithoutCompaniesInput {
  create: LocationCreateWithoutCompaniesInput
  update: LocationUpdateWithoutCompaniesDataInput
  upsert: LocationUpsertWithoutCompaniesInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateOneWithoutSchoolsInput {
  create: LocationCreateWithoutSchoolsInput
  update: LocationUpdateWithoutSchoolsDataInput
  upsert: LocationUpsertWithoutSchoolsInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpdateWithoutCompaniesDataInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  schools: SchoolUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
}

input LocationUpdateWithoutSchoolsDataInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  companies: CompanyUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationUpsertWithoutCompaniesInput {
  update: LocationUpdateWithoutCompaniesDataInput!
  create: LocationCreateWithoutCompaniesInput!
}

input LocationUpsertWithoutSchoolsInput {
  update: LocationUpdateWithoutSchoolsDataInput!
  create: LocationCreateWithoutSchoolsInput!
}

input LocationWhereInput {
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
  city: CityWhereInput
  area: AreaWhereInput
  street: StreetWhereInput
  village: VillageWhereInput
  schools_every: SchoolWhereInput
  schools_some: SchoolWhereInput
  schools_none: SchoolWhereInput
  companies_every: CompanyWhereInput
  companies_some: CompanyWhereInput
  companies_none: CompanyWhereInput
  universities_every: UniversityWhereInput
  universities_some: UniversityWhereInput
  universities_none: UniversityWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
  name: String
}

type Logs {
  user: User
  createFamilyGroupTime: DateTime
}

type LogsConnection {
  pageInfo: PageInfo!
  edges: [LogsEdge]!
  aggregate: AggregateLogs!
}

input LogsCreateInput {
  user: UserCreateOneInput
  createFamilyGroupTime: DateTime
}

type LogsEdge {
  node: Logs!
  cursor: String!
}

enum LogsOrderByInput {
  createFamilyGroupTime_ASC
  createFamilyGroupTime_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LogsPreviousValues {
  createFamilyGroupTime: DateTime
}

type LogsSubscriptionPayload {
  mutation: MutationType!
  node: Logs
  updatedFields: [String!]
  previousValues: LogsPreviousValues
}

input LogsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogsWhereInput
  AND: [LogsSubscriptionWhereInput!]
  OR: [LogsSubscriptionWhereInput!]
  NOT: [LogsSubscriptionWhereInput!]
}

input LogsUpdateManyMutationInput {
  createFamilyGroupTime: DateTime
}

input LogsWhereInput {
  user: UserWhereInput
  createFamilyGroupTime: DateTime
  createFamilyGroupTime_not: DateTime
  createFamilyGroupTime_in: [DateTime!]
  createFamilyGroupTime_not_in: [DateTime!]
  createFamilyGroupTime_lt: DateTime
  createFamilyGroupTime_lte: DateTime
  createFamilyGroupTime_gt: DateTime
  createFamilyGroupTime_gte: DateTime
  AND: [LogsWhereInput!]
  OR: [LogsWhereInput!]
  NOT: [LogsWhereInput!]
}

scalar Long

type Major {
  id: ID!
  name: String!
  category: String!
  education: Educationkind!
}

type MajorConnection {
  pageInfo: PageInfo!
  edges: [MajorEdge]!
  aggregate: AggregateMajor!
}

input MajorCreateInput {
  name: String!
  category: String!
  education: Educationkind!
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
  education_ASC
  education_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MajorPreviousValues {
  id: ID!
  name: String!
  category: String!
  education: Educationkind!
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
  education: Educationkind
}

input MajorUpdateInput {
  name: String
  category: String
  education: Educationkind
}

input MajorUpdateManyMutationInput {
  name: String
  category: String
  education: Educationkind
}

input MajorUpdateOneInput {
  create: MajorCreateInput
  update: MajorUpdateDataInput
  upsert: MajorUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MajorWhereUniqueInput
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
  education: Educationkind
  education_not: Educationkind
  education_in: [Educationkind!]
  education_not_in: [Educationkind!]
  AND: [MajorWhereInput!]
  OR: [MajorWhereInput!]
  NOT: [MajorWhereInput!]
}

input MajorWhereUniqueInput {
  id: ID
}

type Message {
  id: ID!
  to: Group!
  from: User!
  text: String!
  createdAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  to: GroupCreateOneWithoutMessagesInput!
  from: UserCreateOneWithoutMessagesInput!
  text: String!
}

input MessageCreateManyInput {
  create: [MessageCreateInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutFromInput {
  to: GroupCreateOneWithoutMessagesInput!
  text: String!
}

input MessageCreateWithoutToInput {
  from: UserCreateOneWithoutMessagesInput!
  text: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateDataInput {
  to: GroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateInput {
  to: GroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateManyInput {
  create: [MessageCreateInput!]
  update: [MessageUpdateWithWhereUniqueNestedInput!]
  upsert: [MessageUpsertWithWhereUniqueNestedInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutFromInput {
  create: [MessageCreateWithoutFromInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutFromInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
}

input MessageUpdateWithoutFromDataInput {
  to: GroupUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredWithoutMessagesInput
  text: String
}

input MessageUpdateWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateDataInput!
}

input MessageUpdateWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutFromDataInput!
}

input MessageUpdateWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutToDataInput!
}

input MessageUpsertWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageUpsertWithWhereUniqueWithoutFromInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutFromDataInput!
  create: MessageCreateWithoutFromInput!
}

input MessageUpsertWithWhereUniqueWithoutToInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutToDataInput!
  create: MessageCreateWithoutToInput!
}

input MessageWhereInput {
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
  to: GroupWhereInput
  from: UserWhereInput
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createArea(data: AreaCreateInput!): Area!
  updateArea(data: AreaUpdateInput!, where: AreaWhereUniqueInput!): Area
  updateManyAreas(data: AreaUpdateManyMutationInput!, where: AreaWhereInput): BatchPayload!
  upsertArea(where: AreaWhereUniqueInput!, create: AreaCreateInput!, update: AreaUpdateInput!): Area!
  deleteArea(where: AreaWhereUniqueInput!): Area
  deleteManyAreas(where: AreaWhereInput): BatchPayload!
  createCity(data: CityCreateInput!): City!
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  deleteCity(where: CityWhereUniqueInput!): City
  deleteManyCities(where: CityWhereInput): BatchPayload!
  createClassGroup(data: ClassGroupCreateInput!): ClassGroup!
  updateClassGroup(data: ClassGroupUpdateInput!, where: ClassGroupWhereUniqueInput!): ClassGroup
  updateManyClassGroups(data: ClassGroupUpdateManyMutationInput!, where: ClassGroupWhereInput): BatchPayload!
  upsertClassGroup(where: ClassGroupWhereUniqueInput!, create: ClassGroupCreateInput!, update: ClassGroupUpdateInput!): ClassGroup!
  deleteClassGroup(where: ClassGroupWhereUniqueInput!): ClassGroup
  deleteManyClassGroups(where: ClassGroupWhereInput): BatchPayload!
  createClassMate(data: ClassMateCreateInput!): ClassMate!
  updateClassMate(data: ClassMateUpdateInput!, where: ClassMateWhereUniqueInput!): ClassMate
  updateManyClassMates(data: ClassMateUpdateManyMutationInput!, where: ClassMateWhereInput): BatchPayload!
  upsertClassMate(where: ClassMateWhereUniqueInput!, create: ClassMateCreateInput!, update: ClassMateUpdateInput!): ClassMate!
  deleteClassMate(where: ClassMateWhereUniqueInput!): ClassMate
  deleteManyClassMates(where: ClassMateWhereInput): BatchPayload!
  createCollegeEntranceExam(data: CollegeEntranceExamCreateInput!): CollegeEntranceExam!
  updateCollegeEntranceExam(data: CollegeEntranceExamUpdateInput!, where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  updateManyCollegeEntranceExams(data: CollegeEntranceExamUpdateManyMutationInput!, where: CollegeEntranceExamWhereInput): BatchPayload!
  upsertCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!, create: CollegeEntranceExamCreateInput!, update: CollegeEntranceExamUpdateInput!): CollegeEntranceExam!
  deleteCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  deleteManyCollegeEntranceExams(where: CollegeEntranceExamWhereInput): BatchPayload!
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createFamily(data: FamilyCreateInput!): Family!
  updateFamily(data: FamilyUpdateInput!, where: FamilyWhereUniqueInput!): Family
  updateManyFamilies(data: FamilyUpdateManyMutationInput!, where: FamilyWhereInput): BatchPayload!
  upsertFamily(where: FamilyWhereUniqueInput!, create: FamilyCreateInput!, update: FamilyUpdateInput!): Family!
  deleteFamily(where: FamilyWhereUniqueInput!): Family
  deleteManyFamilies(where: FamilyWhereInput): BatchPayload!
  createFamilyGroup(data: FamilyGroupCreateInput!): FamilyGroup!
  updateFamilyGroup(data: FamilyGroupUpdateInput!, where: FamilyGroupWhereUniqueInput!): FamilyGroup
  updateManyFamilyGroups(data: FamilyGroupUpdateManyMutationInput!, where: FamilyGroupWhereInput): BatchPayload!
  upsertFamilyGroup(where: FamilyGroupWhereUniqueInput!, create: FamilyGroupCreateInput!, update: FamilyGroupUpdateInput!): FamilyGroup!
  deleteFamilyGroup(where: FamilyGroupWhereUniqueInput!): FamilyGroup
  deleteManyFamilyGroups(where: FamilyGroupWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createLogs(data: LogsCreateInput!): Logs!
  updateManyLogses(data: LogsUpdateManyMutationInput!, where: LogsWhereInput): BatchPayload!
  deleteManyLogses(where: LogsWhereInput): BatchPayload!
  createMajor(data: MajorCreateInput!): Major!
  updateMajor(data: MajorUpdateInput!, where: MajorWhereUniqueInput!): Major
  updateManyMajors(data: MajorUpdateManyMutationInput!, where: MajorWhereInput): BatchPayload!
  upsertMajor(where: MajorWhereUniqueInput!, create: MajorCreateInput!, update: MajorUpdateInput!): Major!
  deleteMajor(where: MajorWhereUniqueInput!): Major
  deleteManyMajors(where: MajorWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProvince(data: ProvinceCreateInput!): Province!
  updateProvince(data: ProvinceUpdateInput!, where: ProvinceWhereUniqueInput!): Province
  updateManyProvinces(data: ProvinceUpdateManyMutationInput!, where: ProvinceWhereInput): BatchPayload!
  upsertProvince(where: ProvinceWhereUniqueInput!, create: ProvinceCreateInput!, update: ProvinceUpdateInput!): Province!
  deleteProvince(where: ProvinceWhereUniqueInput!): Province
  deleteManyProvinces(where: ProvinceWhereInput): BatchPayload!
  createRegStatus(data: RegStatusCreateInput!): RegStatus!
  updateRegStatus(data: RegStatusUpdateInput!, where: RegStatusWhereUniqueInput!): RegStatus
  updateManyRegStatuses(data: RegStatusUpdateManyMutationInput!, where: RegStatusWhereInput): BatchPayload!
  upsertRegStatus(where: RegStatusWhereUniqueInput!, create: RegStatusCreateInput!, update: RegStatusUpdateInput!): RegStatus!
  deleteRegStatus(where: RegStatusWhereUniqueInput!): RegStatus
  deleteManyRegStatuses(where: RegStatusWhereInput): BatchPayload!
  createSchool(data: SchoolCreateInput!): School!
  updateSchool(data: SchoolUpdateInput!, where: SchoolWhereUniqueInput!): School
  updateManySchools(data: SchoolUpdateManyMutationInput!, where: SchoolWhereInput): BatchPayload!
  upsertSchool(where: SchoolWhereUniqueInput!, create: SchoolCreateInput!, update: SchoolUpdateInput!): School!
  deleteSchool(where: SchoolWhereUniqueInput!): School
  deleteManySchools(where: SchoolWhereInput): BatchPayload!
  createSchoolEdu(data: SchoolEduCreateInput!): SchoolEdu!
  updateSchoolEdu(data: SchoolEduUpdateInput!, where: SchoolEduWhereUniqueInput!): SchoolEdu
  updateManySchoolEdus(data: SchoolEduUpdateManyMutationInput!, where: SchoolEduWhereInput): BatchPayload!
  upsertSchoolEdu(where: SchoolEduWhereUniqueInput!, create: SchoolEduCreateInput!, update: SchoolEduUpdateInput!): SchoolEdu!
  deleteSchoolEdu(where: SchoolEduWhereUniqueInput!): SchoolEdu
  deleteManySchoolEdus(where: SchoolEduWhereInput): BatchPayload!
  createStreet(data: StreetCreateInput!): Street!
  updateStreet(data: StreetUpdateInput!, where: StreetWhereUniqueInput!): Street
  updateManyStreets(data: StreetUpdateManyMutationInput!, where: StreetWhereInput): BatchPayload!
  upsertStreet(where: StreetWhereUniqueInput!, create: StreetCreateInput!, update: StreetUpdateInput!): Street!
  deleteStreet(where: StreetWhereUniqueInput!): Street
  deleteManyStreets(where: StreetWhereInput): BatchPayload!
  createUniversity(data: UniversityCreateInput!): University!
  updateUniversity(data: UniversityUpdateInput!, where: UniversityWhereUniqueInput!): University
  updateManyUniversities(data: UniversityUpdateManyMutationInput!, where: UniversityWhereInput): BatchPayload!
  upsertUniversity(where: UniversityWhereUniqueInput!, create: UniversityCreateInput!, update: UniversityUpdateInput!): University!
  deleteUniversity(where: UniversityWhereUniqueInput!): University
  deleteManyUniversities(where: UniversityWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVillage(data: VillageCreateInput!): Village!
  updateVillage(data: VillageUpdateInput!, where: VillageWhereUniqueInput!): Village
  updateManyVillages(data: VillageUpdateManyMutationInput!, where: VillageWhereInput): BatchPayload!
  upsertVillage(where: VillageWhereUniqueInput!, create: VillageCreateInput!, update: VillageUpdateInput!): Village!
  deleteVillage(where: VillageWhereUniqueInput!): Village
  deleteManyVillages(where: VillageWhereInput): BatchPayload!
  createWork(data: WorkCreateInput!): Work!
  updateWork(data: WorkUpdateInput!, where: WorkWhereUniqueInput!): Work
  updateManyWorks(data: WorkUpdateManyMutationInput!, where: WorkWhereInput): BatchPayload!
  upsertWork(where: WorkWhereUniqueInput!, create: WorkCreateInput!, update: WorkUpdateInput!): Work!
  deleteWork(where: WorkWhereUniqueInput!): Work
  deleteManyWorks(where: WorkWhereInput): BatchPayload!
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

type Person {
  id: ID!
  name: String!
  user: User
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family!]
  asFather(where: FamilyGroupWhereInput, orderBy: FamilyGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FamilyGroup!]
  asMother(where: FamilyGroupWhereInput, orderBy: FamilyGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FamilyGroup!]
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  name: String!
  user: UserCreateOneInput
  families: FamilyCreateManyWithoutToInput
  asFather: FamilyGroupCreateManyWithoutFatherInput
  asMother: FamilyGroupCreateManyWithoutMotherInput
}

input PersonCreateOneWithoutAsFatherInput {
  create: PersonCreateWithoutAsFatherInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutAsMotherInput {
  create: PersonCreateWithoutAsMotherInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutFamiliesInput {
  create: PersonCreateWithoutFamiliesInput
  connect: PersonWhereUniqueInput
}

input PersonCreateWithoutAsFatherInput {
  name: String!
  user: UserCreateOneInput
  families: FamilyCreateManyWithoutToInput
  asMother: FamilyGroupCreateManyWithoutMotherInput
}

input PersonCreateWithoutAsMotherInput {
  name: String!
  user: UserCreateOneInput
  families: FamilyCreateManyWithoutToInput
  asFather: FamilyGroupCreateManyWithoutFatherInput
}

input PersonCreateWithoutFamiliesInput {
  name: String!
  user: UserCreateOneInput
  asFather: FamilyGroupCreateManyWithoutFatherInput
  asMother: FamilyGroupCreateManyWithoutMotherInput
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PersonPreviousValues {
  id: ID!
  name: String!
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateInput {
  name: String
  user: UserUpdateOneInput
  families: FamilyUpdateManyWithoutToInput
  asFather: FamilyGroupUpdateManyWithoutFatherInput
  asMother: FamilyGroupUpdateManyWithoutMotherInput
}

input PersonUpdateManyMutationInput {
  name: String
}

input PersonUpdateOneRequiredWithoutFamiliesInput {
  create: PersonCreateWithoutFamiliesInput
  update: PersonUpdateWithoutFamiliesDataInput
  upsert: PersonUpsertWithoutFamiliesInput
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneWithoutAsFatherInput {
  create: PersonCreateWithoutAsFatherInput
  update: PersonUpdateWithoutAsFatherDataInput
  upsert: PersonUpsertWithoutAsFatherInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneWithoutAsMotherInput {
  create: PersonCreateWithoutAsMotherInput
  update: PersonUpdateWithoutAsMotherDataInput
  upsert: PersonUpsertWithoutAsMotherInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpdateWithoutAsFatherDataInput {
  name: String
  user: UserUpdateOneInput
  families: FamilyUpdateManyWithoutToInput
  asMother: FamilyGroupUpdateManyWithoutMotherInput
}

input PersonUpdateWithoutAsMotherDataInput {
  name: String
  user: UserUpdateOneInput
  families: FamilyUpdateManyWithoutToInput
  asFather: FamilyGroupUpdateManyWithoutFatherInput
}

input PersonUpdateWithoutFamiliesDataInput {
  name: String
  user: UserUpdateOneInput
  asFather: FamilyGroupUpdateManyWithoutFatherInput
  asMother: FamilyGroupUpdateManyWithoutMotherInput
}

input PersonUpsertWithoutAsFatherInput {
  update: PersonUpdateWithoutAsFatherDataInput!
  create: PersonCreateWithoutAsFatherInput!
}

input PersonUpsertWithoutAsMotherInput {
  update: PersonUpdateWithoutAsMotherDataInput!
  create: PersonCreateWithoutAsMotherInput!
}

input PersonUpsertWithoutFamiliesInput {
  update: PersonUpdateWithoutFamiliesDataInput!
  create: PersonCreateWithoutFamiliesInput!
}

input PersonWhereInput {
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
  user: UserWhereInput
  families_every: FamilyWhereInput
  families_some: FamilyWhereInput
  families_none: FamilyWhereInput
  asFather_every: FamilyGroupWhereInput
  asFather_some: FamilyGroupWhereInput
  asFather_none: FamilyGroupWhereInput
  asMother_every: FamilyGroupWhereInput
  asMother_some: FamilyGroupWhereInput
  asMother_none: FamilyGroupWhereInput
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
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

input PostUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  content: String
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
  code: String!
  name: String!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City!]
}

type ProvinceConnection {
  pageInfo: PageInfo!
  edges: [ProvinceEdge]!
  aggregate: AggregateProvince!
}

input ProvinceCreateInput {
  code: String!
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
  code: String!
  name: String!
}

type ProvinceEdge {
  node: Province!
  cursor: String!
}

enum ProvinceOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProvincePreviousValues {
  id: ID!
  code: String!
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
  code: String
  name: String
  cities: CityUpdateManyWithoutProvinceInput
}

input ProvinceUpdateInput {
  code: String
  name: String
  cities: CityUpdateManyWithoutProvinceInput
}

input ProvinceUpdateManyMutationInput {
  code: String
  name: String
}

input ProvinceUpdateOneInput {
  create: ProvinceCreateInput
  update: ProvinceUpdateDataInput
  upsert: ProvinceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProvinceWhereUniqueInput
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
  code: String
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
  code: String
  name: String
}

type Query {
  area(where: AreaWhereUniqueInput!): Area
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area]!
  areasConnection(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AreaConnection!
  city(where: CityWhereUniqueInput!): City
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  classGroup(where: ClassGroupWhereUniqueInput!): ClassGroup
  classGroups(where: ClassGroupWhereInput, orderBy: ClassGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassGroup]!
  classGroupsConnection(where: ClassGroupWhereInput, orderBy: ClassGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassGroupConnection!
  classMate(where: ClassMateWhereUniqueInput!): ClassMate
  classMates(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassMate]!
  classMatesConnection(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassMateConnection!
  collegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  collegeEntranceExams(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollegeEntranceExam]!
  collegeEntranceExamsConnection(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollegeEntranceExamConnection!
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  family(where: FamilyWhereUniqueInput!): Family
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family]!
  familiesConnection(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FamilyConnection!
  familyGroup(where: FamilyGroupWhereUniqueInput!): FamilyGroup
  familyGroups(where: FamilyGroupWhereInput, orderBy: FamilyGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FamilyGroup]!
  familyGroupsConnection(where: FamilyGroupWhereInput, orderBy: FamilyGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FamilyGroupConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  logses(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs]!
  logsesConnection(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogsConnection!
  major(where: MajorWhereUniqueInput!): Major
  majors(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Major]!
  majorsConnection(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MajorConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  regStatus(where: RegStatusWhereUniqueInput!): RegStatus
  regStatuses(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatus]!
  regStatusesConnection(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegStatusConnection!
  school(where: SchoolWhereUniqueInput!): School
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  schoolEdu(where: SchoolEduWhereUniqueInput!): SchoolEdu
  schoolEdus(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolEdu]!
  schoolEdusConnection(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolEduConnection!
  street(where: StreetWhereUniqueInput!): Street
  streets(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Street]!
  streetsConnection(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StreetConnection!
  university(where: UniversityWhereUniqueInput!): University
  universities(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [University]!
  universitiesConnection(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UniversityConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  village(where: VillageWhereUniqueInput!): Village
  villages(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Village]!
  villagesConnection(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VillageConnection!
  work(where: WorkWhereUniqueInput!): Work
  works(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Work]!
  worksConnection(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkConnection!
  node(id: ID!): Node
}

type RegStatus {
  id: ID!
  education: Educationkind!
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
  education: Educationkind!
  university: UniversityCreateOneInput
  major: MajorCreateOneInput!
  applicants: UserCreateManyWithoutRegStatusInput
}

input RegStatusCreateOneWithoutApplicantsInput {
  create: RegStatusCreateWithoutApplicantsInput
  connect: RegStatusWhereUniqueInput
}

input RegStatusCreateWithoutApplicantsInput {
  education: Educationkind!
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
  education_ASC
  education_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RegStatusPreviousValues {
  id: ID!
  education: Educationkind!
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
  education: Educationkind
  university: UniversityUpdateOneInput
  major: MajorUpdateOneRequiredInput
  applicants: UserUpdateManyWithoutRegStatusInput
}

input RegStatusUpdateManyMutationInput {
  education: Educationkind
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
  education: Educationkind
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
  education: Educationkind
  education_not: Educationkind
  education_in: [Educationkind!]
  education_not_in: [Educationkind!]
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

type School {
  id: ID!
  name: String
  kind: Educationkind
  location: Location
}

type SchoolConnection {
  pageInfo: PageInfo!
  edges: [SchoolEdge]!
  aggregate: AggregateSchool!
}

input SchoolCreateInput {
  name: String
  kind: Educationkind
  location: LocationCreateOneWithoutSchoolsInput
}

input SchoolCreateManyWithoutLocationInput {
  create: [SchoolCreateWithoutLocationInput!]
  connect: [SchoolWhereUniqueInput!]
}

input SchoolCreateOneInput {
  create: SchoolCreateInput
  connect: SchoolWhereUniqueInput
}

input SchoolCreateWithoutLocationInput {
  name: String
  kind: Educationkind
}

type SchoolEdge {
  node: School!
  cursor: String!
}

type SchoolEdu {
  id: ID!
  school: School
  startTime: DateTime
  major: Major
  grade: Int
  className: String
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type SchoolEduConnection {
  pageInfo: PageInfo!
  edges: [SchoolEduEdge]!
  aggregate: AggregateSchoolEdu!
}

input SchoolEduCreateInput {
  school: SchoolCreateOneInput
  startTime: DateTime
  major: MajorCreateOneInput
  grade: Int
  className: String
  students: UserCreateManyWithoutStudiesInput
}

input SchoolEduCreateManyWithoutStudentsInput {
  create: [SchoolEduCreateWithoutStudentsInput!]
  connect: [SchoolEduWhereUniqueInput!]
}

input SchoolEduCreateOneInput {
  create: SchoolEduCreateInput
  connect: SchoolEduWhereUniqueInput
}

input SchoolEduCreateWithoutStudentsInput {
  school: SchoolCreateOneInput
  startTime: DateTime
  major: MajorCreateOneInput
  grade: Int
  className: String
}

type SchoolEduEdge {
  node: SchoolEdu!
  cursor: String!
}

enum SchoolEduOrderByInput {
  id_ASC
  id_DESC
  startTime_ASC
  startTime_DESC
  grade_ASC
  grade_DESC
  className_ASC
  className_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolEduPreviousValues {
  id: ID!
  startTime: DateTime
  grade: Int
  className: String
}

type SchoolEduSubscriptionPayload {
  mutation: MutationType!
  node: SchoolEdu
  updatedFields: [String!]
  previousValues: SchoolEduPreviousValues
}

input SchoolEduSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolEduWhereInput
  AND: [SchoolEduSubscriptionWhereInput!]
  OR: [SchoolEduSubscriptionWhereInput!]
  NOT: [SchoolEduSubscriptionWhereInput!]
}

input SchoolEduUpdateDataInput {
  school: SchoolUpdateOneInput
  startTime: DateTime
  major: MajorUpdateOneInput
  grade: Int
  className: String
  students: UserUpdateManyWithoutStudiesInput
}

input SchoolEduUpdateInput {
  school: SchoolUpdateOneInput
  startTime: DateTime
  major: MajorUpdateOneInput
  grade: Int
  className: String
  students: UserUpdateManyWithoutStudiesInput
}

input SchoolEduUpdateManyMutationInput {
  startTime: DateTime
  grade: Int
  className: String
}

input SchoolEduUpdateManyWithoutStudentsInput {
  create: [SchoolEduCreateWithoutStudentsInput!]
  delete: [SchoolEduWhereUniqueInput!]
  connect: [SchoolEduWhereUniqueInput!]
  disconnect: [SchoolEduWhereUniqueInput!]
  update: [SchoolEduUpdateWithWhereUniqueWithoutStudentsInput!]
  upsert: [SchoolEduUpsertWithWhereUniqueWithoutStudentsInput!]
}

input SchoolEduUpdateOneInput {
  create: SchoolEduCreateInput
  update: SchoolEduUpdateDataInput
  upsert: SchoolEduUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SchoolEduWhereUniqueInput
}

input SchoolEduUpdateWithoutStudentsDataInput {
  school: SchoolUpdateOneInput
  startTime: DateTime
  major: MajorUpdateOneInput
  grade: Int
  className: String
}

input SchoolEduUpdateWithWhereUniqueWithoutStudentsInput {
  where: SchoolEduWhereUniqueInput!
  data: SchoolEduUpdateWithoutStudentsDataInput!
}

input SchoolEduUpsertNestedInput {
  update: SchoolEduUpdateDataInput!
  create: SchoolEduCreateInput!
}

input SchoolEduUpsertWithWhereUniqueWithoutStudentsInput {
  where: SchoolEduWhereUniqueInput!
  update: SchoolEduUpdateWithoutStudentsDataInput!
  create: SchoolEduCreateWithoutStudentsInput!
}

input SchoolEduWhereInput {
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
  school: SchoolWhereInput
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  major: MajorWhereInput
  grade: Int
  grade_not: Int
  grade_in: [Int!]
  grade_not_in: [Int!]
  grade_lt: Int
  grade_lte: Int
  grade_gt: Int
  grade_gte: Int
  className: String
  className_not: String
  className_in: [String!]
  className_not_in: [String!]
  className_lt: String
  className_lte: String
  className_gt: String
  className_gte: String
  className_contains: String
  className_not_contains: String
  className_starts_with: String
  className_not_starts_with: String
  className_ends_with: String
  className_not_ends_with: String
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
  AND: [SchoolEduWhereInput!]
  OR: [SchoolEduWhereInput!]
  NOT: [SchoolEduWhereInput!]
}

input SchoolEduWhereUniqueInput {
  id: ID
}

enum SchoolOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  kind_ASC
  kind_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolPreviousValues {
  id: ID!
  name: String
  kind: Educationkind
}

type SchoolSubscriptionPayload {
  mutation: MutationType!
  node: School
  updatedFields: [String!]
  previousValues: SchoolPreviousValues
}

input SchoolSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolWhereInput
  AND: [SchoolSubscriptionWhereInput!]
  OR: [SchoolSubscriptionWhereInput!]
  NOT: [SchoolSubscriptionWhereInput!]
}

input SchoolUpdateDataInput {
  name: String
  kind: Educationkind
  location: LocationUpdateOneWithoutSchoolsInput
}

input SchoolUpdateInput {
  name: String
  kind: Educationkind
  location: LocationUpdateOneWithoutSchoolsInput
}

input SchoolUpdateManyMutationInput {
  name: String
  kind: Educationkind
}

input SchoolUpdateManyWithoutLocationInput {
  create: [SchoolCreateWithoutLocationInput!]
  delete: [SchoolWhereUniqueInput!]
  connect: [SchoolWhereUniqueInput!]
  disconnect: [SchoolWhereUniqueInput!]
  update: [SchoolUpdateWithWhereUniqueWithoutLocationInput!]
  upsert: [SchoolUpsertWithWhereUniqueWithoutLocationInput!]
}

input SchoolUpdateOneInput {
  create: SchoolCreateInput
  update: SchoolUpdateDataInput
  upsert: SchoolUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SchoolWhereUniqueInput
}

input SchoolUpdateWithoutLocationDataInput {
  name: String
  kind: Educationkind
}

input SchoolUpdateWithWhereUniqueWithoutLocationInput {
  where: SchoolWhereUniqueInput!
  data: SchoolUpdateWithoutLocationDataInput!
}

input SchoolUpsertNestedInput {
  update: SchoolUpdateDataInput!
  create: SchoolCreateInput!
}

input SchoolUpsertWithWhereUniqueWithoutLocationInput {
  where: SchoolWhereUniqueInput!
  update: SchoolUpdateWithoutLocationDataInput!
  create: SchoolCreateWithoutLocationInput!
}

input SchoolWhereInput {
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
  kind: Educationkind
  kind_not: Educationkind
  kind_in: [Educationkind!]
  kind_not_in: [Educationkind!]
  location: LocationWhereInput
  AND: [SchoolWhereInput!]
  OR: [SchoolWhereInput!]
  NOT: [SchoolWhereInput!]
}

input SchoolWhereUniqueInput {
  id: ID
}

type Street {
  id: ID!
  code: String!
  name: String!
  Area: Area!
  villages(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Village!]
}

type StreetConnection {
  pageInfo: PageInfo!
  edges: [StreetEdge]!
  aggregate: AggregateStreet!
}

input StreetCreateInput {
  code: String!
  name: String!
  Area: AreaCreateOneWithoutTownsInput!
  villages: VillageCreateManyWithoutStreetInput
}

input StreetCreateManyWithoutAreaInput {
  create: [StreetCreateWithoutAreaInput!]
  connect: [StreetWhereUniqueInput!]
}

input StreetCreateOneInput {
  create: StreetCreateInput
  connect: StreetWhereUniqueInput
}

input StreetCreateOneWithoutVillagesInput {
  create: StreetCreateWithoutVillagesInput
  connect: StreetWhereUniqueInput
}

input StreetCreateWithoutAreaInput {
  code: String!
  name: String!
  villages: VillageCreateManyWithoutStreetInput
}

input StreetCreateWithoutVillagesInput {
  code: String!
  name: String!
  Area: AreaCreateOneWithoutTownsInput!
}

type StreetEdge {
  node: Street!
  cursor: String!
}

enum StreetOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StreetPreviousValues {
  id: ID!
  code: String!
  name: String!
}

type StreetSubscriptionPayload {
  mutation: MutationType!
  node: Street
  updatedFields: [String!]
  previousValues: StreetPreviousValues
}

input StreetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StreetWhereInput
  AND: [StreetSubscriptionWhereInput!]
  OR: [StreetSubscriptionWhereInput!]
  NOT: [StreetSubscriptionWhereInput!]
}

input StreetUpdateDataInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
  villages: VillageUpdateManyWithoutStreetInput
}

input StreetUpdateInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
  villages: VillageUpdateManyWithoutStreetInput
}

input StreetUpdateManyMutationInput {
  code: String
  name: String
}

input StreetUpdateManyWithoutAreaInput {
  create: [StreetCreateWithoutAreaInput!]
  delete: [StreetWhereUniqueInput!]
  connect: [StreetWhereUniqueInput!]
  disconnect: [StreetWhereUniqueInput!]
  update: [StreetUpdateWithWhereUniqueWithoutAreaInput!]
  upsert: [StreetUpsertWithWhereUniqueWithoutAreaInput!]
}

input StreetUpdateOneInput {
  create: StreetCreateInput
  update: StreetUpdateDataInput
  upsert: StreetUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: StreetWhereUniqueInput
}

input StreetUpdateOneRequiredWithoutVillagesInput {
  create: StreetCreateWithoutVillagesInput
  update: StreetUpdateWithoutVillagesDataInput
  upsert: StreetUpsertWithoutVillagesInput
  connect: StreetWhereUniqueInput
}

input StreetUpdateWithoutAreaDataInput {
  code: String
  name: String
  villages: VillageUpdateManyWithoutStreetInput
}

input StreetUpdateWithoutVillagesDataInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
}

input StreetUpdateWithWhereUniqueWithoutAreaInput {
  where: StreetWhereUniqueInput!
  data: StreetUpdateWithoutAreaDataInput!
}

input StreetUpsertNestedInput {
  update: StreetUpdateDataInput!
  create: StreetCreateInput!
}

input StreetUpsertWithoutVillagesInput {
  update: StreetUpdateWithoutVillagesDataInput!
  create: StreetCreateWithoutVillagesInput!
}

input StreetUpsertWithWhereUniqueWithoutAreaInput {
  where: StreetWhereUniqueInput!
  update: StreetUpdateWithoutAreaDataInput!
  create: StreetCreateWithoutAreaInput!
}

input StreetWhereInput {
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
  Area: AreaWhereInput
  villages_every: VillageWhereInput
  villages_some: VillageWhereInput
  villages_none: VillageWhereInput
  AND: [StreetWhereInput!]
  OR: [StreetWhereInput!]
  NOT: [StreetWhereInput!]
}

input StreetWhereUniqueInput {
  id: ID
  code: String
}

type Subscription {
  area(where: AreaSubscriptionWhereInput): AreaSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  classGroup(where: ClassGroupSubscriptionWhereInput): ClassGroupSubscriptionPayload
  classMate(where: ClassMateSubscriptionWhereInput): ClassMateSubscriptionPayload
  collegeEntranceExam(where: CollegeEntranceExamSubscriptionWhereInput): CollegeEntranceExamSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  family(where: FamilySubscriptionWhereInput): FamilySubscriptionPayload
  familyGroup(where: FamilyGroupSubscriptionWhereInput): FamilyGroupSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  logs(where: LogsSubscriptionWhereInput): LogsSubscriptionPayload
  major(where: MajorSubscriptionWhereInput): MajorSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  regStatus(where: RegStatusSubscriptionWhereInput): RegStatusSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  schoolEdu(where: SchoolEduSubscriptionWhereInput): SchoolEduSubscriptionPayload
  street(where: StreetSubscriptionWhereInput): StreetSubscriptionPayload
  university(where: UniversitySubscriptionWhereInput): UniversitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  village(where: VillageSubscriptionWhereInput): VillageSubscriptionPayload
  work(where: WorkSubscriptionWhereInput): WorkSubscriptionPayload
}

type University {
  id: ID!
  name: String!
  education: Educationkind!
  department: String
  location: String
  desc: String
}

type UniversityConnection {
  pageInfo: PageInfo!
  edges: [UniversityEdge]!
  aggregate: AggregateUniversity!
}

input UniversityCreateInput {
  name: String!
  education: Educationkind!
  department: String
  location: String
  desc: String
}

input UniversityCreateManyInput {
  create: [UniversityCreateInput!]
  connect: [UniversityWhereUniqueInput!]
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
  education_ASC
  education_DESC
  department_ASC
  department_DESC
  location_ASC
  location_DESC
  desc_ASC
  desc_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UniversityPreviousValues {
  id: ID!
  name: String!
  education: Educationkind!
  department: String
  location: String
  desc: String
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
  education: Educationkind
  department: String
  location: String
  desc: String
}

input UniversityUpdateInput {
  name: String
  education: Educationkind
  department: String
  location: String
  desc: String
}

input UniversityUpdateManyInput {
  create: [UniversityCreateInput!]
  update: [UniversityUpdateWithWhereUniqueNestedInput!]
  upsert: [UniversityUpsertWithWhereUniqueNestedInput!]
  delete: [UniversityWhereUniqueInput!]
  connect: [UniversityWhereUniqueInput!]
  disconnect: [UniversityWhereUniqueInput!]
}

input UniversityUpdateManyMutationInput {
  name: String
  education: Educationkind
  department: String
  location: String
  desc: String
}

input UniversityUpdateOneInput {
  create: UniversityCreateInput
  update: UniversityUpdateDataInput
  upsert: UniversityUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UniversityWhereUniqueInput
}

input UniversityUpdateWithWhereUniqueNestedInput {
  where: UniversityWhereUniqueInput!
  data: UniversityUpdateDataInput!
}

input UniversityUpsertNestedInput {
  update: UniversityUpdateDataInput!
  create: UniversityCreateInput!
}

input UniversityUpsertWithWhereUniqueNestedInput {
  where: UniversityWhereUniqueInput!
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
  education: Educationkind
  education_not: Educationkind
  education_in: [Educationkind!]
  education_not_in: [Educationkind!]
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  desc: String
  desc_not: String
  desc_in: [String!]
  desc_not_in: [String!]
  desc_lt: String
  desc_lte: String
  desc_gt: String
  desc_gte: String
  desc_contains: String
  desc_not_contains: String
  desc_starts_with: String
  desc_not_starts_with: String
  desc_ends_with: String
  desc_not_ends_with: String
  AND: [UniversityWhereInput!]
  OR: [UniversityWhereInput!]
  NOT: [UniversityWhereInput!]
}

input UniversityWhereUniqueInput {
  id: ID
  name: String
}

type User {
  id: ID!
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: Location
  uid: String!
  token: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
  regStatus: RegStatus
  regTimes: Int
  maxRegTimes: Int
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family!]
  studies(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolEdu!]
  works(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Work!]
  exam: CollegeEntranceExam
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  familyGroup: FamilyGroup
  creater: FamilyGroup
  classMate(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassMate!]
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
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFamilyGroupInput {
  create: [UserCreateWithoutFamilyGroupInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutStudiesInput {
  create: [UserCreateWithoutStudiesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutClassMateInput {
  create: UserCreateWithoutClassMateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreaterInput {
  create: UserCreateWithoutCreaterInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutExamInput {
  create: UserCreateWithoutExamInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFamiliesInput {
  create: UserCreateWithoutFamiliesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWorksInput {
  create: UserCreateWithoutWorksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutClassMateInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
}

input UserCreateWithoutCreaterInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutExamInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutFamiliesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutFamilyGroupInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutGroupsInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutMessagesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutPostsInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutRegStatusInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutStudiesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
}

input UserCreateWithoutWorksInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  messages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
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
  gender_ASC
  gender_DESC
  avatar_ASC
  avatar_DESC
  birthdaycalendar_ASC
  birthdaycalendar_DESC
  birthday_ASC
  birthday_DESC
  uid_ASC
  uid_DESC
  token_ASC
  token_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  regTimes_ASC
  regTimes_DESC
  maxRegTimes_ASC
  maxRegTimes_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  uid: String!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  regTimes: Int
  maxRegTimes: Int
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
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  uid: String
  token: String
  regTimes: Int
  maxRegTimes: Int
}

input UserUpdateManyWithoutFamilyGroupInput {
  create: [UserCreateWithoutFamilyGroupInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFamilyGroupInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFamilyGroupInput!]
}

input UserUpdateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupsInput!]
}

input UserUpdateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRegStatusInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRegStatusInput!]
}

input UserUpdateManyWithoutStudiesInput {
  create: [UserCreateWithoutStudiesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutStudiesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutStudiesInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutExamInput {
  create: UserCreateWithoutExamInput
  update: UserUpdateWithoutExamDataInput
  upsert: UserUpsertWithoutExamInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutFamiliesInput {
  create: UserCreateWithoutFamiliesInput
  update: UserUpdateWithoutFamiliesDataInput
  upsert: UserUpsertWithoutFamiliesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutClassMateInput {
  create: UserCreateWithoutClassMateInput
  update: UserUpdateWithoutClassMateDataInput
  upsert: UserUpsertWithoutClassMateInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreaterInput {
  create: UserCreateWithoutCreaterInput
  update: UserUpdateWithoutCreaterDataInput
  upsert: UserUpsertWithoutCreaterInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutWorksInput {
  create: UserCreateWithoutWorksInput
  update: UserUpdateWithoutWorksDataInput
  upsert: UserUpsertWithoutWorksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutClassMateDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
}

input UserUpdateWithoutCreaterDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutExamDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutFamiliesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutFamilyGroupDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutGroupsDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutMessagesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutRegStatusDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutStudiesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithoutWorksDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  messages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutFamilyGroupInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFamilyGroupDataInput!
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRegStatusDataInput!
}

input UserUpdateWithWhereUniqueWithoutStudiesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutStudiesDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutClassMateInput {
  update: UserUpdateWithoutClassMateDataInput!
  create: UserCreateWithoutClassMateInput!
}

input UserUpsertWithoutCreaterInput {
  update: UserUpdateWithoutCreaterDataInput!
  create: UserCreateWithoutCreaterInput!
}

input UserUpsertWithoutExamInput {
  update: UserUpdateWithoutExamDataInput!
  create: UserCreateWithoutExamInput!
}

input UserUpsertWithoutFamiliesInput {
  update: UserUpdateWithoutFamiliesDataInput!
  create: UserCreateWithoutFamiliesInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutWorksInput {
  update: UserUpdateWithoutWorksDataInput!
  create: UserCreateWithoutWorksInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutFamilyGroupInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFamilyGroupDataInput!
  create: UserCreateWithoutFamilyGroupInput!
}

input UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserUpsertWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRegStatusDataInput!
  create: UserCreateWithoutRegStatusInput!
}

input UserUpsertWithWhereUniqueWithoutStudiesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutStudiesDataInput!
  create: UserCreateWithoutStudiesInput!
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
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  birthdaycalendar: String
  birthdaycalendar_not: String
  birthdaycalendar_in: [String!]
  birthdaycalendar_not_in: [String!]
  birthdaycalendar_lt: String
  birthdaycalendar_lte: String
  birthdaycalendar_gt: String
  birthdaycalendar_gte: String
  birthdaycalendar_contains: String
  birthdaycalendar_not_contains: String
  birthdaycalendar_starts_with: String
  birthdaycalendar_not_starts_with: String
  birthdaycalendar_ends_with: String
  birthdaycalendar_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  birthplace: LocationWhereInput
  uid: String
  uid_not: String
  uid_in: [String!]
  uid_not_in: [String!]
  uid_lt: String
  uid_lte: String
  uid_gt: String
  uid_gte: String
  uid_contains: String
  uid_not_contains: String
  uid_starts_with: String
  uid_not_starts_with: String
  uid_ends_with: String
  uid_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
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
  regTimes: Int
  regTimes_not: Int
  regTimes_in: [Int!]
  regTimes_not_in: [Int!]
  regTimes_lt: Int
  regTimes_lte: Int
  regTimes_gt: Int
  regTimes_gte: Int
  maxRegTimes: Int
  maxRegTimes_not: Int
  maxRegTimes_in: [Int!]
  maxRegTimes_not_in: [Int!]
  maxRegTimes_lt: Int
  maxRegTimes_lte: Int
  maxRegTimes_gt: Int
  maxRegTimes_gte: Int
  families_every: FamilyWhereInput
  families_some: FamilyWhereInput
  families_none: FamilyWhereInput
  studies_every: SchoolEduWhereInput
  studies_some: SchoolEduWhereInput
  studies_none: SchoolEduWhereInput
  works_every: WorkWhereInput
  works_some: WorkWhereInput
  works_none: WorkWhereInput
  exam: CollegeEntranceExamWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  familyGroup: FamilyGroupWhereInput
  creater: FamilyGroupWhereInput
  classMate_every: ClassMateWhereInput
  classMate_some: ClassMateWhereInput
  classMate_none: ClassMateWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  uid: String
  token: String
}

type Village {
  id: ID!
  code: String!
  name: String!
  street: Street!
  people(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type VillageConnection {
  pageInfo: PageInfo!
  edges: [VillageEdge]!
  aggregate: AggregateVillage!
}

input VillageCreateInput {
  code: String!
  name: String!
  street: StreetCreateOneWithoutVillagesInput!
  people: UserCreateManyInput
}

input VillageCreateManyWithoutStreetInput {
  create: [VillageCreateWithoutStreetInput!]
  connect: [VillageWhereUniqueInput!]
}

input VillageCreateOneInput {
  create: VillageCreateInput
  connect: VillageWhereUniqueInput
}

input VillageCreateWithoutStreetInput {
  code: String!
  name: String!
  people: UserCreateManyInput
}

type VillageEdge {
  node: Village!
  cursor: String!
}

enum VillageOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VillagePreviousValues {
  id: ID!
  code: String!
  name: String!
}

type VillageSubscriptionPayload {
  mutation: MutationType!
  node: Village
  updatedFields: [String!]
  previousValues: VillagePreviousValues
}

input VillageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VillageWhereInput
  AND: [VillageSubscriptionWhereInput!]
  OR: [VillageSubscriptionWhereInput!]
  NOT: [VillageSubscriptionWhereInput!]
}

input VillageUpdateDataInput {
  code: String
  name: String
  street: StreetUpdateOneRequiredWithoutVillagesInput
  people: UserUpdateManyInput
}

input VillageUpdateInput {
  code: String
  name: String
  street: StreetUpdateOneRequiredWithoutVillagesInput
  people: UserUpdateManyInput
}

input VillageUpdateManyMutationInput {
  code: String
  name: String
}

input VillageUpdateManyWithoutStreetInput {
  create: [VillageCreateWithoutStreetInput!]
  delete: [VillageWhereUniqueInput!]
  connect: [VillageWhereUniqueInput!]
  disconnect: [VillageWhereUniqueInput!]
  update: [VillageUpdateWithWhereUniqueWithoutStreetInput!]
  upsert: [VillageUpsertWithWhereUniqueWithoutStreetInput!]
}

input VillageUpdateOneInput {
  create: VillageCreateInput
  update: VillageUpdateDataInput
  upsert: VillageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: VillageWhereUniqueInput
}

input VillageUpdateWithoutStreetDataInput {
  code: String
  name: String
  people: UserUpdateManyInput
}

input VillageUpdateWithWhereUniqueWithoutStreetInput {
  where: VillageWhereUniqueInput!
  data: VillageUpdateWithoutStreetDataInput!
}

input VillageUpsertNestedInput {
  update: VillageUpdateDataInput!
  create: VillageCreateInput!
}

input VillageUpsertWithWhereUniqueWithoutStreetInput {
  where: VillageWhereUniqueInput!
  update: VillageUpdateWithoutStreetDataInput!
  create: VillageCreateWithoutStreetInput!
}

input VillageWhereInput {
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
  street: StreetWhereInput
  people_every: UserWhereInput
  people_some: UserWhereInput
  people_none: UserWhereInput
  AND: [VillageWhereInput!]
  OR: [VillageWhereInput!]
  NOT: [VillageWhereInput!]
}

input VillageWhereUniqueInput {
  id: ID
  code: String
}

type Work {
  id: ID!
  startTime: DateTime
  endTime: DateTime
  company: Company
  department: String
  post: String
  jobContent: String
  worker: User
}

type WorkConnection {
  pageInfo: PageInfo!
  edges: [WorkEdge]!
  aggregate: AggregateWork!
}

input WorkCreateInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyCreateOneWithoutWorksInput
  department: String
  post: String
  jobContent: String
  worker: UserCreateOneWithoutWorksInput
}

input WorkCreateManyWithoutCompanyInput {
  create: [WorkCreateWithoutCompanyInput!]
  connect: [WorkWhereUniqueInput!]
}

input WorkCreateManyWithoutWorkerInput {
  create: [WorkCreateWithoutWorkerInput!]
  connect: [WorkWhereUniqueInput!]
}

input WorkCreateWithoutCompanyInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  post: String
  jobContent: String
  worker: UserCreateOneWithoutWorksInput
}

input WorkCreateWithoutWorkerInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyCreateOneWithoutWorksInput
  department: String
  post: String
  jobContent: String
}

type WorkEdge {
  node: Work!
  cursor: String!
}

enum WorkOrderByInput {
  id_ASC
  id_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  department_ASC
  department_DESC
  post_ASC
  post_DESC
  jobContent_ASC
  jobContent_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkPreviousValues {
  id: ID!
  startTime: DateTime
  endTime: DateTime
  department: String
  post: String
  jobContent: String
}

type WorkSubscriptionPayload {
  mutation: MutationType!
  node: Work
  updatedFields: [String!]
  previousValues: WorkPreviousValues
}

input WorkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkWhereInput
  AND: [WorkSubscriptionWhereInput!]
  OR: [WorkSubscriptionWhereInput!]
  NOT: [WorkSubscriptionWhereInput!]
}

input WorkUpdateInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyUpdateOneWithoutWorksInput
  department: String
  post: String
  jobContent: String
  worker: UserUpdateOneWithoutWorksInput
}

input WorkUpdateManyMutationInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  post: String
  jobContent: String
}

input WorkUpdateManyWithoutCompanyInput {
  create: [WorkCreateWithoutCompanyInput!]
  delete: [WorkWhereUniqueInput!]
  connect: [WorkWhereUniqueInput!]
  disconnect: [WorkWhereUniqueInput!]
  update: [WorkUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [WorkUpsertWithWhereUniqueWithoutCompanyInput!]
}

input WorkUpdateManyWithoutWorkerInput {
  create: [WorkCreateWithoutWorkerInput!]
  delete: [WorkWhereUniqueInput!]
  connect: [WorkWhereUniqueInput!]
  disconnect: [WorkWhereUniqueInput!]
  update: [WorkUpdateWithWhereUniqueWithoutWorkerInput!]
  upsert: [WorkUpsertWithWhereUniqueWithoutWorkerInput!]
}

input WorkUpdateWithoutCompanyDataInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  post: String
  jobContent: String
  worker: UserUpdateOneWithoutWorksInput
}

input WorkUpdateWithoutWorkerDataInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyUpdateOneWithoutWorksInput
  department: String
  post: String
  jobContent: String
}

input WorkUpdateWithWhereUniqueWithoutCompanyInput {
  where: WorkWhereUniqueInput!
  data: WorkUpdateWithoutCompanyDataInput!
}

input WorkUpdateWithWhereUniqueWithoutWorkerInput {
  where: WorkWhereUniqueInput!
  data: WorkUpdateWithoutWorkerDataInput!
}

input WorkUpsertWithWhereUniqueWithoutCompanyInput {
  where: WorkWhereUniqueInput!
  update: WorkUpdateWithoutCompanyDataInput!
  create: WorkCreateWithoutCompanyInput!
}

input WorkUpsertWithWhereUniqueWithoutWorkerInput {
  where: WorkWhereUniqueInput!
  update: WorkUpdateWithoutWorkerDataInput!
  create: WorkCreateWithoutWorkerInput!
}

input WorkWhereInput {
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
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  company: CompanyWhereInput
  department: String
  department_not: String
  department_in: [String!]
  department_not_in: [String!]
  department_lt: String
  department_lte: String
  department_gt: String
  department_gte: String
  department_contains: String
  department_not_contains: String
  department_starts_with: String
  department_not_starts_with: String
  department_ends_with: String
  department_not_ends_with: String
  post: String
  post_not: String
  post_in: [String!]
  post_not_in: [String!]
  post_lt: String
  post_lte: String
  post_gt: String
  post_gte: String
  post_contains: String
  post_not_contains: String
  post_starts_with: String
  post_not_starts_with: String
  post_ends_with: String
  post_not_ends_with: String
  jobContent: String
  jobContent_not: String
  jobContent_in: [String!]
  jobContent_not_in: [String!]
  jobContent_lt: String
  jobContent_lte: String
  jobContent_gt: String
  jobContent_gte: String
  jobContent_contains: String
  jobContent_not_contains: String
  jobContent_starts_with: String
  jobContent_not_starts_with: String
  jobContent_ends_with: String
  jobContent_not_ends_with: String
  worker: UserWhereInput
  AND: [WorkWhereInput!]
  OR: [WorkWhereInput!]
  NOT: [WorkWhereInput!]
}

input WorkWhereUniqueInput {
  id: ID
}
`
      }
    