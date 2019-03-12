"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pubsub = void 0;

var _apolloServer = require("apollo-server");

var _graphqlRedisSubscriptions = require("graphql-redis-subscriptions");

var _ioredis = _interopRequireDefault(require("ioredis"));

var _iterall = require("iterall");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const options = {
//   host: '127.0.0.1',
//   port: '6379',
//   retry_strategy: options  => {
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   }
// };
// export const pubsub = new RedisPubSub({
//   connection: options,
//   publisher: new Redis(options),
//   subscriber: new Redis(options)
// });
var pubsub = new _apolloServer.PubSub();
exports.pubsub = pubsub;

pubsub.asyncAuthIterator = function (messages, authPromise) {
  var asyncIterator = pubsub.asyncIterator(messages);
  return _defineProperty({
    next: function next() {
      return authPromise.then(function () {
        return asyncIterator.next();
      });
    },
    return: function _return() {
      return authPromise.then(function () {
        return asyncIterator.return();
      });
    },
    throw: function _throw(error) {
      return asyncIterator.throw(error);
    }
  }, _iterall.$$asyncIterator, function () {
    return asyncIterator;
  });
};

var _default = pubsub;
exports.default = _default;
//# sourceMappingURL=subscriptions.js.map