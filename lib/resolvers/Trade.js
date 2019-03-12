"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trade = void 0;

var _utils = require("../services/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Trade = {
  product: function product(parent, args, ctx) {
    return ctx.db.trade({
      id: parent.id
    }).product();
  },
  user: function user(parent, args, ctx) {
    return ctx.db.trade({
      id: parent.id
    }).user();
  },
  signedStr: function () {
    var _signedStr = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var body, subject, totalAmount, signedStr;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.db.trade({
                id: parent.id
              }).product().info();

            case 2:
              body = _context.sent;
              _context.next = 5;
              return ctx.db.trade({
                id: parent.id
              }).product().subject();

            case 5:
              subject = _context.sent;
              _context.next = 8;
              return ctx.db.trade({
                id: parent.id
              }).amount();

            case 8:
              totalAmount = _context.sent;
              signedStr = (0, _utils.signed)({
                body: body,
                subject: subject,
                out_trade_no: parent.id,
                total_amount: totalAmount
              });
              return _context.abrupt("return", signedStr);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function signedStr(_x, _x2, _x3) {
      return _signedStr.apply(this, arguments);
    }

    return signedStr;
  }()
};
exports.Trade = Trade;
//# sourceMappingURL=Trade.js.map