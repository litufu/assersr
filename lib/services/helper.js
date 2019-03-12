"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getXMLNodeValue = exports.createTimeStamp = exports.createNonceStr = exports.raw = exports.parser = void 0;

var _xml2js = _interopRequireDefault(require("xml2js"));

var iconv = _interopRequireWildcard(require("iconv-lite"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = new _xml2js.default.Parser();
exports.parser = parser;

var raw = function raw(args) {
  var signStr = Object.keys(args).sort().map(function (key) {
    var data = args[key];

    if (Array.prototype.toString.call(data) !== '[object String]') {
      data = JSON.stringify(data);
    }

    return "".concat(key, "=").concat(iconv.encode(data, 'utf-8'));
  }).join('&');
  return signStr;
};

exports.raw = raw;

var createNonceStr = function createNonceStr() {
  return Math.random().toString(36).substr(2, 15);
};

exports.createNonceStr = createNonceStr;

var createTimeStamp = function createTimeStamp() {
  return "".concat(parseInt(new Date().getTime() / 1000, 10));
};

exports.createTimeStamp = createTimeStamp;

var getXMLNodeValue = function getXMLNodeValue(xml) {
  return new Promise(function (resolve, reject) {
    parser.parseString(xml, function (err, result) {
      if (err) {
        reject('err');
      } else {
        resolve(result.xml);
      }
    });
  });
};

exports.getXMLNodeValue = getXMLNodeValue;
//# sourceMappingURL=helper.js.map