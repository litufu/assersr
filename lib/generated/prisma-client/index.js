"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var prisma_lib_1 = require("prisma-client-lib");

var typeDefs = require("./prisma-schema").typeDefs;

var models = [{
  name: "Advertisement",
  embedded: false
}, {
  name: "Area",
  embedded: false
}, {
  name: "BootCount",
  embedded: false
}, {
  name: "City",
  embedded: false
}, {
  name: "ClassGroup",
  embedded: false
}, {
  name: "ClassMate",
  embedded: false
}, {
  name: "Colleague",
  embedded: false
}, {
  name: "CollegeEntranceExam",
  embedded: false
}, {
  name: "Company",
  embedded: false
}, {
  name: "Educationkind",
  embedded: false
}, {
  name: "Family",
  embedded: false
}, {
  name: "FamilyGroup",
  embedded: false
}, {
  name: "FindPassWord",
  embedded: false
}, {
  name: "Group",
  embedded: false
}, {
  name: "GroupKind",
  embedded: false
}, {
  name: "GroupMessage",
  embedded: false
}, {
  name: "Location",
  embedded: false
}, {
  name: "LocationGroup",
  embedded: false
}, {
  name: "LocationGroupKind",
  embedded: false
}, {
  name: "Logs",
  embedded: false
}, {
  name: "Major",
  embedded: false
}, {
  name: "Message",
  embedded: false
}, {
  name: "OldColleague",
  embedded: false
}, {
  name: "Person",
  embedded: false
}, {
  name: "Photo",
  embedded: false
}, {
  name: "Post",
  embedded: false
}, {
  name: "Province",
  embedded: false
}, {
  name: "RegStatus",
  embedded: false
}, {
  name: "RegisterCount",
  embedded: false
}, {
  name: "School",
  embedded: false
}, {
  name: "SchoolEdu",
  embedded: false
}, {
  name: "Station",
  embedded: false
}, {
  name: "Street",
  embedded: false
}, {
  name: "University",
  embedded: false
}, {
  name: "User",
  embedded: false
}, {
  name: "Village",
  embedded: false
}, {
  name: "Work",
  embedded: false
}, {
  name: "WorkGroup",
  embedded: false
}];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs: typeDefs,
  models: models,
  endpoint: "http://192.168.99.100:4466",
  secret: "mysecret42"
});
exports.prisma = new exports.Prisma();
//# sourceMappingURL=index.js.map