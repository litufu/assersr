module.exports = {
        typeDefs: /* GraphQL */ `type AggregateArea {
  count: Int!
}

type AggregateCity {
  count: Int!
}

type AggregateCollegeEntranceExam {
  count: Int!
}

type AggregateEducation {
  count: Int!
}

type AggregateFamily {
  count: Int!
}

type AggregateMajor {
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

type AggregateStreet {
  count: Int!
}

type AggregateSubject {
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

type Area {
  id: ID!
  code: String!
  name: String!
  city: City!
  towns(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Street!]
  people(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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
  people: UserCreateManyWithoutBirthAreaInput
}

input AreaCreateManyWithoutCityInput {
  create: [AreaCreateWithoutCityInput!]
  connect: [AreaWhereUniqueInput!]
}

input AreaCreateOneWithoutPeopleInput {
  create: AreaCreateWithoutPeopleInput
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
  people: UserCreateManyWithoutBirthAreaInput
}

input AreaCreateWithoutPeopleInput {
  code: String!
  name: String!
  city: CityCreateOneWithoutAreasInput!
  towns: StreetCreateManyWithoutAreaInput
}

input AreaCreateWithoutTownsInput {
  code: String!
  name: String!
  city: CityCreateOneWithoutAreasInput!
  people: UserCreateManyWithoutBirthAreaInput
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

input AreaUpdateInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
  towns: StreetUpdateManyWithoutAreaInput
  people: UserUpdateManyWithoutBirthAreaInput
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

input AreaUpdateOneRequiredWithoutTownsInput {
  create: AreaCreateWithoutTownsInput
  update: AreaUpdateWithoutTownsDataInput
  upsert: AreaUpsertWithoutTownsInput
  connect: AreaWhereUniqueInput
}

input AreaUpdateOneWithoutPeopleInput {
  create: AreaCreateWithoutPeopleInput
  update: AreaUpdateWithoutPeopleDataInput
  upsert: AreaUpsertWithoutPeopleInput
  delete: Boolean
  disconnect: Boolean
  connect: AreaWhereUniqueInput
}

input AreaUpdateWithoutCityDataInput {
  code: String
  name: String
  towns: StreetUpdateManyWithoutAreaInput
  people: UserUpdateManyWithoutBirthAreaInput
}

input AreaUpdateWithoutPeopleDataInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
  towns: StreetUpdateManyWithoutAreaInput
}

input AreaUpdateWithoutTownsDataInput {
  code: String
  name: String
  city: CityUpdateOneRequiredWithoutAreasInput
  people: UserUpdateManyWithoutBirthAreaInput
}

input AreaUpdateWithWhereUniqueWithoutCityInput {
  where: AreaWhereUniqueInput!
  data: AreaUpdateWithoutCityDataInput!
}

input AreaUpsertWithoutPeopleInput {
  update: AreaUpdateWithoutPeopleDataInput!
  create: AreaCreateWithoutPeopleInput!
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
  people_every: UserWhereInput
  people_some: UserWhereInput
  people_none: UserWhereInput
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
  people(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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
  people: UserCreateManyWithoutBirthCityInput
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

input CityCreateOneWithoutPeopleInput {
  create: CityCreateWithoutPeopleInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutAreasInput {
  code: String!
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
  people: UserCreateManyWithoutBirthCityInput
}

input CityCreateWithoutPeopleInput {
  code: String!
  name: String!
  province: ProvinceCreateOneWithoutCitiesInput!
  areas: AreaCreateManyWithoutCityInput
}

input CityCreateWithoutProvinceInput {
  code: String!
  name: String!
  areas: AreaCreateManyWithoutCityInput
  people: UserCreateManyWithoutBirthCityInput
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
  people: UserUpdateManyWithoutBirthCityInput
}

input CityUpdateInput {
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  areas: AreaUpdateManyWithoutCityInput
  people: UserUpdateManyWithoutBirthCityInput
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

input CityUpdateOneRequiredInput {
  create: CityCreateInput
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
  connect: CityWhereUniqueInput
}

input CityUpdateOneRequiredWithoutAreasInput {
  create: CityCreateWithoutAreasInput
  update: CityUpdateWithoutAreasDataInput
  upsert: CityUpsertWithoutAreasInput
  connect: CityWhereUniqueInput
}

input CityUpdateOneWithoutPeopleInput {
  create: CityCreateWithoutPeopleInput
  update: CityUpdateWithoutPeopleDataInput
  upsert: CityUpsertWithoutPeopleInput
  delete: Boolean
  disconnect: Boolean
  connect: CityWhereUniqueInput
}

input CityUpdateWithoutAreasDataInput {
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  people: UserUpdateManyWithoutBirthCityInput
}

input CityUpdateWithoutPeopleDataInput {
  code: String
  name: String
  province: ProvinceUpdateOneRequiredWithoutCitiesInput
  areas: AreaUpdateManyWithoutCityInput
}

input CityUpdateWithoutProvinceDataInput {
  code: String
  name: String
  areas: AreaUpdateManyWithoutCityInput
  people: UserUpdateManyWithoutBirthCityInput
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

input CityUpsertWithoutPeopleInput {
  update: CityUpdateWithoutPeopleDataInput!
  create: CityCreateWithoutPeopleInput!
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
  people_every: UserWhereInput
  people_some: UserWhereInput
  people_none: UserWhereInput
  AND: [CityWhereInput!]
  OR: [CityWhereInput!]
  NOT: [CityWhereInput!]
}

input CityWhereUniqueInput {
  id: ID
  code: String
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

input CollegeEntranceExamUpdateManyMutationInput {
  culscore: Float
  proscore: Float
  candidatenum: String
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

input EducationUpdateManyMutationInput {
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

type Family {
  id: ID!
  from: User!
  to: Person!
  relationship: String!
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
  status: String!
}

input FamilyCreateManyWithoutFromInput {
  create: [FamilyCreateWithoutFromInput!]
  connect: [FamilyWhereUniqueInput!]
}

input FamilyCreateManyWithoutToInput {
  create: [FamilyCreateWithoutToInput!]
  connect: [FamilyWhereUniqueInput!]
}

input FamilyCreateWithoutFromInput {
  to: PersonCreateOneWithoutFamiliesInput!
  relationship: String!
  status: String!
}

input FamilyCreateWithoutToInput {
  from: UserCreateOneWithoutFamiliesInput!
  relationship: String!
  status: String!
}

type FamilyEdge {
  node: Family!
  cursor: String!
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

input FamilyUpdateInput {
  from: UserUpdateOneRequiredWithoutFamiliesInput
  to: PersonUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  status: String
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

input FamilyUpdateWithoutFromDataInput {
  to: PersonUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  status: String
}

input FamilyUpdateWithoutToDataInput {
  from: UserUpdateOneRequiredWithoutFamiliesInput
  relationship: String
  status: String
}

input FamilyUpdateWithWhereUniqueWithoutFromInput {
  where: FamilyWhereUniqueInput!
  data: FamilyUpdateWithoutFromDataInput!
}

input FamilyUpdateWithWhereUniqueWithoutToInput {
  where: FamilyWhereUniqueInput!
  data: FamilyUpdateWithoutToDataInput!
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

input MajorUpdateManyMutationInput {
  name: String
  category: String
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
  createCollegeEntranceExam(data: CollegeEntranceExamCreateInput!): CollegeEntranceExam!
  updateCollegeEntranceExam(data: CollegeEntranceExamUpdateInput!, where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  updateManyCollegeEntranceExams(data: CollegeEntranceExamUpdateManyMutationInput!, where: CollegeEntranceExamWhereInput): BatchPayload!
  upsertCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!, create: CollegeEntranceExamCreateInput!, update: CollegeEntranceExamUpdateInput!): CollegeEntranceExam!
  deleteCollegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  deleteManyCollegeEntranceExams(where: CollegeEntranceExamWhereInput): BatchPayload!
  createEducation(data: EducationCreateInput!): Education!
  updateEducation(data: EducationUpdateInput!, where: EducationWhereUniqueInput!): Education
  updateManyEducations(data: EducationUpdateManyMutationInput!, where: EducationWhereInput): BatchPayload!
  upsertEducation(where: EducationWhereUniqueInput!, create: EducationCreateInput!, update: EducationUpdateInput!): Education!
  deleteEducation(where: EducationWhereUniqueInput!): Education
  deleteManyEducations(where: EducationWhereInput): BatchPayload!
  createFamily(data: FamilyCreateInput!): Family!
  updateFamily(data: FamilyUpdateInput!, where: FamilyWhereUniqueInput!): Family
  updateManyFamilies(data: FamilyUpdateManyMutationInput!, where: FamilyWhereInput): BatchPayload!
  upsertFamily(where: FamilyWhereUniqueInput!, create: FamilyCreateInput!, update: FamilyUpdateInput!): Family!
  deleteFamily(where: FamilyWhereUniqueInput!): Family
  deleteManyFamilies(where: FamilyWhereInput): BatchPayload!
  createMajor(data: MajorCreateInput!): Major!
  updateMajor(data: MajorUpdateInput!, where: MajorWhereUniqueInput!): Major
  updateManyMajors(data: MajorUpdateManyMutationInput!, where: MajorWhereInput): BatchPayload!
  upsertMajor(where: MajorWhereUniqueInput!, create: MajorCreateInput!, update: MajorUpdateInput!): Major!
  deleteMajor(where: MajorWhereUniqueInput!): Major
  deleteManyMajors(where: MajorWhereInput): BatchPayload!
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
  upsertRegStatus(where: RegStatusWhereUniqueInput!, create: RegStatusCreateInput!, update: RegStatusUpdateInput!): RegStatus!
  deleteRegStatus(where: RegStatusWhereUniqueInput!): RegStatus
  deleteManyRegStatuses(where: RegStatusWhereInput): BatchPayload!
  createStreet(data: StreetCreateInput!): Street!
  updateStreet(data: StreetUpdateInput!, where: StreetWhereUniqueInput!): Street
  updateManyStreets(data: StreetUpdateManyMutationInput!, where: StreetWhereInput): BatchPayload!
  upsertStreet(where: StreetWhereUniqueInput!, create: StreetCreateInput!, update: StreetUpdateInput!): Street!
  deleteStreet(where: StreetWhereUniqueInput!): Street
  deleteManyStreets(where: StreetWhereInput): BatchPayload!
  createSubject(data: SubjectCreateInput!): Subject!
  updateSubject(data: SubjectUpdateInput!, where: SubjectWhereUniqueInput!): Subject
  updateManySubjects(data: SubjectUpdateManyMutationInput!, where: SubjectWhereInput): BatchPayload!
  upsertSubject(where: SubjectWhereUniqueInput!, create: SubjectCreateInput!, update: SubjectUpdateInput!): Subject!
  deleteSubject(where: SubjectWhereUniqueInput!): Subject
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
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
}

input PersonCreateOneWithoutFamiliesInput {
  create: PersonCreateWithoutFamiliesInput
  connect: PersonWhereUniqueInput
}

input PersonCreateWithoutFamiliesInput {
  name: String!
  user: UserCreateOneInput
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

input PersonUpdateWithoutFamiliesDataInput {
  name: String
  user: UserUpdateOneInput
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
  people(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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
  people: UserCreateManyWithoutBirthProvinceInput
}

input ProvinceCreateOneInput {
  create: ProvinceCreateInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateOneWithoutCitiesInput {
  create: ProvinceCreateWithoutCitiesInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateOneWithoutPeopleInput {
  create: ProvinceCreateWithoutPeopleInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateWithoutCitiesInput {
  code: String!
  name: String!
  people: UserCreateManyWithoutBirthProvinceInput
}

input ProvinceCreateWithoutPeopleInput {
  code: String!
  name: String!
  cities: CityCreateManyWithoutProvinceInput
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
  people: UserUpdateManyWithoutBirthProvinceInput
}

input ProvinceUpdateInput {
  code: String
  name: String
  cities: CityUpdateManyWithoutProvinceInput
  people: UserUpdateManyWithoutBirthProvinceInput
}

input ProvinceUpdateManyMutationInput {
  code: String
  name: String
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

input ProvinceUpdateOneWithoutPeopleInput {
  create: ProvinceCreateWithoutPeopleInput
  update: ProvinceUpdateWithoutPeopleDataInput
  upsert: ProvinceUpsertWithoutPeopleInput
  delete: Boolean
  disconnect: Boolean
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateWithoutCitiesDataInput {
  code: String
  name: String
  people: UserUpdateManyWithoutBirthProvinceInput
}

input ProvinceUpdateWithoutPeopleDataInput {
  code: String
  name: String
  cities: CityUpdateManyWithoutProvinceInput
}

input ProvinceUpsertNestedInput {
  update: ProvinceUpdateDataInput!
  create: ProvinceCreateInput!
}

input ProvinceUpsertWithoutCitiesInput {
  update: ProvinceUpdateWithoutCitiesDataInput!
  create: ProvinceCreateWithoutCitiesInput!
}

input ProvinceUpsertWithoutPeopleInput {
  update: ProvinceUpdateWithoutPeopleDataInput!
  create: ProvinceCreateWithoutPeopleInput!
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
  people_every: UserWhereInput
  people_some: UserWhereInput
  people_none: UserWhereInput
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
  collegeEntranceExam(where: CollegeEntranceExamWhereUniqueInput!): CollegeEntranceExam
  collegeEntranceExams(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CollegeEntranceExam]!
  collegeEntranceExamsConnection(where: CollegeEntranceExamWhereInput, orderBy: CollegeEntranceExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CollegeEntranceExamConnection!
  education(where: EducationWhereUniqueInput!): Education
  educations(where: EducationWhereInput, orderBy: EducationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Education]!
  educationsConnection(where: EducationWhereInput, orderBy: EducationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EducationConnection!
  family(where: FamilyWhereUniqueInput!): Family
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family]!
  familiesConnection(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FamilyConnection!
  major(where: MajorWhereUniqueInput!): Major
  majors(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Major]!
  majorsConnection(where: MajorWhereInput, orderBy: MajorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MajorConnection!
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
  street(where: StreetWhereUniqueInput!): Street
  streets(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Street]!
  streetsConnection(where: StreetWhereInput, orderBy: StreetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StreetConnection!
  subject(where: SubjectWhereUniqueInput!): Subject
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  university(where: UniversityWhereUniqueInput!): University
  universities(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [University]!
  universitiesConnection(where: UniversityWhereInput, orderBy: UniversityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UniversityConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  village(where: VillageWhereUniqueInput!): Village
  villages(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Village]!
  villagesConnection(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VillageConnection!
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

type Street {
  id: ID!
  code: String!
  name: String!
  Area: Area!
  villages(where: VillageWhereInput, orderBy: VillageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Village!]
  people(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
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
  people: UserCreateManyWithoutBirthStreetInput
}

input StreetCreateManyWithoutAreaInput {
  create: [StreetCreateWithoutAreaInput!]
  connect: [StreetWhereUniqueInput!]
}

input StreetCreateOneWithoutPeopleInput {
  create: StreetCreateWithoutPeopleInput
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
  people: UserCreateManyWithoutBirthStreetInput
}

input StreetCreateWithoutPeopleInput {
  code: String!
  name: String!
  Area: AreaCreateOneWithoutTownsInput!
  villages: VillageCreateManyWithoutStreetInput
}

input StreetCreateWithoutVillagesInput {
  code: String!
  name: String!
  Area: AreaCreateOneWithoutTownsInput!
  people: UserCreateManyWithoutBirthStreetInput
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

input StreetUpdateInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
  villages: VillageUpdateManyWithoutStreetInput
  people: UserUpdateManyWithoutBirthStreetInput
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

input StreetUpdateOneRequiredWithoutVillagesInput {
  create: StreetCreateWithoutVillagesInput
  update: StreetUpdateWithoutVillagesDataInput
  upsert: StreetUpsertWithoutVillagesInput
  connect: StreetWhereUniqueInput
}

input StreetUpdateOneWithoutPeopleInput {
  create: StreetCreateWithoutPeopleInput
  update: StreetUpdateWithoutPeopleDataInput
  upsert: StreetUpsertWithoutPeopleInput
  delete: Boolean
  disconnect: Boolean
  connect: StreetWhereUniqueInput
}

input StreetUpdateWithoutAreaDataInput {
  code: String
  name: String
  villages: VillageUpdateManyWithoutStreetInput
  people: UserUpdateManyWithoutBirthStreetInput
}

input StreetUpdateWithoutPeopleDataInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
  villages: VillageUpdateManyWithoutStreetInput
}

input StreetUpdateWithoutVillagesDataInput {
  code: String
  name: String
  Area: AreaUpdateOneRequiredWithoutTownsInput
  people: UserUpdateManyWithoutBirthStreetInput
}

input StreetUpdateWithWhereUniqueWithoutAreaInput {
  where: StreetWhereUniqueInput!
  data: StreetUpdateWithoutAreaDataInput!
}

input StreetUpsertWithoutPeopleInput {
  update: StreetUpdateWithoutPeopleDataInput!
  create: StreetCreateWithoutPeopleInput!
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
  people_every: UserWhereInput
  people_some: UserWhereInput
  people_none: UserWhereInput
  AND: [StreetWhereInput!]
  OR: [StreetWhereInput!]
  NOT: [StreetWhereInput!]
}

input StreetWhereUniqueInput {
  id: ID
  code: String
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

input SubjectUpdateManyMutationInput {
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
  area(where: AreaSubscriptionWhereInput): AreaSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  collegeEntranceExam(where: CollegeEntranceExamSubscriptionWhereInput): CollegeEntranceExamSubscriptionPayload
  education(where: EducationSubscriptionWhereInput): EducationSubscriptionPayload
  family(where: FamilySubscriptionWhereInput): FamilySubscriptionPayload
  major(where: MajorSubscriptionWhereInput): MajorSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  regStatus(where: RegStatusSubscriptionWhereInput): RegStatusSubscriptionPayload
  street(where: StreetSubscriptionWhereInput): StreetSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  university(where: UniversitySubscriptionWhereInput): UniversitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  village(where: VillageSubscriptionWhereInput): VillageSubscriptionPayload
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

input UniversityUpdateManyMutationInput {
  name: String
  identifier: String
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
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: Province
  birthCity: City
  birthArea: Area
  birthStreet: Street
  birthVillage: Village
  uid: String!
  token: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
  regStatus: RegStatus
  families(where: FamilyWhereInput, orderBy: FamilyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Family!]
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
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateManyWithoutBirthAreaInput {
  create: [UserCreateWithoutBirthAreaInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBirthCityInput {
  create: [UserCreateWithoutBirthCityInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBirthProvinceInput {
  create: [UserCreateWithoutBirthProvinceInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBirthStreetInput {
  create: [UserCreateWithoutBirthStreetInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutBirthVillageInput {
  create: [UserCreateWithoutBirthVillageInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutFamiliesInput {
  create: UserCreateWithoutFamiliesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBirthAreaInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutBirthCityInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutBirthProvinceInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutBirthStreetInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutBirthVillageInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutFamiliesInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  regStatus: RegStatusCreateOneWithoutApplicantsInput
}

input UserCreateWithoutPostsInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  regStatus: RegStatusCreateOneWithoutApplicantsInput
  families: FamilyCreateManyWithoutFromInput
}

input UserCreateWithoutRegStatusInput {
  username: String!
  password: String!
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceCreateOneWithoutPeopleInput
  birthCity: CityCreateOneWithoutPeopleInput
  birthArea: AreaCreateOneWithoutPeopleInput
  birthStreet: StreetCreateOneWithoutPeopleInput
  birthVillage: VillageCreateOneWithoutPeopleInput
  uid: String!
  token: String!
  posts: PostCreateManyWithoutAuthorInput
  families: FamilyCreateManyWithoutFromInput
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
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
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
}

input UserUpdateManyWithoutBirthAreaInput {
  create: [UserCreateWithoutBirthAreaInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthAreaInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthAreaInput!]
}

input UserUpdateManyWithoutBirthCityInput {
  create: [UserCreateWithoutBirthCityInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthCityInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthCityInput!]
}

input UserUpdateManyWithoutBirthProvinceInput {
  create: [UserCreateWithoutBirthProvinceInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthProvinceInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthProvinceInput!]
}

input UserUpdateManyWithoutBirthStreetInput {
  create: [UserCreateWithoutBirthStreetInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthStreetInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthStreetInput!]
}

input UserUpdateManyWithoutBirthVillageInput {
  create: [UserCreateWithoutBirthVillageInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutBirthVillageInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutBirthVillageInput!]
}

input UserUpdateManyWithoutRegStatusInput {
  create: [UserCreateWithoutRegStatusInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRegStatusInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRegStatusInput!]
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

input UserUpdateWithoutBirthAreaDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutBirthCityDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutBirthProvinceDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutBirthStreetDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutBirthVillageDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutFamiliesDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
}

input UserUpdateWithoutPostsDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  regStatus: RegStatusUpdateOneWithoutApplicantsInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithoutRegStatusDataInput {
  username: String
  password: String
  name: String
  gender: String
  birthdaycalendar: String
  birthday: DateTime
  birthProvince: ProvinceUpdateOneWithoutPeopleInput
  birthCity: CityUpdateOneWithoutPeopleInput
  birthArea: AreaUpdateOneWithoutPeopleInput
  birthStreet: StreetUpdateOneWithoutPeopleInput
  birthVillage: VillageUpdateOneWithoutPeopleInput
  uid: String
  token: String
  posts: PostUpdateManyWithoutAuthorInput
  families: FamilyUpdateManyWithoutFromInput
}

input UserUpdateWithWhereUniqueWithoutBirthAreaInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthAreaDataInput!
}

input UserUpdateWithWhereUniqueWithoutBirthCityInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthCityDataInput!
}

input UserUpdateWithWhereUniqueWithoutBirthProvinceInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthProvinceDataInput!
}

input UserUpdateWithWhereUniqueWithoutBirthStreetInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthStreetDataInput!
}

input UserUpdateWithWhereUniqueWithoutBirthVillageInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutBirthVillageDataInput!
}

input UserUpdateWithWhereUniqueWithoutRegStatusInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRegStatusDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutFamiliesInput {
  update: UserUpdateWithoutFamiliesDataInput!
  create: UserCreateWithoutFamiliesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutBirthAreaInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthAreaDataInput!
  create: UserCreateWithoutBirthAreaInput!
}

input UserUpsertWithWhereUniqueWithoutBirthCityInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthCityDataInput!
  create: UserCreateWithoutBirthCityInput!
}

input UserUpsertWithWhereUniqueWithoutBirthProvinceInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthProvinceDataInput!
  create: UserCreateWithoutBirthProvinceInput!
}

input UserUpsertWithWhereUniqueWithoutBirthStreetInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthStreetDataInput!
  create: UserCreateWithoutBirthStreetInput!
}

input UserUpsertWithWhereUniqueWithoutBirthVillageInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutBirthVillageDataInput!
  create: UserCreateWithoutBirthVillageInput!
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
  birthProvince: ProvinceWhereInput
  birthCity: CityWhereInput
  birthArea: AreaWhereInput
  birthStreet: StreetWhereInput
  birthVillage: VillageWhereInput
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
  families_every: FamilyWhereInput
  families_some: FamilyWhereInput
  families_none: FamilyWhereInput
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
  people: UserCreateManyWithoutBirthVillageInput
}

input VillageCreateManyWithoutStreetInput {
  create: [VillageCreateWithoutStreetInput!]
  connect: [VillageWhereUniqueInput!]
}

input VillageCreateOneWithoutPeopleInput {
  create: VillageCreateWithoutPeopleInput
  connect: VillageWhereUniqueInput
}

input VillageCreateWithoutPeopleInput {
  code: String!
  name: String!
  street: StreetCreateOneWithoutVillagesInput!
}

input VillageCreateWithoutStreetInput {
  code: String!
  name: String!
  people: UserCreateManyWithoutBirthVillageInput
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

input VillageUpdateInput {
  code: String
  name: String
  street: StreetUpdateOneRequiredWithoutVillagesInput
  people: UserUpdateManyWithoutBirthVillageInput
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

input VillageUpdateOneWithoutPeopleInput {
  create: VillageCreateWithoutPeopleInput
  update: VillageUpdateWithoutPeopleDataInput
  upsert: VillageUpsertWithoutPeopleInput
  delete: Boolean
  disconnect: Boolean
  connect: VillageWhereUniqueInput
}

input VillageUpdateWithoutPeopleDataInput {
  code: String
  name: String
  street: StreetUpdateOneRequiredWithoutVillagesInput
}

input VillageUpdateWithoutStreetDataInput {
  code: String
  name: String
  people: UserUpdateManyWithoutBirthVillageInput
}

input VillageUpdateWithWhereUniqueWithoutStreetInput {
  where: VillageWhereUniqueInput!
  data: VillageUpdateWithoutStreetDataInput!
}

input VillageUpsertWithoutPeopleInput {
  update: VillageUpdateWithoutPeopleDataInput!
  create: VillageCreateWithoutPeopleInput!
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
`
      }
    