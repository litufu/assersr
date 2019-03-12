"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPhotoName = exports.checkScore = exports.checkNum = exports.checkCnEnNum = exports.checkStatus = exports.checkId = exports.checkRelationship = exports.checkPassword = exports.checkUsername = exports.checkHasInput = exports.checkPlaceCode = exports.checkDate = exports.checkCalendar = exports.checkGender = exports.checkName = exports.checkCompanyName = exports.validateBasicInfo = void 0;

var validateBasicInfo = function validateBasicInfo(name, gender, birthday, birthplace, residence) {
  checkName(name);
  checkGender(gender);
  checkCalendar(birthday.calendar);
  checkDate(birthday.date);
  checkPlaceCode(birthplace.province, '所在省');
  checkPlaceCode(birthplace.city, '所在市');
  checkPlaceCode(birthplace.area, '所在区');
  checkPlaceCode(birthplace.street, '所在乡镇');
  checkPlaceCode(birthplace.village, '所在村');
  checkPlaceCode(residence.province, '所在省');
  checkPlaceCode(residence.city, '所在市');
  checkPlaceCode(residence.area, '所在区');
  checkPlaceCode(residence.street, '所在乡镇');
  checkPlaceCode(residence.village, '所在村');
};

exports.validateBasicInfo = validateBasicInfo;

var checkCompanyName = function checkCompanyName(companyName) {
  var rxName = /^[（()）\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;

  if (!rxName.test(companyName)) {
    throw new Error('公司名称错误');
  }
};

exports.checkCompanyName = checkCompanyName;

var checkName = function checkName(name) {
  var rxName = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;

  if (!rxName.test(name)) {
    throw new Error('你的姓名错误');
  }
};

exports.checkName = checkName;

var checkGender = function checkGender(gender) {
  if (gender !== 'male' && gender !== 'female') {
    throw new Error('你的性别未选择');
  }
};

exports.checkGender = checkGender;

var checkCalendar = function checkCalendar(calendar) {
  if (calendar !== 'lunar' && calendar !== 'gregorian') {
    throw new Error('你未选择日历类别');
  }
};

exports.checkCalendar = checkCalendar;

var checkDate = function checkDate(date) {
  if (isNaN(Date.parse(date))) {
    throw new Error('日期错误');
  }
};

exports.checkDate = checkDate;

var checkPlaceCode = function checkPlaceCode(input, inputName) {
  if (!/^\d+$/.test(input)) {
    throw new Error("\u4F60\u672A\u8F93\u5165".concat(inputName));
  }
};

exports.checkPlaceCode = checkPlaceCode;

var checkHasInput = function checkHasInput(input, inputName) {
  if (input == null && input === "" && isNaN(input)) {
    throw new Error("\u4F60\u672A\u8F93\u5165".concat(inputName));
  }
};

exports.checkHasInput = checkHasInput;

var checkUsername = function checkUsername(username) {
  var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
  var usernameTest = uPattern.test(username);
  if (!usernameTest) throw new Error("".concat(username, "\u683C\u5F0F\u4E0D\u7B26\u5408\u8981\u6C42"));
};

exports.checkUsername = checkUsername;

var checkPassword = function checkPassword(password) {
  var pPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;
  var curPasswordTest = pPattern.test(password);
  if (!curPasswordTest) throw new Error("密码格式错误");
};

exports.checkPassword = checkPassword;

var checkRelationship = function checkRelationship(relationship) {
  var relationships = ["father", "mother", "son", "daughter", "oldbrother", "youngbrother", "oldsister", "youngsister", "sister", "brother", "wife", "husband"];

  if (!~relationships.indexOf(relationship)) {
    throw new Error("关系输入错误");
  }
};

exports.checkRelationship = checkRelationship;

var checkId = function checkId(id) {
  var idPatter = /^[0-9a-zA-Z]*$/g;
  var idTest = idPatter.test(id);
  if (!idTest) throw new Error("id格式错误");
};

exports.checkId = checkId;

var checkStatus = function checkStatus(status) {
  var statuses = ["0", "1", "2", "3"];

  if (!~statuses.indexOf(status)) {
    throw new Error("status输入错误");
  }
};

exports.checkStatus = checkStatus;

var checkCnEnNum = function checkCnEnNum(name) {
  // 检查中文英文和数字
  var rxName = /^[a-zA-Z0-9\u4E00-\u9FA5\uf900-\ufa2d·s]+$/;

  if (!rxName.test(name)) {
    throw new Error("格式输入错误");
  }
};

exports.checkCnEnNum = checkCnEnNum;

var checkNum = function checkNum(str) {
  if (!/^\d+$/.test(str)) {
    throw new Error("数字输入错误");
  }
};

exports.checkNum = checkNum;

var checkScore = function checkScore(str) {
  var pattern = /^[0-9]+(.[0-9]{1,2})?$/;

  if (!pattern.test(str)) {
    throw new Error("分数格式错误");
  }
};

exports.checkScore = checkScore;

var checkPhotoName = function checkPhotoName(str) {
  var strRegex = "(.jpg|.png|.gif|.ps|.jpeg)$";
  var re = new RegExp(strRegex);

  if (!re.test(str.toLowerCase())) {
    throw new Error("图片格式错误");
  }
};

exports.checkPhotoName = checkPhotoName;
//# sourceMappingURL=index.js.map