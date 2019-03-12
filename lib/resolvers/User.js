"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _utils = require("../services/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = {
  id: function id(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).id();
  },
  name: function name(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).name();
  },
  avatar: function avatar(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).avatar();
  },
  posts: function posts(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).posts();
  },
  birthday: function birthday(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).birthday();
  },
  birthplace: function birthplace(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).birthplace();
  },
  residence: function residence(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).residence();
  },
  families: function () {
    var _families = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var userId;
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
              if (!(userId !== parent.uid)) {
                _context.next = 5;
                break;
              }

              throw new Error('Author Invalid');

            case 5:
              return _context.abrupt("return", ctx.db.user({
                id: parent.id
              }).families());

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function families(_x, _x2, _x3) {
      return _families.apply(this, arguments);
    }

    return families;
  }(),
  studies: function studies(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).studies({
      orderBy: "startTime_ASC"
    });
  },
  regStatus: function regStatus(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).regStatus();
  },
  works: function works(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).works();
  },
  exam: function exam(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).exam();
  },
  messages: function () {
    var _messages = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(parent, args, ctx) {
      var userId, messages;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context2.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              if (!(userId !== parent.uid)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", []);

            case 5:
              _context2.next = 7;
              return ctx.db.messages({
                where: {
                  OR: [{
                    from: {
                      id: parent.id
                    }
                  }, {
                    to: {
                      id: parent.id
                    }
                  }]
                },
                first: 10
              });

            case 7:
              messages = _context2.sent;
              return _context2.abrupt("return", messages);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function messages(_x4, _x5, _x6) {
      return _messages.apply(this, arguments);
    }

    return messages;
  }(),
  friends: function friends(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).friends();
  },
  relativefamilyGroups: function () {
    var _relativefamilyGroups = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(parent, args, ctx) {
      var userId, user, groupUsersId, meAndSpousesfamilies, meFamilies, mySpouseFamilies, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mySpouseFamily, mySpouse, spouseFamilies, _i, myFamilies, familyFather, father, fatherFamilies, fatherFamilyFather, grandpa, motherFamilyFather, grandma, familyMother, mother, motherFamilies, fatherFamilyMother, _grandpa, motherFamilyMother, _grandma, sonAndDaughters, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, sonAndDaughter, sd;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              userId = (0, _utils.getUserId)(ctx);

              if (userId) {
                _context3.next = 3;
                break;
              }

              throw new Error("用户不存在");

            case 3:
              _context3.next = 5;
              return ctx.db.user({
                uid: userId
              });

            case 5:
              user = _context3.sent;

              if (user) {
                _context3.next = 8;
                break;
              }

              throw new Error("用户不存在");

            case 8:
              if (!(userId !== parent.uid)) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", []);

            case 10:
              groupUsersId = [];
              meAndSpousesfamilies = [];
              groupUsersId.push({
                id: user.id
              });
              _context3.next = 15;
              return ctx.db.user({
                id: user.id
              }).families();

            case 15:
              meFamilies = _context3.sent;
              meAndSpousesfamilies.push(meFamilies); // 配偶

              mySpouseFamilies = meFamilies.filter(function (family) {
                return !!~['wife', 'husband'].indexOf(family.relationship);
              });
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context3.prev = 21;
              _iterator = mySpouseFamilies[Symbol.iterator]();

            case 23:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context3.next = 37;
                break;
              }

              mySpouseFamily = _step.value;
              _context3.next = 27;
              return ctx.db.family({
                id: mySpouseFamily.id
              }).to().user();

            case 27:
              mySpouse = _context3.sent;

              if (!mySpouse) {
                _context3.next = 34;
                break;
              }

              groupUsersId.push({
                id: mySpouse.id
              });
              _context3.next = 32;
              return ctx.db.user({
                id: mySpouse.id
              }).families();

            case 32:
              spouseFamilies = _context3.sent;
              meAndSpousesfamilies.push(spouseFamilies);

            case 34:
              _iteratorNormalCompletion = true;
              _context3.next = 23;
              break;

            case 37:
              _context3.next = 43;
              break;

            case 39:
              _context3.prev = 39;
              _context3.t0 = _context3["catch"](21);
              _didIteratorError = true;
              _iteratorError = _context3.t0;

            case 43:
              _context3.prev = 43;
              _context3.prev = 44;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 46:
              _context3.prev = 46;

              if (!_didIteratorError) {
                _context3.next = 49;
                break;
              }

              throw _iteratorError;

            case 49:
              return _context3.finish(46);

            case 50:
              return _context3.finish(43);

            case 51:
              _i = 0;

            case 52:
              if (!(_i < meAndSpousesfamilies.length)) {
                _context3.next = 101;
                break;
              }

              myFamilies = meAndSpousesfamilies[_i];
              familyFather = myFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(familyFather.length > 0)) {
                _context3.next = 76;
                break;
              }

              _context3.next = 58;
              return ctx.db.family({
                id: familyFather[0].id
              }).to().user();

            case 58:
              father = _context3.sent;

              if (!father) {
                _context3.next = 76;
                break;
              }

              groupUsersId.push({
                id: father.id
              });
              _context3.next = 63;
              return ctx.db.user({
                id: father.id
              }).families();

            case 63:
              fatherFamilies = _context3.sent;
              fatherFamilyFather = fatherFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(fatherFamilyFather.length > 0)) {
                _context3.next = 70;
                break;
              }

              _context3.next = 68;
              return ctx.db.family({
                id: fatherFamilyFather[0].id
              }).to().user();

            case 68:
              grandpa = _context3.sent;

              if (grandpa) {
                groupUsersId.push({
                  id: grandpa.id
                });
              }

            case 70:
              motherFamilyFather = fatherFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(motherFamilyFather.length > 0)) {
                _context3.next = 76;
                break;
              }

              _context3.next = 74;
              return ctx.db.family({
                id: motherFamilyFather[0].id
              }).to().user();

            case 74:
              grandma = _context3.sent;

              if (grandma) {
                groupUsersId.push({
                  id: grandma.id
                });
              }

            case 76:
              familyMother = myFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(familyMother.length > 0)) {
                _context3.next = 98;
                break;
              }

              _context3.next = 80;
              return ctx.db.family({
                id: familyMother[0].id
              }).to().user();

            case 80:
              mother = _context3.sent;

              if (!mother) {
                _context3.next = 98;
                break;
              }

              groupUsersId.push({
                id: mother.id
              });
              _context3.next = 85;
              return ctx.db.user({
                id: mother.id
              }).families();

            case 85:
              motherFamilies = _context3.sent;
              fatherFamilyMother = motherFamilies.filter(function (family) {
                return family.relationship === 'father';
              });

              if (!(fatherFamilyMother.length > 0)) {
                _context3.next = 92;
                break;
              }

              _context3.next = 90;
              return ctx.db.family({
                id: fatherFamilyMother[0].id
              }).to().user();

            case 90:
              _grandpa = _context3.sent;

              if (_grandpa) {
                groupUsersId.push({
                  id: _grandpa.id
                });
              }

            case 92:
              motherFamilyMother = motherFamilies.filter(function (family) {
                return family.relationship === 'mother';
              });

              if (!(motherFamilyMother.length > 0)) {
                _context3.next = 98;
                break;
              }

              _context3.next = 96;
              return ctx.db.family({
                id: motherFamilyMother[0].id
              }).to().user();

            case 96:
              _grandma = _context3.sent;

              if (_grandma) {
                groupUsersId.push({
                  id: _grandma.id
                });
              }

            case 98:
              _i++;
              _context3.next = 52;
              break;

            case 101:
              // 我的群由子女负责创建
              sonAndDaughters = meFamilies.filter(function (family) {
                return !!~['son', 'daughter'].indexOf(family.relationship);
              });
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context3.prev = 105;
              _iterator2 = sonAndDaughters[Symbol.iterator]();

            case 107:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context3.next = 116;
                break;
              }

              sonAndDaughter = _step2.value;
              _context3.next = 111;
              return ctx.db.family({
                id: sonAndDaughter.id
              }).to().user();

            case 111:
              sd = _context3.sent;

              if (sd) {
                groupUsersId.push({
                  id: sd.id
                });
              }

            case 113:
              _iteratorNormalCompletion2 = true;
              _context3.next = 107;
              break;

            case 116:
              _context3.next = 122;
              break;

            case 118:
              _context3.prev = 118;
              _context3.t1 = _context3["catch"](105);
              _didIteratorError2 = true;
              _iteratorError2 = _context3.t1;

            case 122:
              _context3.prev = 122;
              _context3.prev = 123;

              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }

            case 125:
              _context3.prev = 125;

              if (!_didIteratorError2) {
                _context3.next = 128;
                break;
              }

              throw _iteratorError2;

            case 128:
              return _context3.finish(125);

            case 129:
              return _context3.finish(122);

            case 130:
              return _context3.abrupt("return", ctx.db.familyGroups({
                where: {
                  OR: groupUsersId.map(function (usersId) {
                    return {
                      users_some: usersId
                    };
                  })
                }
              }));

            case 131:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[21, 39, 43, 51], [44,, 46, 50], [105, 118, 122, 130], [123,, 125, 129]]);
    }));

    function relativefamilyGroups(_x7, _x8, _x9) {
      return _relativefamilyGroups.apply(this, arguments);
    }

    return relativefamilyGroups;
  }(),
  workGroups: function workGroups(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (userId !== parent.uid) {
      return [];
    }

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
  },
  classGroups: function classGroups(parent, args, ctx) {
    var userId = (0, _utils.getUserId)(ctx);

    if (userId !== parent.uid) {
      return [];
    }

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
  },
  colleagues: function colleagues(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).colleagues();
  },
  groupMessages: function groupMessages(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).groupMessages();
  },
  locationGroups: function locationGroups(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).locationGroups();
  },
  loveSetting: function loveSetting(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).loveSetting();
  },
  loveWoman: function loveWoman(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).loveWoman();
  },
  loveMan: function loveMan(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).loveMan();
  },
  signUpLove: function signUpLove(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).signUpLove();
  },
  skills: function skills(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).skills();
  },
  fitConditions: function fitConditions(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).fitConditions();
  },
  nofitConditions: function nofitConditions(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).nofitConditions();
  },
  projects: function projects(parent, args, ctx) {
    return ctx.db.user({
      id: parent.id
    }).projects();
  }
};
exports.User = User;
//# sourceMappingURL=User.js.map