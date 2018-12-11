"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Area",
    embedded: false
  },
  {
    name: "City",
    embedded: false
  },
  {
    name: "CollegeEntranceExam",
    embedded: false
  },
  {
    name: "Company",
    embedded: false
  },
  {
    name: "CompanyJob",
    embedded: false
  },
  {
    name: "Educationkind",
    embedded: false
  },
  {
    name: "Family",
    embedded: false
  },
  {
    name: "Live",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Major",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Province",
    embedded: false
  },
  {
    name: "RegStatus",
    embedded: false
  },
  {
    name: "School",
    embedded: false
  },
  {
    name: "SchoolEdu",
    embedded: false
  },
  {
    name: "Street",
    embedded: false
  },
  {
    name: "Subject",
    embedded: false
  },
  {
    name: "University",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Village",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://192.168.99.100:4466/`,
  secret: `mysecret42`
});
exports.prisma = new exports.Prisma();
