"use strict";

var _papaparse = _interopRequireDefault(require("papaparse"));

var _fs = _interopRequireDefault(require("fs"));

var _readline = _interopRequireDefault(require("readline"));

var _stream = _interopRequireDefault(require("stream"));

var _prismaClient = require("../generated/prisma-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var provinceFile = '../data/province.csv';
var cityFile = '../data/city.csv';
var areaFile = '../data/area.csv';
var streetFile = '../data/street.csv';
var villageFile = '../data/village.csv';
var majorFile = '../data/major.csv';
var universityFile = '../data/university.csv';
var stationFile = '../data/station.csv';

var readFile = function readFile(fileName, encode) {
  return new Promise(function (resolve, reject) {
    _fs.default.readFile(fileName, encode, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

var parseCsv = function parseCsv(data) {
  return new Promise(function (resolve, reject) {
    _papaparse.default.parse(data, {
      complete: function complete(results) {
        resolve(results);
      }
    });
  });
}; // 添加职位信息


function addStation() {
  return _addStation.apply(this, arguments);
} // 添加大学信息


function _addStation() {
  _addStation = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var file, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, newStation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return readFile(stationFile, 'utf8');

          case 3:
            file = _context.sent;
            _context.next = 6;
            return parseCsv(file);

          case 6:
            results = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 28;
              break;
            }

            value = _step.value;
            _context.prev = 14;
            _context.next = 17;
            return _prismaClient.prisma.createStation({
              code: value[0],
              name: value[1]
            });

          case 17:
            newStation = _context.sent;
            console.log(newStation);
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](14);
            console.log(_context.t0);
            return _context.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 28:
            _context.next = 34;
            break;

          case 30:
            _context.prev = 30;
            _context.t1 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 34:
            _context.prev = 34;
            _context.prev = 35;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 37:
            _context.prev = 37;

            if (!_didIteratorError) {
              _context.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return _context.finish(37);

          case 41:
            return _context.finish(34);

          case 42:
            _context.next = 47;
            break;

          case 44:
            _context.prev = 44;
            _context.t2 = _context["catch"](0);
            console.log(_context.t2);

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addStation.apply(this, arguments);
}

function addUniversity() {
  return _addUniversity.apply(this, arguments);
} // 添加专业信息


function _addUniversity() {
  _addUniversity = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var file, results, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value, newUniversity;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return readFile(universityFile, 'utf8');

          case 3:
            file = _context2.sent;
            _context2.next = 6;
            return parseCsv(file);

          case 6:
            results = _context2.sent;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 10;
            _iterator2 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 28;
              break;
            }

            value = _step2.value;
            _context2.prev = 14;
            _context2.next = 17;
            return _prismaClient.prisma.createUniversity({
              name: value[0],
              education: value[1],
              department: value[2],
              location: value[3],
              desc: value[4]
            });

          case 17:
            newUniversity = _context2.sent;
            console.log(newUniversity);
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](14);
            console.log(_context2.t0);
            return _context2.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion2 = true;
            _context2.next = 12;
            break;

          case 28:
            _context2.next = 34;
            break;

          case 30:
            _context2.prev = 30;
            _context2.t1 = _context2["catch"](10);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t1;

          case 34:
            _context2.prev = 34;
            _context2.prev = 35;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 37:
            _context2.prev = 37;

            if (!_didIteratorError2) {
              _context2.next = 40;
              break;
            }

            throw _iteratorError2;

          case 40:
            return _context2.finish(37);

          case 41:
            return _context2.finish(34);

          case 42:
            _context2.next = 47;
            break;

          case 44:
            _context2.prev = 44;
            _context2.t2 = _context2["catch"](0);
            console.log(_context2.t2);

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addUniversity.apply(this, arguments);
}

function addMajor() {
  return _addMajor.apply(this, arguments);
} // 添加省份信息


function _addMajor() {
  _addMajor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var file, results, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value, newMajor;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return readFile(majorFile, 'utf8');

          case 3:
            file = _context3.sent;
            _context3.next = 6;
            return parseCsv(file);

          case 6:
            results = _context3.sent;
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context3.prev = 10;
            _iterator3 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context3.next = 28;
              break;
            }

            value = _step3.value;
            _context3.prev = 14;
            _context3.next = 17;
            return _prismaClient.prisma.createMajor({
              name: value[1],
              category: value[0],
              education: value[2]
            });

          case 17:
            newMajor = _context3.sent;
            console.log(newMajor);
            _context3.next = 25;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](14);
            console.log(_context3.t0);
            return _context3.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion3 = true;
            _context3.next = 12;
            break;

          case 28:
            _context3.next = 34;
            break;

          case 30:
            _context3.prev = 30;
            _context3.t1 = _context3["catch"](10);
            _didIteratorError3 = true;
            _iteratorError3 = _context3.t1;

          case 34:
            _context3.prev = 34;
            _context3.prev = 35;

            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }

          case 37:
            _context3.prev = 37;

            if (!_didIteratorError3) {
              _context3.next = 40;
              break;
            }

            throw _iteratorError3;

          case 40:
            return _context3.finish(37);

          case 41:
            return _context3.finish(34);

          case 42:
            _context3.next = 47;
            break;

          case 44:
            _context3.prev = 44;
            _context3.t2 = _context3["catch"](0);
            console.log(_context3.t2);

          case 47:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addMajor.apply(this, arguments);
}

