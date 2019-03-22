"use strict";

var _jsonwebtoken = require("jsonwebtoken");

var _crypto = _interopRequireDefault(require("crypto"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _querystring = _interopRequireDefault(require("querystring"));

var _moment = _interopRequireDefault(require("moment"));

var _statusMap = require("../services/statusMap");

var _relationship = require("../services/relationship");

var _subscriptions = require("../subscriptions");

var _helper = require("./helper");

var _settings = require("./settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FAMILYGROUP_CHANGED = 'familyGroupChanged';
var APP_SECRET = 'appsecret321';

function getUserId(context) {
  var Authorization = context.req.headers && context.req.headers.authorization || '';

  if (Authorization) {
    var token = Authorization.replace('Bearer ', '');
    var verifiedToken = (0, _jsonwebtoken.verify)(token, APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}

function getUser(_x, _x2) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, prisma) {
    var Authorization, token, verifiedToken, userId, user;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            Authorization = req.headers && req.headers.authorization || '';

            if (!Authorization) {
              _context10.next = 9;
              break;
            }

            token = Authorization.replace('Bearer ', '');
            verifiedToken = (0, _jsonwebtoken.verify)(token, APP_SECRET);
            userId = verifiedToken.userId;
            _context10.next = 7;
            return prisma.user({
              uid: userId
            });

          case 7:
            user = _context10.sent;
            return _context10.abrupt("return", user);

          case 9:
            return _context10.abrupt("return", null);

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _getUser.apply(this, arguments);
}

var checkeCtxUserExist =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx) {
    var userId, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = getUserId(ctx);

            if (userId) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", false);

          case 3:
            _context.next = 5;
            return ctx.db.user({
              uid: userId
            });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", false);

          case 8:
            return _context.abrupt("return", true);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkeCtxUserExist(_x3) {
    return _ref.apply(this, arguments);
  };
}();

var getCommonFamilies =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(relationship, families, id, ctx) {
    var commonFamilies, gender, hasManySpouses, fatherOrMother, commonFamilies2, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, commonFamily, spouse, isFatherorMother;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 判断自己的家人中那些是共同的家人，如父亲与我共同的家人是（母亲、兄弟姐妹）
            // id代表被判断的那个人。即父亲的id
            // 如果父亲有两任妻子，或母亲有两任丈夫，则需要判断哪个才是父亲、母亲和亲身兄弟姐妹。
            commonFamilies = families.filter(function (family) {
              return family.relationship in _relationship.relationIntersection[relationship];
            }).filter(function (f) {
              return f.id !== id;
            });

            if (!~['father', 'mother'].indexOf(relationship)) {
              _context2.next = 38;
              break;
            }

            gender = _relationship.relationshipTOGender[relationship];

            if (gender === "female") {
              hasManySpouses = families.filter(function (family) {
                return family.relationship === 'husband';
              }).length > 1;
            } else {
              hasManySpouses = families.filter(function (family) {
                return family.relationship === 'wife';
              }).length > 1;
            }

            _context2.next = 6;
            return ctx.db.family({
              id: id
            }).spouse();

          case 6:
            fatherOrMother = _context2.sent;

            if (!hasManySpouses) {
              _context2.next = 38;
              break;
            }

            commonFamilies2 = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 12;
            _iterator = commonFamilies[Symbol.iterator]();

          case 14:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 23;
              break;
            }

            commonFamily = _step.value;
            _context2.next = 18;
            return ctx.db.family({
              id: commonFamily.id
            }).spouse();

          case 18:
            spouse = _context2.sent;

            if (spouse) {
              // 兄弟姐妹
              if (spouse.id === fatherOrMother.id) {
                commonFamilies2.push(commonFamily);
              }
            } else {
              // 父母
              isFatherorMother = commonFamily.id === fatherOrMother.id;

              if (isFatherorMother) {
                commonFamilies2.push(commonFamily);
              }
            }

          case 20:
            _iteratorNormalCompletion = true;
            _context2.next = 14;
            break;

          case 23:
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](12);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 29:
            _context2.prev = 29;
            _context2.prev = 30;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 32:
            _context2.prev = 32;

            if (!_didIteratorError) {
              _context2.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context2.finish(32);

          case 36:
            return _context2.finish(29);

          case 37:
            return _context2.abrupt("return", commonFamilies2);

          case 38:
            return _context2.abrupt("return", commonFamilies);

          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[12, 25, 29, 37], [30,, 32, 36]]);
  }));

  return function getCommonFamilies(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var getIntersectionFamiles =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(myFamilies, relativeFamiles, ctx) {
    var myIntersectionFamilies, relativeIntersectionFamilies, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, myFamily, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, relativeFamily, myFamilyTo, relativeFamilyTo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            myIntersectionFamilies = [];
            relativeIntersectionFamilies = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context3.prev = 5;
            _iterator2 = myFamilies[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context3.next = 43;
              break;
            }

            myFamily = _step2.value;
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context3.prev = 12;
            _iterator3 = relativeFamiles[Symbol.iterator]();

          case 14:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context3.next = 26;
              break;
            }

            relativeFamily = _step3.value;
            _context3.next = 18;
            return ctx.db.family({
              id: myFamily.id
            }).to();

          case 18:
            myFamilyTo = _context3.sent;
            _context3.next = 21;
            return ctx.db.family({
              id: relativeFamily.id
            }).to();

          case 21:
            relativeFamilyTo = _context3.sent;

            if (myFamilyTo.name === relativeFamilyTo.name) {
              myIntersectionFamilies.push(myFamily);
              relativeIntersectionFamilies.push(relativeFamily);
            }

          case 23:
            _iteratorNormalCompletion3 = true;
            _context3.next = 14;
            break;

          case 26:
            _context3.next = 32;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t0 = _context3["catch"](12);
            _didIteratorError3 = true;
            _iteratorError3 = _context3.t0;

          case 32:
            _context3.prev = 32;
            _context3.prev = 33;

            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }

          case 35:
            _context3.prev = 35;

            if (!_didIteratorError3) {
              _context3.next = 38;
              break;
            }

            throw _iteratorError3;

          case 38:
            return _context3.finish(35);

          case 39:
            return _context3.finish(32);

          case 40:
            _iteratorNormalCompletion2 = true;
            _context3.next = 7;
            break;

          case 43:
            _context3.next = 49;
            break;

          case 45:
            _context3.prev = 45;
            _context3.t1 = _context3["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t1;

          case 49:
            _context3.prev = 49;
            _context3.prev = 50;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 52:
            _context3.prev = 52;

            if (!_didIteratorError2) {
              _context3.next = 55;
              break;
            }

            throw _iteratorError2;

          case 55:
            return _context3.finish(52);

          case 56:
            return _context3.finish(49);

          case 57:
            return _context3.abrupt("return", {
              myIntersectionFamilies: myIntersectionFamilies,
              relativeIntersectionFamilies: relativeIntersectionFamilies
            });

          case 58:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 45, 49, 57], [12, 28, 32, 40], [33,, 35, 39], [50,, 52, 56]]);
  }));

  return function getIntersectionFamiles(_x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

var getDifferentFamilies = function getDifferentFamilies(myFamilies, myCommonFamilies) {
  var differentFamilies = [];

  if (myCommonFamilies.length === 0) {
    differentFamilies = _toConsumableArray(myFamilies);
    return differentFamilies;
  }

  var myCommonFamiliesIds = myCommonFamilies.map(function (mycommonFamily) {
    return mycommonFamily.id;
  });
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = myFamilies[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var myFamily = _step4.value;

      if (!~myCommonFamiliesIds.indexOf(myFamily.id)) {
        differentFamilies.push(myFamily);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return differentFamilies;
};

var updateCommonUserFamily =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(me, myRelationship, myCommonFamily, relative, relativeRelationship, ctx) {
    var relativePerson, commonUser, commonUserToRelativeFamily, isNotYourself, computeRelationship, isSonOrDaughter, commonUserToMeFamily, spouse;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ctx.db.persons({
              where: {
                user: {
                  id: relative.id
                }
              }
            });

          case 2:
            relativePerson = _context4.sent;
            _context4.next = 5;
            return ctx.db.family({
              id: myCommonFamily.id
            }).to().user();

          case 5:
            commonUser = _context4.sent;
            _context4.next = 8;
            return ctx.db.user({
              id: commonUser.id
            }).families({
              where: {
                to: {
                  name: relative.name
                }
              }
            });

          case 8:
            commonUserToRelativeFamily = _context4.sent;

            if (!(commonUserToRelativeFamily.length > 0)) {
              _context4.next = 14;
              break;
            }

            _context4.next = 12;
            return ctx.db.updateFamily({
              where: {
                id: commonUserToRelativeFamily[0].id
              },
              data: {
                status: _statusMap.statusMap[myCommonFamily.status],
                to: {
                  connect: {
                    id: relativePerson[0].id
                  }
                }
              }
            });

          case 12:
            _context4.next = 37;
            break;

          case 14:
            // 如果是自己的话不要增加。
            isNotYourself = relativePerson[0].name !== commonUser.name;

            if (!isNotYourself) {
              _context4.next = 37;
              break;
            }

            // 不存在则增加,如果relative增加的是父亲或母亲的话，commonUser在增加子女时需要计算配偶是谁
            computeRelationship = _relationship.relationshipGenderMap[relative.gender][_relationship.relationIntersectionNew[relativeRelationship][myCommonFamily.relationship]];

            if (computeRelationship === "sister") {
              if (Date.parse(relative.birthday) > Date.parse(commonUser.birthday)) {
                computeRelationship = "youngsister";
              } else {
                computeRelationship = "oldsister";
              }
            } else if (computeRelationship === "brother") {
              if (Date.parse(relative.birthday) > Date.parse(commonUser.birthday)) {
                computeRelationship = "youngbrother";
              } else {
                computeRelationship = "oldbrother";
              }
            }

            isSonOrDaughter = ~["son", "daughter"].indexOf(computeRelationship);

            if (!isSonOrDaughter) {
              _context4.next = 35;
              break;
            }

            _context4.next = 22;
            return ctx.db.user({
              id: commonUser.id
            }).families({
              where: {
                to: {
                  name: me.name
                }
              }
            });

          case 22:
            commonUserToMeFamily = _context4.sent;

            if (!~["wife", "husband"].indexOf(myCommonFamily.relationship)) {
              _context4.next = 28;
              break;
            }

            _context4.next = 26;
            return ctx.db.createFamily({
              from: {
                connect: {
                  id: commonUser.id
                }
              },
              to: {
                connect: {
                  id: relativePerson[0].id
                }
              },
              status: _statusMap.statusMap[myCommonFamily.status],
              spouse: {
                connect: {
                  id: commonUserToMeFamily[0].id
                }
              },
              relationship: computeRelationship
            });

          case 26:
            _context4.next = 33;
            break;

          case 28:
            _context4.next = 30;
            return ctx.db.family({
              id: commonUserToMeFamily[0].id
            }).spouse();

          case 30:
            spouse = _context4.sent;
            _context4.next = 33;
            return ctx.db.createFamily({
              from: {
                connect: {
                  id: commonUser.id
                }
              },
              to: {
                connect: {
                  id: relativePerson[0].id
                }
              },
              status: _statusMap.statusMap[myCommonFamily.status],
              spouse: {
                connect: {
                  id: spouse.id
                }
              },
              relationship: computeRelationship
            });

          case 33:
            _context4.next = 37;
            break;

          case 35:
            _context4.next = 37;
            return ctx.db.createFamily({
              from: {
                connect: {
                  id: commonUser.id
                }
              },
              to: {
                connect: {
                  id: relativePerson[0].id
                }
              },
              status: _statusMap.statusMap[myCommonFamily.status],
              relationship: computeRelationship
            });

          case 37:
            // 向commonuser推送familychanged
            _subscriptions.pubsub.publish('familyChanged', {
              "familyChanged": {
                "text": commonUser.id
              }
            });

          case 38:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateCommonUserFamily(_x11, _x12, _x13, _x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();

var getAllFamilies =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(myFamilies, ctx) {
    var families, SON_DAUGHTER, BROTHER_SISTER, SPOUSE_SON_DAUGHTER, myBSFamilies, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, myBSFamily, BS, BSFamilies, SSDOfBS, SDFamiliesOfBS, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, SDFamilyOfBS, SDOfBS, familiesOfSDOfBS, SSDOfSDOfBS, SDfamiliesOfSDOfBS, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, SDfamilyOfSDOfBS, SDOfSDOfBS, familiesOfSDOfSDOfBS, SSDfamiliesOfSDOfSDOfBS, SDFamiliesOfM, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, SDFamilyOfMe, SDOfMe, familiesOfSDOfMe, SSDOfSDOfMe, SDfamiliesOfSDOfMe, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, SDfamilyOfSDOfMe, SDOfSDOfMe, familiesOfSDOfSDOfMe, SSDfamiliesOfSDOfSDOfMe;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // 获取父母-自己-儿子-孙子-重孙所有的families
            // 流程
            // 获取层数5：父母-自己-儿子-孙子-重孙
            // 1、获取自己所有的families,自己所有的families都在父母群中。自己层完毕
            // 2、获取兄弟姐妹的配偶和子女，将兄弟姐妹的配偶和子女加到父母群中。儿子层完毕
            // 3、获取自己和兄弟姐妹的子女的配偶和子女，将自己和兄弟姐妹的子女的配偶和子女加到父母群中。孙子层完毕。
            // 4、获取自己和兄弟姐妹的子女的子女的配偶和子女，将自己和兄弟姐妹的子女的子女的配偶和子女加到父母群中。重孙层完毕。
            families = [];
            SON_DAUGHTER = ['son', 'daughter'];
            BROTHER_SISTER = ['oldbrother', 'youngsister', 'youngbrother', 'oldsister'];
            SPOUSE_SON_DAUGHTER = ['son', 'daughter', 'wife', 'husband']; // BS:兄弟姐妹，SSD:配偶和子女，SD:子女,M:我,MBS:我和兄弟姐妹
            // 1、自己层

            families = families.concat(myFamilies); // 2、儿子层

            myBSFamilies = myFamilies.filter(function (family) {
              return !!~BROTHER_SISTER.indexOf(family.relationship);
            });
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context5.prev = 9;
            _iterator5 = myBSFamilies[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
              _context5.next = 93;
              break;
            }

            myBSFamily = _step5.value;
            _context5.next = 15;
            return ctx.db.family({
              id: myBSFamily.id
            }).to().user();

          case 15:
            BS = _context5.sent;

            if (!BS) {
              _context5.next = 90;
              break;
            }

            _context5.next = 19;
            return ctx.db.user({
              id: BS.id
            }).families();

          case 19:
            BSFamilies = _context5.sent;
            SSDOfBS = BSFamilies.filter(function (family) {
              return !!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship);
            });
            families = families.concat(SSDOfBS); // 3、孙子层

            SDFamiliesOfBS = BSFamilies.filter(function (family) {
              return !!~SON_DAUGHTER.indexOf(family.relationship);
            });
            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            _context5.prev = 26;
            _iterator7 = SDFamiliesOfBS[Symbol.iterator]();

          case 28:
            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
              _context5.next = 76;
              break;
            }

            SDFamilyOfBS = _step7.value;
            _context5.next = 32;
            return ctx.db.family({
              id: SDFamilyOfBS.id
            }).to().user();

          case 32:
            SDOfBS = _context5.sent;

            if (!SDOfBS) {
              _context5.next = 73;
              break;
            }

            _context5.next = 36;
            return ctx.db.user({
              id: SDOfBS.id
            }).families();

          case 36:
            familiesOfSDOfBS = _context5.sent;
            SSDOfSDOfBS = familiesOfSDOfBS.filter(function (family) {
              return !!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship);
            });
            families = families.concat(SSDOfSDOfBS); // 4、重孙层

            SDfamiliesOfSDOfBS = familiesOfSDOfBS.filter(function (family) {
              return !!~SON_DAUGHTER.indexOf(family.relationship);
            });
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context5.prev = 43;
            _iterator8 = SDfamiliesOfSDOfBS[Symbol.iterator]();

          case 45:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
              _context5.next = 59;
              break;
            }

            SDfamilyOfSDOfBS = _step8.value;
            _context5.next = 49;
            return ctx.db.family({
              id: SDfamilyOfSDOfBS.id
            }).to().user();

          case 49:
            SDOfSDOfBS = _context5.sent;

            if (!SDOfSDOfBS) {
              _context5.next = 56;
              break;
            }

            _context5.next = 53;
            return ctx.db.user({
              id: SDOfSDOfBS.id
            }).families();

          case 53:
            familiesOfSDOfSDOfBS = _context5.sent;
            SSDfamiliesOfSDOfSDOfBS = familiesOfSDOfSDOfBS.filter(function (family) {
              return !!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship);
            });
            families = families.concat(SSDfamiliesOfSDOfSDOfBS);

          case 56:
            _iteratorNormalCompletion8 = true;
            _context5.next = 45;
            break;

          case 59:
            _context5.next = 65;
            break;

          case 61:
            _context5.prev = 61;
            _context5.t0 = _context5["catch"](43);
            _didIteratorError8 = true;
            _iteratorError8 = _context5.t0;

          case 65:
            _context5.prev = 65;
            _context5.prev = 66;

            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }

          case 68:
            _context5.prev = 68;

            if (!_didIteratorError8) {
              _context5.next = 71;
              break;
            }

            throw _iteratorError8;

          case 71:
            return _context5.finish(68);

          case 72:
            return _context5.finish(65);

          case 73:
            _iteratorNormalCompletion7 = true;
            _context5.next = 28;
            break;

          case 76:
            _context5.next = 82;
            break;

          case 78:
            _context5.prev = 78;
            _context5.t1 = _context5["catch"](26);
            _didIteratorError7 = true;
            _iteratorError7 = _context5.t1;

          case 82:
            _context5.prev = 82;
            _context5.prev = 83;

            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }

          case 85:
            _context5.prev = 85;

            if (!_didIteratorError7) {
              _context5.next = 88;
              break;
            }

            throw _iteratorError7;

          case 88:
            return _context5.finish(85);

          case 89:
            return _context5.finish(82);

          case 90:
            _iteratorNormalCompletion5 = true;
            _context5.next = 11;
            break;

          case 93:
            _context5.next = 99;
            break;

          case 95:
            _context5.prev = 95;
            _context5.t2 = _context5["catch"](9);
            _didIteratorError5 = true;
            _iteratorError5 = _context5.t2;

          case 99:
            _context5.prev = 99;
            _context5.prev = 100;

            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }

          case 102:
            _context5.prev = 102;

            if (!_didIteratorError5) {
              _context5.next = 105;
              break;
            }

            throw _iteratorError5;

          case 105:
            return _context5.finish(102);

          case 106:
            return _context5.finish(99);

          case 107:
            // 3、孙子层
            SDFamiliesOfM = myFamilies.filter(function (family) {
              return !!~SON_DAUGHTER.indexOf(family.relationship);
            });
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context5.prev = 111;
            _iterator6 = SDFamiliesOfM[Symbol.iterator]();

          case 113:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
              _context5.next = 161;
              break;
            }

            SDFamilyOfMe = _step6.value;
            _context5.next = 117;
            return ctx.db.family({
              id: SDFamilyOfMe.id
            }).to().user();

          case 117:
            SDOfMe = _context5.sent;

            if (!SDOfMe) {
              _context5.next = 158;
              break;
            }

            _context5.next = 121;
            return ctx.db.user({
              id: SDOfMe.id
            }).families();

          case 121:
            familiesOfSDOfMe = _context5.sent;
            SSDOfSDOfMe = familiesOfSDOfMe.filter(function (family) {
              return !!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship);
            });
            families = families.concat(SSDOfSDOfMe); // 4、重孙层

            SDfamiliesOfSDOfMe = familiesOfSDOfMe.filter(function (family) {
              return !!~SON_DAUGHTER.indexOf(family.relationship);
            });
            _iteratorNormalCompletion9 = true;
            _didIteratorError9 = false;
            _iteratorError9 = undefined;
            _context5.prev = 128;
            _iterator9 = SDfamiliesOfSDOfMe[Symbol.iterator]();

          case 130:
            if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
              _context5.next = 144;
              break;
            }

            SDfamilyOfSDOfMe = _step9.value;
            _context5.next = 134;
            return ctx.db.family({
              id: SDfamilyOfSDOfMe.id
            }).to().user();

          case 134:
            SDOfSDOfMe = _context5.sent;

            if (!SDOfSDOfMe) {
              _context5.next = 141;
              break;
            }

            _context5.next = 138;
            return ctx.db.user({
              id: SDOfSDOfMe.id
            }).families();

          case 138:
            familiesOfSDOfSDOfMe = _context5.sent;
            SSDfamiliesOfSDOfSDOfMe = familiesOfSDOfSDOfMe.filter(function (family) {
              return !!~SPOUSE_SON_DAUGHTER.indexOf(family.relationship);
            });
            families = families.concat(SSDfamiliesOfSDOfSDOfMe);

          case 141:
            _iteratorNormalCompletion9 = true;
            _context5.next = 130;
            break;

          case 144:
            _context5.next = 150;
            break;

          case 146:
            _context5.prev = 146;
            _context5.t3 = _context5["catch"](128);
            _didIteratorError9 = true;
            _iteratorError9 = _context5.t3;

          case 150:
            _context5.prev = 150;
            _context5.prev = 151;

            if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
              _iterator9.return();
            }

          case 153:
            _context5.prev = 153;

            if (!_didIteratorError9) {
              _context5.next = 156;
              break;
            }

            throw _iteratorError9;

          case 156:
            return _context5.finish(153);

          case 157:
            return _context5.finish(150);

          case 158:
            _iteratorNormalCompletion6 = true;
            _context5.next = 113;
            break;

          case 161:
            _context5.next = 167;
            break;

          case 163:
            _context5.prev = 163;
            _context5.t4 = _context5["catch"](111);
            _didIteratorError6 = true;
            _iteratorError6 = _context5.t4;

          case 167:
            _context5.prev = 167;
            _context5.prev = 168;

            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }

          case 170:
            _context5.prev = 170;

            if (!_didIteratorError6) {
              _context5.next = 173;
              break;
            }

            throw _iteratorError6;

          case 173:
            return _context5.finish(170);

          case 174:
            return _context5.finish(167);

          case 175:
            return _context5.abrupt("return", families);

          case 176:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[9, 95, 99, 107], [26, 78, 82, 90], [43, 61, 65, 73], [66,, 68, 72], [83,, 85, 89], [100,, 102, 106], [111, 163, 167, 175], [128, 146, 150, 158], [151,, 153, 157], [168,, 170, 174]]);
  }));

  return function getAllFamilies(_x17, _x18) {
    return _ref5.apply(this, arguments);
  };
}();

