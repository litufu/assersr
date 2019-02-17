"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;

var _utils = require("../services/utils");

var _settings = require("../services/settings");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Query = {
  me: function me(parent, args, ctx) {
    if ((0, _utils.getUserId)(ctx)) {
      return ctx.db.user({
        uid: (0, _utils.getUserId)(ctx)
      });
    }

    return null;
  },
  searchUser: function searchUser(parent, _ref, ctx) {
    var username = _ref.username;
    return ctx.db.user({
      username: username
    });
  },
  cities: function cities(parent, _ref2, ctx) {
    var code = _ref2.code;
    return ctx.db.cities({
      where: {
        province: {
          code: code
        }
      }
    });
  },
  areas: function areas(parent, _ref3, ctx) {
    var code = _ref3.code;
    return ctx.db.areas({
      where: {
        city: {
          code: code
        }
      }
    });
  },
  streets: function streets(parent, _ref4, ctx) {
    var code = _ref4.code;
    return ctx.db.streets({
      where: {
        Area: {
          code: code
        }
      }
    });
  },
  villages: function villages(parent, _ref5, ctx) {
    var code = _ref5.code;
    return ctx.db.villages({
      where: {
        street: {
          code: code
        }
      }
    });
  },
  feed: function feed(parent, args, ctx) {
    return ctx.db.posts({
      where: {
        isPublished: true
      }
    });
  },
  drafts: function drafts(parent, args, ctx) {
    return ctx.db.posts({
      where: {
        isPublished: false
      }
    });
  },
  post: function post(parent, _ref6, ctx) {
    var id = _ref6.id;
    return ctx.db.post({
      id: id
    });
  },
  families: function families(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.families({
      where: {
        from: {
          uid: userId
        }
      }
    });
  },
  findPasswords: function findPasswords(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.findPassWords({
      where: {
        remmember_some: {
          uid: userId
        }
      }
    });
  },
  getFamiliesById: function getFamiliesById(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    if (!args.id) {
      return ctx.db.families({
        where: {
          from: {
            uid: userId
          }
        }
      });
    }

    return ctx.db.families({
      where: {
        from: {
          id: args.id
        }
      }
    });
  },
  getSchools: function getSchools(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.schools({
      where: {
        AND: [{
          location: {
            name: args.locationName
          }
        }, {
          kind: args.kind
        }]
      }
    });
  },
  getMajors: function getMajors(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.majors({
      where: {
        name_contains: args.majorName
      }
    });
  },
  getUniversities: function getUniversities(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.universities({
      where: {
        name_contains: args.universityName
      }
    });
  },
  getExamBasicInfo: function () {
    var _getExamBasicInfo = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var userId, results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context.next = 5;
              return ctx.db.collegeEntranceExams({
                where: {
                  student: {
                    uid: userId
                  }
                }
              });

            case 5:
              results = _context.sent;

              if (!(results.length === 0)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", null);

            case 8:
              return _context.abrupt("return", results[0]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function getExamBasicInfo(_x, _x2, _x3) {
      return _getExamBasicInfo.apply(this, arguments);
    };
  }(),
  getRegStatusApplicants: function () {
    var _getRegStatusApplicants = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(parent, _ref7, ctx) {
      var education, universityId, majorId, userId, userExams, userExamProvinceId, userExamSubject, regStatuses, applicants;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              education = _ref7.education, universityId = _ref7.universityId, majorId = _ref7.majorId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context2.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context2.next = 6;
              return ctx.db.collegeEntranceExams({
                where: {
                  student: {
                    uid: userId
                  }
                }
              });

            case 6:
              userExams = _context2.sent;

              if (!(userExams.length === 0)) {
                _context2.next = 9;
                break;
              }

              throw new Error('尚未填写高考基本信息');

            case 9:
              _context2.next = 11;
              return ctx.db.collegeEntranceExam({
                id: userExams[0].id
              }).province().id();

            case 11:
              userExamProvinceId = _context2.sent;
              _context2.next = 14;
              return ctx.db.collegeEntranceExam({
                id: userExams[0].id
              }).subject();

            case 14:
              userExamSubject = _context2.sent;
              _context2.next = 17;
              return ctx.db.regStatuses({
                where: {
                  education: education,
                  university: {
                    id: universityId
                  },
                  major: {
                    id: majorId
                  }
                }
              });

            case 17:
              regStatuses = _context2.sent;

              if (!(regStatuses.length === 0)) {
                _context2.next = 20;
                break;
              }

              return _context2.abrupt("return", []);

            case 20:
              _context2.next = 22;
              return ctx.db.regStatus({
                id: regStatuses[0].id
              }).applicants({
                where: {
                  exam: {
                    AND: [{
                      province: {
                        id: userExamProvinceId
                      }
                    }, {
                      subject: userExamSubject
                    }]
                  }
                }
              });

            case 22:
              applicants = _context2.sent;
              return _context2.abrupt("return", applicants);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function getRegStatusApplicants(_x4, _x5, _x6) {
      return _getRegStatusApplicants.apply(this, arguments);
    };
  }(),
  getRegStatusApplicantsById: function () {
    var _getRegStatusApplicantsById = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(parent, _ref8, ctx) {
      var regStatusId, userId, userExams, userExamProvinceId, userExamSubject, applicants;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              regStatusId = _ref8.regStatusId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context3.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context3.next = 6;
              return ctx.db.collegeEntranceExams({
                where: {
                  student: {
                    uid: userId
                  }
                }
              });

            case 6:
              userExams = _context3.sent;

              if (!(userExams.length === 0)) {
                _context3.next = 9;
                break;
              }

              throw new Error('尚未填写高考基本信息');

            case 9:
              _context3.next = 11;
              return ctx.db.collegeEntranceExam({
                id: userExams[0].id
              }).province().id();

            case 11:
              userExamProvinceId = _context3.sent;
              _context3.next = 14;
              return ctx.db.collegeEntranceExam({
                id: userExams[0].id
              }).subject();

            case 14:
              userExamSubject = _context3.sent;
              _context3.next = 17;
              return ctx.db.regStatus({
                id: regStatusId
              }).applicants({
                where: {
                  exam: {
                    AND: [{
                      province: {
                        id: userExamProvinceId
                      }
                    }, {
                      subject: userExamSubject
                    }]
                  }
                }
              });

            case 17:
              applicants = _context3.sent;
              return _context3.abrupt("return", applicants);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function getRegStatusApplicantsById(_x7, _x8, _x9) {
      return _getRegStatusApplicantsById.apply(this, arguments);
    };
  }(),
  getRegStatus: function () {
    var _getRegStatus = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(parent, args, ctx) {
      var userId;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context4.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              return _context4.abrupt("return", ctx.db.user({
                uid: userId
              }).regStatus());

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function getRegStatus(_x10, _x11, _x12) {
      return _getRegStatus.apply(this, arguments);
    };
  }(),
  getFamilyGroups: function () {
    var _getFamilyGroups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(parent, args, ctx) {
      var userId, user, groupUsersId, meAndSpousesfamilies, meFamilies, mySpouseFamilies, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mySpouseFamily, mySpouse, spouseFamilies, _i, myFamilies, familyFather, father, fatherFamilies, fatherFamilyFather, grandpa, motherFamilyFather, grandma, familyMother, mother, motherFamilies, fatherFamilyMother, _grandpa, motherFamilyMother, _grandma, sonAndDaughters, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, sonAndDaughter, sd;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context5.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context5.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context5.sent;

              if (user) {
                _context5.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              groupUsersId = [];
              meAndSpousesfamilies = [];
              groupUsersId.push({
                id: user.id
              });
              _context5.next = 13;
              return ctx.db.user({
                id: user.id
              }).families();

            case 13:
              meFamilies = _context5.sent;
              meAndSpousesfamilies.push(meFamilies); // 配偶

              mySpouseFamilies = meFamilies.filter(function (family) {
                return !!~['wife', 'husband'].indexOf(family.relationship);
              });
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context5.prev = 19;
              _iterator = mySpouseFamilies[Symbol.iterator]();

            case 21:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context5.next = 35;
                break;
              }

              mySpouseFamily = _step.value;
              _context5.next = 25;
              return ctx.db.family({
                id: mySpouseFamily.id
              }).to().user();

            case 25:
              mySpouse = _context5.sent;

              if (!mySpouse) {
                _context5.next = 32;
                break;
              }

              groupUsersId.push({
                id: mySpouse.id
              });
              _context5.next = 30;
              return ctx.db.user({
                id: mySpouse.id
              }).families();

            case 30:
              spouseFamilies = _context5.sent;
              meAndSpousesfamilies.push(spouseFamilies);

            case 32:
              _iteratorNormalCompletion = true;
              _context5.next = 21;
              break;

            case 35:
              _context5.next = 41;
              break;

            case 37:
              _context5.prev = 37;
              _context5.t0 = _context5["catch"](19);
              _didIteratorError = true;
              _iteratorError = _context5.t0;

            case 41:
              _context5.prev = 41;
              _context5.prev = 42;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 44:
              _context5.prev = 44;

              if (!_didIteratorError) {
                _context5.next = 47;
                break;
              }

              throw _iteratorError;

            case 47:
              return _context5.finish(44);

            case 48:
              return _context5.finish(41);

            case 49:
              _i = 0;

            case 50:
              if (!(_i < meAndSpousesfamilies.length)) {
                _context5.next = 99;
                break;
              }

              myFamilies = meAndSpousesfamilies[_i];
              familyFather = myFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(familyFather.length > 0)) {
                _context5.next = 74;
                break;
              }

              _context5.next = 56;
              return ctx.db.family({
                id: familyFather[0].id
              }).to().user();

            case 56:
              father = _context5.sent;

              if (!father) {
                _context5.next = 74;
                break;
              }

              groupUsersId.push({
                id: father.id
              });
              _context5.next = 61;
              return ctx.db.user({
                id: father.id
              }).families();

            case 61:
              fatherFamilies = _context5.sent;
              fatherFamilyFather = fatherFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(fatherFamilyFather.length > 0)) {
                _context5.next = 68;
                break;
              }

              _context5.next = 66;
              return ctx.db.family({
                id: fatherFamilyFather[0].id
              }).to().user();

            case 66:
              grandpa = _context5.sent;

              if (grandpa) {
                groupUsersId.push({
                  id: grandpa.id
                });
              }

            case 68:
              motherFamilyFather = fatherFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(motherFamilyFather.length > 0)) {
                _context5.next = 74;
                break;
              }

              _context5.next = 72;
              return ctx.db.family({
                id: motherFamilyFather[0].id
              }).to().user();

            case 72:
              grandma = _context5.sent;

              if (grandma) {
                groupUsersId.push({
                  id: grandma.id
                });
              }

            case 74:
              familyMother = myFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(familyMother.length > 0)) {
                _context5.next = 96;
                break;
              }

              _context5.next = 78;
              return ctx.db.family({
                id: familyMother[0].id
              }).to().user();

            case 78:
              mother = _context5.sent;

              if (!mother) {
                _context5.next = 96;
                break;
              }

              groupUsersId.push({
                id: mother.id
              });
              _context5.next = 83;
              return ctx.db.user({
                id: mother.id
              }).families();

            case 83:
              motherFamilies = _context5.sent;
              fatherFamilyMother = motherFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(fatherFamilyMother.length > 0)) {
                _context5.next = 90;
                break;
              }

              _context5.next = 88;
              return ctx.db.family({
                id: fatherFamilyMother[0].id
              }).to().user();

            case 88:
              _grandpa = _context5.sent;

              if (_grandpa) {
                groupUsersId.push({
                  id: _grandpa.id
                });
              }

            case 90:
              motherFamilyMother = motherFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(motherFamilyMother.length > 0)) {
                _context5.next = 96;
                break;
              }

              _context5.next = 94;
              return ctx.db.family({
                id: motherFamilyMother[0].id
              }).to().user();

            case 94:
              _grandma = _context5.sent;

              if (_grandma) {
                groupUsersId.push({
                  id: _grandma.id
                });
              }

            case 96:
              _i++;
              _context5.next = 50;
              break;

            case 99:
              // 我的群由子女负责创建
              sonAndDaughters = meFamilies.filter(function (family) {
                return !!~['son', 'daughter'].indexOf(family.relationship);
              });
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context5.prev = 103;
              _iterator2 = sonAndDaughters[Symbol.iterator]();

            case 105:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context5.next = 114;
                break;
              }

              sonAndDaughter = _step2.value;
              _context5.next = 109;
              return ctx.db.family({
                id: sonAndDaughter.id
              }).to().user();

            case 109:
              sd = _context5.sent;

              if (sd) {
                groupUsersId.push({
                  id: sd.id
                });
              }

            case 111:
              _iteratorNormalCompletion2 = true;
              _context5.next = 105;
              break;

            case 114:
              _context5.next = 120;
              break;

            case 116:
              _context5.prev = 116;
              _context5.t1 = _context5["catch"](103);
              _didIteratorError2 = true;
              _iteratorError2 = _context5.t1;

            case 120:
              _context5.prev = 120;
              _context5.prev = 121;

              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }

            case 123:
              _context5.prev = 123;

              if (!_didIteratorError2) {
                _context5.next = 126;
                break;
              }

              throw _iteratorError2;

            case 126:
              return _context5.finish(123);

            case 127:
              return _context5.finish(120);

            case 128:
              return _context5.abrupt("return", ctx.db.familyGroups({
                where: {
                  OR: groupUsersId.map(function (usersId) {
                    return {
                      users_some: usersId
                    };
                  })
                }
              }));

            case 129:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[19, 37, 41, 49], [42,, 44, 48], [103, 116, 120, 128], [121,, 123, 127]]);
    }));

    return function getFamilyGroups(_x13, _x14, _x15) {
      return _getFamilyGroups.apply(this, arguments);
    };
  }(),
  students: function students(parent, _ref9, ctx) {
    var schoolEduId = _ref9.schoolEduId;
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    return ctx.db.schoolEdu({
      id: schoolEduId
    }).students();
  },
  classGroups: function classGroups(parent, _ref10, ctx) {
    var schoolEduId = _ref10.schoolEduId;
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    if (!schoolEduId) {
      return ctx.db.classGroups({
        where: {
          AND: [{
            members_some: {
              student: {
                uid: userId
              }
            }
          }]
        }
      });
    }

    return ctx.db.classGroups({
      where: {
        AND: [{
          study: {
            id: schoolEduId
          }
        }, {
          members_some: {
            student: {
              uid: userId
            }
          }
        }]
      }
    });
  },
  workGroups: function workGroups(parent, _ref11, ctx) {
    var companyId = _ref11.companyId;
    var userId = (0, _utils.getUserId)(ctx);

    if (!userId) {
      throw new Error("用户不存在");
    }

    if (!companyId) {
      return ctx.db.workGroups({
        where: {
          AND: [{
            colleagues_some: {
              worker: {
                uid: userId
              }
            }
          }]
        }
      });
    }

    return ctx.db.workGroups({
      where: {
        AND: [{
          company: {
            id: companyId
          }
        }, {
          colleagues_some: {
            worker: {
              uid: userId
            }
          }
        }]
      }
    });
  },
  stations: function () {
    var _stations = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6(parent, _ref12, ctx) {
      var text, userId, stations;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              text = _ref12.text;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context6.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context6.next = 6;
              return ctx.db.stations({
                where: {
                  name_contains: text
                }
              });

            case 6:
              stations = _context6.sent;

              if (!(stations.length === 0)) {
                _context6.next = 9;
                break;
              }

              return _context6.abrupt("return", [{
                id: '000',
                code: "000",
                name: "未找到相关职位,请更换关键字试一下"
              }]);

            case 9:
              return _context6.abrupt("return", stations);

            case 10:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function stations(_x16, _x17, _x18) {
      return _stations.apply(this, arguments);
    };
  }(),
  colleagues: function () {
    var _colleagues = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(parent, _ref13, ctx) {
      var companyId, userId, workers, works, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, work, worker;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              companyId = _ref13.companyId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context7.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              workers = [];
              _context7.next = 7;
              return ctx.db.works({
                where: {
                  AND: [{
                    endTime_gt: new Date('9999-1-1')
                  }, {
                    company: {
                      id: companyId
                    }
                  }]
                }
              });

            case 7:
              works = _context7.sent;
              _iteratorNormalCompletion3 = true;
              _didIteratorError3 = false;
              _iteratorError3 = undefined;
              _context7.prev = 11;
              _iterator3 = works[Symbol.iterator]();

            case 13:
              if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                _context7.next = 22;
                break;
              }

              work = _step3.value;
              _context7.next = 17;
              return ctx.db.work({
                id: work.id
              }).worker();

            case 17:
              worker = _context7.sent;
              workers.push(worker);

            case 19:
              _iteratorNormalCompletion3 = true;
              _context7.next = 13;
              break;

            case 22:
              _context7.next = 28;
              break;

            case 24:
              _context7.prev = 24;
              _context7.t0 = _context7["catch"](11);
              _didIteratorError3 = true;
              _iteratorError3 = _context7.t0;

            case 28:
              _context7.prev = 28;
              _context7.prev = 29;

              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }

            case 31:
              _context7.prev = 31;

              if (!_didIteratorError3) {
                _context7.next = 34;
                break;
              }

              throw _iteratorError3;

            case 34:
              return _context7.finish(31);

            case 35:
              return _context7.finish(28);

            case 36:
              return _context7.abrupt("return", workers);

            case 37:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[11, 24, 28, 36], [29,, 31, 35]]);
    }));

    return function colleagues(_x19, _x20, _x21) {
      return _colleagues.apply(this, arguments);
    };
  }(),
  oldColleagues: function () {
    var _oldColleagues = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8(parent, _ref14, ctx) {
      var startTime, endTime, companyId, userId, workers, works, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, work, worker;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              startTime = _ref14.startTime, endTime = _ref14.endTime, companyId = _ref14.companyId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context8.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              workers = [];

              if (!(new Date(endTime).getFullYear() === 9999)) {
                _context8.next = 11;
                break;
              }

              _context8.next = 8;
              return ctx.db.works({
                where: {
                  AND: [{
                    startTime_gte: new Date(startTime)
                  }, {
                    endTime_lt: new Date(endTime)
                  }, {
                    company: {
                      id: companyId
                    }
                  }]
                }
              });

            case 8:
              works = _context8.sent;
              _context8.next = 14;
              break;

            case 11:
              _context8.next = 13;
              return ctx.db.works({
                where: {
                  AND: [{
                    OR: [{
                      startTime_gte: new Date(startTime)
                    }, {
                      endTime_lte: new Date(endTime)
                    }]
                  }, {
                    company: {
                      id: companyId
                    }
                  }]
                }
              });

            case 13:
              works = _context8.sent;

            case 14:
              _iteratorNormalCompletion4 = true;
              _didIteratorError4 = false;
              _iteratorError4 = undefined;
              _context8.prev = 17;
              _iterator4 = works[Symbol.iterator]();

            case 19:
              if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                _context8.next = 28;
                break;
              }

              work = _step4.value;
              _context8.next = 23;
              return ctx.db.work({
                id: work.id
              }).worker();

            case 23:
              worker = _context8.sent;
              workers.push(worker);

            case 25:
              _iteratorNormalCompletion4 = true;
              _context8.next = 19;
              break;

            case 28:
              _context8.next = 34;
              break;

            case 30:
              _context8.prev = 30;
              _context8.t0 = _context8["catch"](17);
              _didIteratorError4 = true;
              _iteratorError4 = _context8.t0;

            case 34:
              _context8.prev = 34;
              _context8.prev = 35;

              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }

            case 37:
              _context8.prev = 37;

              if (!_didIteratorError4) {
                _context8.next = 40;
                break;
              }

              throw _iteratorError4;

            case 40:
              return _context8.finish(37);

            case 41:
              return _context8.finish(34);

            case 42:
              return _context8.abrupt("return", workers);

            case 43:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[17, 30, 34, 42], [35,, 37, 41]]);
    }));

    return function oldColleagues(_x22, _x23, _x24) {
      return _oldColleagues.apply(this, arguments);
    };
  }(),
  myOldColleagues: function () {
    var _myOldColleagues = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9(parent, _ref15, ctx) {
      var companyId, userId, myOldColleagues;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              companyId = _ref15.companyId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context9.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              if (companyId) {
                _context9.next = 6;
                break;
              }

              return _context9.abrupt("return", ctx.db.oldColleagues({
                where: {
                  AND: [{
                    from: {
                      uid: userId
                    }
                  }]
                }
              }));

            case 6:
              _context9.next = 8;
              return ctx.db.oldColleagues({
                where: {
                  AND: [{
                    from: {
                      uid: userId
                    }
                  }, {
                    company: {
                      id: companyId
                    }
                  }]
                }
              });

            case 8:
              myOldColleagues = _context9.sent;
              return _context9.abrupt("return", myOldColleagues);

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function myOldColleagues(_x25, _x26, _x27) {
      return _myOldColleagues.apply(this, arguments);
    };
  }(),
  locationGroups: function () {
    var _locationGroups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee10(parent, args, ctx) {
      var userId, user;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context10.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context10.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context10.sent;

              if (user) {
                _context10.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              return _context10.abrupt("return", ctx.db.user({
                id: user.id
              }).locationGroups());

            case 9:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    return function locationGroups(_x28, _x29, _x30) {
      return _locationGroups.apply(this, arguments);
    };
  }(),
  locationGroupUsers: function () {
    var _locationGroupUsers = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee11(parent, _ref16, ctx) {
      var locationGroupId, userId, user;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              locationGroupId = _ref16.locationGroupId;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context11.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context11.next = 6;
              return ctx.db.user({
                uid: userId
              });

            case 6:
              user = _context11.sent;

              if (user) {
                _context11.next = 9;
                break;
              }

              throw new Error("用户不存在");

            case 9:
              return _context11.abrupt("return", ctx.db.locationGroup({
                id: locationGroupId
              }).users());

            case 10:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    return function locationGroupUsers(_x31, _x32, _x33) {
      return _locationGroupUsers.apply(this, arguments);
    };
  }(),
  photo: function () {
    var _photo = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee12(parent, _ref17, ctx) {
      var id, name, userId, user;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              id = _ref17.id, name = _ref17.name;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context12.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context12.next = 6;
              return ctx.db.user({
                uid: userId
              });

            case 6:
              user = _context12.sent;

              if (user) {
                _context12.next = 9;
                break;
              }

              throw new Error("用户不存在");

            case 9:
              if (!id) {
                _context12.next = 11;
                break;
              }

              return _context12.abrupt("return", ctx.db.photo({
                id: id
              }));

            case 11:
              if (!name) {
                _context12.next = 13;
                break;
              }

              return _context12.abrupt("return", ctx.db.photo({
                name: name
              }));

            case 13:
              throw new Error('没有输入id或者名称');

            case 14:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    return function photo(_x34, _x35, _x36) {
      return _photo.apply(this, arguments);
    };
  }(),
  userInfo: function () {
    var _userInfo = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee13(parent, _ref18, ctx) {
      var id, userId, user;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              id = _ref18.id;
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context13.next = 4;
                break;
              }

              throw new Error("用户不存在");

            case 4:
              _context13.next = 6;
              return ctx.db.user({
                id: id
              });

            case 6:
              user = _context13.sent;

              if (user) {
                _context13.next = 9;
                break;
              }

              throw new Error("用户不存在");

            case 9:
              return _context13.abrupt("return", user);

            case 10:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    return function userInfo(_x37, _x38, _x39) {
      return _userInfo.apply(this, arguments);
    };
  }(),
  bootInfo: function () {
    var _bootInfo = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee14(parent, args, ctx) {
      var userId, user;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context14.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context14.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context14.sent;

              if (user) {
                _context14.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              return _context14.abrupt("return", ctx.db.createBootCount({
                bootUser: {
                  connect: {
                    id: user.id
                  }
                }
              }));

            case 9:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    return function bootInfo(_x40, _x41, _x42) {
      return _bootInfo.apply(this, arguments);
    };
  }(),
  visitCount: function () {
    var _visitCount = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee15(parent, args, ctx) {
      var userId, user;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context15.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context15.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context15.sent;

              if (user) {
                _context15.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              return _context15.abrupt("return", {});

            case 9:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    return function visitCount(_x43, _x44, _x45) {
      return _visitCount.apply(this, arguments);
    };
  }(),
  advertisements: function () {
    var _advertisements = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee16(parent, args, ctx) {
      var now;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              now = new Date();
              return _context16.abrupt("return", ctx.db.advertisements({
                where: {
                  AND: [{
                    startTime_lte: now
                  }, {
                    endTime_gt: now
                  }]
                }
              }));

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    return function advertisements(_x46, _x47, _x48) {
      return _advertisements.apply(this, arguments);
    };
  }(),
  messages: function () {
    var _messages = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee17(parent, args, ctx) {
      var userId, user, messages;
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context17.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context17.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context17.sent;

              if (user) {
                _context17.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              _context17.next = 10;
              return ctx.db.messages({
                where: {
                  OR: [{
                    from: {
                      id: user.id
                    }
                  }, {
                    to: {
                      id: user.id
                    }
                  }]
                }
              });

            case 10:
              messages = _context17.sent;
              return _context17.abrupt("return", messages);

            case 12:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    return function messages(_x49, _x50, _x51) {
      return _messages.apply(this, arguments);
    };
  }()
};
exports.Query = Query;
//# sourceMappingURL=Query.js.map