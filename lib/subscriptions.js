"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pubsub = void 0;

var _graphqlRedisSubscriptions = require("graphql-redis-subscriptions");

var _ioredis = _interopRequireDefault(require("ioredis"));

var _iterall = require("iterall");

var _settings = require("./services/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  host: _settings.REDISHOST,
  port: '6379',
  password: _settings.REDISPWD,
  retry_strategy: function retry_strategy(options) {
    // reconnect after
    return Math.max(options.attempt * 100, 3000);
  }
};
var pubsub = new _graphqlRedisSubscriptions.RedisPubSub({
  publisher: new _ioredis.default(options),
  subscriber: new _ioredis.default(options)
});
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