var checkExistFatherAndMother =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(userId, ctx) {
    var myFamilies, father, mother;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return ctx.db.user({
              id: userId
            }).families();

          case 2:
            myFamilies = _context6.sent;
            father = myFamilies.filter(function (family) {
              return family.relationship === 'father';
            });
            mother = myFamilies.filter(function (family) {
              return family.relationship === 'mother';
            });

            if (!(father.length === 0 || mother.length === 0)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", false);

          case 7:
            return _context6.abrupt("return", true);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function checkExistFatherAndMother(_x19, _x20) {
    return _ref6.apply(this, arguments);
  };
}();

var createFamilyGroupById =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(id, ctx) {
    var BROTHER_SISTER, myFamilies, me, father, fatherPerson, mother, motherPerson, myBSFamilies, MBS, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, myBSFamily, BS, MBSids, myParentsGroupFamilies, myParentsGroupFamiliesIds, familyGroup, mbsFamilyGroups, existFamilyGroupFamilies, exsitFamilyGroupFamilyIds, hasFatherAndMotherFamilyGroup, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _mbsFamilyGroup, _fatherUser, _motherUser, nothasFatherAndMotherFaimlyGroupIds, count, _existFamilyGroupFamilies, _exsitFamilyGroupFamilyIds, hasFatherOrMotherFamilyGroup, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, mbsFamilyGroup, fatherUser, motherUser, nothasFatherOrMotherFaimlyGroupIds, _count, _existFamilyGroupFamilies2, _exsitFamilyGroupFamilyIds2, otherFaimlyGroupIds, _count2, _existFamilyGroupFamilies3, _exsitFamilyGroupFamilyIds3;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // 创建父母familyGroup
            // 检查是否已经输入父母姓名
            BROTHER_SISTER = ['oldbrother', 'youngsister', 'youngbrother', 'oldsister'];
            _context7.next = 3;
            return ctx.db.user({
              id: id
            }).families();

          case 3:
            myFamilies = _context7.sent;
            _context7.next = 6;
            return ctx.db.user({
              id: id
            });

          case 6:
            me = _context7.sent;
            father = myFamilies.filter(function (family) {
              return family.relationship === 'father';
            });

            if (!(father.length === 0)) {
              _context7.next = 10;
              break;
            }

            return _context7.abrupt("return", null);

          case 10:
            _context7.next = 12;
            return ctx.db.family({
              id: father[0].id
            }).to();

          case 12:
            fatherPerson = _context7.sent;
            mother = myFamilies.filter(function (family) {
              return family.relationship === 'mother';
            });

            if (!(mother.length === 0)) {
              _context7.next = 16;
              break;
            }

            return _context7.abrupt("return", null);

          case 16:
            _context7.next = 18;
            return ctx.db.family({
              id: mother[0].id
            }).to();

          case 18:
            motherPerson = _context7.sent;
            // -----------------------------------------------
            // 获取我的兄弟姐妹
            myBSFamilies = myFamilies.filter(function (family) {
              return !!~BROTHER_SISTER.indexOf(family.relationship);
            });
            MBS = [];
            _iteratorNormalCompletion10 = true;
            _didIteratorError10 = false;
            _iteratorError10 = undefined;
            _context7.prev = 24;
            _iterator10 = myBSFamilies[Symbol.iterator]();

          case 26:
            if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
              _context7.next = 35;
              break;
            }

            myBSFamily = _step10.value;
            _context7.next = 30;
            return ctx.db.family({
              id: myBSFamily.id
            }).to().user();

          case 30:
            BS = _context7.sent;

            if (BS) {
              MBS.push(BS);
            }

          case 32:
            _iteratorNormalCompletion10 = true;
            _context7.next = 26;
            break;

          case 35:
            _context7.next = 41;
            break;

          case 37:
            _context7.prev = 37;
            _context7.t0 = _context7["catch"](24);
            _didIteratorError10 = true;
            _iteratorError10 = _context7.t0;

          case 41:
            _context7.prev = 41;
            _context7.prev = 42;

            if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
              _iterator10.return();
            }

          case 44:
            _context7.prev = 44;

            if (!_didIteratorError10) {
              _context7.next = 47;
              break;
            }

            throw _iteratorError10;

          case 47:
            return _context7.finish(44);

          case 48:
            return _context7.finish(41);

          case 49:
            MBS.push(me);
            MBSids = MBS.map(function (mbs) {
              return {
                id: mbs.id
              };
            });
            _context7.next = 53;
            return getAllFamilies(myFamilies, ctx);

          case 53:
            myParentsGroupFamilies = _context7.sent;
            myParentsGroupFamiliesIds = myParentsGroupFamilies.map(function (family) {
              return {
                id: family.id
              };
            }); // 方案一：
            // 检查familyGroup中的users是否已经包含了自己和兄弟姐妹，如果都包含了则更新faimlyGroup，
            // 如果没有包含的话，则删除自己和兄弟姐妹所有的familyGroup然后，再创建一个新的familyGroup.
            // 如果familyGroup中的father和mother都是user则不可删除。
            // 情况分类：判断哪个familyGroup为真
            // A:如果mbs都没有familyGroup则直接以刷新者新建一个。
            // B:如果只有一个人有familyGroup，则以该人的familyGroup为真。
            // C:如果有超过一个人有familyGroup，则：
            // a:如果familyGroup已经包含了所有的兄弟姐妹，即所有人的familyGroup已经是同一个。则该familyGroup为真。
            // b:
            // (1)有一个人的familyGroup中的father和mother都是user,则该familyGroup为真，其他人的familyGroup不是这个的直接删除。
            // (2)没有一个人的familyGroup中的father和mother都是user.
            // (2.1)有一个人faimlyGroup中的father或者mother是user,则该familyGroup为真，其他人的familyGroup直接删除。
            // (2.2)没有一个人的familyGroup中的father或者mother是user,则以该familyGroup为真，删除其他的familyGroup。

            _context7.next = 57;
            return ctx.db.familyGroups({
              where: {
                OR: MBSids.map(function (mbsId) {
                  return {
                    users_some: mbsId
                  };
                })
              }
            });

          case 57:
            mbsFamilyGroups = _context7.sent;

            if (!(mbsFamilyGroups.length === 0)) {
              _context7.next = 64;
              break;
            }

            _context7.next = 61;
            return ctx.db.createFamilyGroup({
              name: "".concat(fatherPerson.name, "\u548C").concat(motherPerson.name, "\u7684\u7FA4"),
              creater: {
                connect: {
                  id: id
                }
              },
              father: {
                connect: {
                  id: fatherPerson.id
                }
              },
              mother: {
                connect: {
                  id: motherPerson.id
                }
              },
              families: {
                connect: myParentsGroupFamiliesIds
              },
              users: {
                connect: MBSids
              }
            });

          case 61:
            familyGroup = _context7.sent;
            _context7.next = 186;
            break;

          case 64:
            if (!(mbsFamilyGroups.length === 1)) {
              _context7.next = 76;
              break;
            }

            _context7.next = 67;
            return ctx.db.familyGroup({
              id: mbsFamilyGroups[0].id
            }).families();

          case 67:
            existFamilyGroupFamilies = _context7.sent;
            exsitFamilyGroupFamilyIds = existFamilyGroupFamilies.map(function (family) {
              return {
                id: family.id
              };
            });
            _context7.next = 71;
            return ctx.db.updateFamilyGroup({
              where: {
                id: mbsFamilyGroups[0].id
              },
              data: {
                families: {
                  disconnect: exsitFamilyGroupFamilyIds
                }
              }
            });

          case 71:
            _context7.next = 73;
            return ctx.db.updateFamilyGroup({
              where: {
                id: mbsFamilyGroups[0].id
              },
              data: {
                families: {
                  connect: myParentsGroupFamiliesIds
                },
                users: {
                  connect: MBSids
                }
              }
            });

          case 73:
            familyGroup = _context7.sent;
            _context7.next = 186;
            break;

          case 76:
            if (!(mbsFamilyGroups.length > 1)) {
              _context7.next = 186;
              break;
            }

            // 有多个人有familyGroup，需要判断哪个为真。
            // (1)如果父母都为user者，则该familyGroup为真。
            hasFatherAndMotherFamilyGroup = [];
            _iteratorNormalCompletion11 = true;
            _didIteratorError11 = false;
            _iteratorError11 = undefined;
            _context7.prev = 81;
            _iterator11 = mbsFamilyGroups[Symbol.iterator]();

          case 83:
            if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
              _context7.next = 95;
              break;
            }

            _mbsFamilyGroup = _step11.value;
            _context7.next = 87;
            return ctx.db.familyGroup({
              id: _mbsFamilyGroup.id
            }).father().user();

          case 87:
            _fatherUser = _context7.sent;
            _context7.next = 90;
            return ctx.db.familyGroup({
              id: _mbsFamilyGroup.id
            }).mother().user();

          case 90:
            _motherUser = _context7.sent;

            if (_fatherUser && _motherUser) {
              hasFatherAndMotherFamilyGroup.push(_mbsFamilyGroup);
            }

          case 92:
            _iteratorNormalCompletion11 = true;
            _context7.next = 83;
            break;

          case 95:
            _context7.next = 101;
            break;

          case 97:
            _context7.prev = 97;
            _context7.t1 = _context7["catch"](81);
            _didIteratorError11 = true;
            _iteratorError11 = _context7.t1;

          case 101:
            _context7.prev = 101;
            _context7.prev = 102;

            if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
              _iterator11.return();
            }

          case 104:
            _context7.prev = 104;

            if (!_didIteratorError11) {
              _context7.next = 107;
              break;
            }

            throw _iteratorError11;

          case 107:
            return _context7.finish(104);

          case 108:
            return _context7.finish(101);

          case 109:
            if (!(hasFatherAndMotherFamilyGroup.length > 0)) {
              _context7.next = 125;
              break;
            }

            // 删除其他的familyGroup
            nothasFatherAndMotherFaimlyGroupIds = mbsFamilyGroups.filter(function (mbsFamilyGroup) {
              return mbsFamilyGroup.id !== hasFatherAndMotherFamilyGroup[0].id;
            }).map(function (fg) {
              return {
                id: fg.id
              };
            });
            _context7.next = 113;
            return ctx.db.deleteManyFamilyGroups({
              OR: nothasFatherAndMotherFaimlyGroupIds
            });

          case 113:
            count = _context7.sent;
            _context7.next = 116;
            return ctx.db.familyGroup({
              id: hasFatherAndMotherFamilyGroup[0].id
            }).families();

          case 116:
            _existFamilyGroupFamilies = _context7.sent;
            _exsitFamilyGroupFamilyIds = _existFamilyGroupFamilies.map(function (family) {
              return {
                id: family.id
              };
            });
            _context7.next = 120;
            return ctx.db.updateFamilyGroup({
              where: {
                id: hasFatherAndMotherFamilyGroup[0].id
              },
              data: {
                families: {
                  disconnect: _exsitFamilyGroupFamilyIds
                }
              }
            });

          case 120:
            _context7.next = 122;
            return ctx.db.updateFamilyGroup({
              where: {
                id: hasFatherAndMotherFamilyGroup[0].id
              },
              data: {
                families: {
                  connect: myParentsGroupFamiliesIds
                },
                users: {
                  connect: MBSids
                }
              }
            });

          case 122:
            familyGroup = _context7.sent;
            _context7.next = 186;
            break;

          case 125:
            // 如果没有一个人的father和mother全部为user，但有一个是
            hasFatherOrMotherFamilyGroup = [];
            _iteratorNormalCompletion12 = true;
            _didIteratorError12 = false;
            _iteratorError12 = undefined;
            _context7.prev = 129;
            _iterator12 = mbsFamilyGroups[Symbol.iterator]();

          case 131:
            if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
              _context7.next = 143;
              break;
            }

            mbsFamilyGroup = _step12.value;
            _context7.next = 135;
            return ctx.db.familyGroup({
              id: mbsFamilyGroup.id
            }).father().user();

          case 135:
            fatherUser = _context7.sent;
            _context7.next = 138;
            return ctx.db.familyGroup({
              id: mbsFamilyGroup.id
            }).mother().user();

          case 138:
            motherUser = _context7.sent;

            if (fatherUser || motherUser) {
              hasFatherOrMotherFamilyGroup.push(mbsFamilyGroup);
            }

          case 140:
            _iteratorNormalCompletion12 = true;
            _context7.next = 131;
            break;

          case 143:
            _context7.next = 149;
            break;

          case 145:
            _context7.prev = 145;
            _context7.t2 = _context7["catch"](129);
            _didIteratorError12 = true;
            _iteratorError12 = _context7.t2;

          case 149:
            _context7.prev = 149;
            _context7.prev = 150;

            if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
              _iterator12.return();
            }

          case 152:
            _context7.prev = 152;

            if (!_didIteratorError12) {
              _context7.next = 155;
              break;
            }

            throw _iteratorError12;

          case 155:
            return _context7.finish(152);

          case 156:
            return _context7.finish(149);

          case 157:
            if (!(hasFatherOrMotherFamilyGroup.length > 0)) {
              _context7.next = 173;
              break;
            }

            // 删除其他的familyGroup
            nothasFatherOrMotherFaimlyGroupIds = mbsFamilyGroups.filter(function (mbsFamilyGroup) {
              return mbsFamilyGroup.id !== hasFatherOrMotherFamilyGroup[0].id;
            }).map(function (fg) {
              return {
                id: fg.id
              };
            });
            _context7.next = 161;
            return ctx.db.deleteManyFamilyGroups({
              OR: nothasFatherOrMotherFaimlyGroupIds
            });

          case 161:
            _count = _context7.sent;
            _context7.next = 164;
            return ctx.db.familyGroup({
              id: hasFatherOrMotherFamilyGroup[0].id
            }).families();

          case 164:
            _existFamilyGroupFamilies2 = _context7.sent;
            _exsitFamilyGroupFamilyIds2 = _existFamilyGroupFamilies2.map(function (family) {
              return {
                id: family.id
              };
            });
            _context7.next = 168;
            return ctx.db.updateFamilyGroup({
              where: {
                id: hasFatherOrMotherFamilyGroup[0].id
              },
              data: {
                families: {
                  disconnect: _exsitFamilyGroupFamilyIds2
                }
              }
            });

          case 168:
            _context7.next = 170;
            return ctx.db.updateFamilyGroup({
              where: {
                id: hasFatherOrMotherFamilyGroup[0].id
              },
              data: {
                families: {
                  connect: myParentsGroupFamiliesIds
                },
                users: {
                  connect: MBSids
                }
              }
            });

          case 170:
            familyGroup = _context7.sent;
            _context7.next = 186;
            break;

          case 173:
            // 如果所有人的father和mother都不是,则以任意一个为真,都以第一个为真
            // 删除其他的familyGroup
            otherFaimlyGroupIds = mbsFamilyGroups.filter(function (mbsFamilyGroup) {
              return mbsFamilyGroup.id !== mbsFamilyGroups[0].id;
            }).map(function (fg) {
              return {
                id: fg.id
              };
            });
            _context7.next = 176;
            return ctx.db.deleteManyFamilyGroups({
              OR: otherFaimlyGroupIds
            });

          case 176:
            _count2 = _context7.sent;
            _context7.next = 179;
            return ctx.db.familyGroup({
              id: mbsFamilyGroups[0].id
            }).families();

          case 179:
            _existFamilyGroupFamilies3 = _context7.sent;
            _exsitFamilyGroupFamilyIds3 = _existFamilyGroupFamilies3.map(function (family) {
              return {
                id: family.id
              };
            });
            _context7.next = 183;
            return ctx.db.updateFamilyGroup({
              where: {
                id: mbsFamilyGroups[0].id
              },
              data: {
                families: {
                  disconnect: _exsitFamilyGroupFamilyIds3
                }
              }
            });

          case 183:
            _context7.next = 185;
            return ctx.db.updateFamilyGroup({
              where: {
                id: mbsFamilyGroups[0].id
              },
              data: {
                families: {
                  connect: myParentsGroupFamiliesIds
                },
                users: {
                  connect: MBSids
                }
              }
            });

          case 185:
            familyGroup = _context7.sent;

          case 186:
            return _context7.abrupt("return", familyGroup);

          case 187:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[24, 37, 41, 49], [42,, 44, 48], [81, 97, 101, 109], [102,, 104, 108], [129, 145, 149, 157], [150,, 152, 156]]);
  }));

  return function createFamilyGroupById(_x21, _x22) {
    return _ref7.apply(this, arguments);
  };
}();

