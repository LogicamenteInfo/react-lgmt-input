function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CommonInput from './_CommonInput';

var CPF = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(CPF, _CommonInput);

  function CPF() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{3})(\d{1,2})$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["$2.$3", "$5.$6.$7", "$9.$10.$11-$12"]);

    _defineProperty(_assertThisInitialized(_this), "length", 11);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\d{3}\.\d{3}\.\d{3}-\d{2}$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "CPF informado é inválido.");

    _defineProperty(_assertThisInitialized(_this), "validator", function () {
      var mod,
          sum = 0;

      var cpf = _this.state.value.replace(/\D/g, "");

      if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999" || cpf === "" || cpf.length !== 11) return false;

      for (var i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }

      mod = sum * 10 % 11;
      if (mod == 10 || mod == 11) mod = 0;
      if (mod != parseInt(cpf.substring(9, 10))) return false;
      sum = 0;

      for (var _i = 1; _i <= 10; _i++) {
        sum = sum + parseInt(cpf.substring(_i - 1, _i)) * (12 - _i);
      }

      mod = sum * 10 % 11;
      if (mod == 10 || mod == 11) mod = 0;
      return mod === parseInt(cpf.substring(10, 11));
    });

    return _this;
  }

  return CPF;
}(CommonInput);

export { CPF as default };