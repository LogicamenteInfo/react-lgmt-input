function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CommonInput from './_CommonInput';

var ConvenioBancario = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(ConvenioBancario, _CommonInput);

  function ConvenioBancario() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(^(8\d{10})(\d)$)|(^(8\d{10})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)(\d{11})(\d)$)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ["$2-$3 ", "$5-$6 $7", "$9-$10 $11-$12", "$14-$15 $16-$17 $18", "$20-$21 $22-$23 $24-$25", "$27-$28 $29-$30 $31-$32 $33", "$35-$36 $37-$38 $39-$40 $41-$42"]);

    _defineProperty(_assertThisInitialized(_this), "length", 48);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\d{11}-\d{1} \d{11}-\d{1} \d{11}-\d{1} \d{11}-\d{1}$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "Número informado é inválido.");

    return _this;
  }
  /**
   * @todo validator
   */


  return ConvenioBancario;
}(CommonInput);

export { ConvenioBancario as default };