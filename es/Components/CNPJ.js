function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CommonInput from './_CommonInput';

var CNPJ = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(CNPJ, _CommonInput);

  function CNPJ() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^(\d{2})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{3})(\d{1,4})$)|(^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["$2.$3", "$5.$6.$7", "$9.$10.$11/$12", "$14.$15.$16/$17-$18"]);

    _defineProperty(_assertThisInitialized(_this), "length", 14);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "CNPJ informado é inválido.");

    _defineProperty(_assertThisInitialized(_this), "validator", function () {
      var cnpj = _this.state.value.replace(/\D/g, "");

      if (cnpj === "00000000000000" || cnpj === "" || cnpj.length !== 14) return false;
      var length = cnpj.length - 2;
      var numbers = cnpj.substring(0, length);
      var digits = cnpj.substring(length);
      var sum = 0;
      var pos = length - 7;

      for (var i = length; i >= 1; i--) {
        sum += numbers.charAt(length - i) * pos--;
        if (pos < 2) pos = 9;
      }

      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digits.charAt(0)) return false;
      length = length + 1;
      numbers = cnpj.substring(0, length);
      sum = 0;
      pos = length - 7;

      for (var _i = length; _i >= 1; _i--) {
        sum += numbers.charAt(length - _i) * pos--;
        if (pos < 2) pos = 9;
      }

      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digits.charAt(1)) return false;
      return true;
    });

    return _this;
  }

  return CNPJ;
}(CommonInput);

export { CNPJ as default };