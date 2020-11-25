"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _CommonInput2 = _interopRequireDefault(require("./_CommonInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CEP = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(CEP, _CommonInput);

  function CEP() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^(\d{2})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{1,3})$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["$2.$3", "$5.$6-$7"]);

    _defineProperty(_assertThisInitialized(_this), "length", 8);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\d{2}\.\d{3}-\d{3}$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "CEP informado é inválido.");

    return _this;
  }

  return CEP;
}(_CommonInput2["default"]);

exports["default"] = CEP;
module.exports = exports.default;