"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkGroup = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var WorkGroup = {
  company: function company(parent, args, ctx) {
    return ctx.db.workGroup({
      id: parent.id
    }).company();
  },
  colleagues: function colleagues(parent, args, ctx) {
    return ctx.db.workGroup({
      id: parent.id
    }).colleagues();
  },
  messages: function () {
    var _messages = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var groupMessages;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.db.groupMessages({
                where: {
                  AND: [{
                    type: "Colleague"
                  }, {
                    to: parent.id
                  }]
                },
                first: 10
              });

            case 2:
              groupMessages = _context.sent;
              return _context.abrupt("return", groupMessages);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function messages(_x, _x2, _x3) {
      return _messages.apply(this, arguments);
    };
  }()
};
exports.WorkGroup = WorkGroup;
//# sourceMappingURL=WorkGroup.js.map