var pubGroupFamily =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(familyGroup, ctx) {
    var groupFamilies, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, family, user;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return ctx.db.familyGroup({
              id: familyGroup.id
            }).families();

          case 2:
            groupFamilies = _context8.sent;
            _iteratorNormalCompletion13 = true;
            _didIteratorError13 = false;
            _iteratorError13 = undefined;
            _context8.prev = 6;
            _iterator13 = groupFamilies[Symbol.iterator]();

          case 8:
            if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
              _context8.next = 17;
              break;
            }

            family = _step13.value;
            _context8.next = 12;
            return ctx.db.family({
              id: family.id
            }).to().user();

          case 12:
            user = _context8.sent;

            if (user) {
              _subscriptions.pubsub.publish(FAMILYGROUP_CHANGED, _defineProperty({}, FAMILYGROUP_CHANGED, {
                "text": user.id
              }));
            }

          case 14:
            _iteratorNormalCompletion13 = true;
            _context8.next = 8;
            break;

          case 17:
            _context8.next = 23;
            break;

          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](6);
            _didIteratorError13 = true;
            _iteratorError13 = _context8.t0;

          case 23:
            _context8.prev = 23;
            _context8.prev = 24;

            if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
              _iterator13.return();
            }

          case 26:
            _context8.prev = 26;

            if (!_didIteratorError13) {
              _context8.next = 29;
              break;
            }

            throw _iteratorError13;

          case 29:
            return _context8.finish(26);

          case 30:
            return _context8.finish(23);

          case 31:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[6, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function pubGroupFamily(_x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

var refreshMyFamilyGroups =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(parent, args, ctx) {
    var userId, user, groupUsersId, meAndSpousesfamilies, meFamilies, mySpouseFamilies, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, mySpouseFamily, mySpouse, spouseFamilies, _i, myFamilies, p, fp, ffp, fmp, mp, mfp, mmp, mpast, fpast, me, familyFather, father, fatherFamilies, fatherFamilyFather, grandpa, motherFamilyFather, grandma, familyMother, mother, motherFamilies, fatherFamilyMother, _grandpa, motherFamilyMother, _grandma, sonAndDaughters, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, sonAndDaughter, sd;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            userId = getUserId(ctx);

            if (userId) {
              _context9.next = 3;
              break;
            }

            throw new Error("用户不存在");

          case 3:
            _context9.next = 5;
            return ctx.db.user({
              uid: userId
            });

          case 5:
            user = _context9.sent;

            if (user) {
              _context9.next = 8;
              break;
            }

            throw new Error("用户不存在");

          case 8:
            groupUsersId = [];
            meAndSpousesfamilies = [];
            groupUsersId.push({
              id: user.id
            });
            _context9.next = 13;
            return ctx.db.user({
              id: user.id
            }).families();

          case 13:
            meFamilies = _context9.sent;
            meAndSpousesfamilies.push(meFamilies); // 配偶

            mySpouseFamilies = meFamilies.filter(function (family) {
              return !!~['wife', 'husband'].indexOf(family.relationship);
            });
            _iteratorNormalCompletion14 = true;
            _didIteratorError14 = false;
            _iteratorError14 = undefined;
            _context9.prev = 19;
            _iterator14 = mySpouseFamilies[Symbol.iterator]();

          case 21:
            if (_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done) {
              _context9.next = 35;
              break;
            }

            mySpouseFamily = _step14.value;
            _context9.next = 25;
            return ctx.db.family({
              id: mySpouseFamily.id
            }).to().user();

          case 25:
            mySpouse = _context9.sent;

            if (!mySpouse) {
              _context9.next = 32;
              break;
            }

            groupUsersId.push({
              id: mySpouse.id
            });
            _context9.next = 30;
            return ctx.db.user({
              id: mySpouse.id
            }).families();

          case 30:
            spouseFamilies = _context9.sent;
            meAndSpousesfamilies.push(spouseFamilies);

          case 32:
            _iteratorNormalCompletion14 = true;
            _context9.next = 21;
            break;

          case 35:
            _context9.next = 41;
            break;

          case 37:
            _context9.prev = 37;
            _context9.t0 = _context9["catch"](19);
            _didIteratorError14 = true;
            _iteratorError14 = _context9.t0;

          case 41:
            _context9.prev = 41;
            _context9.prev = 42;

            if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
              _iterator14.return();
            }

          case 44:
            _context9.prev = 44;

            if (!_didIteratorError14) {
              _context9.next = 47;
              break;
            }

            throw _iteratorError14;

          case 47:
            return _context9.finish(44);

          case 48:
            return _context9.finish(41);

          case 49:
            _i = 0;

          case 50:
            if (!(_i < meAndSpousesfamilies.length)) {
              _context9.next = 157;
              break;
            }

            myFamilies = meAndSpousesfamilies[_i];
            // 我和配偶的家庭组全部创建
            // parents
            p = void 0; // father's parents

            fp = void 0; // father's father's parents

            ffp = void 0; // father's mother's parents

            fmp = void 0; // mother's parents

            mp = void 0; // mother's father's parents

            mfp = void 0; // mother's mother's parents

            mmp = void 0; // 如果有mother pa或者其上面的父母

            mpast = void 0; // 如果有father pa或者其上面的父母

            fpast = void 0; // 创建父母群

            _context9.next = 63;
            return ctx.db.family({
              id: myFamilies[0].id
            }).from();

          case 63:
            me = _context9.sent;

            if (!(me.id === user.id)) {
              _context9.next = 70;
              break;
            }

            _context9.next = 67;
            return createFamilyGroupById(me.id, ctx);

          case 67:
            p = _context9.sent;
            _context9.next = 79;
            break;

          case 70:
            _context9.prev = 70;
            _context9.next = 73;
            return createFamilyGroupById(me.id, ctx);

          case 73:
            p = _context9.sent;
            _context9.next = 79;
            break;

          case 76:
            _context9.prev = 76;
            _context9.t1 = _context9["catch"](70);
            console.log(_context9.t1);

          case 79:
            // 创建父母的父母群
            familyFather = myFamilies.filter(function (family) {
              return family.relationship === 'father';
            });
            _context9.next = 82;
            return ctx.db.family({
              id: familyFather[0].id
            }).to().user();

          case 82:
            father = _context9.sent;

            if (!father) {
              _context9.next = 115;
              break;
            }

            _context9.prev = 84;
            groupUsersId.push({
              id: father.id
            });
            _context9.next = 88;
            return createFamilyGroupById(father.id, ctx);

          case 88:
            fp = _context9.sent;
            _context9.next = 91;
            return ctx.db.user({
              id: father.id
            }).families();

          case 91:
            fatherFamilies = _context9.sent;
            fatherFamilyFather = fatherFamilies.filter(function (family) {
              return family.relationship === 'father';
            });
            _context9.next = 95;
            return ctx.db.family({
              id: fatherFamilyFather[0].id
            }).to().user();

          case 95:
            grandpa = _context9.sent;

            if (!grandpa) {
              _context9.next = 101;
              break;
            }

            // 创建曾祖父母
            groupUsersId.push({
              id: grandpa.id
            });
            _context9.next = 100;
            return createFamilyGroupById(grandpa.id, ctx);

          case 100:
            ffp = _context9.sent;

          case 101:
            motherFamilyFather = fatherFamilies.filter(function (family) {
              return family.relationship === 'mother';
            });
            _context9.next = 104;
            return ctx.db.family({
              id: motherFamilyFather[0].id
            }).to().user();

          case 104:
            grandma = _context9.sent;

            if (!grandma) {
              _context9.next = 110;
              break;
            }

            // 创建曾外祖父
            groupUsersId.push({
              id: grandma.id
            });
            _context9.next = 109;
            return createFamilyGroupById(grandma.id, ctx);

          case 109:
            fmp = _context9.sent;

          case 110:
            _context9.next = 115;
            break;

          case 112:
            _context9.prev = 112;
            _context9.t2 = _context9["catch"](84);
            console.log(_context9.t2.message);

          case 115:
            familyMother = myFamilies.filter(function (family) {
              return family.relationship === 'mother';
            });
            _context9.next = 118;
            return ctx.db.family({
              id: familyMother[0].id
            }).to().user();

          case 118:
            mother = _context9.sent;

            if (!mother) {
              _context9.next = 151;
              break;
            }

            _context9.prev = 120;
            // 创建外祖父母群
            groupUsersId.push({
              id: mother.id
            });
            _context9.next = 124;
            return createFamilyGroupById(mother.id, ctx);

          case 124:
            mp = _context9.sent;
            _context9.next = 127;
            return ctx.db.user({
              id: mother.id
            }).families();

          case 127:
            motherFamilies = _context9.sent;
            fatherFamilyMother = motherFamilies.filter(function (family) {
              return family.relationship === 'father';
            });
            _context9.next = 131;
            return ctx.db.family({
              id: fatherFamilyMother[0].id
            }).to().user();

          case 131:
            _grandpa = _context9.sent;

            if (!_grandpa) {
              _context9.next = 137;
              break;
            }

            // 创建外曾祖父母
            groupUsersId.push({
              id: _grandpa.id
            });
            _context9.next = 136;
            return createFamilyGroupById(_grandpa.id, ctx);

          case 136:
            mfp = _context9.sent;

          case 137:
            motherFamilyMother = motherFamilies.filter(function (family) {
              return family.relationship === 'mother';
            });
            _context9.next = 140;
            return ctx.db.family({
              id: motherFamilyMother[0].id
            }).to().user();

          case 140:
            _grandma = _context9.sent;

            if (!_grandma) {
              _context9.next = 146;
              break;
            }

            // 创建外曾外祖父母
            groupUsersId.push({
              id: _grandma.id
            });
            _context9.next = 145;
            return createFamilyGroupById(_grandma.id, ctx);

          case 145:
            mmp = _context9.sent;

          case 146:
            _context9.next = 151;
            break;

          case 148:
            _context9.prev = 148;
            _context9.t3 = _context9["catch"](120);
            console.log(_context9.t3.message);

          case 151:
            // 向所有的成员推送通知
            if (mmp || mfp) {
              // 分别推送到mmp中的所有family.user和mfp的所有family.user
              if (mmp) {
                pubGroupFamily(mmp, ctx);
              }

              if (mfp) {
                pubGroupFamily(mfp, ctx);
              }

              mpast = true;
            } else if (mp) {
              // 推送到mp的所有family.user
              pubGroupFamily(mp, ctx);
              mpast = true;
            }

            if (ffp || fmp) {
              if (ffp) {
                pubGroupFamily(ffp, ctx);
              }

              if (fmp) {
                pubGroupFamily(ffp, ctx);
              }

              fpast = true;
            } else if (fp) {
              pubGroupFamily(fp, ctx);
              fpast = true;
            }

            if (!fpast && !mpast) {
              // 推送到p的所有family.user
              pubGroupFamily(p, ctx);
            }

          case 154:
            _i++;
            _context9.next = 50;
            break;

          case 157:
            // 我的群由子女负责创建
            sonAndDaughters = meFamilies.filter(function (family) {
              return !!~['son', 'daughter'].indexOf(family.relationship);
            });
            _iteratorNormalCompletion15 = true;
            _didIteratorError15 = false;
            _iteratorError15 = undefined;
            _context9.prev = 161;
            _iterator15 = sonAndDaughters[Symbol.iterator]();

          case 163:
            if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
              _context9.next = 172;
              break;
            }

            sonAndDaughter = _step15.value;
            _context9.next = 167;
            return ctx.db.family({
              id: sonAndDaughter.id
            }).to().user();

          case 167:
            sd = _context9.sent;

            if (sd) {
              groupUsersId.push({
                id: sd.id
              });
            }

          case 169:
            _iteratorNormalCompletion15 = true;
            _context9.next = 163;
            break;

          case 172:
            _context9.next = 178;
            break;

          case 174:
            _context9.prev = 174;
            _context9.t4 = _context9["catch"](161);
            _didIteratorError15 = true;
            _iteratorError15 = _context9.t4;

          case 178:
            _context9.prev = 178;
            _context9.prev = 179;

            if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
              _iterator15.return();
            }

          case 181:
            _context9.prev = 181;

            if (!_didIteratorError15) {
              _context9.next = 184;
              break;
            }

            throw _iteratorError15;

          case 184:
            return _context9.finish(181);

          case 185:
            return _context9.finish(178);

          case 186:
            return _context9.abrupt("return", ctx.db.familyGroups({
              where: {
                OR: groupUsersId.map(function (usersId) {
                  return {
                    users_some: usersId
                  };
                })
              }
            }));

          case 187:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[19, 37, 41, 49], [42,, 44, 48], [70, 76], [84, 112], [120, 148], [161, 174, 178, 186], [179,, 181, 185]]);
  }));

  return function refreshMyFamilyGroups(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

var getFileTypeByExt = function getFileTypeByExt(ext) {
  var imgExt = ['png', 'jpg', 'gif', 'bmp', 'jpeg'];
  var videoExt = ['mp4', 'mov'];

  for (var i = 0; i < imgExt.length; i++) {
    var type = imgExt[i];

    if (ext === type || ext === type.toUpperCase()) {
      return 0;
    }
  }

  for (var _i2 = 0; _i2 < videoExt.length; _i2++) {
    var _type = videoExt[_i2];

    if (ext === _type || ext === _type.toUpperCase()) {
      return 1;
    }
  }

  return -1;
};

var getFileExt = function getFileExt(filepath) {
  if (filepath !== "") {
    if (filepath.indexOf(".") === -1) {
      return '';
    }

    var pos = filepath.replace(/.+\./, "");
    return pos;
  }

  return '';
};

var getFileName = function getFileName(ext) {
  var timestamp = new Date().getTime();
  var randNum = Math.floor(Math.random() * 1000 + 1);
  var fileName = "".concat(_getNowFormatDate(), "_").concat(timestamp, "_").concat(randNum, ".").concat(ext);
  return fileName;
};

var _getNowFormatDate = function _getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();

  if (month >= 1 && month <= 9) {
    month = "0".concat(month);
  }

  if (strDate >= 0 && strDate <= 9) {
    strDate = "0".concat(strDate);
  }

  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}; // 支付宝生成签名


