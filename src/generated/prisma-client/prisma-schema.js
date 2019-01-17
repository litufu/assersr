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

type AggregateClassGroupMessage {
  count: Int!
}

type AggregateClassMate {
  count: Int!
}

type AggregateColleague {
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

type AggregateFamilyGroupMessage {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateLocationGroup {
  count: Int!
}

type AggregateLocationGroupMessage {
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

type AggregateOldColleague {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregatePhoto {
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

type AggregateRegStatusMessage {
  count: Int!
}

type AggregateSchool {
  count: Int!
}

type AggregateSchoolEdu {
  count: Int!
}

type AggregateStation {
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

type AggregateWorkGroup {
  count: Int!
}

type AggregateWorkGroupMessage {
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

input AreaScalarWhereInput {
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
  AND: [AreaScalarWhereInput!]
  OR: [AreaScalarWhereInput!]
  NOT: [AreaScalarWhereInput!]
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

input AreaUpdateManyDataInput {
  code: String
  name: String
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
  deleteMany: [AreaScalarWhereInput!]
  updateMany: [AreaUpdateManyWithWhereNestedInput!]
}

input AreaUpdateManyWithWhereNestedInput {
  where: AreaScalarWhereInput!
  data: AreaUpdateManyDataInput!
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

input CityScalarWhereInput {
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
  AND: [CityScalarWhereInput!]
  OR: [CityScalarWhereInput!]
  NOT: [CityScalarWhereInput!]
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

input CityUpdateManyDataInput {
  code: String
  name: String
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
  deleteMany: [CityScalarWhereInput!]
  updateMany: [CityUpdateManyWithWhereNestedInput!]
}

input CityUpdateManyWithWhereNestedInput {
  where: CityScalarWhereInput!
  data: CityUpdateManyDataInput!
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
  messages(where: ClassGroupMessageWhereInput, orderBy: ClassGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassGroupMessage!]
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
  messages: ClassGroupMessageCreateManyWithoutToInput
}

input ClassGroupCreateOneWithoutMembersInput {
  create: ClassGroupCreateWithoutMembersInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupCreateOneWithoutMessagesInput {
  create: ClassGroupCreateWithoutMessagesInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupCreateWithoutMembersInput {
  study: SchoolEduCreateOneInput
  name: String
  messages: ClassGroupMessageCreateManyWithoutToInput
}

input ClassGroupCreateWithoutMessagesInput {
  study: SchoolEduCreateOneInput
  name: String
  members: ClassMateCreateManyWithoutGroupInput
}

type ClassGroupEdge {
  node: ClassGroup!
  cursor: String!
}

type ClassGroupMessage {
  id: ID!
  to: ClassGroup!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type ClassGroupMessageConnection {
  pageInfo: PageInfo!
  edges: [ClassGroupMessageEdge]!
  aggregate: AggregateClassGroupMessage!
}

input ClassGroupMessageCreateInput {
  to: ClassGroupCreateOneWithoutMessagesInput!
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

input ClassGroupMessageCreateManyWithoutToInput {
  create: [ClassGroupMessageCreateWithoutToInput!]
  connect: [ClassGroupMessageWhereUniqueInput!]
}

input ClassGroupMessageCreateWithoutToInput {
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

type ClassGroupMessageEdge {
  node: ClassGroupMessage!
  cursor: String!
}

enum ClassGroupMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassGroupMessagePreviousValues {
  id: ID!
  text: String
  createdAt: DateTime!
}

input ClassGroupMessageScalarWhereInput {
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
  AND: [ClassGroupMessageScalarWhereInput!]
  OR: [ClassGroupMessageScalarWhereInput!]
  NOT: [ClassGroupMessageScalarWhereInput!]
}

type ClassGroupMessageSubscriptionPayload {
  mutation: MutationType!
  node: ClassGroupMessage
  updatedFields: [String!]
  previousValues: ClassGroupMessagePreviousValues
}

input ClassGroupMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassGroupMessageWhereInput
  AND: [ClassGroupMessageSubscriptionWhereInput!]
  OR: [ClassGroupMessageSubscriptionWhereInput!]
  NOT: [ClassGroupMessageSubscriptionWhereInput!]
}

input ClassGroupMessageUpdateInput {
  to: ClassGroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input ClassGroupMessageUpdateManyDataInput {
  text: String
}

input ClassGroupMessageUpdateManyMutationInput {
  text: String
}

input ClassGroupMessageUpdateManyWithoutToInput {
  create: [ClassGroupMessageCreateWithoutToInput!]
  delete: [ClassGroupMessageWhereUniqueInput!]
  connect: [ClassGroupMessageWhereUniqueInput!]
  disconnect: [ClassGroupMessageWhereUniqueInput!]
  update: [ClassGroupMessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [ClassGroupMessageUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [ClassGroupMessageScalarWhereInput!]
  updateMany: [ClassGroupMessageUpdateManyWithWhereNestedInput!]
}

input ClassGroupMessageUpdateManyWithWhereNestedInput {
  where: ClassGroupMessageScalarWhereInput!
  data: ClassGroupMessageUpdateManyDataInput!
}

input ClassGroupMessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input ClassGroupMessageUpdateWithWhereUniqueWithoutToInput {
  where: ClassGroupMessageWhereUniqueInput!
  data: ClassGroupMessageUpdateWithoutToDataInput!
}

input ClassGroupMessageUpsertWithWhereUniqueWithoutToInput {
  where: ClassGroupMessageWhereUniqueInput!
  update: ClassGroupMessageUpdateWithoutToDataInput!
  create: ClassGroupMessageCreateWithoutToInput!
}

input ClassGroupMessageWhereInput {
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
  to: ClassGroupWhereInput
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
  image: PhotoWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ClassGroupMessageWhereInput!]
  OR: [ClassGroupMessageWhereInput!]
  NOT: [ClassGroupMessageWhereInput!]
}

input ClassGroupMessageWhereUniqueInput {
  id: ID
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
  messages: ClassGroupMessageUpdateManyWithoutToInput
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

input ClassGroupUpdateOneRequiredWithoutMessagesInput {
  create: ClassGroupCreateWithoutMessagesInput
  update: ClassGroupUpdateWithoutMessagesDataInput
  upsert: ClassGroupUpsertWithoutMessagesInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupUpdateWithoutMembersDataInput {
  study: SchoolEduUpdateOneInput
  name: String
  messages: ClassGroupMessageUpdateManyWithoutToInput
}

input ClassGroupUpdateWithoutMessagesDataInput {
  study: SchoolEduUpdateOneInput
  name: String
  members: ClassMateUpdateManyWithoutGroupInput
}

input ClassGroupUpsertWithoutMembersInput {
  update: ClassGroupUpdateWithoutMembersDataInput!
  create: ClassGroupCreateWithoutMembersInput!
}

input ClassGroupUpsertWithoutMessagesInput {
  update: ClassGroupUpdateWithoutMessagesDataInput!
  create: ClassGroupCreateWithoutMessagesInput!
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
  messages_every: ClassGroupMessageWhereInput
  messages_some: ClassGroupMessageWhereInput
  messages_none: ClassGroupMessageWhereInput
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

input ClassMateScalarWhereInput {
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
  AND: [ClassMateScalarWhereInput!]
  OR: [ClassMateScalarWhereInput!]
  NOT: [ClassMateScalarWhereInput!]
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

input ClassMateUpdateManyDataInput {
  status: String
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
  deleteMany: [ClassMateScalarWhereInput!]
  updateMany: [ClassMateUpdateManyWithWhereNestedInput!]
}

input ClassMateUpdateManyWithoutStudentInput {
  create: [ClassMateCreateWithoutStudentInput!]
  delete: [ClassMateWhereUniqueInput!]
  connect: [ClassMateWhereUniqueInput!]
  disconnect: [ClassMateWhereUniqueInput!]
  update: [ClassMateUpdateWithWhereUniqueWithoutStudentInput!]
  upsert: [ClassMateUpsertWithWhereUniqueWithoutStudentInput!]
  deleteMany: [ClassMateScalarWhereInput!]
  updateMany: [ClassMateUpdateManyWithWhereNestedInput!]
}

input ClassMateUpdateManyWithWhereNestedInput {
  where: ClassMateScalarWhereInput!
  data: ClassMateUpdateManyDataInput!
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

type Colleague {
  id: ID!
  worker: User
  status: String!
  group: WorkGroup
}

type ColleagueConnection {
  pageInfo: PageInfo!
  edges: [ColleagueEdge]!
  aggregate: AggregateColleague!
}

input ColleagueCreateInput {
  worker: UserCreateOneWithoutColleaguesInput
  status: String!
  group: WorkGroupCreateOneWithoutColleaguesInput
}

input ColleagueCreateManyWithoutGroupInput {
  create: [ColleagueCreateWithoutGroupInput!]
  connect: [ColleagueWhereUniqueInput!]
}

input ColleagueCreateManyWithoutWorkerInput {
  create: [ColleagueCreateWithoutWorkerInput!]
  connect: [ColleagueWhereUniqueInput!]
}

input ColleagueCreateWithoutGroupInput {
  worker: UserCreateOneWithoutColleaguesInput
  status: String!
}

input ColleagueCreateWithoutWorkerInput {
  status: String!
  group: WorkGroupCreateOneWithoutColleaguesInput
}

type ColleagueEdge {
  node: Colleague!
  cursor: String!
}

enum ColleagueOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ColleaguePreviousValues {
  id: ID!
  status: String!
}

input ColleagueScalarWhereInput {
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
  AND: [ColleagueScalarWhereInput!]
  OR: [ColleagueScalarWhereInput!]
  NOT: [ColleagueScalarWhereInput!]
}

type ColleagueSubscriptionPayload {
  mutation: MutationType!
  node: Colleague
  updatedFields: [String!]
  previousValues: ColleaguePreviousValues
}

input ColleagueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ColleagueWhereInput
  AND: [ColleagueSubscriptionWhereInput!]
  OR: [ColleagueSubscriptionWhereInput!]
  NOT: [ColleagueSubscriptionWhereInput!]
}

input ColleagueUpdateInput {
  worker: UserUpdateOneWithoutColleaguesInput
  status: String
  group: WorkGroupUpdateOneWithoutColleaguesInput
}

input ColleagueUpdateManyDataInput {
  status: String
}

input ColleagueUpdateManyMutationInput {
  status: String
}

input ColleagueUpdateManyWithoutGroupInput {
  create: [ColleagueCreateWithoutGroupInput!]
  delete: [ColleagueWhereUniqueInput!]
  connect: [ColleagueWhereUniqueInput!]
  disconnect: [ColleagueWhereUniqueInput!]
  update: [ColleagueUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ColleagueUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [ColleagueScalarWhereInput!]
  updateMany: [ColleagueUpdateManyWithWhereNestedInput!]
}

input ColleagueUpdateManyWithoutWorkerInput {
  create: [ColleagueCreateWithoutWorkerInput!]
  delete: [ColleagueWhereUniqueInput!]
  connect: [ColleagueWhereUniqueInput!]
  disconnect: [ColleagueWhereUniqueInput!]
  update: [ColleagueUpdateWithWhereUniqueWithoutWorkerInput!]
  upsert: [ColleagueUpsertWithWhereUniqueWithoutWorkerInput!]
  deleteMany: [ColleagueScalarWhereInput!]
  updateMany: [ColleagueUpdateManyWithWhereNestedInput!]
}

input ColleagueUpdateManyWithWhereNestedInput {
  where: ColleagueScalarWhereInput!
  data: ColleagueUpdateManyDataInput!
}

input ColleagueUpdateWithoutGroupDataInput {
  worker: UserUpdateOneWithoutColleaguesInput
  status: String
}

input ColleagueUpdateWithoutWorkerDataInput {
  status: String
  group: WorkGroupUpdateOneWithoutColleaguesInput
}

input ColleagueUpdateWithWhereUniqueWithoutGroupInput {
  where: ColleagueWhereUniqueInput!
  data: ColleagueUpdateWithoutGroupDataInput!
}

input ColleagueUpdateWithWhereUniqueWithoutWorkerInput {
  where: ColleagueWhereUniqueInput!
  data: ColleagueUpdateWithoutWorkerDataInput!
}

input ColleagueUpsertWithWhereUniqueWithoutGroupInput {
  where: ColleagueWhereUniqueInput!
  update: ColleagueUpdateWithoutGroupDataInput!
  create: ColleagueCreateWithoutGroupInput!
}

input ColleagueUpsertWithWhereUniqueWithoutWorkerInput {
  where: ColleagueWhereUniqueInput!
  update: ColleagueUpdateWithoutWorkerDataInput!
  create: ColleagueCreateWithoutWorkerInput!
}

input ColleagueWhereInput {
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
  worker: UserWhereInput
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
  group: WorkGroupWhereInput
  AND: [ColleagueWhereInput!]
  OR: [ColleagueWhereInput!]
  NOT: [ColleagueWhereInput!]
}

input ColleagueWhereUniqueInput {
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
  workGroup: WorkGroup
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
  workGroup: WorkGroupCreateOneWithoutCompanyInput
}

input CompanyCreateManyWithoutLocationInput {
  create: [CompanyCreateWithoutLocationInput!]
  connect: [CompanyWhereUniqueInput!]
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutWorkGroupInput {
  create: CompanyCreateWithoutWorkGroupInput
  connect: CompanyWhereUniqueInput
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
  workGroup: WorkGroupCreateOneWithoutCompanyInput
}

input CompanyCreateWithoutWorkGroupInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationCreateOneWithoutCompaniesInput
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
  workGroup: WorkGroupCreateOneWithoutCompanyInput
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

input CompanyScalarWhereInput {
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
  AND: [CompanyScalarWhereInput!]
  OR: [CompanyScalarWhereInput!]
  NOT: [CompanyScalarWhereInput!]
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

input CompanyUpdateDataInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationUpdateOneWithoutCompaniesInput
  BusinessScope: String
  works: WorkUpdateManyWithoutCompanyInput
  workGroup: WorkGroupUpdateOneWithoutCompanyInput
}

input CompanyUpdateInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationUpdateOneWithoutCompaniesInput
  BusinessScope: String
  works: WorkUpdateManyWithoutCompanyInput
  workGroup: WorkGroupUpdateOneWithoutCompanyInput
}

input CompanyUpdateManyDataInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  BusinessScope: String
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
  deleteMany: [CompanyScalarWhereInput!]
  updateMany: [CompanyUpdateManyWithWhereNestedInput!]
}

input CompanyUpdateManyWithWhereNestedInput {
  where: CompanyScalarWhereInput!
  data: CompanyUpdateManyDataInput!
}

input CompanyUpdateOneInput {
  create: CompanyCreateInput
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CompanyWhereUniqueInput
}

input CompanyUpdateOneWithoutWorkGroupInput {
  create: CompanyCreateWithoutWorkGroupInput
  update: CompanyUpdateWithoutWorkGroupDataInput
  upsert: CompanyUpsertWithoutWorkGroupInput
  delete: Boolean
  disconnect: Boolean
  connect: CompanyWhereUniqueInput
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
  workGroup: WorkGroupUpdateOneWithoutCompanyInput
}

input CompanyUpdateWithoutWorkGroupDataInput {
  name: String
  code: String
  establishmentDate: DateTime
  representative: String
  location: LocationUpdateOneWithoutCompaniesInput
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
  workGroup: WorkGroupUpdateOneWithoutCompanyInput
}

input CompanyUpdateWithWhereUniqueWithoutLocationInput {
  where: CompanyWhereUniqueInput!
  data: CompanyUpdateWithoutLocationDataInput!
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyUpsertWithoutWorkGroupInput {
  update: CompanyUpdateWithoutWorkGroupDataInput!
  create: CompanyCreateWithoutWorkGroupInput!
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
  workGroup: WorkGroupWhereInput
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
  messages(where: FamilyGroupMessageWhereInput, orderBy: FamilyGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FamilyGroupMessage!]
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
  messages: FamilyGroupMessageCreateManyWithoutToInput
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

input FamilyGroupCreateOneWithoutMessagesInput {
  create: FamilyGroupCreateWithoutMessagesInput
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
  messages: FamilyGroupMessageCreateManyWithoutToInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutFatherInput {
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: FamilyGroupMessageCreateManyWithoutToInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutMessagesInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutMotherInput {
  father: PersonCreateOneWithoutAsFatherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: FamilyGroupMessageCreateManyWithoutToInput
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutUsersInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
  messages: FamilyGroupMessageCreateManyWithoutToInput
}

type FamilyGroupEdge {
  node: FamilyGroup!
  cursor: String!
}

type FamilyGroupMessage {
  id: ID!
  to: FamilyGroup!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type FamilyGroupMessageConnection {
  pageInfo: PageInfo!
  edges: [FamilyGroupMessageEdge]!
  aggregate: AggregateFamilyGroupMessage!
}

input FamilyGroupMessageCreateInput {
  to: FamilyGroupCreateOneWithoutMessagesInput!
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

input FamilyGroupMessageCreateManyWithoutToInput {
  create: [FamilyGroupMessageCreateWithoutToInput!]
  connect: [FamilyGroupMessageWhereUniqueInput!]
}

input FamilyGroupMessageCreateWithoutToInput {
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

type FamilyGroupMessageEdge {
  node: FamilyGroupMessage!
  cursor: String!
}

enum FamilyGroupMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FamilyGroupMessagePreviousValues {
  id: ID!
  text: String
  createdAt: DateTime!
}

input FamilyGroupMessageScalarWhereInput {
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
  AND: [FamilyGroupMessageScalarWhereInput!]
  OR: [FamilyGroupMessageScalarWhereInput!]
  NOT: [FamilyGroupMessageScalarWhereInput!]
}

type FamilyGroupMessageSubscriptionPayload {
  mutation: MutationType!
  node: FamilyGroupMessage
  updatedFields: [String!]
  previousValues: FamilyGroupMessagePreviousValues
}

input FamilyGroupMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FamilyGroupMessageWhereInput
  AND: [FamilyGroupMessageSubscriptionWhereInput!]
  OR: [FamilyGroupMessageSubscriptionWhereInput!]
  NOT: [FamilyGroupMessageSubscriptionWhereInput!]
}

input FamilyGroupMessageUpdateInput {
  to: FamilyGroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input FamilyGroupMessageUpdateManyDataInput {
  text: String
}

input FamilyGroupMessageUpdateManyMutationInput {
  text: String
}

input FamilyGroupMessageUpdateManyWithoutToInput {
  create: [FamilyGroupMessageCreateWithoutToInput!]
  delete: [FamilyGroupMessageWhereUniqueInput!]
  connect: [FamilyGroupMessageWhereUniqueInput!]
  disconnect: [FamilyGroupMessageWhereUniqueInput!]
  update: [FamilyGroupMessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [FamilyGroupMessageUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [FamilyGroupMessageScalarWhereInput!]
  updateMany: [FamilyGroupMessageUpdateManyWithWhereNestedInput!]
}

input FamilyGroupMessageUpdateManyWithWhereNestedInput {
  where: FamilyGroupMessageScalarWhereInput!
  data: FamilyGroupMessageUpdateManyDataInput!
}

input FamilyGroupMessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input FamilyGroupMessageUpdateWithWhereUniqueWithoutToInput {
  where: FamilyGroupMessageWhereUniqueInput!
  data: FamilyGroupMessageUpdateWithoutToDataInput!
}

input FamilyGroupMessageUpsertWithWhereUniqueWithoutToInput {
  where: FamilyGroupMessageWhereUniqueInput!
  update: FamilyGroupMessageUpdateWithoutToDataInput!
  create: FamilyGroupMessageCreateWithoutToInput!
}

input FamilyGroupMessageWhereInput {
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
  to: FamilyGroupWhereInput
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
  image: PhotoWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [FamilyGroupMessageWhereInput!]
  OR: [FamilyGroupMessageWhereInput!]
  NOT: [FamilyGroupMessageWhereInput!]
}

input FamilyGroupMessageWhereUniqueInput {
  id: ID
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

input FamilyGroupScalarWhereInput {
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
  AND: [FamilyGroupScalarWhereInput!]
  OR: [FamilyGroupScalarWhereInput!]
  NOT: [FamilyGroupScalarWhereInput!]
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
  messages: FamilyGroupMessageUpdateManyWithoutToInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateManyDataInput {
  name: String
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
  deleteMany: [FamilyGroupScalarWhereInput!]
  updateMany: [FamilyGroupUpdateManyWithWhereNestedInput!]
}

input FamilyGroupUpdateManyWithoutMotherInput {
  create: [FamilyGroupCreateWithoutMotherInput!]
  delete: [FamilyGroupWhereUniqueInput!]
  connect: [FamilyGroupWhereUniqueInput!]
  disconnect: [FamilyGroupWhereUniqueInput!]
  update: [FamilyGroupUpdateWithWhereUniqueWithoutMotherInput!]
  upsert: [FamilyGroupUpsertWithWhereUniqueWithoutMotherInput!]
  deleteMany: [FamilyGroupScalarWhereInput!]
  updateMany: [FamilyGroupUpdateManyWithWhereNestedInput!]
}

input FamilyGroupUpdateManyWithWhereNestedInput {
  where: FamilyGroupScalarWhereInput!
  data: FamilyGroupUpdateManyDataInput!
}

input FamilyGroupUpdateOneRequiredWithoutMessagesInput {
  create: FamilyGroupCreateWithoutMessagesInput
  update: FamilyGroupUpdateWithoutMessagesDataInput
  upsert: FamilyGroupUpsertWithoutMessagesInput
  connect: FamilyGroupWhereUniqueInput
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
  messages: FamilyGroupMessageUpdateManyWithoutToInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutFatherDataInput {
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: FamilyGroupMessageUpdateManyWithoutToInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutMessagesDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutMotherDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: FamilyGroupMessageUpdateManyWithoutToInput
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutUsersDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
  messages: FamilyGroupMessageUpdateManyWithoutToInput
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

input FamilyGroupUpsertWithoutMessagesInput {
  update: FamilyGroupUpdateWithoutMessagesDataInput!
  create: FamilyGroupCreateWithoutMessagesInput!
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
  messages_every: FamilyGroupMessageWhereInput
  messages_some: FamilyGroupMessageWhereInput
  messages_none: FamilyGroupMessageWhereInput
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

input FamilyScalarWhereInput {
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
  AND: [FamilyScalarWhereInput!]
  OR: [FamilyScalarWhereInput!]
  NOT: [FamilyScalarWhereInput!]
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

input FamilyUpdateManyDataInput {
  relationship: String
  status: String
}

input FamilyUpdateManyInput {
  create: [FamilyCreateInput!]
  update: [FamilyUpdateWithWhereUniqueNestedInput!]
  upsert: [FamilyUpsertWithWhereUniqueNestedInput!]
  delete: [FamilyWhereUniqueInput!]
  connect: [FamilyWhereUniqueInput!]
  disconnect: [FamilyWhereUniqueInput!]
  deleteMany: [FamilyScalarWhereInput!]
  updateMany: [FamilyUpdateManyWithWhereNestedInput!]
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
  deleteMany: [FamilyScalarWhereInput!]
  updateMany: [FamilyUpdateManyWithWhereNestedInput!]
}

input FamilyUpdateManyWithoutToInput {
  create: [FamilyCreateWithoutToInput!]
  delete: [FamilyWhereUniqueInput!]
  connect: [FamilyWhereUniqueInput!]
  disconnect: [FamilyWhereUniqueInput!]
  update: [FamilyUpdateWithWhereUniqueWithoutToInput!]
  upsert: [FamilyUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [FamilyScalarWhereInput!]
  updateMany: [FamilyUpdateManyWithWhereNestedInput!]
}

input FamilyUpdateManyWithWhereNestedInput {
  where: FamilyScalarWhereInput!
  data: FamilyUpdateManyDataInput!
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
  name: String
  users: UserCreateManyWithoutGroupsInput
  messages: MessageCreateManyInput
}

input GroupCreateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateWithoutUsersInput {
  type: GroupKind
  name: String
  messages: MessageCreateManyInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupKind {
  Family
  ClassMate
  Colleague
  FellowTownsman
  SameCity
  SameOccupation
  SameDisease
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
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
  name: String
}

input GroupScalarWhereInput {
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
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
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
  name: String
  users: UserUpdateManyWithoutGroupsInput
  messages: MessageUpdateManyInput
}

input GroupUpdateManyDataInput {
  type: GroupKind
  name: String
}

input GroupUpdateManyMutationInput {
  type: GroupKind
  name: String
}

input GroupUpdateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateWithoutUsersDataInput {
  type: GroupKind
  name: String
  messages: MessageUpdateManyInput
}

input GroupUpdateWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUsersDataInput!
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
  borns(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  lives(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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
  borns: UserCreateManyWithoutBirthplaceInput
  lives: UserCreateManyWithoutResidenceInput
}

input LocationCreateOneWithoutBornsInput {
  create: LocationCreateWithoutBornsInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutCompaniesInput {
  create: LocationCreateWithoutCompaniesInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutLivesInput {
  create: LocationCreateWithoutLivesInput
  connect: LocationWhereUniqueInput
}

input LocationCreateOneWithoutSchoolsInput {
  create: LocationCreateWithoutSchoolsInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutBornsInput {
  name: String
  province: ProvinceCreateOneInput
  city: CityCreateOneInput
  area: AreaCreateOneInput
  street: StreetCreateOneInput
  village: VillageCreateOneInput
  schools: SchoolCreateManyWithoutLocationInput
  companies: CompanyCreateManyWithoutLocationInput
  universities: UniversityCreateManyInput
  lives: UserCreateManyWithoutResidenceInput
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
  borns: UserCreateManyWithoutBirthplaceInput
  lives: UserCreateManyWithoutResidenceInput
}

input LocationCreateWithoutLivesInput {
  name: String
  province: ProvinceCreateOneInput
  city: CityCreateOneInput
  area: AreaCreateOneInput
  street: StreetCreateOneInput
  village: VillageCreateOneInput
  schools: SchoolCreateManyWithoutLocationInput
  companies: CompanyCreateManyWithoutLocationInput
  universities: UniversityCreateManyInput
  borns: UserCreateManyWithoutBirthplaceInput
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
  borns: UserCreateManyWithoutBirthplaceInput
  lives: UserCreateManyWithoutResidenceInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

type LocationGroup {
  id: ID!
  kind: LocationGroupKind
  code: String
  name: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type LocationGroupConnection {
  pageInfo: PageInfo!
  edges: [LocationGroupEdge]!
  aggregate: AggregateLocationGroup!
}

input LocationGroupCreateInput {
  kind: LocationGroupKind
  code: String
  name: String
  users: UserCreateManyWithoutLocationGroupsInput
  messages: MessageCreateManyInput
}

input LocationGroupCreateManyWithoutUsersInput {
  create: [LocationGroupCreateWithoutUsersInput!]
  connect: [LocationGroupWhereUniqueInput!]
}

input LocationGroupCreateOneInput {
  create: LocationGroupCreateInput
  connect: LocationGroupWhereUniqueInput
}

input LocationGroupCreateWithoutUsersInput {
  kind: LocationGroupKind
  code: String
  name: String
  messages: MessageCreateManyInput
}

type LocationGroupEdge {
  node: LocationGroup!
  cursor: String!
}

enum LocationGroupKind {
  HomeVillage
  ResidenceVillage
  VillageInResidenceVillage
  StreetInResidenceVillage
  AreaInResidenceVillage
  CityInResidenceVillage
  ProvinceInResidenceVillage
  VillageInResidenceStreet
  StreetInResidenceStreet
  AreaInResidenceStreet
  CityInResidenceStreet
  ProvinceInResidenceStreet
  VillageInResidenceArea
  StreetInResidenceArea
  AreaInResidenceArea
  CityInResidenceArea
  ProvinceInResidenceArea
  VillageInResidenceCity
  StreetInResidenceCity
  AreaInResidenceCity
  CityInResidenceCity
  ProvinceInResidenceCity
}

type LocationGroupMessage {
  id: ID!
  to: LocationGroup!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type LocationGroupMessageConnection {
  pageInfo: PageInfo!
  edges: [LocationGroupMessageEdge]!
  aggregate: AggregateLocationGroupMessage!
}

input LocationGroupMessageCreateInput {
  to: LocationGroupCreateOneInput!
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

type LocationGroupMessageEdge {
  node: LocationGroupMessage!
  cursor: String!
}

enum LocationGroupMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationGroupMessagePreviousValues {
  id: ID!
  text: String
  createdAt: DateTime!
}

type LocationGroupMessageSubscriptionPayload {
  mutation: MutationType!
  node: LocationGroupMessage
  updatedFields: [String!]
  previousValues: LocationGroupMessagePreviousValues
}

input LocationGroupMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationGroupMessageWhereInput
  AND: [LocationGroupMessageSubscriptionWhereInput!]
  OR: [LocationGroupMessageSubscriptionWhereInput!]
  NOT: [LocationGroupMessageSubscriptionWhereInput!]
}

input LocationGroupMessageUpdateInput {
  to: LocationGroupUpdateOneRequiredInput
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input LocationGroupMessageUpdateManyMutationInput {
  text: String
}

input LocationGroupMessageWhereInput {
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
  to: LocationGroupWhereInput
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
  image: PhotoWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [LocationGroupMessageWhereInput!]
  OR: [LocationGroupMessageWhereInput!]
  NOT: [LocationGroupMessageWhereInput!]
}

input LocationGroupMessageWhereUniqueInput {
  id: ID
}

enum LocationGroupOrderByInput {
  id_ASC
  id_DESC
  kind_ASC
  kind_DESC
  code_ASC
  code_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationGroupPreviousValues {
  id: ID!
  kind: LocationGroupKind
  code: String
  name: String
}

input LocationGroupScalarWhereInput {
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
  kind: LocationGroupKind
  kind_not: LocationGroupKind
  kind_in: [LocationGroupKind!]
  kind_not_in: [LocationGroupKind!]
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
  AND: [LocationGroupScalarWhereInput!]
  OR: [LocationGroupScalarWhereInput!]
  NOT: [LocationGroupScalarWhereInput!]
}

type LocationGroupSubscriptionPayload {
  mutation: MutationType!
  node: LocationGroup
  updatedFields: [String!]
  previousValues: LocationGroupPreviousValues
}

input LocationGroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationGroupWhereInput
  AND: [LocationGroupSubscriptionWhereInput!]
  OR: [LocationGroupSubscriptionWhereInput!]
  NOT: [LocationGroupSubscriptionWhereInput!]
}

input LocationGroupUpdateDataInput {
  kind: LocationGroupKind
  code: String
  name: String
  users: UserUpdateManyWithoutLocationGroupsInput
  messages: MessageUpdateManyInput
}

input LocationGroupUpdateInput {
  kind: LocationGroupKind
  code: String
  name: String
  users: UserUpdateManyWithoutLocationGroupsInput
  messages: MessageUpdateManyInput
}

input LocationGroupUpdateManyDataInput {
  kind: LocationGroupKind
  code: String
  name: String
}

input LocationGroupUpdateManyMutationInput {
  kind: LocationGroupKind
  code: String
  name: String
}

input LocationGroupUpdateManyWithoutUsersInput {
  create: [LocationGroupCreateWithoutUsersInput!]
  delete: [LocationGroupWhereUniqueInput!]
  connect: [LocationGroupWhereUniqueInput!]
  disconnect: [LocationGroupWhereUniqueInput!]
  update: [LocationGroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [LocationGroupUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [LocationGroupScalarWhereInput!]
  updateMany: [LocationGroupUpdateManyWithWhereNestedInput!]
}

input LocationGroupUpdateManyWithWhereNestedInput {
  where: LocationGroupScalarWhereInput!
  data: LocationGroupUpdateManyDataInput!
}

input LocationGroupUpdateOneRequiredInput {
  create: LocationGroupCreateInput
  update: LocationGroupUpdateDataInput
  upsert: LocationGroupUpsertNestedInput
  connect: LocationGroupWhereUniqueInput
}

input LocationGroupUpdateWithoutUsersDataInput {
  kind: LocationGroupKind
  code: String
  name: String
  messages: MessageUpdateManyInput
}

input LocationGroupUpdateWithWhereUniqueWithoutUsersInput {
  where: LocationGroupWhereUniqueInput!
  data: LocationGroupUpdateWithoutUsersDataInput!
}

input LocationGroupUpsertNestedInput {
  update: LocationGroupUpdateDataInput!
  create: LocationGroupCreateInput!
}

input LocationGroupUpsertWithWhereUniqueWithoutUsersInput {
  where: LocationGroupWhereUniqueInput!
  update: LocationGroupUpdateWithoutUsersDataInput!
  create: LocationGroupCreateWithoutUsersInput!
}

input LocationGroupWhereInput {
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
  kind: LocationGroupKind
  kind_not: LocationGroupKind
  kind_in: [LocationGroupKind!]
  kind_not_in: [LocationGroupKind!]
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
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [LocationGroupWhereInput!]
  OR: [LocationGroupWhereInput!]
  NOT: [LocationGroupWhereInput!]
}

input LocationGroupWhereUniqueInput {
  id: ID
  code: String
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
  borns: UserUpdateManyWithoutBirthplaceInput
  lives: UserUpdateManyWithoutResidenceInput
}

input LocationUpdateManyMutationInput {
  name: String
}

input LocationUpdateOneWithoutBornsInput {
  create: LocationCreateWithoutBornsInput
  update: LocationUpdateWithoutBornsDataInput
  upsert: LocationUpsertWithoutBornsInput
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

input LocationUpdateOneWithoutLivesInput {
  create: LocationCreateWithoutLivesInput
  update: LocationUpdateWithoutLivesDataInput
  upsert: LocationUpsertWithoutLivesInput
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

input LocationUpdateWithoutBornsDataInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  schools: SchoolUpdateManyWithoutLocationInput
  companies: CompanyUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
  lives: UserUpdateManyWithoutResidenceInput
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
  borns: UserUpdateManyWithoutBirthplaceInput
  lives: UserUpdateManyWithoutResidenceInput
}

input LocationUpdateWithoutLivesDataInput {
  name: String
  province: ProvinceUpdateOneInput
  city: CityUpdateOneInput
  area: AreaUpdateOneInput
  street: StreetUpdateOneInput
  village: VillageUpdateOneInput
  schools: SchoolUpdateManyWithoutLocationInput
  companies: CompanyUpdateManyWithoutLocationInput
  universities: UniversityUpdateManyInput
  borns: UserUpdateManyWithoutBirthplaceInput
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
  borns: UserUpdateManyWithoutBirthplaceInput
  lives: UserUpdateManyWithoutResidenceInput
}

input LocationUpsertWithoutBornsInput {
  update: LocationUpdateWithoutBornsDataInput!
  create: LocationCreateWithoutBornsInput!
}

input LocationUpsertWithoutCompaniesInput {
  update: LocationUpdateWithoutCompaniesDataInput!
  create: LocationCreateWithoutCompaniesInput!
}

input LocationUpsertWithoutLivesInput {
  update: LocationUpdateWithoutLivesDataInput!
  create: LocationCreateWithoutLivesInput!
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
  borns_every: UserWhereInput
  borns_some: UserWhereInput
  borns_none: UserWhereInput
  lives_every: UserWhereInput
  lives_some: UserWhereInput
  lives_none: UserWhereInput
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
  to: User!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  to: UserCreateOneWithoutReceiveMessagesInput!
  from: UserCreateOneWithoutSentMessagesInput!
  text: String
  image: PhotoCreateOneInput
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
  to: UserCreateOneWithoutReceiveMessagesInput!
  text: String
  image: PhotoCreateOneInput
}

input MessageCreateWithoutToInput {
  from: UserCreateOneWithoutSentMessagesInput!
  text: String
  image: PhotoCreateOneInput
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
  text: String
  createdAt: DateTime!
}

input MessageScalarWhereInput {
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
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
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
  to: UserUpdateOneRequiredWithoutReceiveMessagesInput
  from: UserUpdateOneRequiredWithoutSentMessagesInput
  text: String
  image: PhotoUpdateOneInput
}

input MessageUpdateInput {
  to: UserUpdateOneRequiredWithoutReceiveMessagesInput
  from: UserUpdateOneRequiredWithoutSentMessagesInput
  text: String
  image: PhotoUpdateOneInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyInput {
  create: [MessageCreateInput!]
  update: [MessageUpdateWithWhereUniqueNestedInput!]
  upsert: [MessageUpsertWithWhereUniqueNestedInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
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
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutToInput {
  create: [MessageCreateWithoutToInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutFromDataInput {
  to: UserUpdateOneRequiredWithoutReceiveMessagesInput
  text: String
  image: PhotoUpdateOneInput
}

input MessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredWithoutSentMessagesInput
  text: String
  image: PhotoUpdateOneInput
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
  to: UserWhereInput
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
  image: PhotoWhereInput
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
  createClassGroupMessage(data: ClassGroupMessageCreateInput!): ClassGroupMessage!
  updateClassGroupMessage(data: ClassGroupMessageUpdateInput!, where: ClassGroupMessageWhereUniqueInput!): ClassGroupMessage
  updateManyClassGroupMessages(data: ClassGroupMessageUpdateManyMutationInput!, where: ClassGroupMessageWhereInput): BatchPayload!
  upsertClassGroupMessage(where: ClassGroupMessageWhereUniqueInput!, create: ClassGroupMessageCreateInput!, update: ClassGroupMessageUpdateInput!): ClassGroupMessage!
  deleteClassGroupMessage(where: ClassGroupMessageWhereUniqueInput!): ClassGroupMessage
  deleteManyClassGroupMessages(where: ClassGroupMessageWhereInput): BatchPayload!
  createClassMate(data: ClassMateCreateInput!): ClassMate!
  updateClassMate(data: ClassMateUpdateInput!, where: ClassMateWhereUniqueInput!): ClassMate
  updateManyClassMates(data: ClassMateUpdateManyMutationInput!, where: ClassMateWhereInput): BatchPayload!
  upsertClassMate(where: ClassMateWhereUniqueInput!, create: ClassMateCreateInput!, update: ClassMateUpdateInput!): ClassMate!
  deleteClassMate(where: ClassMateWhereUniqueInput!): ClassMate
  deleteManyClassMates(where: ClassMateWhereInput): BatchPayload!
  createColleague(data: ColleagueCreateInput!): Colleague!
  updateColleague(data: ColleagueUpdateInput!, where: ColleagueWhereUniqueInput!): Colleague
  updateManyColleagues(data: ColleagueUpdateManyMutationInput!, where: ColleagueWhereInput): BatchPayload!
  upsertColleague(where: ColleagueWhereUniqueInput!, create: ColleagueCreateInput!, update: ColleagueUpdateInput!): Colleague!
  deleteColleague(where: ColleagueWhereUniqueInput!): Colleague
  deleteManyColleagues(where: ColleagueWhereInput): BatchPayload!
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
  createFamilyGroupMessage(data: FamilyGroupMessageCreateInput!): FamilyGroupMessage!
  updateFamilyGroupMessage(data: FamilyGroupMessageUpdateInput!, where: FamilyGroupMessageWhereUniqueInput!): FamilyGroupMessage
  updateManyFamilyGroupMessages(data: FamilyGroupMessageUpdateManyMutationInput!, where: FamilyGroupMessageWhereInput): BatchPayload!
  upsertFamilyGroupMessage(where: FamilyGroupMessageWhereUniqueInput!, create: FamilyGroupMessageCreateInput!, update: FamilyGroupMessageUpdateInput!): FamilyGroupMessage!
  deleteFamilyGroupMessage(where: FamilyGroupMessageWhereUniqueInput!): FamilyGroupMessage
  deleteManyFamilyGroupMessages(where: FamilyGroupMessageWhereInput): BatchPayload!
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
  createLocationGroup(data: LocationGroupCreateInput!): LocationGroup!
  updateLocationGroup(data: LocationGroupUpdateInput!, where: LocationGroupWhereUniqueInput!): LocationGroup
  updateManyLocationGroups(data: LocationGroupUpdateManyMutationInput!, where: LocationGroupWhereInput): BatchPayload!
  upsertLocationGroup(where: LocationGroupWhereUniqueInput!, create: LocationGroupCreateInput!, update: LocationGroupUpdateInput!): LocationGroup!
  deleteLocationGroup(where: LocationGroupWhereUniqueInput!): LocationGroup
  deleteManyLocationGroups(where: LocationGroupWhereInput): BatchPayload!
  createLocationGroupMessage(data: LocationGroupMessageCreateInput!): LocationGroupMessage!
  updateLocationGroupMessage(data: LocationGroupMessageUpdateInput!, where: LocationGroupMessageWhereUniqueInput!): LocationGroupMessage
  updateManyLocationGroupMessages(data: LocationGroupMessageUpdateManyMutationInput!, where: LocationGroupMessageWhereInput): BatchPayload!
  upsertLocationGroupMessage(where: LocationGroupMessageWhereUniqueInput!, create: LocationGroupMessageCreateInput!, update: LocationGroupMessageUpdateInput!): LocationGroupMessage!
  deleteLocationGroupMessage(where: LocationGroupMessageWhereUniqueInput!): LocationGroupMessage
  deleteManyLocationGroupMessages(where: LocationGroupMessageWhereInput): BatchPayload!
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
  createOldColleague(data: OldColleagueCreateInput!): OldColleague!
  updateOldColleague(data: OldColleagueUpdateInput!, where: OldColleagueWhereUniqueInput!): OldColleague
  updateManyOldColleagues(data: OldColleagueUpdateManyMutationInput!, where: OldColleagueWhereInput): BatchPayload!
  upsertOldColleague(where: OldColleagueWhereUniqueInput!, create: OldColleagueCreateInput!, update: OldColleagueUpdateInput!): OldColleague!
  deleteOldColleague(where: OldColleagueWhereUniqueInput!): OldColleague
  deleteManyOldColleagues(where: OldColleagueWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createPhoto(data: PhotoCreateInput!): Photo!
  updatePhoto(data: PhotoUpdateInput!, where: PhotoWhereUniqueInput!): Photo
  updateManyPhotos(data: PhotoUpdateManyMutationInput!, where: PhotoWhereInput): BatchPayload!
  upsertPhoto(where: PhotoWhereUniqueInput!, create: PhotoCreateInput!, update: PhotoUpdateInput!): Photo!
  deletePhoto(where: PhotoWhereUniqueInput!): Photo
  deleteManyPhotos(where: PhotoWhereInput): BatchPayload!
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
  createRegStatusMessage(data: RegStatusMessageCreateInput!): RegStatusMessage!
  updateRegStatusMessage(data: RegStatusMessageUpdateInput!, where: RegStatusMessageWhereUniqueInput!): RegStatusMessage
  updateManyRegStatusMessages(data: RegStatusMessageUpdateManyMutationInput!, where: RegStatusMessageWhereInput): BatchPayload!
  upsertRegStatusMessage(where: RegStatusMessageWhereUniqueInput!, create: RegStatusMessageCreateInput!, update: RegStatusMessageUpdateInput!): RegStatusMessage!
  deleteRegStatusMessage(where: RegStatusMessageWhereUniqueInput!): RegStatusMessage
  deleteManyRegStatusMessages(where: RegStatusMessageWhereInput): BatchPayload!
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
  createStation(data: StationCreateInput!): Station!
  updateStation(data: StationUpdateInput!, where: StationWhereUniqueInput!): Station
  updateManyStations(data: StationUpdateManyMutationInput!, where: StationWhereInput): BatchPayload!
  upsertStation(where: StationWhereUniqueInput!, create: StationCreateInput!, update: StationUpdateInput!): Station!
  deleteStation(where: StationWhereUniqueInput!): Station
  deleteManyStations(where: StationWhereInput): BatchPayload!
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
  createWorkGroup(data: WorkGroupCreateInput!): WorkGroup!
  updateWorkGroup(data: WorkGroupUpdateInput!, where: WorkGroupWhereUniqueInput!): WorkGroup
  upsertWorkGroup(where: WorkGroupWhereUniqueInput!, create: WorkGroupCreateInput!, update: WorkGroupUpdateInput!): WorkGroup!
  deleteWorkGroup(where: WorkGroupWhereUniqueInput!): WorkGroup
  deleteManyWorkGroups(where: WorkGroupWhereInput): BatchPayload!
  createWorkGroupMessage(data: WorkGroupMessageCreateInput!): WorkGroupMessage!
  updateWorkGroupMessage(data: WorkGroupMessageUpdateInput!, where: WorkGroupMessageWhereUniqueInput!): WorkGroupMessage
  updateManyWorkGroupMessages(data: WorkGroupMessageUpdateManyMutationInput!, where: WorkGroupMessageWhereInput): BatchPayload!
  upsertWorkGroupMessage(where: WorkGroupMessageWhereUniqueInput!, create: WorkGroupMessageCreateInput!, update: WorkGroupMessageUpdateInput!): WorkGroupMessage!
  deleteWorkGroupMessage(where: WorkGroupMessageWhereUniqueInput!): WorkGroupMessage
  deleteManyWorkGroupMessages(where: WorkGroupMessageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type OldColleague {
  id: ID!
  from: User
  to: User
  company: Company
  status: String!
}

type OldColleagueConnection {
  pageInfo: PageInfo!
  edges: [OldColleagueEdge]!
  aggregate: AggregateOldColleague!
}

input OldColleagueCreateInput {
  from: UserCreateOneWithoutFromOldColleaguesInput
  to: UserCreateOneWithoutToOldColleaguesInput
  company: CompanyCreateOneInput
  status: String!
}

input OldColleagueCreateManyWithoutFromInput {
  create: [OldColleagueCreateWithoutFromInput!]
  connect: [OldColleagueWhereUniqueInput!]
}

input OldColleagueCreateManyWithoutToInput {
  create: [OldColleagueCreateWithoutToInput!]
  connect: [OldColleagueWhereUniqueInput!]
}

input OldColleagueCreateWithoutFromInput {
  to: UserCreateOneWithoutToOldColleaguesInput
  company: CompanyCreateOneInput
  status: String!
}

input OldColleagueCreateWithoutToInput {
  from: UserCreateOneWithoutFromOldColleaguesInput
  company: CompanyCreateOneInput
  status: String!
}

type OldColleagueEdge {
  node: OldColleague!
  cursor: String!
}

enum OldColleagueOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OldColleaguePreviousValues {
  id: ID!
  status: String!
}

input OldColleagueScalarWhereInput {
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
  AND: [OldColleagueScalarWhereInput!]
  OR: [OldColleagueScalarWhereInput!]
  NOT: [OldColleagueScalarWhereInput!]
}

type OldColleagueSubscriptionPayload {
  mutation: MutationType!
  node: OldColleague
  updatedFields: [String!]
  previousValues: OldColleaguePreviousValues
}

input OldColleagueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OldColleagueWhereInput
  AND: [OldColleagueSubscriptionWhereInput!]
  OR: [OldColleagueSubscriptionWhereInput!]
  NOT: [OldColleagueSubscriptionWhereInput!]
}

input OldColleagueUpdateInput {
  from: UserUpdateOneWithoutFromOldColleaguesInput
  to: UserUpdateOneWithoutToOldColleaguesInput
  company: CompanyUpdateOneInput
  status: String
}

input OldColleagueUpdateManyDataInput {
  status: String
}

input OldColleagueUpdateManyMutationInput {
  status: String
}

input OldColleagueUpdateManyWithoutFromInput {
  create: [OldColleagueCreateWithoutFromInput!]
  delete: [OldColleagueWhereUniqueInput!]
  connect: [OldColleagueWhereUniqueInput!]
  disconnect: [OldColleagueWhereUniqueInput!]
  update: [OldColleagueUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [OldColleagueUpsertWithWhereUniqueWithoutFromInput!]
  deleteMany: [OldColleagueScalarWhereInput!]
  updateMany: [OldColleagueUpdateManyWithWhereNestedInput!]
}

input OldColleagueUpdateManyWithoutToInput {
  create: [OldColleagueCreateWithoutToInput!]
  delete: [OldColleagueWhereUniqueInput!]
  connect: [OldColleagueWhereUniqueInput!]
  disconnect: [OldColleagueWhereUniqueInput!]
  update: [OldColleagueUpdateWithWhereUniqueWithoutToInput!]
  upsert: [OldColleagueUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [OldColleagueScalarWhereInput!]
  updateMany: [OldColleagueUpdateManyWithWhereNestedInput!]
}

input OldColleagueUpdateManyWithWhereNestedInput {
  where: OldColleagueScalarWhereInput!
  data: OldColleagueUpdateManyDataInput!
}

input OldColleagueUpdateWithoutFromDataInput {
  to: UserUpdateOneWithoutToOldColleaguesInput
  company: CompanyUpdateOneInput
  status: String
}

input OldColleagueUpdateWithoutToDataInput {
  from: UserUpdateOneWithoutFromOldColleaguesInput
  company: CompanyUpdateOneInput
  status: String
}

input OldColleagueUpdateWithWhereUniqueWithoutFromInput {
  where: OldColleagueWhereUniqueInput!
  data: OldColleagueUpdateWithoutFromDataInput!
}

input OldColleagueUpdateWithWhereUniqueWithoutToInput {
  where: OldColleagueWhereUniqueInput!
  data: OldColleagueUpdateWithoutToDataInput!
}

input OldColleagueUpsertWithWhereUniqueWithoutFromInput {
  where: OldColleagueWhereUniqueInput!
  update: OldColleagueUpdateWithoutFromDataInput!
  create: OldColleagueCreateWithoutFromInput!
}

input OldColleagueUpsertWithWhereUniqueWithoutToInput {
  where: OldColleagueWhereUniqueInput!
  update: OldColleagueUpdateWithoutToDataInput!
  create: OldColleagueCreateWithoutToInput!
}

input OldColleagueWhereInput {
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
  to: UserWhereInput
  company: CompanyWhereInput
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
  AND: [OldColleagueWhereInput!]
  OR: [OldColleagueWhereInput!]
  NOT: [OldColleagueWhereInput!]
}

input OldColleagueWhereUniqueInput {
  id: ID
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

type Photo {
  id: ID!
  name: String
  url: String
  user: User
}

type PhotoConnection {
  pageInfo: PageInfo!
  edges: [PhotoEdge]!
  aggregate: AggregatePhoto!
}

input PhotoCreateInput {
  name: String
  url: String
  user: UserCreateOneWithoutAvatarInput
}

input PhotoCreateOneInput {
  create: PhotoCreateInput
  connect: PhotoWhereUniqueInput
}

input PhotoCreateOneWithoutUserInput {
  create: PhotoCreateWithoutUserInput
  connect: PhotoWhereUniqueInput
}

input PhotoCreateWithoutUserInput {
  name: String
  url: String
}

type PhotoEdge {
  node: Photo!
  cursor: String!
}

enum PhotoOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PhotoPreviousValues {
  id: ID!
  name: String
  url: String
}

type PhotoSubscriptionPayload {
  mutation: MutationType!
  node: Photo
  updatedFields: [String!]
  previousValues: PhotoPreviousValues
}

input PhotoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PhotoWhereInput
  AND: [PhotoSubscriptionWhereInput!]
  OR: [PhotoSubscriptionWhereInput!]
  NOT: [PhotoSubscriptionWhereInput!]
}

input PhotoUpdateDataInput {
  name: String
  url: String
  user: UserUpdateOneWithoutAvatarInput
}

input PhotoUpdateInput {
  name: String
  url: String
  user: UserUpdateOneWithoutAvatarInput
}

input PhotoUpdateManyMutationInput {
  name: String
  url: String
}

input PhotoUpdateOneInput {
  create: PhotoCreateInput
  update: PhotoUpdateDataInput
  upsert: PhotoUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PhotoWhereUniqueInput
}

input PhotoUpdateOneWithoutUserInput {
  create: PhotoCreateWithoutUserInput
  update: PhotoUpdateWithoutUserDataInput
  upsert: PhotoUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: PhotoWhereUniqueInput
}

input PhotoUpdateWithoutUserDataInput {
  name: String
  url: String
}

input PhotoUpsertNestedInput {
  update: PhotoUpdateDataInput!
  create: PhotoCreateInput!
}

input PhotoUpsertWithoutUserInput {
  update: PhotoUpdateWithoutUserDataInput!
  create: PhotoCreateWithoutUserInput!
}

input PhotoWhereInput {
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
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  user: UserWhereInput
  AND: [PhotoWhereInput!]
  OR: [PhotoWhereInput!]
  NOT: [PhotoWhereInput!]
}

input PhotoWhereUniqueInput {
  id: ID
  name: String
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

input PostScalarWhereInput {
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
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
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

input PostUpdateManyDataInput {
  isPublished: Boolean
  title: String
  content: String
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
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
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
  classGroupMessage(where: ClassGroupMessageWhereUniqueInput!): ClassGroupMessage
  classGroupMessages(where: ClassGroupMessageWhereInput, orderBy: ClassGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassGroupMessage]!
  classGroupMessagesConnection(where: ClassGroupMessageWhereInput, orderBy: ClassGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassGroupMessageConnection!
  classMate(where: ClassMateWhereUniqueInput!): ClassMate
  classMates(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassMate]!
  classMatesConnection(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassMateConnection!
  colleague(where: ColleagueWhereUniqueInput!): Colleague
  colleagues(where: ColleagueWhereInput, orderBy: ColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Colleague]!
  colleaguesConnection(where: ColleagueWhereInput, orderBy: ColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ColleagueConnection!
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
  familyGroupMessage(where: FamilyGroupMessageWhereUniqueInput!): FamilyGroupMessage
  familyGroupMessages(where: FamilyGroupMessageWhereInput, orderBy: FamilyGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FamilyGroupMessage]!
  familyGroupMessagesConnection(where: FamilyGroupMessageWhereInput, orderBy: FamilyGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FamilyGroupMessageConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  locationGroup(where: LocationGroupWhereUniqueInput!): LocationGroup
  locationGroups(where: LocationGroupWhereInput, orderBy: LocationGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocationGroup]!
  locationGroupsConnection(where: LocationGroupWhereInput, orderBy: LocationGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationGroupConnection!
  locationGroupMessage(where: LocationGroupMessageWhereUniqueInput!): LocationGroupMessage
  locationGroupMessages(where: LocationGroupMessageWhereInput, orderBy: LocationGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocationGroupMessage]!
  locationGroupMessagesConnection(where: LocationGroupMessageWhereInput, orderBy: LocationGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationGroupMessageConnection!
  logses(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs]!
  logsesConnection(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogsConnection!
  major(where: MajorWhereUniqueInput!): Major
  majors(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Major]!
  majorsConnection(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MajorConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  oldColleague(where: OldColleagueWhereUniqueInput!): OldColleague
  oldColleagues(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OldColleague]!
  oldColleaguesConnection(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OldColleagueConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  photo(where: PhotoWhereUniqueInput!): Photo
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  regStatus(where: RegStatusWhereUniqueInput!): RegStatus
  regStatuses(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatus]!
  regStatusesConnection(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegStatusConnection!
  regStatusMessage(where: RegStatusMessageWhereUniqueInput!): RegStatusMessage
  regStatusMessages(where: RegStatusMessageWhereInput, orderBy: RegStatusMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatusMessage]!
  regStatusMessagesConnection(where: RegStatusMessageWhereInput, orderBy: RegStatusMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegStatusMessageConnection!
  school(where: SchoolWhereUniqueInput!): School
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  schoolEdu(where: SchoolEduWhereUniqueInput!): SchoolEdu
  schoolEdus(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolEdu]!
  schoolEdusConnection(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolEduConnection!
  station(where: StationWhereUniqueInput!): Station
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station]!
  stationsConnection(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationConnection!
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
  workGroup(where: WorkGroupWhereUniqueInput!): WorkGroup
  workGroups(where: WorkGroupWhereInput, orderBy: WorkGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkGroup]!
  workGroupsConnection(where: WorkGroupWhereInput, orderBy: WorkGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkGroupConnection!
  workGroupMessage(where: WorkGroupMessageWhereUniqueInput!): WorkGroupMessage
  workGroupMessages(where: WorkGroupMessageWhereInput, orderBy: WorkGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkGroupMessage]!
  workGroupMessagesConnection(where: WorkGroupMessageWhereInput, orderBy: WorkGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkGroupMessageConnection!
  node(id: ID!): Node
}

type RegStatus {
  id: ID!
  education: Educationkind!
  university: University
  major: Major!
  applicants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: RegStatusMessageWhereInput, orderBy: RegStatusMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatusMessage!]
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
  messages: RegStatusMessageCreateManyWithoutToInput
}

input RegStatusCreateOneWithoutApplicantsInput {
  create: RegStatusCreateWithoutApplicantsInput
  connect: RegStatusWhereUniqueInput
}

input RegStatusCreateOneWithoutMessagesInput {
  create: RegStatusCreateWithoutMessagesInput
  connect: RegStatusWhereUniqueInput
}

input RegStatusCreateWithoutApplicantsInput {
  education: Educationkind!
  university: UniversityCreateOneInput
  major: MajorCreateOneInput!
  messages: RegStatusMessageCreateManyWithoutToInput
}

input RegStatusCreateWithoutMessagesInput {
  education: Educationkind!
  university: UniversityCreateOneInput
  major: MajorCreateOneInput!
  applicants: UserCreateManyWithoutRegStatusInput
}

type RegStatusEdge {
  node: RegStatus!
  cursor: String!
}

type RegStatusMessage {
  id: ID!
  to: RegStatus!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type RegStatusMessageConnection {
  pageInfo: PageInfo!
  edges: [RegStatusMessageEdge]!
  aggregate: AggregateRegStatusMessage!
}

input RegStatusMessageCreateInput {
  to: RegStatusCreateOneWithoutMessagesInput!
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

input RegStatusMessageCreateManyWithoutToInput {
  create: [RegStatusMessageCreateWithoutToInput!]
  connect: [RegStatusMessageWhereUniqueInput!]
}

input RegStatusMessageCreateWithoutToInput {
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

type RegStatusMessageEdge {
  node: RegStatusMessage!
  cursor: String!
}

enum RegStatusMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RegStatusMessagePreviousValues {
  id: ID!
  text: String
  createdAt: DateTime!
}

input RegStatusMessageScalarWhereInput {
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
  AND: [RegStatusMessageScalarWhereInput!]
  OR: [RegStatusMessageScalarWhereInput!]
  NOT: [RegStatusMessageScalarWhereInput!]
}

type RegStatusMessageSubscriptionPayload {
  mutation: MutationType!
  node: RegStatusMessage
  updatedFields: [String!]
  previousValues: RegStatusMessagePreviousValues
}

input RegStatusMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegStatusMessageWhereInput
  AND: [RegStatusMessageSubscriptionWhereInput!]
  OR: [RegStatusMessageSubscriptionWhereInput!]
  NOT: [RegStatusMessageSubscriptionWhereInput!]
}

input RegStatusMessageUpdateInput {
  to: RegStatusUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input RegStatusMessageUpdateManyDataInput {
  text: String
}

input RegStatusMessageUpdateManyMutationInput {
  text: String
}

input RegStatusMessageUpdateManyWithoutToInput {
  create: [RegStatusMessageCreateWithoutToInput!]
  delete: [RegStatusMessageWhereUniqueInput!]
  connect: [RegStatusMessageWhereUniqueInput!]
  disconnect: [RegStatusMessageWhereUniqueInput!]
  update: [RegStatusMessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [RegStatusMessageUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [RegStatusMessageScalarWhereInput!]
  updateMany: [RegStatusMessageUpdateManyWithWhereNestedInput!]
}

input RegStatusMessageUpdateManyWithWhereNestedInput {
  where: RegStatusMessageScalarWhereInput!
  data: RegStatusMessageUpdateManyDataInput!
}

input RegStatusMessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input RegStatusMessageUpdateWithWhereUniqueWithoutToInput {
  where: RegStatusMessageWhereUniqueInput!
  data: RegStatusMessageUpdateWithoutToDataInput!
}

input RegStatusMessageUpsertWithWhereUniqueWithoutToInput {
  where: RegStatusMessageWhereUniqueInput!
  update: RegStatusMessageUpdateWithoutToDataInput!
  create: RegStatusMessageCreateWithoutToInput!
}

input RegStatusMessageWhereInput {
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
  to: RegStatusWhereInput
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
  image: PhotoWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [RegStatusMessageWhereInput!]
  OR: [RegStatusMessageWhereInput!]
  NOT: [RegStatusMessageWhereInput!]
}

input RegStatusMessageWhereUniqueInput {
  id: ID
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
  messages: RegStatusMessageUpdateManyWithoutToInput
}

input RegStatusUpdateManyMutationInput {
  education: Educationkind
}

input RegStatusUpdateOneRequiredWithoutMessagesInput {
  create: RegStatusCreateWithoutMessagesInput
  update: RegStatusUpdateWithoutMessagesDataInput
  upsert: RegStatusUpsertWithoutMessagesInput
  connect: RegStatusWhereUniqueInput
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
  messages: RegStatusMessageUpdateManyWithoutToInput
}

input RegStatusUpdateWithoutMessagesDataInput {
  education: Educationkind
  university: UniversityUpdateOneInput
  major: MajorUpdateOneRequiredInput
  applicants: UserUpdateManyWithoutRegStatusInput
}

input RegStatusUpsertWithoutApplicantsInput {
  update: RegStatusUpdateWithoutApplicantsDataInput!
  create: RegStatusCreateWithoutApplicantsInput!
}

input RegStatusUpsertWithoutMessagesInput {
  update: RegStatusUpdateWithoutMessagesDataInput!
  create: RegStatusCreateWithoutMessagesInput!
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
  messages_every: RegStatusMessageWhereInput
  messages_some: RegStatusMessageWhereInput
  messages_none: RegStatusMessageWhereInput
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

input SchoolEduScalarWhereInput {
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
  AND: [SchoolEduScalarWhereInput!]
  OR: [SchoolEduScalarWhereInput!]
  NOT: [SchoolEduScalarWhereInput!]
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

input SchoolEduUpdateManyDataInput {
  startTime: DateTime
  grade: Int
  className: String
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
  deleteMany: [SchoolEduScalarWhereInput!]
  updateMany: [SchoolEduUpdateManyWithWhereNestedInput!]
}

input SchoolEduUpdateManyWithWhereNestedInput {
  where: SchoolEduScalarWhereInput!
  data: SchoolEduUpdateManyDataInput!
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

input SchoolScalarWhereInput {
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
  AND: [SchoolScalarWhereInput!]
  OR: [SchoolScalarWhereInput!]
  NOT: [SchoolScalarWhereInput!]
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

input SchoolUpdateManyDataInput {
  name: String
  kind: Educationkind
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
  deleteMany: [SchoolScalarWhereInput!]
  updateMany: [SchoolUpdateManyWithWhereNestedInput!]
}

input SchoolUpdateManyWithWhereNestedInput {
  where: SchoolScalarWhereInput!
  data: SchoolUpdateManyDataInput!
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

type Station {
  id: ID!
  code: String
  name: String
}

type StationConnection {
  pageInfo: PageInfo!
  edges: [StationEdge]!
  aggregate: AggregateStation!
}

input StationCreateInput {
  code: String
  name: String
}

input StationCreateOneInput {
  create: StationCreateInput
  connect: StationWhereUniqueInput
}

type StationEdge {
  node: Station!
  cursor: String!
}

enum StationOrderByInput {
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

type StationPreviousValues {
  id: ID!
  code: String
  name: String
}

type StationSubscriptionPayload {
  mutation: MutationType!
  node: Station
  updatedFields: [String!]
  previousValues: StationPreviousValues
}

input StationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StationWhereInput
  AND: [StationSubscriptionWhereInput!]
  OR: [StationSubscriptionWhereInput!]
  NOT: [StationSubscriptionWhereInput!]
}

input StationUpdateDataInput {
  code: String
  name: String
}

input StationUpdateInput {
  code: String
  name: String
}

input StationUpdateManyMutationInput {
  code: String
  name: String
}

input StationUpdateOneInput {
  create: StationCreateInput
  update: StationUpdateDataInput
  upsert: StationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: StationWhereUniqueInput
}

input StationUpsertNestedInput {
  update: StationUpdateDataInput!
  create: StationCreateInput!
}

input StationWhereInput {
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
  AND: [StationWhereInput!]
  OR: [StationWhereInput!]
  NOT: [StationWhereInput!]
}

input StationWhereUniqueInput {
  id: ID
  code: String
  name: String
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

input StreetScalarWhereInput {
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
  AND: [StreetScalarWhereInput!]
  OR: [StreetScalarWhereInput!]
  NOT: [StreetScalarWhereInput!]
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

input StreetUpdateManyDataInput {
  code: String
  name: String
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
  deleteMany: [StreetScalarWhereInput!]
  updateMany: [StreetUpdateManyWithWhereNestedInput!]
}

input StreetUpdateManyWithWhereNestedInput {
  where: StreetScalarWhereInput!
  data: StreetUpdateManyDataInput!
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
  classGroupMessage(where: ClassGroupMessageSubscriptionWhereInput): ClassGroupMessageSubscriptionPayload
  classMate(where: ClassMateSubscriptionWhereInput): ClassMateSubscriptionPayload
  colleague(where: ColleagueSubscriptionWhereInput): ColleagueSubscriptionPayload
  collegeEntranceExam(where: CollegeEntranceExamSubscriptionWhereInput): CollegeEntranceExamSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  family(where: FamilySubscriptionWhereInput): FamilySubscriptionPayload
  familyGroup(where: FamilyGroupSubscriptionWhereInput): FamilyGroupSubscriptionPayload
  familyGroupMessage(where: FamilyGroupMessageSubscriptionWhereInput): FamilyGroupMessageSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  locationGroup(where: LocationGroupSubscriptionWhereInput): LocationGroupSubscriptionPayload
  locationGroupMessage(where: LocationGroupMessageSubscriptionWhereInput): LocationGroupMessageSubscriptionPayload
  logs(where: LogsSubscriptionWhereInput): LogsSubscriptionPayload
  major(where: MajorSubscriptionWhereInput): MajorSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  oldColleague(where: OldColleagueSubscriptionWhereInput): OldColleagueSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  regStatus(where: RegStatusSubscriptionWhereInput): RegStatusSubscriptionPayload
  regStatusMessage(where: RegStatusMessageSubscriptionWhereInput): RegStatusMessageSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  schoolEdu(where: SchoolEduSubscriptionWhereInput): SchoolEduSubscriptionPayload
  station(where: StationSubscriptionWhereInput): StationSubscriptionPayload
  street(where: StreetSubscriptionWhereInput): StreetSubscriptionPayload
  university(where: UniversitySubscriptionWhereInput): UniversitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  village(where: VillageSubscriptionWhereInput): VillageSubscriptionPayload
  work(where: WorkSubscriptionWhereInput): WorkSubscriptionPayload
  workGroup(where: WorkGroupSubscriptionWhereInput): WorkGroupSubscriptionPayload
  workGroupMessage(where: WorkGroupMessageSubscriptionWhereInput): WorkGroupMessageSubscriptionPayload
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

input UniversityScalarWhereInput {
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
  AND: [UniversityScalarWhereInput!]
  OR: [UniversityScalarWhereInput!]
  NOT: [UniversityScalarWhereInput!]
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

input UniversityUpdateManyDataInput {
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
  deleteMany: [UniversityScalarWhereInput!]
  updateMany: [UniversityUpdateManyWithWhereNestedInput!]
}

input UniversityUpdateManyMutationInput {
  name: String
  education: Educationkind
  department: String
  location: String
  desc: String
}

input UniversityUpdateManyWithWhereNestedInput {
  where: UniversityScalarWhereInput!
  data: UniversityUpdateManyDataInput!
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
  avatar: Photo
  birthdaycalendar: String
  birthday: DateTime
  birthplace: Location
  residence: Location
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
  sentMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  receiveMessages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  familyGroup: FamilyGroup
  creater: FamilyGroup
  classMate(where: ClassMateWhereInput, orderBy: ClassMateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassMate!]
  workGroup: WorkGroup
  colleagues(where: ColleagueWhereInput, orderBy: ColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Colleague!]
  fromOldColleagues(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OldColleague!]
  toOldColleagues(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OldColleague!]
  locationGroups(where: LocationGroupWhereInput, orderBy: LocationGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocationGroup!]
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
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBirthplaceInput {
  create: [UserCreateWithoutBirthplaceInput!]
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

input UserCreateManyWithoutLocationGroupsInput {
  create: [UserCreateWithoutLocationGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutResidenceInput {
  create: [UserCreateWithoutResidenceInput!]
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

input UserCreateOneWithoutAvatarInput {
  create: UserCreateWithoutAvatarInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutClassMateInput {
  create: UserCreateWithoutClassMateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutColleaguesInput {
  create: UserCreateWithoutColleaguesInput
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

input UserCreateOneWithoutFromOldColleaguesInput {
  create: UserCreateWithoutFromOldColleaguesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReceiveMessagesInput {
  create: UserCreateWithoutReceiveMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutToOldColleaguesInput {
  create: UserCreateWithoutToOldColleaguesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWorksInput {
  create: UserCreateWithoutWorksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAvatarInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutBirthplaceInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutClassMateInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutColleaguesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutCreaterInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutExamInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutFamiliesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutFamilyGroupInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutFromOldColleaguesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutGroupsInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutLocationGroupsInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
}

input UserCreateWithoutPostsInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutReceiveMessagesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutRegStatusInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutResidenceInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutSentMessagesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutStudiesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  works: WorkCreateManyWithoutWorkerInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutToOldColleaguesInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
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
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
}

input UserCreateWithoutWorksInput {
  username: String!
  password: String!
  name: String
  gender: String
  avatar: PhotoCreateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationCreateOneWithoutBornsInput
  residence: LocationCreateOneWithoutLivesInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyCreateManyWithoutFromInput
  studies: SchoolEduCreateManyWithoutStudentsInput
  exam: CollegeEntranceExamCreateOneWithoutStudentInput
  sentMessages: MessageCreateManyWithoutFromInput
  receiveMessages: MessageCreateManyWithoutToInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
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
  birthdaycalendar: String
  birthday: DateTime
  uid: String!
  token: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  regTimes: Int
  maxRegTimes: Int
}

input UserScalarWhereInput {
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
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
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
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  uid: String
  token: String
  regTimes: Int
  maxRegTimes: Int
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  uid: String
  token: String
  regTimes: Int
  maxRegTimes: Int
}

input UserUpdateManyWithoutBirthplaceInput {
  create: [UserCreateWithoutBirthplaceInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthplaceInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthplaceInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFamilyGroupInput {
  create: [UserCreateWithoutFamilyGroupInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFamilyGroupInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFamilyGroupInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutLocationGroupsInput {
  create: [UserCreateWithoutLocationGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLocationGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLocationGroupsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRegStatusInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRegStatusInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutResidenceInput {
  create: [UserCreateWithoutResidenceInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutResidenceInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutResidenceInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutStudiesInput {
  create: [UserCreateWithoutStudiesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutStudiesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutStudiesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
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

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReceiveMessagesInput {
  create: UserCreateWithoutReceiveMessagesInput
  update: UserUpdateWithoutReceiveMessagesDataInput
  upsert: UserUpsertWithoutReceiveMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSentMessagesInput {
  create: UserCreateWithoutSentMessagesInput
  update: UserUpdateWithoutSentMessagesDataInput
  upsert: UserUpsertWithoutSentMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutAvatarInput {
  create: UserCreateWithoutAvatarInput
  update: UserUpdateWithoutAvatarDataInput
  upsert: UserUpsertWithoutAvatarInput
  delete: Boolean
  disconnect: Boolean
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

input UserUpdateOneWithoutColleaguesInput {
  create: UserCreateWithoutColleaguesInput
  update: UserUpdateWithoutColleaguesDataInput
  upsert: UserUpsertWithoutColleaguesInput
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

input UserUpdateOneWithoutFromOldColleaguesInput {
  create: UserCreateWithoutFromOldColleaguesInput
  update: UserUpdateWithoutFromOldColleaguesDataInput
  upsert: UserUpsertWithoutFromOldColleaguesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutToOldColleaguesInput {
  create: UserCreateWithoutToOldColleaguesInput
  update: UserUpdateWithoutToOldColleaguesDataInput
  upsert: UserUpsertWithoutToOldColleaguesInput
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

input UserUpdateWithoutAvatarDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutBirthplaceDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutClassMateDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutColleaguesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutCreaterDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutExamDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFamiliesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFamilyGroupDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFromOldColleaguesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutGroupsDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutLocationGroupsDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutReceiveMessagesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutRegStatusDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutResidenceDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutSentMessagesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutStudiesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  works: WorkUpdateManyWithoutWorkerInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutToOldColleaguesDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
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
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithoutWorksDataInput {
  username: String
  password: String
  name: String
  gender: String
  avatar: PhotoUpdateOneWithoutUserInput
  birthdaycalendar: String
  birthday: DateTime
  birthplace: LocationUpdateOneWithoutBornsInput
  residence: LocationUpdateOneWithoutLivesInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  regTimes: Int
  maxRegTimes: Int
  families: FamilyUpdateManyWithoutFromInput
  studies: SchoolEduUpdateManyWithoutStudentsInput
  exam: CollegeEntranceExamUpdateOneWithoutStudentInput
  sentMessages: MessageUpdateManyWithoutFromInput
  receiveMessages: MessageUpdateManyWithoutToInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutBirthplaceInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthplaceDataInput!
}

input UserUpdateWithWhereUniqueWithoutFamilyGroupInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFamilyGroupDataInput!
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutLocationGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLocationGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRegStatusDataInput!
}

input UserUpdateWithWhereUniqueWithoutResidenceInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutResidenceDataInput!
}

input UserUpdateWithWhereUniqueWithoutStudiesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutStudiesDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutAvatarInput {
  update: UserUpdateWithoutAvatarDataInput!
  create: UserCreateWithoutAvatarInput!
}

input UserUpsertWithoutClassMateInput {
  update: UserUpdateWithoutClassMateDataInput!
  create: UserCreateWithoutClassMateInput!
}

input UserUpsertWithoutColleaguesInput {
  update: UserUpdateWithoutColleaguesDataInput!
  create: UserCreateWithoutColleaguesInput!
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

input UserUpsertWithoutFromOldColleaguesInput {
  update: UserUpdateWithoutFromOldColleaguesDataInput!
  create: UserCreateWithoutFromOldColleaguesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutReceiveMessagesInput {
  update: UserUpdateWithoutReceiveMessagesDataInput!
  create: UserCreateWithoutReceiveMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserUpsertWithoutToOldColleaguesInput {
  update: UserUpdateWithoutToOldColleaguesDataInput!
  create: UserCreateWithoutToOldColleaguesInput!
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

input UserUpsertWithWhereUniqueWithoutBirthplaceInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthplaceDataInput!
  create: UserCreateWithoutBirthplaceInput!
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

input UserUpsertWithWhereUniqueWithoutLocationGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLocationGroupsDataInput!
  create: UserCreateWithoutLocationGroupsInput!
}

input UserUpsertWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRegStatusDataInput!
  create: UserCreateWithoutRegStatusInput!
}

input UserUpsertWithWhereUniqueWithoutResidenceInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutResidenceDataInput!
  create: UserCreateWithoutResidenceInput!
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
  avatar: PhotoWhereInput
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
  residence: LocationWhereInput
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
  sentMessages_every: MessageWhereInput
  sentMessages_some: MessageWhereInput
  sentMessages_none: MessageWhereInput
  receiveMessages_every: MessageWhereInput
  receiveMessages_some: MessageWhereInput
  receiveMessages_none: MessageWhereInput
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
  workGroup: WorkGroupWhereInput
  colleagues_every: ColleagueWhereInput
  colleagues_some: ColleagueWhereInput
  colleagues_none: ColleagueWhereInput
  fromOldColleagues_every: OldColleagueWhereInput
  fromOldColleagues_some: OldColleagueWhereInput
  fromOldColleagues_none: OldColleagueWhereInput
  toOldColleagues_every: OldColleagueWhereInput
  toOldColleagues_some: OldColleagueWhereInput
  toOldColleagues_none: OldColleagueWhereInput
  locationGroups_every: LocationGroupWhereInput
  locationGroups_some: LocationGroupWhereInput
  locationGroups_none: LocationGroupWhereInput
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

input VillageScalarWhereInput {
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
  AND: [VillageScalarWhereInput!]
  OR: [VillageScalarWhereInput!]
  NOT: [VillageScalarWhereInput!]
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

input VillageUpdateManyDataInput {
  code: String
  name: String
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
  deleteMany: [VillageScalarWhereInput!]
  updateMany: [VillageUpdateManyWithWhereNestedInput!]
}

input VillageUpdateManyWithWhereNestedInput {
  where: VillageScalarWhereInput!
  data: VillageUpdateManyDataInput!
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
  post: Station
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
  post: StationCreateOneInput
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
  post: StationCreateOneInput
  jobContent: String
  worker: UserCreateOneWithoutWorksInput
}

input WorkCreateWithoutWorkerInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyCreateOneWithoutWorksInput
  department: String
  post: StationCreateOneInput
  jobContent: String
}

type WorkEdge {
  node: Work!
  cursor: String!
}

type WorkGroup {
  id: ID!
  company: Company
  colleagues(where: ColleagueWhereInput, orderBy: ColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Colleague!]
  messages(where: WorkGroupMessageWhereInput, orderBy: WorkGroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WorkGroupMessage!]
}

type WorkGroupConnection {
  pageInfo: PageInfo!
  edges: [WorkGroupEdge]!
  aggregate: AggregateWorkGroup!
}

input WorkGroupCreateInput {
  company: CompanyCreateOneWithoutWorkGroupInput
  colleagues: ColleagueCreateManyWithoutGroupInput
  messages: WorkGroupMessageCreateManyWithoutToInput
}

input WorkGroupCreateOneInput {
  create: WorkGroupCreateInput
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupCreateOneWithoutColleaguesInput {
  create: WorkGroupCreateWithoutColleaguesInput
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupCreateOneWithoutCompanyInput {
  create: WorkGroupCreateWithoutCompanyInput
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupCreateOneWithoutMessagesInput {
  create: WorkGroupCreateWithoutMessagesInput
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupCreateWithoutColleaguesInput {
  company: CompanyCreateOneWithoutWorkGroupInput
  messages: WorkGroupMessageCreateManyWithoutToInput
}

input WorkGroupCreateWithoutCompanyInput {
  colleagues: ColleagueCreateManyWithoutGroupInput
  messages: WorkGroupMessageCreateManyWithoutToInput
}

input WorkGroupCreateWithoutMessagesInput {
  company: CompanyCreateOneWithoutWorkGroupInput
  colleagues: ColleagueCreateManyWithoutGroupInput
}

type WorkGroupEdge {
  node: WorkGroup!
  cursor: String!
}

type WorkGroupMessage {
  id: ID!
  to: WorkGroup!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type WorkGroupMessageConnection {
  pageInfo: PageInfo!
  edges: [WorkGroupMessageEdge]!
  aggregate: AggregateWorkGroupMessage!
}

input WorkGroupMessageCreateInput {
  to: WorkGroupCreateOneWithoutMessagesInput!
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

input WorkGroupMessageCreateManyWithoutToInput {
  create: [WorkGroupMessageCreateWithoutToInput!]
  connect: [WorkGroupMessageWhereUniqueInput!]
}

input WorkGroupMessageCreateWithoutToInput {
  from: UserCreateOneInput!
  text: String
  image: PhotoCreateOneInput
}

type WorkGroupMessageEdge {
  node: WorkGroupMessage!
  cursor: String!
}

enum WorkGroupMessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkGroupMessagePreviousValues {
  id: ID!
  text: String
  createdAt: DateTime!
}

input WorkGroupMessageScalarWhereInput {
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
  AND: [WorkGroupMessageScalarWhereInput!]
  OR: [WorkGroupMessageScalarWhereInput!]
  NOT: [WorkGroupMessageScalarWhereInput!]
}

type WorkGroupMessageSubscriptionPayload {
  mutation: MutationType!
  node: WorkGroupMessage
  updatedFields: [String!]
  previousValues: WorkGroupMessagePreviousValues
}

input WorkGroupMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkGroupMessageWhereInput
  AND: [WorkGroupMessageSubscriptionWhereInput!]
  OR: [WorkGroupMessageSubscriptionWhereInput!]
  NOT: [WorkGroupMessageSubscriptionWhereInput!]
}

input WorkGroupMessageUpdateInput {
  to: WorkGroupUpdateOneRequiredWithoutMessagesInput
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input WorkGroupMessageUpdateManyDataInput {
  text: String
}

input WorkGroupMessageUpdateManyMutationInput {
  text: String
}

input WorkGroupMessageUpdateManyWithoutToInput {
  create: [WorkGroupMessageCreateWithoutToInput!]
  delete: [WorkGroupMessageWhereUniqueInput!]
  connect: [WorkGroupMessageWhereUniqueInput!]
  disconnect: [WorkGroupMessageWhereUniqueInput!]
  update: [WorkGroupMessageUpdateWithWhereUniqueWithoutToInput!]
  upsert: [WorkGroupMessageUpsertWithWhereUniqueWithoutToInput!]
  deleteMany: [WorkGroupMessageScalarWhereInput!]
  updateMany: [WorkGroupMessageUpdateManyWithWhereNestedInput!]
}

input WorkGroupMessageUpdateManyWithWhereNestedInput {
  where: WorkGroupMessageScalarWhereInput!
  data: WorkGroupMessageUpdateManyDataInput!
}

input WorkGroupMessageUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredInput
  text: String
  image: PhotoUpdateOneInput
}

input WorkGroupMessageUpdateWithWhereUniqueWithoutToInput {
  where: WorkGroupMessageWhereUniqueInput!
  data: WorkGroupMessageUpdateWithoutToDataInput!
}

input WorkGroupMessageUpsertWithWhereUniqueWithoutToInput {
  where: WorkGroupMessageWhereUniqueInput!
  update: WorkGroupMessageUpdateWithoutToDataInput!
  create: WorkGroupMessageCreateWithoutToInput!
}

input WorkGroupMessageWhereInput {
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
  to: WorkGroupWhereInput
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
  image: PhotoWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [WorkGroupMessageWhereInput!]
  OR: [WorkGroupMessageWhereInput!]
  NOT: [WorkGroupMessageWhereInput!]
}

input WorkGroupMessageWhereUniqueInput {
  id: ID
}

enum WorkGroupOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WorkGroupPreviousValues {
  id: ID!
}

type WorkGroupSubscriptionPayload {
  mutation: MutationType!
  node: WorkGroup
  updatedFields: [String!]
  previousValues: WorkGroupPreviousValues
}

input WorkGroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkGroupWhereInput
  AND: [WorkGroupSubscriptionWhereInput!]
  OR: [WorkGroupSubscriptionWhereInput!]
  NOT: [WorkGroupSubscriptionWhereInput!]
}

input WorkGroupUpdateDataInput {
  company: CompanyUpdateOneWithoutWorkGroupInput
  colleagues: ColleagueUpdateManyWithoutGroupInput
  messages: WorkGroupMessageUpdateManyWithoutToInput
}

input WorkGroupUpdateInput {
  company: CompanyUpdateOneWithoutWorkGroupInput
  colleagues: ColleagueUpdateManyWithoutGroupInput
  messages: WorkGroupMessageUpdateManyWithoutToInput
}

input WorkGroupUpdateOneInput {
  create: WorkGroupCreateInput
  update: WorkGroupUpdateDataInput
  upsert: WorkGroupUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupUpdateOneRequiredWithoutMessagesInput {
  create: WorkGroupCreateWithoutMessagesInput
  update: WorkGroupUpdateWithoutMessagesDataInput
  upsert: WorkGroupUpsertWithoutMessagesInput
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupUpdateOneWithoutColleaguesInput {
  create: WorkGroupCreateWithoutColleaguesInput
  update: WorkGroupUpdateWithoutColleaguesDataInput
  upsert: WorkGroupUpsertWithoutColleaguesInput
  delete: Boolean
  disconnect: Boolean
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupUpdateOneWithoutCompanyInput {
  create: WorkGroupCreateWithoutCompanyInput
  update: WorkGroupUpdateWithoutCompanyDataInput
  upsert: WorkGroupUpsertWithoutCompanyInput
  delete: Boolean
  disconnect: Boolean
  connect: WorkGroupWhereUniqueInput
}

input WorkGroupUpdateWithoutColleaguesDataInput {
  company: CompanyUpdateOneWithoutWorkGroupInput
  messages: WorkGroupMessageUpdateManyWithoutToInput
}

input WorkGroupUpdateWithoutCompanyDataInput {
  colleagues: ColleagueUpdateManyWithoutGroupInput
  messages: WorkGroupMessageUpdateManyWithoutToInput
}

input WorkGroupUpdateWithoutMessagesDataInput {
  company: CompanyUpdateOneWithoutWorkGroupInput
  colleagues: ColleagueUpdateManyWithoutGroupInput
}

input WorkGroupUpsertNestedInput {
  update: WorkGroupUpdateDataInput!
  create: WorkGroupCreateInput!
}

input WorkGroupUpsertWithoutColleaguesInput {
  update: WorkGroupUpdateWithoutColleaguesDataInput!
  create: WorkGroupCreateWithoutColleaguesInput!
}

input WorkGroupUpsertWithoutCompanyInput {
  update: WorkGroupUpdateWithoutCompanyDataInput!
  create: WorkGroupCreateWithoutCompanyInput!
}

input WorkGroupUpsertWithoutMessagesInput {
  update: WorkGroupUpdateWithoutMessagesDataInput!
  create: WorkGroupCreateWithoutMessagesInput!
}

input WorkGroupWhereInput {
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
  company: CompanyWhereInput
  colleagues_every: ColleagueWhereInput
  colleagues_some: ColleagueWhereInput
  colleagues_none: ColleagueWhereInput
  messages_every: WorkGroupMessageWhereInput
  messages_some: WorkGroupMessageWhereInput
  messages_none: WorkGroupMessageWhereInput
  AND: [WorkGroupWhereInput!]
  OR: [WorkGroupWhereInput!]
  NOT: [WorkGroupWhereInput!]
}

input WorkGroupWhereUniqueInput {
  id: ID
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
  jobContent: String
}

input WorkScalarWhereInput {
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
  AND: [WorkScalarWhereInput!]
  OR: [WorkScalarWhereInput!]
  NOT: [WorkScalarWhereInput!]
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
  post: StationUpdateOneInput
  jobContent: String
  worker: UserUpdateOneWithoutWorksInput
}

input WorkUpdateManyDataInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  jobContent: String
}

input WorkUpdateManyMutationInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  jobContent: String
}

input WorkUpdateManyWithoutCompanyInput {
  create: [WorkCreateWithoutCompanyInput!]
  delete: [WorkWhereUniqueInput!]
  connect: [WorkWhereUniqueInput!]
  disconnect: [WorkWhereUniqueInput!]
  update: [WorkUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [WorkUpsertWithWhereUniqueWithoutCompanyInput!]
  deleteMany: [WorkScalarWhereInput!]
  updateMany: [WorkUpdateManyWithWhereNestedInput!]
}

input WorkUpdateManyWithoutWorkerInput {
  create: [WorkCreateWithoutWorkerInput!]
  delete: [WorkWhereUniqueInput!]
  connect: [WorkWhereUniqueInput!]
  disconnect: [WorkWhereUniqueInput!]
  update: [WorkUpdateWithWhereUniqueWithoutWorkerInput!]
  upsert: [WorkUpsertWithWhereUniqueWithoutWorkerInput!]
  deleteMany: [WorkScalarWhereInput!]
  updateMany: [WorkUpdateManyWithWhereNestedInput!]
}

input WorkUpdateManyWithWhereNestedInput {
  where: WorkScalarWhereInput!
  data: WorkUpdateManyDataInput!
}

input WorkUpdateWithoutCompanyDataInput {
  startTime: DateTime
  endTime: DateTime
  department: String
  post: StationUpdateOneInput
  jobContent: String
  worker: UserUpdateOneWithoutWorksInput
}

input WorkUpdateWithoutWorkerDataInput {
  startTime: DateTime
  endTime: DateTime
  company: CompanyUpdateOneWithoutWorksInput
  department: String
  post: StationUpdateOneInput
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
  post: StationWhereInput
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
    