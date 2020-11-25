"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _CommonInput2 = _interopRequireDefault(require("./_CommonInput"));

var _CPF = _interopRequireDefault(require("./CPF"));

var _CNPJ = _interopRequireDefault(require("./CNPJ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Documento = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(Documento, _CommonInput);

  function Documento() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{3})(\d{1,2})$)|(^(\d{2})(\d{3})(\d{3})(\d{1,4})$)|(^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["$2.$3", "$5.$6.$7", "$9.$10.$11-$12", "$14.$15.$16/$17", "$19.$20.$21/$22-$23"]);

    _defineProperty(_assertThisInitialized(_this), "length", 14);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "Documento informado é inválido.");

    _defineProperty(_assertThisInitialized(_this), "validator", function () {
      var doc = _this.state.value.replace(/\D/g, "");

      switch (doc.length) {
        case 11:
          return new _CPF["default"]({
            value: _this.state.value
          }).validator(doc);

        case 14:
          return new _CNPJ["default"]({
            value: _this.state.value
          }).validator(doc);

        default:
          return false;
      }
    });

    return _this;
  }

  return Documento;
}(_CommonInput2["default"]);

exports["default"] = Documento;
module.exports = exports.default;