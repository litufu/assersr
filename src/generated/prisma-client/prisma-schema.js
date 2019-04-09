module.exports = {
        typeDefs: /* GraphQL */ `type Activity {
  id: ID!
  startTime: DateTime
  endTime: DateTime
  city: City
  location: String
  title: String
  content: String
  image: Photo
  number: Int
  type: ActivityType
  creater: User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateInput {
  startTime: DateTime
  endTime: DateTime
  city: CityCreateOneInput
  location: String
  title: String
  content: String
  image: PhotoCreateOneInput
  number: Int
  type: ActivityTypeCreateOneInput
  creater: UserCreateOneWithoutCreateActivitiesInput
  users: UserCreateManyWithoutPartakeActivitiesInput
}

input ActivityCreateManyWithoutCreaterInput {
  create: [ActivityCreateWithoutCreaterInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateManyWithoutUsersInput {
  create: [ActivityCreateWithoutUsersInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateWithoutCreaterInput {
  startTime: DateTime
  endTime: DateTime
  city: CityCreateOneInput
  location: String
  title: String
  content: String
  image: PhotoCreateOneInput
  number: Int
  type: ActivityTypeCreateOneInput
  users: UserCreateManyWithoutPartakeActivitiesInput
}

input ActivityCreateWithoutUsersInput {
  startTime: DateTime
  endTime: DateTime
  city: CityCreateOneInput
  location: String
  title: String
  content: String
  image: PhotoCreateOneInput
  number: Int
  type: ActivityTypeCreateOneInput
  creater: UserCreateOneWithoutCreateActivitiesInput
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  location_ASC
  location_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  number_ASC
  number_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityPreviousValues {
  id: ID!
  startTime: DateTime
  endTime: DateTime
  location: String
  title: String
  content: String
  number: Int
}

input ActivityScalarWhereInput {
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
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  AND: [ActivityScalarWhereInput!]
  OR: [ActivityScalarWhereInput!]
  NOT: [ActivityScalarWhereInput!]
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

type ActivityType {
  id: ID!
  first: String
  second: String
}

type ActivityTypeConnection {
  pageInfo: PageInfo!
  edges: [ActivityTypeEdge]!
  aggregate: AggregateActivityType!
}

input ActivityTypeCreateInput {
  first: String
  second: String
}

input ActivityTypeCreateOneInput {
  create: ActivityTypeCreateInput
  connect: ActivityTypeWhereUniqueInput
}

type ActivityTypeEdge {
  node: ActivityType!
  cursor: String!
}

enum ActivityTypeOrderByInput {
  id_ASC
  id_DESC
  first_ASC
  first_DESC
  second_ASC
  second_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityTypePreviousValues {
  id: ID!
  first: String
  second: String
}

type ActivityTypeSubscriptionPayload {
  mutation: MutationType!
  node: ActivityType
  updatedFields: [String!]
  previousValues: ActivityTypePreviousValues
}

input ActivityTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityTypeWhereInput
  AND: [ActivityTypeSubscriptionWhereInput!]
  OR: [ActivityTypeSubscriptionWhereInput!]
  NOT: [ActivityTypeSubscriptionWhereInput!]
}

input ActivityTypeUpdateDataInput {
  first: String
  second: String
}

input ActivityTypeUpdateInput {
  first: String
  second: String
}

input ActivityTypeUpdateManyMutationInput {
  first: String
  second: String
}

input ActivityTypeUpdateOneInput {
  create: ActivityTypeCreateInput
  update: ActivityTypeUpdateDataInput
  upsert: ActivityTypeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ActivityTypeWhereUniqueInput
}

input ActivityTypeUpsertNestedInput {
  update: ActivityTypeUpdateDataInput!
  create: ActivityTypeCreateInput!
}

input ActivityTypeWhereInput {
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
  first: String
  first_not: String
  first_in: [String!]
  first_not_in: [String!]
  first_lt: String
  first_lte: String
  first_gt: String
  first_gte: String
  first_contains: String
  first_not_contains: String
  first_starts_with: String
  first_not_starts_with: String
  first_ends_with: String
  first_not_ends_with: String
  second: String
  second_not: String
  second_in: [String!]
  second_not_in: [String!]
  second_lt: String
  second_lte: String
  second_gt: String
  second_gte: String
  second_contains: String
  second_not_contains: String
  second_starts_with: String
  second_not_starts_with: String
  second_ends_with: String
  second_not_ends_with: String
  AND: [ActivityTypeWhereInput!]
  OR: [ActivityTypeWhereInput!]
  NOT: [ActivityTypeWhereInput!]
}

input ActivityTypeWhereUniqueInput {
  id: ID
}

input ActivityUpdateInput {
  startTime: DateTime
  endTime: DateTime
  city: CityUpdateOneInput
  location: String
  title: String
  content: String
  image: PhotoUpdateOneInput
  number: Int
  type: ActivityTypeUpdateOneInput
  creater: UserUpdateOneWithoutCreateActivitiesInput
  users: UserUpdateManyWithoutPartakeActivitiesInput
}

input ActivityUpdateManyDataInput {
  startTime: DateTime
  endTime: DateTime
  location: String
  title: String
  content: String
  number: Int
}

input ActivityUpdateManyMutationInput {
  startTime: DateTime
  endTime: DateTime
  location: String
  title: String
  content: String
  number: Int
}

input ActivityUpdateManyWithoutCreaterInput {
  create: [ActivityCreateWithoutCreaterInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutCreaterInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutCreaterInput!]
  deleteMany: [ActivityScalarWhereInput!]
  updateMany: [ActivityUpdateManyWithWhereNestedInput!]
}

input ActivityUpdateManyWithoutUsersInput {
  create: [ActivityCreateWithoutUsersInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [ActivityScalarWhereInput!]
  updateMany: [ActivityUpdateManyWithWhereNestedInput!]
}

input ActivityUpdateManyWithWhereNestedInput {
  where: ActivityScalarWhereInput!
  data: ActivityUpdateManyDataInput!
}

input ActivityUpdateWithoutCreaterDataInput {
  startTime: DateTime
  endTime: DateTime
  city: CityUpdateOneInput
  location: String
  title: String
  content: String
  image: PhotoUpdateOneInput
  number: Int
  type: ActivityTypeUpdateOneInput
  users: UserUpdateManyWithoutPartakeActivitiesInput
}

input ActivityUpdateWithoutUsersDataInput {
  startTime: DateTime
  endTime: DateTime
  city: CityUpdateOneInput
  location: String
  title: String
  content: String
  image: PhotoUpdateOneInput
  number: Int
  type: ActivityTypeUpdateOneInput
  creater: UserUpdateOneWithoutCreateActivitiesInput
}

input ActivityUpdateWithWhereUniqueWithoutCreaterInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutCreaterDataInput!
}

input ActivityUpdateWithWhereUniqueWithoutUsersInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutUsersDataInput!
}

input ActivityUpsertWithWhereUniqueWithoutCreaterInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutCreaterDataInput!
  create: ActivityCreateWithoutCreaterInput!
}

input ActivityUpsertWithWhereUniqueWithoutUsersInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutUsersDataInput!
  create: ActivityCreateWithoutUsersInput!
}

input ActivityWhereInput {
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
  city: CityWhereInput
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
  image: PhotoWhereInput
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  type: ActivityTypeWhereInput
  creater: UserWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type Advertisement {
  id: ID!
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
  startTime: DateTime
  endTime: DateTime
}

type AdvertisementConnection {
  pageInfo: PageInfo!
  edges: [AdvertisementEdge]!
  aggregate: AggregateAdvertisement!
}

input AdvertisementCreateInput {
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
  startTime: DateTime
  endTime: DateTime
}

type AdvertisementEdge {
  node: Advertisement!
  cursor: String!
}

enum AdvertisementOrderByInput {
  id_ASC
  id_DESC
  image1_ASC
  image1_DESC
  image2_ASC
  image2_DESC
  image3_ASC
  image3_DESC
  image4_ASC
  image4_DESC
  image5_ASC
  image5_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdvertisementPreviousValues {
  id: ID!
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
  startTime: DateTime
  endTime: DateTime
}

type AdvertisementSubscriptionPayload {
  mutation: MutationType!
  node: Advertisement
  updatedFields: [String!]
  previousValues: AdvertisementPreviousValues
}

input AdvertisementSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdvertisementWhereInput
  AND: [AdvertisementSubscriptionWhereInput!]
  OR: [AdvertisementSubscriptionWhereInput!]
  NOT: [AdvertisementSubscriptionWhereInput!]
}

input AdvertisementUpdateInput {
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
  startTime: DateTime
  endTime: DateTime
}

input AdvertisementUpdateManyMutationInput {
  image1: String
  image2: String
  image3: String
  image4: String
  image5: String
  startTime: DateTime
  endTime: DateTime
}

input AdvertisementWhereInput {
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
  image1: String
  image1_not: String
  image1_in: [String!]
  image1_not_in: [String!]
  image1_lt: String
  image1_lte: String
  image1_gt: String
  image1_gte: String
  image1_contains: String
  image1_not_contains: String
  image1_starts_with: String
  image1_not_starts_with: String
  image1_ends_with: String
  image1_not_ends_with: String
  image2: String
  image2_not: String
  image2_in: [String!]
  image2_not_in: [String!]
  image2_lt: String
  image2_lte: String
  image2_gt: String
  image2_gte: String
  image2_contains: String
  image2_not_contains: String
  image2_starts_with: String
  image2_not_starts_with: String
  image2_ends_with: String
  image2_not_ends_with: String
  image3: String
  image3_not: String
  image3_in: [String!]
  image3_not_in: [String!]
  image3_lt: String
  image3_lte: String
  image3_gt: String
  image3_gte: String
  image3_contains: String
  image3_not_contains: String
  image3_starts_with: String
  image3_not_starts_with: String
  image3_ends_with: String
  image3_not_ends_with: String
  image4: String
  image4_not: String
  image4_in: [String!]
  image4_not_in: [String!]
  image4_lt: String
  image4_lte: String
  image4_gt: String
  image4_gte: String
  image4_contains: String
  image4_not_contains: String
  image4_starts_with: String
  image4_not_starts_with: String
  image4_ends_with: String
  image4_not_ends_with: String
  image5: String
  image5_not: String
  image5_in: [String!]
  image5_not_in: [String!]
  image5_lt: String
  image5_lte: String
  image5_gt: String
  image5_gte: String
  image5_contains: String
  image5_not_contains: String
  image5_starts_with: String
  image5_not_starts_with: String
  image5_ends_with: String
  image5_not_ends_with: String
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
  AND: [AdvertisementWhereInput!]
  OR: [AdvertisementWhereInput!]
  NOT: [AdvertisementWhereInput!]
}

input AdvertisementWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateActivityType {
  count: Int!
}

type AggregateAdvertisement {
  count: Int!
}

type AggregateArea {
  count: Int!
}

type AggregateBootCount {
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

type AggregateFeeSetting {
  count: Int!
}

type AggregateFindPassWord {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateGroupMessage {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateLocationGroup {
  count: Int!
}

type AggregateLogs {
  count: Int!
}

type AggregateLoveMatching {
  count: Int!
}

type AggregateLoveSetting {
  count: Int!
}

type AggregateLoveSignUp {
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

type AggregatePartnerCondition {
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

type AggregateProduct {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateProvince {
  count: Int!
}

type AggregateRegisterCount {
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

type AggregateSkill {
  count: Int!
}

type AggregateStation {
  count: Int!
}

type AggregateStreet {
  count: Int!
}

type AggregateTrade {
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

type BootCount {
  id: ID!
  bootUser: User
  createdAt: DateTime!
}

type BootCountConnection {
  pageInfo: PageInfo!
  edges: [BootCountEdge]!
  aggregate: AggregateBootCount!
}

input BootCountCreateInput {
  bootUser: UserCreateOneInput
}

type BootCountEdge {
  node: BootCount!
  cursor: String!
}

enum BootCountOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BootCountPreviousValues {
  id: ID!
  createdAt: DateTime!
}

type BootCountSubscriptionPayload {
  mutation: MutationType!
  node: BootCount
  updatedFields: [String!]
  previousValues: BootCountPreviousValues
}

input BootCountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BootCountWhereInput
  AND: [BootCountSubscriptionWhereInput!]
  OR: [BootCountSubscriptionWhereInput!]
  NOT: [BootCountSubscriptionWhereInput!]
}

input BootCountUpdateInput {
  bootUser: UserUpdateOneInput
}

input BootCountWhereInput {
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
  bootUser: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [BootCountWhereInput!]
  OR: [BootCountWhereInput!]
  NOT: [BootCountWhereInput!]
}

input BootCountWhereUniqueInput {
  id: ID
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
}

input ClassGroupCreateOneWithoutMembersInput {
  create: ClassGroupCreateWithoutMembersInput
  connect: ClassGroupWhereUniqueInput
}

input ClassGroupCreateWithoutMembersInput {
  study: SchoolEduCreateOneInput
  name: String
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
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutFatherInput {
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
  users: UserCreateManyWithoutFamilyGroupInput
}

input FamilyGroupCreateWithoutUsersInput {
  father: PersonCreateOneWithoutAsFatherInput
  mother: PersonCreateOneWithoutAsMotherInput
  creater: UserCreateOneWithoutCreaterInput
  name: String
  families: FamilyCreateManyInput
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
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutFatherDataInput {
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
  users: UserUpdateManyWithoutFamilyGroupInput
}

input FamilyGroupUpdateWithoutUsersDataInput {
  father: PersonUpdateOneWithoutAsFatherInput
  mother: PersonUpdateOneWithoutAsMotherInput
  creater: UserUpdateOneWithoutCreaterInput
  name: String
  families: FamilyUpdateManyInput
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

type FeeSetting {
  id: ID!
  name: String
  fee: Boolean
}

type FeeSettingConnection {
  pageInfo: PageInfo!
  edges: [FeeSettingEdge]!
  aggregate: AggregateFeeSetting!
}

input FeeSettingCreateInput {
  name: String
  fee: Boolean
}

type FeeSettingEdge {
  node: FeeSetting!
  cursor: String!
}

enum FeeSettingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  fee_ASC
  fee_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FeeSettingPreviousValues {
  id: ID!
  name: String
  fee: Boolean
}

type FeeSettingSubscriptionPayload {
  mutation: MutationType!
  node: FeeSetting
  updatedFields: [String!]
  previousValues: FeeSettingPreviousValues
}

input FeeSettingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FeeSettingWhereInput
  AND: [FeeSettingSubscriptionWhereInput!]
  OR: [FeeSettingSubscriptionWhereInput!]
  NOT: [FeeSettingSubscriptionWhereInput!]
}

input FeeSettingUpdateInput {
  name: String
  fee: Boolean
}

input FeeSettingUpdateManyMutationInput {
  name: String
  fee: Boolean
}

input FeeSettingWhereInput {
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
  fee: Boolean
  fee_not: Boolean
  AND: [FeeSettingWhereInput!]
  OR: [FeeSettingWhereInput!]
  NOT: [FeeSettingWhereInput!]
}

input FeeSettingWhereUniqueInput {
  id: ID
}

type FindPassWord {
  id: ID!
  times: Int
  forgetter: User
  remmember(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type FindPassWordConnection {
  pageInfo: PageInfo!
  edges: [FindPassWordEdge]!
  aggregate: AggregateFindPassWord!
}

input FindPassWordCreateInput {
  times: Int
  forgetter: UserCreateOneWithoutForgetPasswordInput
  remmember: UserCreateManyWithoutRemmemberPasswordInput
}

input FindPassWordCreateManyWithoutRemmemberInput {
  create: [FindPassWordCreateWithoutRemmemberInput!]
  connect: [FindPassWordWhereUniqueInput!]
}

input FindPassWordCreateOneWithoutForgetterInput {
  create: FindPassWordCreateWithoutForgetterInput
  connect: FindPassWordWhereUniqueInput
}

input FindPassWordCreateWithoutForgetterInput {
  times: Int
  remmember: UserCreateManyWithoutRemmemberPasswordInput
}

input FindPassWordCreateWithoutRemmemberInput {
  times: Int
  forgetter: UserCreateOneWithoutForgetPasswordInput
}

type FindPassWordEdge {
  node: FindPassWord!
  cursor: String!
}

enum FindPassWordOrderByInput {
  id_ASC
  id_DESC
  times_ASC
  times_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FindPassWordPreviousValues {
  id: ID!
  times: Int
}

input FindPassWordScalarWhereInput {
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
  times: Int
  times_not: Int
  times_in: [Int!]
  times_not_in: [Int!]
  times_lt: Int
  times_lte: Int
  times_gt: Int
  times_gte: Int
  AND: [FindPassWordScalarWhereInput!]
  OR: [FindPassWordScalarWhereInput!]
  NOT: [FindPassWordScalarWhereInput!]
}

type FindPassWordSubscriptionPayload {
  mutation: MutationType!
  node: FindPassWord
  updatedFields: [String!]
  previousValues: FindPassWordPreviousValues
}

input FindPassWordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FindPassWordWhereInput
  AND: [FindPassWordSubscriptionWhereInput!]
  OR: [FindPassWordSubscriptionWhereInput!]
  NOT: [FindPassWordSubscriptionWhereInput!]
}

input FindPassWordUpdateInput {
  times: Int
  forgetter: UserUpdateOneWithoutForgetPasswordInput
  remmember: UserUpdateManyWithoutRemmemberPasswordInput
}

input FindPassWordUpdateManyDataInput {
  times: Int
}

input FindPassWordUpdateManyMutationInput {
  times: Int
}

input FindPassWordUpdateManyWithoutRemmemberInput {
  create: [FindPassWordCreateWithoutRemmemberInput!]
  delete: [FindPassWordWhereUniqueInput!]
  connect: [FindPassWordWhereUniqueInput!]
  disconnect: [FindPassWordWhereUniqueInput!]
  update: [FindPassWordUpdateWithWhereUniqueWithoutRemmemberInput!]
  upsert: [FindPassWordUpsertWithWhereUniqueWithoutRemmemberInput!]
  deleteMany: [FindPassWordScalarWhereInput!]
  updateMany: [FindPassWordUpdateManyWithWhereNestedInput!]
}

input FindPassWordUpdateManyWithWhereNestedInput {
  where: FindPassWordScalarWhereInput!
  data: FindPassWordUpdateManyDataInput!
}

input FindPassWordUpdateOneWithoutForgetterInput {
  create: FindPassWordCreateWithoutForgetterInput
  update: FindPassWordUpdateWithoutForgetterDataInput
  upsert: FindPassWordUpsertWithoutForgetterInput
  delete: Boolean
  disconnect: Boolean
  connect: FindPassWordWhereUniqueInput
}

input FindPassWordUpdateWithoutForgetterDataInput {
  times: Int
  remmember: UserUpdateManyWithoutRemmemberPasswordInput
}

input FindPassWordUpdateWithoutRemmemberDataInput {
  times: Int
  forgetter: UserUpdateOneWithoutForgetPasswordInput
}

input FindPassWordUpdateWithWhereUniqueWithoutRemmemberInput {
  where: FindPassWordWhereUniqueInput!
  data: FindPassWordUpdateWithoutRemmemberDataInput!
}

input FindPassWordUpsertWithoutForgetterInput {
  update: FindPassWordUpdateWithoutForgetterDataInput!
  create: FindPassWordCreateWithoutForgetterInput!
}

input FindPassWordUpsertWithWhereUniqueWithoutRemmemberInput {
  where: FindPassWordWhereUniqueInput!
  update: FindPassWordUpdateWithoutRemmemberDataInput!
  create: FindPassWordCreateWithoutRemmemberInput!
}

input FindPassWordWhereInput {
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
  times: Int
  times_not: Int
  times_in: [Int!]
  times_not_in: [Int!]
  times_lt: Int
  times_lte: Int
  times_gt: Int
  times_gte: Int
  forgetter: UserWhereInput
  remmember_every: UserWhereInput
  remmember_some: UserWhereInput
  remmember_none: UserWhereInput
  AND: [FindPassWordWhereInput!]
  OR: [FindPassWordWhereInput!]
  NOT: [FindPassWordWhereInput!]
}

input FindPassWordWhereUniqueInput {
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
  Activity
  SameCity
  SameOccupation
  SameDisease
  RegStatus
}

type GroupMessage {
  id: ID!
  type: GroupKind
  to: String!
  from: User!
  text: String
  image: Photo
  createdAt: DateTime!
}

type GroupMessageConnection {
  pageInfo: PageInfo!
  edges: [GroupMessageEdge]!
  aggregate: AggregateGroupMessage!
}

input GroupMessageCreateInput {
  type: GroupKind
  to: String!
  from: UserCreateOneWithoutGroupMessagesInput!
  text: String
  image: PhotoCreateOneInput
}

input GroupMessageCreateManyWithoutFromInput {
  create: [GroupMessageCreateWithoutFromInput!]
  connect: [GroupMessageWhereUniqueInput!]
}

input GroupMessageCreateWithoutFromInput {
  type: GroupKind
  to: String!
  text: String
  image: PhotoCreateOneInput
}

type GroupMessageEdge {
  node: GroupMessage!
  cursor: String!
}

enum GroupMessageOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  to_ASC
  to_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupMessagePreviousValues {
  id: ID!
  type: GroupKind
  to: String!
  text: String
  createdAt: DateTime!
}

input GroupMessageScalarWhereInput {
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
  to: String
  to_not: String
  to_in: [String!]
  to_not_in: [String!]
  to_lt: String
  to_lte: String
  to_gt: String
  to_gte: String
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
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
  AND: [GroupMessageScalarWhereInput!]
  OR: [GroupMessageScalarWhereInput!]
  NOT: [GroupMessageScalarWhereInput!]
}

type GroupMessageSubscriptionPayload {
  mutation: MutationType!
  node: GroupMessage
  updatedFields: [String!]
  previousValues: GroupMessagePreviousValues
}

input GroupMessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupMessageWhereInput
  AND: [GroupMessageSubscriptionWhereInput!]
  OR: [GroupMessageSubscriptionWhereInput!]
  NOT: [GroupMessageSubscriptionWhereInput!]
}

input GroupMessageUpdateInput {
  type: GroupKind
  to: String
  from: UserUpdateOneRequiredWithoutGroupMessagesInput
  text: String
  image: PhotoUpdateOneInput
}

input GroupMessageUpdateManyDataInput {
  type: GroupKind
  to: String
  text: String
}

input GroupMessageUpdateManyMutationInput {
  type: GroupKind
  to: String
  text: String
}

input GroupMessageUpdateManyWithoutFromInput {
  create: [GroupMessageCreateWithoutFromInput!]
  delete: [GroupMessageWhereUniqueInput!]
  connect: [GroupMessageWhereUniqueInput!]
  disconnect: [GroupMessageWhereUniqueInput!]
  update: [GroupMessageUpdateWithWhereUniqueWithoutFromInput!]
  upsert: [GroupMessageUpsertWithWhereUniqueWithoutFromInput!]
  deleteMany: [GroupMessageScalarWhereInput!]
  updateMany: [GroupMessageUpdateManyWithWhereNestedInput!]
}

input GroupMessageUpdateManyWithWhereNestedInput {
  where: GroupMessageScalarWhereInput!
  data: GroupMessageUpdateManyDataInput!
}

input GroupMessageUpdateWithoutFromDataInput {
  type: GroupKind
  to: String
  text: String
  image: PhotoUpdateOneInput
}

input GroupMessageUpdateWithWhereUniqueWithoutFromInput {
  where: GroupMessageWhereUniqueInput!
  data: GroupMessageUpdateWithoutFromDataInput!
}

input GroupMessageUpsertWithWhereUniqueWithoutFromInput {
  where: GroupMessageWhereUniqueInput!
  update: GroupMessageUpdateWithoutFromDataInput!
  create: GroupMessageCreateWithoutFromInput!
}

input GroupMessageWhereInput {
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
  to: String
  to_not: String
  to_in: [String!]
  to_not_in: [String!]
  to_lt: String
  to_lte: String
  to_gt: String
  to_gte: String
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
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
  AND: [GroupMessageWhereInput!]
  OR: [GroupMessageWhereInput!]
  NOT: [GroupMessageWhereInput!]
}

input GroupMessageWhereUniqueInput {
  id: ID
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
}

input LocationGroupCreateManyWithoutUsersInput {
  create: [LocationGroupCreateWithoutUsersInput!]
  connect: [LocationGroupWhereUniqueInput!]
}

input LocationGroupCreateWithoutUsersInput {
  kind: LocationGroupKind
  code: String
  name: String
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

input LocationGroupUpdateInput {
  kind: LocationGroupKind
  code: String
  name: String
  users: UserUpdateManyWithoutLocationGroupsInput
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

input LocationGroupUpdateWithoutUsersDataInput {
  kind: LocationGroupKind
  code: String
  name: String
}

input LocationGroupUpdateWithWhereUniqueWithoutUsersInput {
  where: LocationGroupWhereUniqueInput!
  data: LocationGroupUpdateWithoutUsersDataInput!
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

type LoveMatching {
  id: ID!
  period: String
  city: City
  woman: User
  man: User
}

type LoveMatchingConnection {
  pageInfo: PageInfo!
  edges: [LoveMatchingEdge]!
  aggregate: AggregateLoveMatching!
}

input LoveMatchingCreateInput {
  period: String
  city: CityCreateOneInput
  woman: UserCreateOneWithoutLoveWomanInput
  man: UserCreateOneWithoutLoveManInput
}

input LoveMatchingCreateManyWithoutManInput {
  create: [LoveMatchingCreateWithoutManInput!]
  connect: [LoveMatchingWhereUniqueInput!]
}

input LoveMatchingCreateManyWithoutWomanInput {
  create: [LoveMatchingCreateWithoutWomanInput!]
  connect: [LoveMatchingWhereUniqueInput!]
}

input LoveMatchingCreateWithoutManInput {
  period: String
  city: CityCreateOneInput
  woman: UserCreateOneWithoutLoveWomanInput
}

input LoveMatchingCreateWithoutWomanInput {
  period: String
  city: CityCreateOneInput
  man: UserCreateOneWithoutLoveManInput
}

type LoveMatchingEdge {
  node: LoveMatching!
  cursor: String!
}

enum LoveMatchingOrderByInput {
  id_ASC
  id_DESC
  period_ASC
  period_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LoveMatchingPreviousValues {
  id: ID!
  period: String
}

input LoveMatchingScalarWhereInput {
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
  period: String
  period_not: String
  period_in: [String!]
  period_not_in: [String!]
  period_lt: String
  period_lte: String
  period_gt: String
  period_gte: String
  period_contains: String
  period_not_contains: String
  period_starts_with: String
  period_not_starts_with: String
  period_ends_with: String
  period_not_ends_with: String
  AND: [LoveMatchingScalarWhereInput!]
  OR: [LoveMatchingScalarWhereInput!]
  NOT: [LoveMatchingScalarWhereInput!]
}

type LoveMatchingSubscriptionPayload {
  mutation: MutationType!
  node: LoveMatching
  updatedFields: [String!]
  previousValues: LoveMatchingPreviousValues
}

input LoveMatchingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LoveMatchingWhereInput
  AND: [LoveMatchingSubscriptionWhereInput!]
  OR: [LoveMatchingSubscriptionWhereInput!]
  NOT: [LoveMatchingSubscriptionWhereInput!]
}

input LoveMatchingUpdateInput {
  period: String
  city: CityUpdateOneInput
  woman: UserUpdateOneWithoutLoveWomanInput
  man: UserUpdateOneWithoutLoveManInput
}

input LoveMatchingUpdateManyDataInput {
  period: String
}

input LoveMatchingUpdateManyMutationInput {
  period: String
}

input LoveMatchingUpdateManyWithoutManInput {
  create: [LoveMatchingCreateWithoutManInput!]
  delete: [LoveMatchingWhereUniqueInput!]
  connect: [LoveMatchingWhereUniqueInput!]
  disconnect: [LoveMatchingWhereUniqueInput!]
  update: [LoveMatchingUpdateWithWhereUniqueWithoutManInput!]
  upsert: [LoveMatchingUpsertWithWhereUniqueWithoutManInput!]
  deleteMany: [LoveMatchingScalarWhereInput!]
  updateMany: [LoveMatchingUpdateManyWithWhereNestedInput!]
}

input LoveMatchingUpdateManyWithoutWomanInput {
  create: [LoveMatchingCreateWithoutWomanInput!]
  delete: [LoveMatchingWhereUniqueInput!]
  connect: [LoveMatchingWhereUniqueInput!]
  disconnect: [LoveMatchingWhereUniqueInput!]
  update: [LoveMatchingUpdateWithWhereUniqueWithoutWomanInput!]
  upsert: [LoveMatchingUpsertWithWhereUniqueWithoutWomanInput!]
  deleteMany: [LoveMatchingScalarWhereInput!]
  updateMany: [LoveMatchingUpdateManyWithWhereNestedInput!]
}

input LoveMatchingUpdateManyWithWhereNestedInput {
  where: LoveMatchingScalarWhereInput!
  data: LoveMatchingUpdateManyDataInput!
}

input LoveMatchingUpdateWithoutManDataInput {
  period: String
  city: CityUpdateOneInput
  woman: UserUpdateOneWithoutLoveWomanInput
}

input LoveMatchingUpdateWithoutWomanDataInput {
  period: String
  city: CityUpdateOneInput
  man: UserUpdateOneWithoutLoveManInput
}

input LoveMatchingUpdateWithWhereUniqueWithoutManInput {
  where: LoveMatchingWhereUniqueInput!
  data: LoveMatchingUpdateWithoutManDataInput!
}

input LoveMatchingUpdateWithWhereUniqueWithoutWomanInput {
  where: LoveMatchingWhereUniqueInput!
  data: LoveMatchingUpdateWithoutWomanDataInput!
}

input LoveMatchingUpsertWithWhereUniqueWithoutManInput {
  where: LoveMatchingWhereUniqueInput!
  update: LoveMatchingUpdateWithoutManDataInput!
  create: LoveMatchingCreateWithoutManInput!
}

input LoveMatchingUpsertWithWhereUniqueWithoutWomanInput {
  where: LoveMatchingWhereUniqueInput!
  update: LoveMatchingUpdateWithoutWomanDataInput!
  create: LoveMatchingCreateWithoutWomanInput!
}

input LoveMatchingWhereInput {
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
  period: String
  period_not: String
  period_in: [String!]
  period_not_in: [String!]
  period_lt: String
  period_lte: String
  period_gt: String
  period_gte: String
  period_contains: String
  period_not_contains: String
  period_starts_with: String
  period_not_starts_with: String
  period_ends_with: String
  period_not_ends_with: String
  city: CityWhereInput
  woman: UserWhereInput
  man: UserWhereInput
  AND: [LoveMatchingWhereInput!]
  OR: [LoveMatchingWhereInput!]
  NOT: [LoveMatchingWhereInput!]
}

input LoveMatchingWhereUniqueInput {
  id: ID
}

type LoveSetting {
  id: ID!
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
  user: User!
}

type LoveSettingConnection {
  pageInfo: PageInfo!
  edges: [LoveSettingEdge]!
  aggregate: AggregateLoveSetting!
}

input LoveSettingCreateInput {
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
  user: UserCreateOneWithoutLoveSettingInput!
}

input LoveSettingCreateOneWithoutUserInput {
  create: LoveSettingCreateWithoutUserInput
  connect: LoveSettingWhereUniqueInput
}

input LoveSettingCreateWithoutUserInput {
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
}

type LoveSettingEdge {
  node: LoveSetting!
  cursor: String!
}

enum LoveSettingOrderByInput {
  id_ASC
  id_DESC
  myHeight_ASC
  myHeight_DESC
  myWeight_ASC
  myWeight_DESC
  otherHeightMin_ASC
  otherHeightMin_DESC
  otherHeightMax_ASC
  otherHeightMax_DESC
  otherWeightMin_ASC
  otherWeightMin_DESC
  otherWeightMax_ASC
  otherWeightMax_DESC
  otherAgeMin_ASC
  otherAgeMin_DESC
  otherAgeMax_ASC
  otherAgeMax_DESC
  dateTime_ASC
  dateTime_DESC
  datePlace_ASC
  datePlace_DESC
  memeberGrade_ASC
  memeberGrade_DESC
  memeberGradeEndTime_ASC
  memeberGradeEndTime_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LoveSettingPreviousValues {
  id: ID!
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
}

type LoveSettingSubscriptionPayload {
  mutation: MutationType!
  node: LoveSetting
  updatedFields: [String!]
  previousValues: LoveSettingPreviousValues
}

input LoveSettingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LoveSettingWhereInput
  AND: [LoveSettingSubscriptionWhereInput!]
  OR: [LoveSettingSubscriptionWhereInput!]
  NOT: [LoveSettingSubscriptionWhereInput!]
}

input LoveSettingUpdateInput {
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
  user: UserUpdateOneRequiredWithoutLoveSettingInput
}

input LoveSettingUpdateManyMutationInput {
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
}

input LoveSettingUpdateOneWithoutUserInput {
  create: LoveSettingCreateWithoutUserInput
  update: LoveSettingUpdateWithoutUserDataInput
  upsert: LoveSettingUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: LoveSettingWhereUniqueInput
}

input LoveSettingUpdateWithoutUserDataInput {
  myHeight: Int
  myWeight: Int
  otherHeightMin: Int
  otherHeightMax: Int
  otherWeightMin: Int
  otherWeightMax: Int
  otherAgeMin: Int
  otherAgeMax: Int
  dateTime: String
  datePlace: String
  memeberGrade: Int
  memeberGradeEndTime: String
}

input LoveSettingUpsertWithoutUserInput {
  update: LoveSettingUpdateWithoutUserDataInput!
  create: LoveSettingCreateWithoutUserInput!
}

input LoveSettingWhereInput {
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
  myHeight: Int
  myHeight_not: Int
  myHeight_in: [Int!]
  myHeight_not_in: [Int!]
  myHeight_lt: Int
  myHeight_lte: Int
  myHeight_gt: Int
  myHeight_gte: Int
  myWeight: Int
  myWeight_not: Int
  myWeight_in: [Int!]
  myWeight_not_in: [Int!]
  myWeight_lt: Int
  myWeight_lte: Int
  myWeight_gt: Int
  myWeight_gte: Int
  otherHeightMin: Int
  otherHeightMin_not: Int
  otherHeightMin_in: [Int!]
  otherHeightMin_not_in: [Int!]
  otherHeightMin_lt: Int
  otherHeightMin_lte: Int
  otherHeightMin_gt: Int
  otherHeightMin_gte: Int
  otherHeightMax: Int
  otherHeightMax_not: Int
  otherHeightMax_in: [Int!]
  otherHeightMax_not_in: [Int!]
  otherHeightMax_lt: Int
  otherHeightMax_lte: Int
  otherHeightMax_gt: Int
  otherHeightMax_gte: Int
  otherWeightMin: Int
  otherWeightMin_not: Int
  otherWeightMin_in: [Int!]
  otherWeightMin_not_in: [Int!]
  otherWeightMin_lt: Int
  otherWeightMin_lte: Int
  otherWeightMin_gt: Int
  otherWeightMin_gte: Int
  otherWeightMax: Int
  otherWeightMax_not: Int
  otherWeightMax_in: [Int!]
  otherWeightMax_not_in: [Int!]
  otherWeightMax_lt: Int
  otherWeightMax_lte: Int
  otherWeightMax_gt: Int
  otherWeightMax_gte: Int
  otherAgeMin: Int
  otherAgeMin_not: Int
  otherAgeMin_in: [Int!]
  otherAgeMin_not_in: [Int!]
  otherAgeMin_lt: Int
  otherAgeMin_lte: Int
  otherAgeMin_gt: Int
  otherAgeMin_gte: Int
  otherAgeMax: Int
  otherAgeMax_not: Int
  otherAgeMax_in: [Int!]
  otherAgeMax_not_in: [Int!]
  otherAgeMax_lt: Int
  otherAgeMax_lte: Int
  otherAgeMax_gt: Int
  otherAgeMax_gte: Int
  dateTime: String
  dateTime_not: String
  dateTime_in: [String!]
  dateTime_not_in: [String!]
  dateTime_lt: String
  dateTime_lte: String
  dateTime_gt: String
  dateTime_gte: String
  dateTime_contains: String
  dateTime_not_contains: String
  dateTime_starts_with: String
  dateTime_not_starts_with: String
  dateTime_ends_with: String
  dateTime_not_ends_with: String
  datePlace: String
  datePlace_not: String
  datePlace_in: [String!]
  datePlace_not_in: [String!]
  datePlace_lt: String
  datePlace_lte: String
  datePlace_gt: String
  datePlace_gte: String
  datePlace_contains: String
  datePlace_not_contains: String
  datePlace_starts_with: String
  datePlace_not_starts_with: String
  datePlace_ends_with: String
  datePlace_not_ends_with: String
  memeberGrade: Int
  memeberGrade_not: Int
  memeberGrade_in: [Int!]
  memeberGrade_not_in: [Int!]
  memeberGrade_lt: Int
  memeberGrade_lte: Int
  memeberGrade_gt: Int
  memeberGrade_gte: Int
  memeberGradeEndTime: String
  memeberGradeEndTime_not: String
  memeberGradeEndTime_in: [String!]
  memeberGradeEndTime_not_in: [String!]
  memeberGradeEndTime_lt: String
  memeberGradeEndTime_lte: String
  memeberGradeEndTime_gt: String
  memeberGradeEndTime_gte: String
  memeberGradeEndTime_contains: String
  memeberGradeEndTime_not_contains: String
  memeberGradeEndTime_starts_with: String
  memeberGradeEndTime_not_starts_with: String
  memeberGradeEndTime_ends_with: String
  memeberGradeEndTime_not_ends_with: String
  user: UserWhereInput
  AND: [LoveSettingWhereInput!]
  OR: [LoveSettingWhereInput!]
  NOT: [LoveSettingWhereInput!]
}

input LoveSettingWhereUniqueInput {
  id: ID
}

type LoveSignUp {
  id: ID!
  period: String
  city: City
  person: User
}

type LoveSignUpConnection {
  pageInfo: PageInfo!
  edges: [LoveSignUpEdge]!
  aggregate: AggregateLoveSignUp!
}

input LoveSignUpCreateInput {
  period: String
  city: CityCreateOneInput
  person: UserCreateOneWithoutSignUpLoveInput
}

input LoveSignUpCreateOneWithoutPersonInput {
  create: LoveSignUpCreateWithoutPersonInput
  connect: LoveSignUpWhereUniqueInput
}

input LoveSignUpCreateWithoutPersonInput {
  period: String
  city: CityCreateOneInput
}

type LoveSignUpEdge {
  node: LoveSignUp!
  cursor: String!
}

enum LoveSignUpOrderByInput {
  id_ASC
  id_DESC
  period_ASC
  period_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LoveSignUpPreviousValues {
  id: ID!
  period: String
}

type LoveSignUpSubscriptionPayload {
  mutation: MutationType!
  node: LoveSignUp
  updatedFields: [String!]
  previousValues: LoveSignUpPreviousValues
}

input LoveSignUpSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LoveSignUpWhereInput
  AND: [LoveSignUpSubscriptionWhereInput!]
  OR: [LoveSignUpSubscriptionWhereInput!]
  NOT: [LoveSignUpSubscriptionWhereInput!]
}

input LoveSignUpUpdateInput {
  period: String
  city: CityUpdateOneInput
  person: UserUpdateOneWithoutSignUpLoveInput
}

input LoveSignUpUpdateManyMutationInput {
  period: String
}

input LoveSignUpUpdateOneWithoutPersonInput {
  create: LoveSignUpCreateWithoutPersonInput
  update: LoveSignUpUpdateWithoutPersonDataInput
  upsert: LoveSignUpUpsertWithoutPersonInput
  delete: Boolean
  disconnect: Boolean
  connect: LoveSignUpWhereUniqueInput
}

input LoveSignUpUpdateWithoutPersonDataInput {
  period: String
  city: CityUpdateOneInput
}

input LoveSignUpUpsertWithoutPersonInput {
  update: LoveSignUpUpdateWithoutPersonDataInput!
  create: LoveSignUpCreateWithoutPersonInput!
}

input LoveSignUpWhereInput {
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
  period: String
  period_not: String
  period_in: [String!]
  period_not_in: [String!]
  period_lt: String
  period_lte: String
  period_gt: String
  period_gte: String
  period_contains: String
  period_not_contains: String
  period_starts_with: String
  period_not_starts_with: String
  period_ends_with: String
  period_not_ends_with: String
  city: CityWhereInput
  person: UserWhereInput
  AND: [LoveSignUpWhereInput!]
  OR: [LoveSignUpWhereInput!]
  NOT: [LoveSignUpWhereInput!]
}

input LoveSignUpWhereUniqueInput {
  id: ID
}

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
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateManyMutationInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createActivityType(data: ActivityTypeCreateInput!): ActivityType!
  updateActivityType(data: ActivityTypeUpdateInput!, where: ActivityTypeWhereUniqueInput!): ActivityType
  updateManyActivityTypes(data: ActivityTypeUpdateManyMutationInput!, where: ActivityTypeWhereInput): BatchPayload!
  upsertActivityType(where: ActivityTypeWhereUniqueInput!, create: ActivityTypeCreateInput!, update: ActivityTypeUpdateInput!): ActivityType!
  deleteActivityType(where: ActivityTypeWhereUniqueInput!): ActivityType
  deleteManyActivityTypes(where: ActivityTypeWhereInput): BatchPayload!
  createAdvertisement(data: AdvertisementCreateInput!): Advertisement!
  updateAdvertisement(data: AdvertisementUpdateInput!, where: AdvertisementWhereUniqueInput!): Advertisement
  updateManyAdvertisements(data: AdvertisementUpdateManyMutationInput!, where: AdvertisementWhereInput): BatchPayload!
  upsertAdvertisement(where: AdvertisementWhereUniqueInput!, create: AdvertisementCreateInput!, update: AdvertisementUpdateInput!): Advertisement!
  deleteAdvertisement(where: AdvertisementWhereUniqueInput!): Advertisement
  deleteManyAdvertisements(where: AdvertisementWhereInput): BatchPayload!
  createArea(data: AreaCreateInput!): Area!
  updateArea(data: AreaUpdateInput!, where: AreaWhereUniqueInput!): Area
  updateManyAreas(data: AreaUpdateManyMutationInput!, where: AreaWhereInput): BatchPayload!
  upsertArea(where: AreaWhereUniqueInput!, create: AreaCreateInput!, update: AreaUpdateInput!): Area!
  deleteArea(where: AreaWhereUniqueInput!): Area
  deleteManyAreas(where: AreaWhereInput): BatchPayload!
  createBootCount(data: BootCountCreateInput!): BootCount!
  updateBootCount(data: BootCountUpdateInput!, where: BootCountWhereUniqueInput!): BootCount
  upsertBootCount(where: BootCountWhereUniqueInput!, create: BootCountCreateInput!, update: BootCountUpdateInput!): BootCount!
  deleteBootCount(where: BootCountWhereUniqueInput!): BootCount
  deleteManyBootCounts(where: BootCountWhereInput): BatchPayload!
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
  createFeeSetting(data: FeeSettingCreateInput!): FeeSetting!
  updateFeeSetting(data: FeeSettingUpdateInput!, where: FeeSettingWhereUniqueInput!): FeeSetting
  updateManyFeeSettings(data: FeeSettingUpdateManyMutationInput!, where: FeeSettingWhereInput): BatchPayload!
  upsertFeeSetting(where: FeeSettingWhereUniqueInput!, create: FeeSettingCreateInput!, update: FeeSettingUpdateInput!): FeeSetting!
  deleteFeeSetting(where: FeeSettingWhereUniqueInput!): FeeSetting
  deleteManyFeeSettings(where: FeeSettingWhereInput): BatchPayload!
  createFindPassWord(data: FindPassWordCreateInput!): FindPassWord!
  updateFindPassWord(data: FindPassWordUpdateInput!, where: FindPassWordWhereUniqueInput!): FindPassWord
  updateManyFindPassWords(data: FindPassWordUpdateManyMutationInput!, where: FindPassWordWhereInput): BatchPayload!
  upsertFindPassWord(where: FindPassWordWhereUniqueInput!, create: FindPassWordCreateInput!, update: FindPassWordUpdateInput!): FindPassWord!
  deleteFindPassWord(where: FindPassWordWhereUniqueInput!): FindPassWord
  deleteManyFindPassWords(where: FindPassWordWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createGroupMessage(data: GroupMessageCreateInput!): GroupMessage!
  updateGroupMessage(data: GroupMessageUpdateInput!, where: GroupMessageWhereUniqueInput!): GroupMessage
  updateManyGroupMessages(data: GroupMessageUpdateManyMutationInput!, where: GroupMessageWhereInput): BatchPayload!
  upsertGroupMessage(where: GroupMessageWhereUniqueInput!, create: GroupMessageCreateInput!, update: GroupMessageUpdateInput!): GroupMessage!
  deleteGroupMessage(where: GroupMessageWhereUniqueInput!): GroupMessage
  deleteManyGroupMessages(where: GroupMessageWhereInput): BatchPayload!
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
  createLogs(data: LogsCreateInput!): Logs!
  updateManyLogses(data: LogsUpdateManyMutationInput!, where: LogsWhereInput): BatchPayload!
  deleteManyLogses(where: LogsWhereInput): BatchPayload!
  createLoveMatching(data: LoveMatchingCreateInput!): LoveMatching!
  updateLoveMatching(data: LoveMatchingUpdateInput!, where: LoveMatchingWhereUniqueInput!): LoveMatching
  updateManyLoveMatchings(data: LoveMatchingUpdateManyMutationInput!, where: LoveMatchingWhereInput): BatchPayload!
  upsertLoveMatching(where: LoveMatchingWhereUniqueInput!, create: LoveMatchingCreateInput!, update: LoveMatchingUpdateInput!): LoveMatching!
  deleteLoveMatching(where: LoveMatchingWhereUniqueInput!): LoveMatching
  deleteManyLoveMatchings(where: LoveMatchingWhereInput): BatchPayload!
  createLoveSetting(data: LoveSettingCreateInput!): LoveSetting!
  updateLoveSetting(data: LoveSettingUpdateInput!, where: LoveSettingWhereUniqueInput!): LoveSetting
  updateManyLoveSettings(data: LoveSettingUpdateManyMutationInput!, where: LoveSettingWhereInput): BatchPayload!
  upsertLoveSetting(where: LoveSettingWhereUniqueInput!, create: LoveSettingCreateInput!, update: LoveSettingUpdateInput!): LoveSetting!
  deleteLoveSetting(where: LoveSettingWhereUniqueInput!): LoveSetting
  deleteManyLoveSettings(where: LoveSettingWhereInput): BatchPayload!
  createLoveSignUp(data: LoveSignUpCreateInput!): LoveSignUp!
  updateLoveSignUp(data: LoveSignUpUpdateInput!, where: LoveSignUpWhereUniqueInput!): LoveSignUp
  updateManyLoveSignUps(data: LoveSignUpUpdateManyMutationInput!, where: LoveSignUpWhereInput): BatchPayload!
  upsertLoveSignUp(where: LoveSignUpWhereUniqueInput!, create: LoveSignUpCreateInput!, update: LoveSignUpUpdateInput!): LoveSignUp!
  deleteLoveSignUp(where: LoveSignUpWhereUniqueInput!): LoveSignUp
  deleteManyLoveSignUps(where: LoveSignUpWhereInput): BatchPayload!
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
  createPartnerCondition(data: PartnerConditionCreateInput!): PartnerCondition!
  updatePartnerCondition(data: PartnerConditionUpdateInput!, where: PartnerConditionWhereUniqueInput!): PartnerCondition
  updateManyPartnerConditions(data: PartnerConditionUpdateManyMutationInput!, where: PartnerConditionWhereInput): BatchPayload!
  upsertPartnerCondition(where: PartnerConditionWhereUniqueInput!, create: PartnerConditionCreateInput!, update: PartnerConditionUpdateInput!): PartnerCondition!
  deletePartnerCondition(where: PartnerConditionWhereUniqueInput!): PartnerCondition
  deleteManyPartnerConditions(where: PartnerConditionWhereInput): BatchPayload!
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
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
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
  createRegisterCount(data: RegisterCountCreateInput!): RegisterCount!
  updateRegisterCount(data: RegisterCountUpdateInput!, where: RegisterCountWhereUniqueInput!): RegisterCount
  updateManyRegisterCounts(data: RegisterCountUpdateManyMutationInput!, where: RegisterCountWhereInput): BatchPayload!
  upsertRegisterCount(where: RegisterCountWhereUniqueInput!, create: RegisterCountCreateInput!, update: RegisterCountUpdateInput!): RegisterCount!
  deleteRegisterCount(where: RegisterCountWhereUniqueInput!): RegisterCount
  deleteManyRegisterCounts(where: RegisterCountWhereInput): BatchPayload!
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
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
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
  createTrade(data: TradeCreateInput!): Trade!
  updateTrade(data: TradeUpdateInput!, where: TradeWhereUniqueInput!): Trade
  updateManyTrades(data: TradeUpdateManyMutationInput!, where: TradeWhereInput): BatchPayload!
  upsertTrade(where: TradeWhereUniqueInput!, create: TradeCreateInput!, update: TradeUpdateInput!): Trade!
  deleteTrade(where: TradeWhereUniqueInput!): Trade
  deleteManyTrades(where: TradeWhereInput): BatchPayload!
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

type PartnerCondition {
  id: ID!
  skillName: String
  place: String
  number: Int
  partners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  passedPartners(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  project: Project
}

type PartnerConditionConnection {
  pageInfo: PageInfo!
  edges: [PartnerConditionEdge]!
  aggregate: AggregatePartnerCondition!
}

input PartnerConditionCreateInput {
  skillName: String
  place: String
  number: Int
  partners: UserCreateManyWithoutFitConditionsInput
  passedPartners: UserCreateManyWithoutNofitConditionsInput
  project: ProjectCreateOneWithoutConditionsInput
}

input PartnerConditionCreateManyWithoutPartnersInput {
  create: [PartnerConditionCreateWithoutPartnersInput!]
  connect: [PartnerConditionWhereUniqueInput!]
}

input PartnerConditionCreateManyWithoutPassedPartnersInput {
  create: [PartnerConditionCreateWithoutPassedPartnersInput!]
  connect: [PartnerConditionWhereUniqueInput!]
}

input PartnerConditionCreateManyWithoutProjectInput {
  create: [PartnerConditionCreateWithoutProjectInput!]
  connect: [PartnerConditionWhereUniqueInput!]
}

input PartnerConditionCreateWithoutPartnersInput {
  skillName: String
  place: String
  number: Int
  passedPartners: UserCreateManyWithoutNofitConditionsInput
  project: ProjectCreateOneWithoutConditionsInput
}

input PartnerConditionCreateWithoutPassedPartnersInput {
  skillName: String
  place: String
  number: Int
  partners: UserCreateManyWithoutFitConditionsInput
  project: ProjectCreateOneWithoutConditionsInput
}

input PartnerConditionCreateWithoutProjectInput {
  skillName: String
  place: String
  number: Int
  partners: UserCreateManyWithoutFitConditionsInput
  passedPartners: UserCreateManyWithoutNofitConditionsInput
}

type PartnerConditionEdge {
  node: PartnerCondition!
  cursor: String!
}

enum PartnerConditionOrderByInput {
  id_ASC
  id_DESC
  skillName_ASC
  skillName_DESC
  place_ASC
  place_DESC
  number_ASC
  number_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PartnerConditionPreviousValues {
  id: ID!
  skillName: String
  place: String
  number: Int
}

input PartnerConditionScalarWhereInput {
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
  skillName: String
  skillName_not: String
  skillName_in: [String!]
  skillName_not_in: [String!]
  skillName_lt: String
  skillName_lte: String
  skillName_gt: String
  skillName_gte: String
  skillName_contains: String
  skillName_not_contains: String
  skillName_starts_with: String
  skillName_not_starts_with: String
  skillName_ends_with: String
  skillName_not_ends_with: String
  place: String
  place_not: String
  place_in: [String!]
  place_not_in: [String!]
  place_lt: String
  place_lte: String
  place_gt: String
  place_gte: String
  place_contains: String
  place_not_contains: String
  place_starts_with: String
  place_not_starts_with: String
  place_ends_with: String
  place_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  AND: [PartnerConditionScalarWhereInput!]
  OR: [PartnerConditionScalarWhereInput!]
  NOT: [PartnerConditionScalarWhereInput!]
}

type PartnerConditionSubscriptionPayload {
  mutation: MutationType!
  node: PartnerCondition
  updatedFields: [String!]
  previousValues: PartnerConditionPreviousValues
}

input PartnerConditionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartnerConditionWhereInput
  AND: [PartnerConditionSubscriptionWhereInput!]
  OR: [PartnerConditionSubscriptionWhereInput!]
  NOT: [PartnerConditionSubscriptionWhereInput!]
}

input PartnerConditionUpdateInput {
  skillName: String
  place: String
  number: Int
  partners: UserUpdateManyWithoutFitConditionsInput
  passedPartners: UserUpdateManyWithoutNofitConditionsInput
  project: ProjectUpdateOneWithoutConditionsInput
}

input PartnerConditionUpdateManyDataInput {
  skillName: String
  place: String
  number: Int
}

input PartnerConditionUpdateManyMutationInput {
  skillName: String
  place: String
  number: Int
}

input PartnerConditionUpdateManyWithoutPartnersInput {
  create: [PartnerConditionCreateWithoutPartnersInput!]
  delete: [PartnerConditionWhereUniqueInput!]
  connect: [PartnerConditionWhereUniqueInput!]
  disconnect: [PartnerConditionWhereUniqueInput!]
  update: [PartnerConditionUpdateWithWhereUniqueWithoutPartnersInput!]
  upsert: [PartnerConditionUpsertWithWhereUniqueWithoutPartnersInput!]
  deleteMany: [PartnerConditionScalarWhereInput!]
  updateMany: [PartnerConditionUpdateManyWithWhereNestedInput!]
}

input PartnerConditionUpdateManyWithoutPassedPartnersInput {
  create: [PartnerConditionCreateWithoutPassedPartnersInput!]
  delete: [PartnerConditionWhereUniqueInput!]
  connect: [PartnerConditionWhereUniqueInput!]
  disconnect: [PartnerConditionWhereUniqueInput!]
  update: [PartnerConditionUpdateWithWhereUniqueWithoutPassedPartnersInput!]
  upsert: [PartnerConditionUpsertWithWhereUniqueWithoutPassedPartnersInput!]
  deleteMany: [PartnerConditionScalarWhereInput!]
  updateMany: [PartnerConditionUpdateManyWithWhereNestedInput!]
}

input PartnerConditionUpdateManyWithoutProjectInput {
  create: [PartnerConditionCreateWithoutProjectInput!]
  delete: [PartnerConditionWhereUniqueInput!]
  connect: [PartnerConditionWhereUniqueInput!]
  disconnect: [PartnerConditionWhereUniqueInput!]
  update: [PartnerConditionUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [PartnerConditionUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [PartnerConditionScalarWhereInput!]
  updateMany: [PartnerConditionUpdateManyWithWhereNestedInput!]
}

input PartnerConditionUpdateManyWithWhereNestedInput {
  where: PartnerConditionScalarWhereInput!
  data: PartnerConditionUpdateManyDataInput!
}

input PartnerConditionUpdateWithoutPartnersDataInput {
  skillName: String
  place: String
  number: Int
  passedPartners: UserUpdateManyWithoutNofitConditionsInput
  project: ProjectUpdateOneWithoutConditionsInput
}

input PartnerConditionUpdateWithoutPassedPartnersDataInput {
  skillName: String
  place: String
  number: Int
  partners: UserUpdateManyWithoutFitConditionsInput
  project: ProjectUpdateOneWithoutConditionsInput
}

input PartnerConditionUpdateWithoutProjectDataInput {
  skillName: String
  place: String
  number: Int
  partners: UserUpdateManyWithoutFitConditionsInput
  passedPartners: UserUpdateManyWithoutNofitConditionsInput
}

input PartnerConditionUpdateWithWhereUniqueWithoutPartnersInput {
  where: PartnerConditionWhereUniqueInput!
  data: PartnerConditionUpdateWithoutPartnersDataInput!
}

input PartnerConditionUpdateWithWhereUniqueWithoutPassedPartnersInput {
  where: PartnerConditionWhereUniqueInput!
  data: PartnerConditionUpdateWithoutPassedPartnersDataInput!
}

input PartnerConditionUpdateWithWhereUniqueWithoutProjectInput {
  where: PartnerConditionWhereUniqueInput!
  data: PartnerConditionUpdateWithoutProjectDataInput!
}

input PartnerConditionUpsertWithWhereUniqueWithoutPartnersInput {
  where: PartnerConditionWhereUniqueInput!
  update: PartnerConditionUpdateWithoutPartnersDataInput!
  create: PartnerConditionCreateWithoutPartnersInput!
}

input PartnerConditionUpsertWithWhereUniqueWithoutPassedPartnersInput {
  where: PartnerConditionWhereUniqueInput!
  update: PartnerConditionUpdateWithoutPassedPartnersDataInput!
  create: PartnerConditionCreateWithoutPassedPartnersInput!
}

input PartnerConditionUpsertWithWhereUniqueWithoutProjectInput {
  where: PartnerConditionWhereUniqueInput!
  update: PartnerConditionUpdateWithoutProjectDataInput!
  create: PartnerConditionCreateWithoutProjectInput!
}

input PartnerConditionWhereInput {
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
  skillName: String
  skillName_not: String
  skillName_in: [String!]
  skillName_not_in: [String!]
  skillName_lt: String
  skillName_lte: String
  skillName_gt: String
  skillName_gte: String
  skillName_contains: String
  skillName_not_contains: String
  skillName_starts_with: String
  skillName_not_starts_with: String
  skillName_ends_with: String
  skillName_not_ends_with: String
  place: String
  place_not: String
  place_in: [String!]
  place_not_in: [String!]
  place_lt: String
  place_lte: String
  place_gt: String
  place_gte: String
  place_contains: String
  place_not_contains: String
  place_starts_with: String
  place_not_starts_with: String
  place_ends_with: String
  place_not_ends_with: String
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  partners_every: UserWhereInput
  partners_some: UserWhereInput
  partners_none: UserWhereInput
  passedPartners_every: UserWhereInput
  passedPartners_some: UserWhereInput
  passedPartners_none: UserWhereInput
  project: ProjectWhereInput
  AND: [PartnerConditionWhereInput!]
  OR: [PartnerConditionWhereInput!]
  NOT: [PartnerConditionWhereInput!]
}

input PartnerConditionWhereUniqueInput {
  id: ID
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

type Product {
  id: ID!
  subject: String
  info: String
  price: Float
  kind: String
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  subject: String
  info: String
  price: Float
  kind: String
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  subject_ASC
  subject_DESC
  info_ASC
  info_DESC
  price_ASC
  price_DESC
  kind_ASC
  kind_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  subject: String
  info: String
  price: Float
  kind: String
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  subject: String
  info: String
  price: Float
  kind: String
}

input ProductUpdateInput {
  subject: String
  info: String
  price: Float
  kind: String
}

input ProductUpdateManyMutationInput {
  subject: String
  info: String
  price: Float
  kind: String
}

input ProductUpdateOneInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductWhereUniqueInput
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
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
  info: String
  info_not: String
  info_in: [String!]
  info_not_in: [String!]
  info_lt: String
  info_lte: String
  info_gt: String
  info_gte: String
  info_contains: String
  info_not_contains: String
  info_starts_with: String
  info_not_starts_with: String
  info_ends_with: String
  info_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  kind: String
  kind_not: String
  kind_in: [String!]
  kind_not_in: [String!]
  kind_lt: String
  kind_lte: String
  kind_gt: String
  kind_gte: String
  kind_contains: String
  kind_not_contains: String
  kind_starts_with: String
  kind_not_starts_with: String
  kind_ends_with: String
  kind_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Project {
  id: ID!
  name: String
  place: City
  content: String
  conditions(where: PartnerConditionWhereInput, orderBy: PartnerConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartnerCondition!]
  starter: User
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String
  place: CityCreateOneInput
  content: String
  conditions: PartnerConditionCreateManyWithoutProjectInput
  starter: UserCreateOneWithoutProjectsInput
}

input ProjectCreateManyWithoutStarterInput {
  create: [ProjectCreateWithoutStarterInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutConditionsInput {
  create: ProjectCreateWithoutConditionsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutConditionsInput {
  name: String
  place: CityCreateOneInput
  content: String
  starter: UserCreateOneWithoutProjectsInput
}

input ProjectCreateWithoutStarterInput {
  name: String
  place: CityCreateOneInput
  content: String
  conditions: PartnerConditionCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String
  content: String
}

input ProjectScalarWhereInput {
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
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  place: CityUpdateOneInput
  content: String
  conditions: PartnerConditionUpdateManyWithoutProjectInput
  starter: UserUpdateOneWithoutProjectsInput
}

input ProjectUpdateManyDataInput {
  name: String
  content: String
}

input ProjectUpdateManyMutationInput {
  name: String
  content: String
}

input ProjectUpdateManyWithoutStarterInput {
  create: [ProjectCreateWithoutStarterInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutStarterInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutStarterInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneWithoutConditionsInput {
  create: ProjectCreateWithoutConditionsInput
  update: ProjectUpdateWithoutConditionsDataInput
  upsert: ProjectUpsertWithoutConditionsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutConditionsDataInput {
  name: String
  place: CityUpdateOneInput
  content: String
  starter: UserUpdateOneWithoutProjectsInput
}

input ProjectUpdateWithoutStarterDataInput {
  name: String
  place: CityUpdateOneInput
  content: String
  conditions: PartnerConditionUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutStarterInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutStarterDataInput!
}

input ProjectUpsertWithoutConditionsInput {
  update: ProjectUpdateWithoutConditionsDataInput!
  create: ProjectCreateWithoutConditionsInput!
}

input ProjectUpsertWithWhereUniqueWithoutStarterInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutStarterDataInput!
  create: ProjectCreateWithoutStarterInput!
}

input ProjectWhereInput {
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
  place: CityWhereInput
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
  conditions_every: PartnerConditionWhereInput
  conditions_some: PartnerConditionWhereInput
  conditions_none: PartnerConditionWhereInput
  starter: UserWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
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
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  activityType(where: ActivityTypeWhereUniqueInput!): ActivityType
  activityTypes(where: ActivityTypeWhereInput, orderBy: ActivityTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityType]!
  activityTypesConnection(where: ActivityTypeWhereInput, orderBy: ActivityTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityTypeConnection!
  advertisement(where: AdvertisementWhereUniqueInput!): Advertisement
  advertisements(where: AdvertisementWhereInput, orderBy: AdvertisementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Advertisement]!
  advertisementsConnection(where: AdvertisementWhereInput, orderBy: AdvertisementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdvertisementConnection!
  area(where: AreaWhereUniqueInput!): Area
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area]!
  areasConnection(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AreaConnection!
  bootCount(where: BootCountWhereUniqueInput!): BootCount
  bootCounts(where: BootCountWhereInput, orderBy: BootCountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BootCount]!
  bootCountsConnection(where: BootCountWhereInput, orderBy: BootCountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BootCountConnection!
  city(where: CityWhereUniqueInput!): City
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  classGroup(where: ClassGroupWhereUniqueInput!): ClassGroup
  classGroups(where: ClassGroupWhereInput, orderBy: ClassGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassGroup]!
  classGroupsConnection(where: ClassGroupWhereInput, orderBy: ClassGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassGroupConnection!
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
  feeSetting(where: FeeSettingWhereUniqueInput!): FeeSetting
  feeSettings(where: FeeSettingWhereInput, orderBy: FeeSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FeeSetting]!
  feeSettingsConnection(where: FeeSettingWhereInput, orderBy: FeeSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeeSettingConnection!
  findPassWord(where: FindPassWordWhereUniqueInput!): FindPassWord
  findPassWords(where: FindPassWordWhereInput, orderBy: FindPassWordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FindPassWord]!
  findPassWordsConnection(where: FindPassWordWhereInput, orderBy: FindPassWordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FindPassWordConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  groupMessage(where: GroupMessageWhereUniqueInput!): GroupMessage
  groupMessages(where: GroupMessageWhereInput, orderBy: GroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GroupMessage]!
  groupMessagesConnection(where: GroupMessageWhereInput, orderBy: GroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupMessageConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  locationGroup(where: LocationGroupWhereUniqueInput!): LocationGroup
  locationGroups(where: LocationGroupWhereInput, orderBy: LocationGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocationGroup]!
  locationGroupsConnection(where: LocationGroupWhereInput, orderBy: LocationGroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationGroupConnection!
  logses(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs]!
  logsesConnection(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogsConnection!
  loveMatching(where: LoveMatchingWhereUniqueInput!): LoveMatching
  loveMatchings(where: LoveMatchingWhereInput, orderBy: LoveMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LoveMatching]!
  loveMatchingsConnection(where: LoveMatchingWhereInput, orderBy: LoveMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LoveMatchingConnection!
  loveSetting(where: LoveSettingWhereUniqueInput!): LoveSetting
  loveSettings(where: LoveSettingWhereInput, orderBy: LoveSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LoveSetting]!
  loveSettingsConnection(where: LoveSettingWhereInput, orderBy: LoveSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LoveSettingConnection!
  loveSignUp(where: LoveSignUpWhereUniqueInput!): LoveSignUp
  loveSignUps(where: LoveSignUpWhereInput, orderBy: LoveSignUpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LoveSignUp]!
  loveSignUpsConnection(where: LoveSignUpWhereInput, orderBy: LoveSignUpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LoveSignUpConnection!
  major(where: MajorWhereUniqueInput!): Major
  majors(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Major]!
  majorsConnection(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MajorConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  oldColleague(where: OldColleagueWhereUniqueInput!): OldColleague
  oldColleagues(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OldColleague]!
  oldColleaguesConnection(where: OldColleagueWhereInput, orderBy: OldColleagueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OldColleagueConnection!
  partnerCondition(where: PartnerConditionWhereUniqueInput!): PartnerCondition
  partnerConditions(where: PartnerConditionWhereInput, orderBy: PartnerConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartnerCondition]!
  partnerConditionsConnection(where: PartnerConditionWhereInput, orderBy: PartnerConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartnerConditionConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  photo(where: PhotoWhereUniqueInput!): Photo
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  regStatus(where: RegStatusWhereUniqueInput!): RegStatus
  regStatuses(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegStatus]!
  regStatusesConnection(where: RegStatusWhereInput, orderBy: RegStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegStatusConnection!
  registerCount(where: RegisterCountWhereUniqueInput!): RegisterCount
  registerCounts(where: RegisterCountWhereInput, orderBy: RegisterCountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RegisterCount]!
  registerCountsConnection(where: RegisterCountWhereInput, orderBy: RegisterCountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegisterCountConnection!
  school(where: SchoolWhereUniqueInput!): School
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  schoolEdu(where: SchoolEduWhereUniqueInput!): SchoolEdu
  schoolEdus(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SchoolEdu]!
  schoolEdusConnection(where: SchoolEduWhereInput, orderBy: SchoolEduOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolEduConnection!
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  station(where: StationWhereUniqueInput!): Station
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station]!
  stationsConnection(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationConnection!
  street(where: StreetWhereUniqueInput!): Street
  streets(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Street]!
  streetsConnection(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StreetConnection!
  trade(where: TradeWhereUniqueInput!): Trade
  trades(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trade]!
  tradesConnection(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TradeConnection!
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
  node(id: ID!): Node
}

type RegisterCount {
  id: ID!
  addUser: User
  deviceId: String
  createdAt: DateTime!
}

type RegisterCountConnection {
  pageInfo: PageInfo!
  edges: [RegisterCountEdge]!
  aggregate: AggregateRegisterCount!
}

input RegisterCountCreateInput {
  addUser: UserCreateOneInput
  deviceId: String
}

type RegisterCountEdge {
  node: RegisterCount!
  cursor: String!
}

enum RegisterCountOrderByInput {
  id_ASC
  id_DESC
  deviceId_ASC
  deviceId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RegisterCountPreviousValues {
  id: ID!
  deviceId: String
  createdAt: DateTime!
}

type RegisterCountSubscriptionPayload {
  mutation: MutationType!
  node: RegisterCount
  updatedFields: [String!]
  previousValues: RegisterCountPreviousValues
}

input RegisterCountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegisterCountWhereInput
  AND: [RegisterCountSubscriptionWhereInput!]
  OR: [RegisterCountSubscriptionWhereInput!]
  NOT: [RegisterCountSubscriptionWhereInput!]
}

input RegisterCountUpdateInput {
  addUser: UserUpdateOneInput
  deviceId: String
}

input RegisterCountUpdateManyMutationInput {
  deviceId: String
}

input RegisterCountWhereInput {
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
  addUser: UserWhereInput
  deviceId: String
  deviceId_not: String
  deviceId_in: [String!]
  deviceId_not_in: [String!]
  deviceId_lt: String
  deviceId_lte: String
  deviceId_gt: String
  deviceId_gte: String
  deviceId_contains: String
  deviceId_not_contains: String
  deviceId_starts_with: String
  deviceId_not_starts_with: String
  deviceId_ends_with: String
  deviceId_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [RegisterCountWhereInput!]
  OR: [RegisterCountWhereInput!]
  NOT: [RegisterCountWhereInput!]
}

input RegisterCountWhereUniqueInput {
  id: ID
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

type Skill {
  id: ID!
  name: String
  persons(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type SkillConnection {
  pageInfo: PageInfo!
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  name: String
  persons: UserCreateManyWithoutSkillsInput
}

input SkillCreateManyWithoutPersonsInput {
  create: [SkillCreateWithoutPersonsInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateWithoutPersonsInput {
  name: String
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String
}

input SkillScalarWhereInput {
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
  AND: [SkillScalarWhereInput!]
  OR: [SkillScalarWhereInput!]
  NOT: [SkillScalarWhereInput!]
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillWhereInput
  AND: [SkillSubscriptionWhereInput!]
  OR: [SkillSubscriptionWhereInput!]
  NOT: [SkillSubscriptionWhereInput!]
}

input SkillUpdateInput {
  name: String
  persons: UserUpdateManyWithoutSkillsInput
}

input SkillUpdateManyDataInput {
  name: String
}

input SkillUpdateManyMutationInput {
  name: String
}

input SkillUpdateManyWithoutPersonsInput {
  create: [SkillCreateWithoutPersonsInput!]
  delete: [SkillWhereUniqueInput!]
  connect: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutPersonsInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutPersonsInput!]
  deleteMany: [SkillScalarWhereInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
}

input SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput!
  data: SkillUpdateManyDataInput!
}

input SkillUpdateWithoutPersonsDataInput {
  name: String
}

input SkillUpdateWithWhereUniqueWithoutPersonsInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutPersonsDataInput!
}

input SkillUpsertWithWhereUniqueWithoutPersonsInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutPersonsDataInput!
  create: SkillCreateWithoutPersonsInput!
}

input SkillWhereInput {
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
  persons_every: UserWhereInput
  persons_some: UserWhereInput
  persons_none: UserWhereInput
  AND: [SkillWhereInput!]
  OR: [SkillWhereInput!]
  NOT: [SkillWhereInput!]
}

input SkillWhereUniqueInput {
  id: ID
  name: String
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
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  activityType(where: ActivityTypeSubscriptionWhereInput): ActivityTypeSubscriptionPayload
  advertisement(where: AdvertisementSubscriptionWhereInput): AdvertisementSubscriptionPayload
  area(where: AreaSubscriptionWhereInput): AreaSubscriptionPayload
  bootCount(where: BootCountSubscriptionWhereInput): BootCountSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  classGroup(where: ClassGroupSubscriptionWhereInput): ClassGroupSubscriptionPayload
  classMate(where: ClassMateSubscriptionWhereInput): ClassMateSubscriptionPayload
  colleague(where: ColleagueSubscriptionWhereInput): ColleagueSubscriptionPayload
  collegeEntranceExam(where: CollegeEntranceExamSubscriptionWhereInput): CollegeEntranceExamSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  family(where: FamilySubscriptionWhereInput): FamilySubscriptionPayload
  familyGroup(where: FamilyGroupSubscriptionWhereInput): FamilyGroupSubscriptionPayload
  feeSetting(where: FeeSettingSubscriptionWhereInput): FeeSettingSubscriptionPayload
  findPassWord(where: FindPassWordSubscriptionWhereInput): FindPassWordSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  groupMessage(where: GroupMessageSubscriptionWhereInput): GroupMessageSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  locationGroup(where: LocationGroupSubscriptionWhereInput): LocationGroupSubscriptionPayload
  logs(where: LogsSubscriptionWhereInput): LogsSubscriptionPayload
  loveMatching(where: LoveMatchingSubscriptionWhereInput): LoveMatchingSubscriptionPayload
  loveSetting(where: LoveSettingSubscriptionWhereInput): LoveSettingSubscriptionPayload
  loveSignUp(where: LoveSignUpSubscriptionWhereInput): LoveSignUpSubscriptionPayload
  major(where: MajorSubscriptionWhereInput): MajorSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  oldColleague(where: OldColleagueSubscriptionWhereInput): OldColleagueSubscriptionPayload
  partnerCondition(where: PartnerConditionSubscriptionWhereInput): PartnerConditionSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  regStatus(where: RegStatusSubscriptionWhereInput): RegStatusSubscriptionPayload
  registerCount(where: RegisterCountSubscriptionWhereInput): RegisterCountSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  schoolEdu(where: SchoolEduSubscriptionWhereInput): SchoolEduSubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  station(where: StationSubscriptionWhereInput): StationSubscriptionPayload
  street(where: StreetSubscriptionWhereInput): StreetSubscriptionPayload
  trade(where: TradeSubscriptionWhereInput): TradeSubscriptionPayload
  university(where: UniversitySubscriptionWhereInput): UniversitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  village(where: VillageSubscriptionWhereInput): VillageSubscriptionPayload
  work(where: WorkSubscriptionWhereInput): WorkSubscriptionPayload
  workGroup(where: WorkGroupSubscriptionWhereInput): WorkGroupSubscriptionPayload
}

type Trade {
  id: ID!
  product: Product
  number: Int
  amount: Float
  user: User
  status: String
}

type TradeConnection {
  pageInfo: PageInfo!
  edges: [TradeEdge]!
  aggregate: AggregateTrade!
}

input TradeCreateInput {
  product: ProductCreateOneInput
  number: Int
  amount: Float
  user: UserCreateOneWithoutTradesInput
  status: String
}

input TradeCreateManyWithoutUserInput {
  create: [TradeCreateWithoutUserInput!]
  connect: [TradeWhereUniqueInput!]
}

input TradeCreateWithoutUserInput {
  product: ProductCreateOneInput
  number: Int
  amount: Float
  status: String
}

type TradeEdge {
  node: Trade!
  cursor: String!
}

enum TradeOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  amount_ASC
  amount_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TradePreviousValues {
  id: ID!
  number: Int
  amount: Float
  status: String
}

input TradeScalarWhereInput {
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
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
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
  AND: [TradeScalarWhereInput!]
  OR: [TradeScalarWhereInput!]
  NOT: [TradeScalarWhereInput!]
}

type TradeSubscriptionPayload {
  mutation: MutationType!
  node: Trade
  updatedFields: [String!]
  previousValues: TradePreviousValues
}

input TradeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TradeWhereInput
  AND: [TradeSubscriptionWhereInput!]
  OR: [TradeSubscriptionWhereInput!]
  NOT: [TradeSubscriptionWhereInput!]
}

input TradeUpdateInput {
  product: ProductUpdateOneInput
  number: Int
  amount: Float
  user: UserUpdateOneWithoutTradesInput
  status: String
}

input TradeUpdateManyDataInput {
  number: Int
  amount: Float
  status: String
}

input TradeUpdateManyMutationInput {
  number: Int
  amount: Float
  status: String
}

input TradeUpdateManyWithoutUserInput {
  create: [TradeCreateWithoutUserInput!]
  delete: [TradeWhereUniqueInput!]
  connect: [TradeWhereUniqueInput!]
  disconnect: [TradeWhereUniqueInput!]
  update: [TradeUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TradeUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TradeScalarWhereInput!]
  updateMany: [TradeUpdateManyWithWhereNestedInput!]
}

input TradeUpdateManyWithWhereNestedInput {
  where: TradeScalarWhereInput!
  data: TradeUpdateManyDataInput!
}

input TradeUpdateWithoutUserDataInput {
  product: ProductUpdateOneInput
  number: Int
  amount: Float
  status: String
}

input TradeUpdateWithWhereUniqueWithoutUserInput {
  where: TradeWhereUniqueInput!
  data: TradeUpdateWithoutUserDataInput!
}

input TradeUpsertWithWhereUniqueWithoutUserInput {
  where: TradeWhereUniqueInput!
  update: TradeUpdateWithoutUserDataInput!
  create: TradeCreateWithoutUserInput!
}

input TradeWhereInput {
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
  product: ProductWhereInput
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  user: UserWhereInput
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
  AND: [TradeWhereInput!]
  OR: [TradeWhereInput!]
  NOT: [TradeWhereInput!]
}

input TradeWhereUniqueInput {
  id: ID
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
  isOnline: Boolean
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
  groupMessages(where: GroupMessageWhereInput, orderBy: GroupMessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GroupMessage!]
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
  forgetPassword: FindPassWord
  remmemberPassword(where: FindPassWordWhereInput, orderBy: FindPassWordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FindPassWord!]
  loveSetting: LoveSetting
  loveWoman(where: LoveMatchingWhereInput, orderBy: LoveMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LoveMatching!]
  loveMan(where: LoveMatchingWhereInput, orderBy: LoveMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LoveMatching!]
  signUpLove: LoveSignUp
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  fitConditions(where: PartnerConditionWhereInput, orderBy: PartnerConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartnerCondition!]
  nofitConditions(where: PartnerConditionWhereInput, orderBy: PartnerConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PartnerCondition!]
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  trades(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trade!]
  createActivities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
  partakeActivities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
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

input UserCreateManyWithoutFitConditionsInput {
  create: [UserCreateWithoutFitConditionsInput!]
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

input UserCreateManyWithoutNofitConditionsInput {
  create: [UserCreateWithoutNofitConditionsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutPartakeActivitiesInput {
  create: [UserCreateWithoutPartakeActivitiesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRemmemberPasswordInput {
  create: [UserCreateWithoutRemmemberPasswordInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutResidenceInput {
  create: [UserCreateWithoutResidenceInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
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

input UserCreateOneWithoutCreateActivitiesInput {
  create: UserCreateWithoutCreateActivitiesInput
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

input UserCreateOneWithoutForgetPasswordInput {
  create: UserCreateWithoutForgetPasswordInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFromOldColleaguesInput {
  create: UserCreateWithoutFromOldColleaguesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGroupMessagesInput {
  create: UserCreateWithoutGroupMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLoveManInput {
  create: UserCreateWithoutLoveManInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLoveSettingInput {
  create: UserCreateWithoutLoveSettingInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLoveWomanInput {
  create: UserCreateWithoutLoveWomanInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
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

input UserCreateOneWithoutSignUpLoveInput {
  create: UserCreateWithoutSignUpLoveInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutToOldColleaguesInput {
  create: UserCreateWithoutToOldColleaguesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTradesInput {
  create: UserCreateWithoutTradesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWorksInput {
  create: UserCreateWithoutWorksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAvatarInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutBirthplaceInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutClassMateInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutColleaguesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutCreateActivitiesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutCreaterInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutExamInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutFamiliesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutFamilyGroupInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutFitConditionsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutForgetPasswordInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutFromOldColleaguesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutGroupMessagesInput {
  isOnline: Boolean
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutGroupsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutLocationGroupsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  toOldColleagues: OldColleagueCreateManyWithoutToInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutLoveManInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutLoveSettingInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutLoveWomanInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutNofitConditionsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutPartakeActivitiesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
}

input UserCreateWithoutPostsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutProjectsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutReceiveMessagesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutRegStatusInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutRemmemberPasswordInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutResidenceInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutSentMessagesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutSignUpLoveInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutSkillsInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutStudiesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutToOldColleaguesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
  groups: GroupCreateManyWithoutUsersInput
  friends: UserCreateManyInput
  familyGroup: FamilyGroupCreateOneWithoutUsersInput
  creater: FamilyGroupCreateOneWithoutCreaterInput
  classMate: ClassMateCreateManyWithoutStudentInput
  workGroup: WorkGroupCreateOneInput
  colleagues: ColleagueCreateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueCreateManyWithoutFromInput
  locationGroups: LocationGroupCreateManyWithoutUsersInput
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutTradesInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

input UserCreateWithoutWorksInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageCreateManyWithoutFromInput
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
  forgetPassword: FindPassWordCreateOneWithoutForgetterInput
  remmemberPassword: FindPassWordCreateManyWithoutRemmemberInput
  loveSetting: LoveSettingCreateOneWithoutUserInput
  loveWoman: LoveMatchingCreateManyWithoutWomanInput
  loveMan: LoveMatchingCreateManyWithoutManInput
  signUpLove: LoveSignUpCreateOneWithoutPersonInput
  skills: SkillCreateManyWithoutPersonsInput
  fitConditions: PartnerConditionCreateManyWithoutPartnersInput
  nofitConditions: PartnerConditionCreateManyWithoutPassedPartnersInput
  projects: ProjectCreateManyWithoutStarterInput
  trades: TradeCreateManyWithoutUserInput
  createActivities: ActivityCreateManyWithoutCreaterInput
  partakeActivities: ActivityCreateManyWithoutUsersInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  isOnline_ASC
  isOnline_DESC
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
  isOnline: Boolean
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
  isOnline: Boolean
  isOnline_not: Boolean
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
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  isOnline: Boolean
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
  isOnline: Boolean
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

input UserUpdateManyWithoutFitConditionsInput {
  create: [UserCreateWithoutFitConditionsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFitConditionsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFitConditionsInput!]
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

input UserUpdateManyWithoutNofitConditionsInput {
  create: [UserCreateWithoutNofitConditionsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutNofitConditionsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutNofitConditionsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutPartakeActivitiesInput {
  create: [UserCreateWithoutPartakeActivitiesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutPartakeActivitiesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutPartakeActivitiesInput!]
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

input UserUpdateManyWithoutRemmemberPasswordInput {
  create: [UserCreateWithoutRemmemberPasswordInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRemmemberPasswordInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRemmemberPasswordInput!]
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

input UserUpdateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSkillsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSkillsInput!]
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

input UserUpdateOneRequiredWithoutGroupMessagesInput {
  create: UserCreateWithoutGroupMessagesInput
  update: UserUpdateWithoutGroupMessagesDataInput
  upsert: UserUpsertWithoutGroupMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLoveSettingInput {
  create: UserCreateWithoutLoveSettingInput
  update: UserUpdateWithoutLoveSettingDataInput
  upsert: UserUpsertWithoutLoveSettingInput
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

input UserUpdateOneWithoutCreateActivitiesInput {
  create: UserCreateWithoutCreateActivitiesInput
  update: UserUpdateWithoutCreateActivitiesDataInput
  upsert: UserUpsertWithoutCreateActivitiesInput
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

input UserUpdateOneWithoutForgetPasswordInput {
  create: UserCreateWithoutForgetPasswordInput
  update: UserUpdateWithoutForgetPasswordDataInput
  upsert: UserUpsertWithoutForgetPasswordInput
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

input UserUpdateOneWithoutLoveManInput {
  create: UserCreateWithoutLoveManInput
  update: UserUpdateWithoutLoveManDataInput
  upsert: UserUpsertWithoutLoveManInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutLoveWomanInput {
  create: UserCreateWithoutLoveWomanInput
  update: UserUpdateWithoutLoveWomanDataInput
  upsert: UserUpsertWithoutLoveWomanInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutSignUpLoveInput {
  create: UserCreateWithoutSignUpLoveInput
  update: UserUpdateWithoutSignUpLoveDataInput
  upsert: UserUpsertWithoutSignUpLoveInput
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

input UserUpdateOneWithoutTradesInput {
  create: UserCreateWithoutTradesInput
  update: UserUpdateWithoutTradesDataInput
  upsert: UserUpsertWithoutTradesInput
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
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutBirthplaceDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutClassMateDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutColleaguesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutCreateActivitiesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutCreaterDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutExamDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFamiliesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFamilyGroupDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFitConditionsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutForgetPasswordDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutFromOldColleaguesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutGroupMessagesDataInput {
  isOnline: Boolean
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutGroupsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutLocationGroupsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  toOldColleagues: OldColleagueUpdateManyWithoutToInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutLoveManDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutLoveSettingDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutLoveWomanDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutNofitConditionsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutPartakeActivitiesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
}

input UserUpdateWithoutPostsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutProjectsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutReceiveMessagesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutRegStatusDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutRemmemberPasswordDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutResidenceDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutSentMessagesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutSignUpLoveDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutSkillsDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutStudiesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutToOldColleaguesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
  groups: GroupUpdateManyWithoutUsersInput
  friends: UserUpdateManyInput
  familyGroup: FamilyGroupUpdateOneWithoutUsersInput
  creater: FamilyGroupUpdateOneWithoutCreaterInput
  classMate: ClassMateUpdateManyWithoutStudentInput
  workGroup: WorkGroupUpdateOneInput
  colleagues: ColleagueUpdateManyWithoutWorkerInput
  fromOldColleagues: OldColleagueUpdateManyWithoutFromInput
  locationGroups: LocationGroupUpdateManyWithoutUsersInput
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutTradesDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
}

input UserUpdateWithoutWorksDataInput {
  isOnline: Boolean
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
  groupMessages: GroupMessageUpdateManyWithoutFromInput
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
  forgetPassword: FindPassWordUpdateOneWithoutForgetterInput
  remmemberPassword: FindPassWordUpdateManyWithoutRemmemberInput
  loveSetting: LoveSettingUpdateOneWithoutUserInput
  loveWoman: LoveMatchingUpdateManyWithoutWomanInput
  loveMan: LoveMatchingUpdateManyWithoutManInput
  signUpLove: LoveSignUpUpdateOneWithoutPersonInput
  skills: SkillUpdateManyWithoutPersonsInput
  fitConditions: PartnerConditionUpdateManyWithoutPartnersInput
  nofitConditions: PartnerConditionUpdateManyWithoutPassedPartnersInput
  projects: ProjectUpdateManyWithoutStarterInput
  trades: TradeUpdateManyWithoutUserInput
  createActivities: ActivityUpdateManyWithoutCreaterInput
  partakeActivities: ActivityUpdateManyWithoutUsersInput
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

input UserUpdateWithWhereUniqueWithoutFitConditionsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFitConditionsDataInput!
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutLocationGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLocationGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutNofitConditionsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutNofitConditionsDataInput!
}

input UserUpdateWithWhereUniqueWithoutPartakeActivitiesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPartakeActivitiesDataInput!
}

input UserUpdateWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRegStatusDataInput!
}

input UserUpdateWithWhereUniqueWithoutRemmemberPasswordInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRemmemberPasswordDataInput!
}

input UserUpdateWithWhereUniqueWithoutResidenceInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutResidenceDataInput!
}

input UserUpdateWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSkillsDataInput!
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

input UserUpsertWithoutCreateActivitiesInput {
  update: UserUpdateWithoutCreateActivitiesDataInput!
  create: UserCreateWithoutCreateActivitiesInput!
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

input UserUpsertWithoutForgetPasswordInput {
  update: UserUpdateWithoutForgetPasswordDataInput!
  create: UserCreateWithoutForgetPasswordInput!
}

input UserUpsertWithoutFromOldColleaguesInput {
  update: UserUpdateWithoutFromOldColleaguesDataInput!
  create: UserCreateWithoutFromOldColleaguesInput!
}

input UserUpsertWithoutGroupMessagesInput {
  update: UserUpdateWithoutGroupMessagesDataInput!
  create: UserCreateWithoutGroupMessagesInput!
}

input UserUpsertWithoutLoveManInput {
  update: UserUpdateWithoutLoveManDataInput!
  create: UserCreateWithoutLoveManInput!
}

input UserUpsertWithoutLoveSettingInput {
  update: UserUpdateWithoutLoveSettingDataInput!
  create: UserCreateWithoutLoveSettingInput!
}

input UserUpsertWithoutLoveWomanInput {
  update: UserUpdateWithoutLoveWomanDataInput!
  create: UserCreateWithoutLoveWomanInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserUpsertWithoutReceiveMessagesInput {
  update: UserUpdateWithoutReceiveMessagesDataInput!
  create: UserCreateWithoutReceiveMessagesInput!
}

input UserUpsertWithoutSentMessagesInput {
  update: UserUpdateWithoutSentMessagesDataInput!
  create: UserCreateWithoutSentMessagesInput!
}

input UserUpsertWithoutSignUpLoveInput {
  update: UserUpdateWithoutSignUpLoveDataInput!
  create: UserCreateWithoutSignUpLoveInput!
}

input UserUpsertWithoutToOldColleaguesInput {
  update: UserUpdateWithoutToOldColleaguesDataInput!
  create: UserCreateWithoutToOldColleaguesInput!
}

input UserUpsertWithoutTradesInput {
  update: UserUpdateWithoutTradesDataInput!
  create: UserCreateWithoutTradesInput!
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

input UserUpsertWithWhereUniqueWithoutFitConditionsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFitConditionsDataInput!
  create: UserCreateWithoutFitConditionsInput!
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

input UserUpsertWithWhereUniqueWithoutNofitConditionsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutNofitConditionsDataInput!
  create: UserCreateWithoutNofitConditionsInput!
}

input UserUpsertWithWhereUniqueWithoutPartakeActivitiesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPartakeActivitiesDataInput!
  create: UserCreateWithoutPartakeActivitiesInput!
}

input UserUpsertWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRegStatusDataInput!
  create: UserCreateWithoutRegStatusInput!
}

input UserUpsertWithWhereUniqueWithoutRemmemberPasswordInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRemmemberPasswordDataInput!
  create: UserCreateWithoutRemmemberPasswordInput!
}

input UserUpsertWithWhereUniqueWithoutResidenceInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutResidenceDataInput!
  create: UserCreateWithoutResidenceInput!
}

input UserUpsertWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSkillsDataInput!
  create: UserCreateWithoutSkillsInput!
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
  isOnline: Boolean
  isOnline_not: Boolean
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
  groupMessages_every: GroupMessageWhereInput
  groupMessages_some: GroupMessageWhereInput
  groupMessages_none: GroupMessageWhereInput
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
  forgetPassword: FindPassWordWhereInput
  remmemberPassword_every: FindPassWordWhereInput
  remmemberPassword_some: FindPassWordWhereInput
  remmemberPassword_none: FindPassWordWhereInput
  loveSetting: LoveSettingWhereInput
  loveWoman_every: LoveMatchingWhereInput
  loveWoman_some: LoveMatchingWhereInput
  loveWoman_none: LoveMatchingWhereInput
  loveMan_every: LoveMatchingWhereInput
  loveMan_some: LoveMatchingWhereInput
  loveMan_none: LoveMatchingWhereInput
  signUpLove: LoveSignUpWhereInput
  skills_every: SkillWhereInput
  skills_some: SkillWhereInput
  skills_none: SkillWhereInput
  fitConditions_every: PartnerConditionWhereInput
  fitConditions_some: PartnerConditionWhereInput
  fitConditions_none: PartnerConditionWhereInput
  nofitConditions_every: PartnerConditionWhereInput
  nofitConditions_some: PartnerConditionWhereInput
  nofitConditions_none: PartnerConditionWhereInput
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  trades_every: TradeWhereInput
  trades_some: TradeWhereInput
  trades_none: TradeWhereInput
  createActivities_every: ActivityWhereInput
  createActivities_some: ActivityWhereInput
  createActivities_none: ActivityWhereInput
  partakeActivities_every: ActivityWhereInput
  partakeActivities_some: ActivityWhereInput
  partakeActivities_none: ActivityWhereInput
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
}

type WorkGroupConnection {
  pageInfo: PageInfo!
  edges: [WorkGroupEdge]!
  aggregate: AggregateWorkGroup!
}

input WorkGroupCreateInput {
  company: CompanyCreateOneWithoutWorkGroupInput
  colleagues: ColleagueCreateManyWithoutGroupInput
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

input WorkGroupCreateWithoutColleaguesInput {
  company: CompanyCreateOneWithoutWorkGroupInput
}

input WorkGroupCreateWithoutCompanyInput {
  colleagues: ColleagueCreateManyWithoutGroupInput
}

type WorkGroupEdge {
  node: WorkGroup!
  cursor: String!
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
}

input WorkGroupUpdateInput {
  company: CompanyUpdateOneWithoutWorkGroupInput
  colleagues: ColleagueUpdateManyWithoutGroupInput
}

input WorkGroupUpdateOneInput {
  create: WorkGroupCreateInput
  update: WorkGroupUpdateDataInput
  upsert: WorkGroupUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
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
}

input WorkGroupUpdateWithoutCompanyDataInput {
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
    