"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationGroup = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LocationGroup = {
  users: function () {
    var _users = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var usersCount;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.db.usersConnection({
                where: {
                  locationGroups_some: {
                    id: parent.id
                  }
                }
              }).aggregate().count();

            case 2:
              usersCount = _context.sent;

              if (!(usersCount > 500)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", []);

            case 5:
              return _context.abrupt("return", ctx.db.locationGroup({
                id: parent.id
              }).users());

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function users(_x, _x2, _x3) {
      return _users.apply(this, arguments);
    };
  }(),
  messages: function () {
    var _messages = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(parent, args, ctx) {
      var groupMessages;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ctx.db.groupMessages({
                where: {
                  AND: [{
                    type: "FellowTownsman"
                  }, {
                    to: parent.id
                  }]
                },
                first: 10
              });

            case 2:
              groupMessages = _context2.sent;
              return _context2.abrupt("return", groupMessages);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function messages(_x4, _x5, _x6) {
      return _messages.apply(this, arguments);
    };
  }()
};
exports.LocationGroup = LocationGroup;
//# sourceMappingURL=LocationGroup.js.map