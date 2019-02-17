"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ossClient = exports.fee = void 0;

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
//# sourceMappingURL=settings.js.map