"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateStartTime = exports.AlipayTest = exports.PORT = exports.HOST = exports.DEVELOP = exports.ossClient = exports.fee = void 0;

var _aliOss = _interopRequireDefault(require("ali-oss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  是否开启收费模式
var fee = false;
exports.fee = fee;
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
var DEVELOP = false;
exports.DEVELOP = DEVELOP;
var HOST = DEVELOP ? '192.168.56.1' : "118.31.21.228";
exports.HOST = HOST;
var PORT = 4000;
exports.PORT = PORT;
var AlipayTest = false;
exports.AlipayTest = AlipayTest;
var DateStartTime = new Date(2019, 1, 28);
exports.DateStartTime = DateStartTime;
//# sourceMappingURL=settings.js.map