var signed = function signed(order) {
  var appId;

  if (!_settings.AlipayTest) {
    appId = '2019022063305057';
  } else {
    appId = '2016092700606595';
  }

  var bizContent = {
    timeout_express: "60m",
    product_code: "QUICK_MSECURITY_PAY",
    total_amount: order.total_amount,
    subject: order.subject,
    body: order.body,
    out_trade_no: order.out_trade_no
  };
  var unsigned = {
    app_id: appId,
    method: 'alipay.trade.app.pay',
    charset: 'utf-8',
    sign_type: 'RSA2',
    version: '1.0',
    timestamp: (0, _moment.default)().format('YYYY-MM-DD HH:mm:ss'),
    biz_content: JSON.stringify(bizContent),
    notify_url: "http://".concat(_settings.HOST, ":").concat(_settings.PORT, "/alipay/notify_url")
  };
  var unsignedStr = (0, _helper.raw)(unsigned);

  var privateKey = _fs.default.readFileSync(_path.default.join(__dirname, './config/alipay_private_key.pem'));

  var signer = _crypto.default.createSign('RSA-SHA256');

  signer.update(unsignedStr);
  var sign = signer.sign(privateKey, 'base64');
  var signedStr = "".concat(_querystring.default.stringify(unsigned), "&sign=").concat(encodeURIComponent(sign));
  return signedStr;
}; // 收到支付宝异步通知进行验签


