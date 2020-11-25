function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import CommonInput from './_CommonInput';

var ContaBancaria = /*#__PURE__*/function (_CommonInput) {
  _inheritsLoose(ContaBancaria, _CommonInput);

  function ContaBancaria() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CommonInput.call.apply(_CommonInput, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "masksRegex", /(\d)/g);

    _defineProperty(_assertThisInitialized(_this), "masksReplacement", ['$1']);

    _defineProperty(_assertThisInitialized(_this), "length", 12);

    _defineProperty(_assertThisInitialized(_this), "pattern", /^\d{4,}-\d$/);

    _defineProperty(_assertThisInitialized(_this), "invalidMessage", "Número da conta informada é inválido.");

    return _this;
  }

  var _proto = ContaBancaria.prototype;

  _proto.onChange = function onChange(event) {
    var _this2 = this;

    var o = window.Event ? event.which : event.keyCode;
    var rValue;

    if (event.target && [35, 36, 37, 39].indexOf(o) === -1) {
      var previousValue = event.target.value.toString();
      var value = event.target.value.replace(/^0+|\D/g, "").substring(0, this.length).padStart(5, "0");
      var vector = value.split("").reverse();
      var start = event.target.selectionStart,
          end = event.target.selectionEnd;
      var out = [];
      vector.map(function (item, index) {
        if (index === 1) out.push('-');
        out.push(item);
      });
      rValue = out.reverse().join("");
      var nonDigits = rValue.match(/(\D| )/g);
      var offset = nonDigits !== null && end === previousValue.length ? nonDigits.length : 0;
      this.setState({
        value: rValue
      }, function (el) {
        _this2.props.onChange(_this2.state.value);

        el.setSelectionRange(start + offset, end + offset);
        el.setCustomValidity("");

        if (typeof _this2.validator === 'function' && !_this2.validator()) {
          el.setCustomValidity(_this2.invalidMessage || 'O valor informado não é válido');
        }
      }.bind(this, event.target));
    }
  };

  return ContaBancaria;
}(CommonInput);

_defineProperty(ContaBancaria, "defaultProps", {
  value: '0000-0'
});

export { ContaBancaria as default };