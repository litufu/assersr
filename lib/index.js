"use strict";

require("babel-polyfill");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _apolloServerExpress = require("apollo-server-express");

var _jsonwebtoken = require("jsonwebtoken");

var _graphqlDepthLimit = _interopRequireDefault(require("graphql-depth-limit"));

var _utils = require("./services/utils");

var _helper = require("./services/helper");

var _prismaClient = require("./generated/prisma-client");

var _resolvers = require("./resolvers");

var _schema = require("./schema");

var _settings = require("./services/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _resolvers.resolvers,
  context: function () {
    var _context = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var req, connection;
      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req, connection = _ref.connection;

              if (!connection) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", connection.context);

            case 3:
              return _context2.abrupt("return", {
                req: req,
                db: _prismaClient.prisma
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }(),
  subscriptions: {
    onConnect: function () {
      var _onConnect = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(connectionParams) {
        var _verify, userId, user;

        return regeneratorRuntime.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!connectionParams.authToken) {
                  _context3.next = 10;
                  break;
                }

                _verify = (0, _jsonwebtoken.verify)(connectionParams.authToken, _utils.APP_SECRET), userId = _verify.userId;

                if (userId) {
                  _context3.next = 4;
                  break;
                }

                throw new Error("token错误");

              case 4:
                _context3.next = 6;
                return _prismaClient.prisma.user({
                  uid: userId
                });

              case 6:
                user = _context3.sent;

                if (!user) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", {
                  user: user,
                  db: _prismaClient.prisma
                });

              case 9:
                throw new Error("用户不存在");

              case 10:
                throw new Error('Missing auth token!');

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee2);
      }));

      function onConnect(_x2) {
        return _onConnect.apply(this, arguments);
      }

      return onConnect;
    }(),
    onDisconnect: function onDisconnect(webSocket, context) {
      console.log('结束订阅');
    }
  },
  validationRules: [(0, _graphqlDepthLimit.default)(10)] // 最大深度查询限制。

});
var app = (0, _express.default)();
server.applyMiddleware({
  app: app
});
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.post('/alipay/notify_url',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var obj, sign, verRes, trade, amount;
    return regeneratorRuntime.wrap(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            obj = req.body;
            sign = req.body.sign;
            delete obj.sign;
            delete obj.sign_type;
            verRes = (0, _utils.verified)((0, _helper.raw)(obj), sign);

            if (!verRes) {
              _context4.next = 22;
              break;
            }

            _context4.next = 8;
            return _prismaClient.prisma.trade({
              id: obj.out_trade_no
            });

          case 8:
            trade = _context4.sent;

            if (!trade) {
              _context4.next = 20;
              break;
            }

            _context4.next = 12;
            return _prismaClient.prisma.trade({
              id: obj.out_trade_no
            }).amount();

          case 12:
            amount = _context4.sent;

            if (!(parseFloat(obj.total_amount) !== amount || obj.app_id !== "2019022063305057" || obj.seller_id !== "2088431374041067" // 账户PID
            )) {
              _context4.next = 17;
              break;
            }

            res.send('failure');
            _context4.next = 20;
            break;

          case 17:
            _context4.next = 19;
            return _prismaClient.prisma.updateTrade({
              where: {
                id: obj.out_trade_no
              },
              data: {
                status: "1"
              }
            });

          case 19:
            res.send('success');

          case 20:
            _context4.next = 23;
            break;

          case 22:
            res.send('failure');

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); // server.listen({ port: PORT ,host:"192.168.43.75"   }).then(({ url }) => console.log(`🚀 Server ready at ${url}`));

app.listen({
  port: _settings.PORT
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://".concat(_settings.HOST, ":").concat(_settings.PORT).concat(server.graphqlPath));
}); // ,host:"192.168.0.102"
//# sourceMappingURL=index.js.map