"use strict";

require("babel-polyfill");

var _apolloServer = require("apollo-server");

var _jsonwebtoken = require("jsonwebtoken");

var _graphqlDepthLimit = _interopRequireDefault(require("graphql-depth-limit"));

var _utils = require("./services/utils");

var _prismaClient = require("./generated/prisma-client");

var _resolvers = require("./resolvers");

var _schema = require("./schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PORT = 4000;
var server = new _apolloServer.ApolloServer({
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
      }, _callee, this);
    }));

    return function context(_x) {
      return _context.apply(this, arguments);
    };
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
        }, _callee2, this);
      }));

      return function onConnect(_x2) {
        return _onConnect.apply(this, arguments);
      };
    }(),
    onDisconnect: function onDisconnect(webSocket, context) {
      console.log('结束订阅');
    }
  },
  validationRules: [(0, _graphqlDepthLimit.default)(10)] // 最大深度查询限制。

});
server.listen({
  port: PORT
}).then(function (_ref2) {
  var url = _ref2.url;
  return console.log("\uD83D\uDE80 Server ready at ".concat(url));
}); // ,host:"192.168.0.102"
//# sourceMappingURL=index.js.map