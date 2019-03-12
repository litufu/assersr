"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisitCount = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDate() - 1;
var startTime = new Date(year, month, day, 0, 0, 0);
var endTime = new Date(year, month, day + 1, 0, 0, 0);
var VisitCount = {
  userNum: function userNum(parent, args, ctx) {
    return ctx.db.usersConnection().aggregate().count();
  },
  addNum: function () {
    var _addNum = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var registerCounts;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.db.registerCounts({
                where: {
                  AND: [{
                    createdAt_gte: startTime
                  }, {
                    createdAt_lt: endTime
                  }]
                }
              });

            case 2:
              registerCounts = _context.sent;
              return _context.abrupt("return", registerCounts.length);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function addNum(_x, _x2, _x3) {
      return _addNum.apply(this, arguments);
    }

    return addNum;
  }(),
  visits: function () {
    var _visits = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(parent, args, ctx) {
      var bootCounts, result, _loop, i;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ctx.db.bootCounts({
                where: {
                  AND: [{
                    createdAt_gte: startTime
                  }, {
                    createdAt_lt: endTime
                  }]
                }
              });

            case 2:
              bootCounts = _context2.sent;
              result = {};

              _loop = function _loop(i) {
                var end = startTime.getTime() + i / 2 * 60 * 60 * 1000;
                result[i] = bootCounts.filter(function (bootCount) {
                  var createdAt = new Date(bootCount.createdAt).getTime();

                  if (createdAt < end && createdAt >= end - 1 / 2 * 60 * 60 * 1000) {
                    return true;
                  }

                  return false;
                }).length;
              };

              for (i = 1; i <= 48; i++) {
                _loop(i);
              }

              return _context2.abrupt("return", JSON.stringify(result));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function visits(_x4, _x5, _x6) {
      return _visits.apply(this, arguments);
    }

    return visits;
  }()
};
exports.VisitCount = VisitCount;
//# sourceMappingURL=VisitCount.js.map