var verified = function verified(response, sign) {
  var publicKeyPath;

  if (!_settings.AlipayTest) {
    publicKeyPath = './config/alipay_public_key.pem';
  } else {
    publicKeyPath = './config/alipay_public_key_test.pem';
  }

  var publicKey = _fs.default.readFileSync(_path.default.join(__dirname, publicKeyPath));

  var cryptoVerify = _crypto.default.createVerify('RSA-SHA256');

  cryptoVerify.update(response);
  return cryptoVerify.verify(publicKey, sign, 'base64');
};

var birthdayToAge = function birthdayToAge(day) {
  var birthday = new Date(day);
  var d = new Date();
  var age = d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() === birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
  return age;
};

var getTimeByTimeZone = function getTimeByTimeZone(timeZone) {
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var offset = timeZone;
  var localSecondTime = utc + 3600000 * offset;
  var date = new Date(localSecondTime);
  return date;
};

module.exports = {
  getUserId: getUserId,
  checkeCtxUserExist: checkeCtxUserExist,
  APP_SECRET: APP_SECRET,
  getUser: getUser,
  updateCommonUserFamily: updateCommonUserFamily,
  getCommonFamilies: getCommonFamilies,
  getIntersectionFamiles: getIntersectionFamiles,
  getDifferentFamilies: getDifferentFamilies,
  getAllFamilies: getAllFamilies,
  createFamilyGroupById: createFamilyGroupById,
  refreshMyFamilyGroups: refreshMyFamilyGroups,
  checkExistFatherAndMother: checkExistFatherAndMother,
  getFileTypeByExt: getFileTypeByExt,
  getFileName: getFileName,
  getFileExt: getFileExt,
  signed: signed,
  verified: verified,
  birthdayToAge: birthdayToAge,
  getTimeByTimeZone: getTimeByTimeZone
};
//# sourceMappingURL=utils.js.map