function addProvince() {
  return _addProvince.apply(this, arguments);
} // 添加市一级信息


function _addProvince() {
  _addProvince = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var file, results, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value, newProvince;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return readFile(provinceFile, 'utf8');

          case 3:
            file = _context4.sent;
            _context4.next = 6;
            return parseCsv(file);

          case 6:
            results = _context4.sent;
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context4.prev = 10;
            _iterator4 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context4.next = 28;
              break;
            }

            value = _step4.value;
            _context4.prev = 14;
            _context4.next = 17;
            return _prismaClient.prisma.createProvince({
              code: value[0],
              name: value[1]
            });

          case 17:
            newProvince = _context4.sent;
            console.log(newProvince);
            _context4.next = 25;
            break;

          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](14);
            console.log(_context4.t0);
            return _context4.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion4 = true;
            _context4.next = 12;
            break;

          case 28:
            _context4.next = 34;
            break;

          case 30:
            _context4.prev = 30;
            _context4.t1 = _context4["catch"](10);
            _didIteratorError4 = true;
            _iteratorError4 = _context4.t1;

          case 34:
            _context4.prev = 34;
            _context4.prev = 35;

            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }

          case 37:
            _context4.prev = 37;

            if (!_didIteratorError4) {
              _context4.next = 40;
              break;
            }

            throw _iteratorError4;

          case 40:
            return _context4.finish(37);

          case 41:
            return _context4.finish(34);

          case 42:
            _context4.next = 47;
            break;

          case 44:
            _context4.prev = 44;
            _context4.t2 = _context4["catch"](0);
            console.log(_context4.t2);

          case 47:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addProvince.apply(this, arguments);
}

function addCity() {
  return _addCity.apply(this, arguments);
} // 添加区一级信息


function _addCity() {
  _addCity = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var file, results, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value, newCity;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return readFile(cityFile, 'utf8');

          case 3:
            file = _context5.sent;
            _context5.next = 6;
            return parseCsv(file);

          case 6:
            results = _context5.sent;
            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context5.prev = 10;
            _iterator5 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
              _context5.next = 28;
              break;
            }

            value = _step5.value;
            _context5.prev = 14;
            _context5.next = 17;
            return _prismaClient.prisma.createCity({
              code: value[0],
              name: value[1],
              province: {
                connect: {
                  code: value[2]
                }
              }
            });

          case 17:
            newCity = _context5.sent;
            console.log(newCity);
            _context5.next = 25;
            break;

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](14);
            console.log(_context5.t0);
            return _context5.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion5 = true;
            _context5.next = 12;
            break;

          case 28:
            _context5.next = 34;
            break;

          case 30:
            _context5.prev = 30;
            _context5.t1 = _context5["catch"](10);
            _didIteratorError5 = true;
            _iteratorError5 = _context5.t1;

          case 34:
            _context5.prev = 34;
            _context5.prev = 35;

            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }

          case 37:
            _context5.prev = 37;

            if (!_didIteratorError5) {
              _context5.next = 40;
              break;
            }

            throw _iteratorError5;

          case 40:
            return _context5.finish(37);

          case 41:
            return _context5.finish(34);

          case 42:
            _context5.next = 47;
            break;

          case 44:
            _context5.prev = 44;
            _context5.t2 = _context5["catch"](0);
            console.log(_context5.t2);

          case 47:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addCity.apply(this, arguments);
}

function addArea() {
  return _addArea.apply(this, arguments);
} // 添加区一级信息


function _addArea() {
  _addArea = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var file, results, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, value, newArea;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return readFile(areaFile, 'utf8');

          case 3:
            file = _context6.sent;
            _context6.next = 6;
            return parseCsv(file);

          case 6:
            results = _context6.sent;
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context6.prev = 10;
            _iterator6 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
              _context6.next = 28;
              break;
            }

            value = _step6.value;
            _context6.prev = 14;
            _context6.next = 17;
            return _prismaClient.prisma.createArea({
              code: value[0],
              name: value[1],
              city: {
                connect: {
                  code: value[2]
                }
              }
            });

          case 17:
            newArea = _context6.sent;
            console.log(newArea);
            _context6.next = 25;
            break;

          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](14);
            console.log(_context6.t0);
            return _context6.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion6 = true;
            _context6.next = 12;
            break;

          case 28:
            _context6.next = 34;
            break;

          case 30:
            _context6.prev = 30;
            _context6.t1 = _context6["catch"](10);
            _didIteratorError6 = true;
            _iteratorError6 = _context6.t1;

          case 34:
            _context6.prev = 34;
            _context6.prev = 35;

            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }

          case 37:
            _context6.prev = 37;

            if (!_didIteratorError6) {
              _context6.next = 40;
              break;
            }

            throw _iteratorError6;

          case 40:
            return _context6.finish(37);

          case 41:
            return _context6.finish(34);

          case 42:
            _context6.next = 47;
            break;

          case 44:
            _context6.prev = 44;
            _context6.t2 = _context6["catch"](0);
            console.log(_context6.t2);

          case 47:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addArea.apply(this, arguments);
}

