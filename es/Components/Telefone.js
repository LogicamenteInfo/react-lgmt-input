function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CommonInput from './_CommonInput';

var Telefone = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(Telefone, _CommonInput);

  function Telefone() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^\d{1}$)|(^\d{2}$)|(^(\d{2})(\d{1,4})$)|(^(\d{2})(\d{4})(\d{1,4})$)|(^(\d{2})(\d{5})(\d{4})$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["($1", "($2", "($4) $5", "($7) $8-$9", "($11) $12-$13"]);

    _defineProperty(_assertThisInitialized(_this), "length", 11);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\(\d{2}\) \d{4,5}-\d{4}$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "Telefone precisa estar no formato (00) 0000-0000.");

    return _this;
  }

  return Telefone;
}(CommonInput);

export { Telefone as default };