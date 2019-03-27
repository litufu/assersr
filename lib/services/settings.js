"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FEESETTINGTYPES = exports.DateStartTime = exports.AlipayTest = exports.PORT = exports.REDISPWD = exports.REDISHOST = exports.HOST = exports.DEVELOP = exports.ossClient = void 0;

var _aliOss = _interopRequireDefault(require("ali-oss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  是否开启收费模式
var aliyunOssConfig = {
  'accessKeyId': 'LTAIIXD7W83GOXGb',
  'accessKeySecret': 'IQvsM9Q5rxBuqnS22YVOQbJcm8DdHQ',
  'bucket': "gewu-avatar",
  'region': 'oss-cn-hangzhou',
  'name': 'oss@gewu.onaliyun.com'
};
var ossClient = new _aliOss.default({
  region: aliyunOssConfig.region,
  accessKeyId: aliyunOssConfig.accessKeyId,
  accessKeySecret: aliyunOssConfig.accessKeySecret,
  bucket: aliyunOssConfig.bucket
});
exports.ossClient = ossClient;
var DEVELOP = true;
exports.DEVELOP = DEVELOP;
var HOST = DEVELOP ? '192.168.56.1' : "118.31.21.228";
exports.HOST = HOST;
var REDISHOST = DEVELOP ? 'localhost' : "localhost";
exports.REDISHOST = REDISHOST;
var REDISPWD = DEVELOP ? '' : ''; // export const REDISHOST = DEVELOP ? 'localhost' : "192.168.14.104"
// export const REDISPWD = DEVELOP ? '' : "asdkfue9823wnh#$3djs"

exports.REDISPWD = REDISPWD;
var PORT = 4000;
exports.PORT = PORT;
var AlipayTest = false;
exports.AlipayTest = AlipayTest;
var DateStartTime = new Date(2019, 3, 25);
exports.DateStartTime = DateStartTime;
var FEESETTINGTYPES = {
  regstatus: "REGSTATUS",
  love: "LOVE",
  partner: 'PARTNER'
};
exports.FEESETTINGTYPES = FEESETTINGTYPES;
//# sourceMappingURL=settings.js.map