function addStreet() {
  return _addStreet.apply(this, arguments);
} // 添加村一级信息


function _addStreet() {
  _addStreet = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var file, results, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, value, newStreet;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return readFile(streetFile, 'utf8');

          case 3:
            file = _context7.sent;
            _context7.next = 6;
            return parseCsv(file);

          case 6:
            results = _context7.sent;
            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            _context7.prev = 10;
            _iterator7 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
              _context7.next = 31;
              break;
            }

            value = _step7.value;
            console.log(value[0]);
            console.log(value[1]);
            console.log(value[2]);
            _context7.prev = 17;
            _context7.next = 20;
            return _prismaClient.prisma.createStreet({
              code: value[0],
              name: value[1],
              Area: {
                connect: {
                  code: value[2]
                }
              }
            });

          case 20:
            newStreet = _context7.sent;
            console.log(newStreet);
            _context7.next = 28;
            break;

          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](17);
            console.log(_context7.t0);
            return _context7.abrupt("continue", 28);

          case 28:
            _iteratorNormalCompletion7 = true;
            _context7.next = 12;
            break;

          case 31:
            _context7.next = 37;
            break;

          case 33:
            _context7.prev = 33;
            _context7.t1 = _context7["catch"](10);
            _didIteratorError7 = true;
            _iteratorError7 = _context7.t1;

          case 37:
            _context7.prev = 37;
            _context7.prev = 38;

            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }

          case 40:
            _context7.prev = 40;

            if (!_didIteratorError7) {
              _context7.next = 43;
              break;
            }

            throw _iteratorError7;

          case 43:
            return _context7.finish(40);

          case 44:
            return _context7.finish(37);

          case 45:
            _context7.next = 50;
            break;

          case 47:
            _context7.prev = 47;
            _context7.t2 = _context7["catch"](0);
            console.log(_context7.t2);

          case 50:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 47], [10, 33, 37, 45], [17, 24], [38,, 40, 44]]);
  }));
  return _addStreet.apply(this, arguments);
}

function addVillage() {
  return _addVillage.apply(this, arguments);
} // addProvince()
// addCity()
// addArea()
// addStreet()


function _addVillage() {
  _addVillage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var file, results, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, value, newVillage;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return readFile(villageFile, 'utf8');

          case 3:
            file = _context8.sent;
            _context8.next = 6;
            return parseCsv(file);

          case 6:
            results = _context8.sent;
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context8.prev = 10;
            _iterator8 = results.data[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
              _context8.next = 28;
              break;
            }

            value = _step8.value;
            _context8.prev = 14;
            _context8.next = 17;
            return _prismaClient.prisma.createVillage({
              code: value[0],
              name: value[1],
              street: {
                connect: {
                  code: value[2]
                }
              }
            });

          case 17:
            newVillage = _context8.sent;
            console.log(newVillage);
            _context8.next = 25;
            break;

          case 21:
            _context8.prev = 21;
            _context8.t0 = _context8["catch"](14);
            console.log(_context8.t0);
            return _context8.abrupt("continue", 25);

          case 25:
            _iteratorNormalCompletion8 = true;
            _context8.next = 12;
            break;

          case 28:
            _context8.next = 34;
            break;

          case 30:
            _context8.prev = 30;
            _context8.t1 = _context8["catch"](10);
            _didIteratorError8 = true;
            _iteratorError8 = _context8.t1;

          case 34:
            _context8.prev = 34;
            _context8.prev = 35;

            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }

          case 37:
            _context8.prev = 37;

            if (!_didIteratorError8) {
              _context8.next = 40;
              break;
            }

            throw _iteratorError8;

          case 40:
            return _context8.finish(37);

          case 41:
            return _context8.finish(34);

          case 42:
            _context8.next = 47;
            break;

          case 44:
            _context8.prev = 44;
            _context8.t2 = _context8["catch"](0);
            console.log(_context8.t2);

          case 47:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 44], [10, 30, 34, 42], [14, 21], [35,, 37, 41]]);
  }));
  return _addVillage.apply(this, arguments);
}

addVillage(); // addMajor()
// addUniversity()
// addStation()
//# sourceMappingURL=getData.js.map