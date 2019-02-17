"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Location = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Location = {
  province: function province(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).province();
  },
  city: function city(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).city();
  },
  area: function area(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).area();
  },
  street: function street(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).street();
  },
  village: function village(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).village();
  },
  schools: function schools(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).schools();
  },
  companies: function companies(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).companies();
  },
  universities: function universities(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).universities();
  },
  borns: function borns(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).borns();
  },
  lives: function lives(parent, args, ctx) {
    return ctx.db.location({
      id: parent.id
    }).lives();
  },
  name: function () {
    var _name = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, args, ctx) {
      var province, provinceName, city, cityName, area, areaName, street, streetName, village, villageName, name;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.db.location({
                id: parent.id
              }).province();

            case 2:
              province = _context.sent;
              provinceName = province ? province.name : "";
              _context.next = 6;
              return ctx.db.location({
                id: parent.id
              }).city();

            case 6:
              city = _context.sent;
              cityName = city ? city.name : "";
              _context.next = 10;
              return ctx.db.location({
                id: parent.id
              }).area();

            case 10:
              area = _context.sent;
              areaName = area ? area.name : "";
              _context.next = 14;
              return ctx.db.location({
                id: parent.id
              }).street();

            case 14:
              street = _context.sent;
              streetName = street ? street.name : "";
              _context.next = 18;
              return ctx.db.location({
                id: parent.id
              }).village();

            case 18:
              village = _context.sent;
              villageName = village ? village.name : "";
              name = provinceName + cityName + areaName + streetName + villageName;
              return _context.abrupt("return", name);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function name(_x, _x2, _x3) {
      return _name.apply(this, arguments);
    };
  }()
};
exports.Location = Location;
//# sourceMappingURL=Location.js.map