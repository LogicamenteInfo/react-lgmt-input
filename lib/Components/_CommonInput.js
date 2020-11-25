"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommonInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CommonInput, _Component);

  function CommonInput(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      value: _this.props.value.toString()
    };
    return _this;
  }

  var _proto = CommonInput.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.masksRegex === undefined) throw "O atributo `masksRegex` é obrigatório.";
    if (typeof this.masksRegex !== "object" || this.masksRegex.constructor.name !== "RegExp") throw "O atributo `masksRegex` precisa ser uma expressão regular.";
    if (this.masksReplacement === undefined) throw "O atributo `masksReplacement` é obrigatório.";
    if (!Array.isArray(this.masksReplacement)) throw "O atributo `masksReplacement` precisa ser um array.";
    if (this.length === undefined) throw "O atributo `length` é obrigatório.";
    if (typeof this.length !== "number") throw "O atributo `length` precisa ser um número inteiro.";
    if (this.pattern && (typeof this.pattern !== "object" || this.pattern.constructor.name !== "RegExp")) throw "O atributo `pattern` precisa ser uma expressão regular.";
    if (this.invalidMessage && typeof this.invalidMessage !== "string") throw "O atributo `invalidMessage` precisa ser um string.";
    if (this.validator && typeof this.validator !== "function") throw "O atributo `validator` precisa ser uma função.";
  };

  _proto.componentDidUpdate = function componentDidUpdate(pProps) {
    if (this.props.value !== pProps.value) {
      this.setState({
        value: this.props.value.toString()
      });
    }
  };

  _proto.onChange = function onChange(event) {
    var _this2 = this;

    var o = window.Event ? event.which : event.keyCode;
    var rValue;

    if (event.target && [35, 36, 37, 39].indexOf(o) === -1) {
      var previousValue = event.target.value.toString();
      var value = event.target.value.replace(/\D/g, "").substring(0, this.length);
      var start = event.target.selectionStart,
          end = event.target.selectionEnd;

      for (var i = this.masksReplacement.length - 1; i >= 0; i--) {
        rValue = value.replace(this.masksRegex, this.masksReplacement[i]);
        if (rValue.replace(/\D/g, "").length > 0) break;
      }

      var nonDigits = rValue.match(/(\D| )/g);
      var offset = nonDigits !== null && end === previousValue.length ? nonDigits.length : 0;
      this.setState({
        value: rValue
      }, function (el) {
        _this2.props.onChange(_this2.state.value);

        el.setSelectionRange(start + offset, end + offset);
        el.setCustomValidity("");

        if (_this2.state.value.toString().length > 0 && typeof _this2.validator === "function" && !_this2.validator()) {
          el.setCustomValidity(_this2.invalidMessage || "O valor informado não é válido");
        }
      }.bind(this, event.target));
    }
  };

  _proto.onInvalid = function onInvalid(event) {
    if (this.invalidMessage && !event.target.validity.valid) {
      event.target.setCustomValidity(this.invalidMessage || "O valor informado não é válido");
    }
  };

  _proto.render = function render() {
    var _this3 = this,
        _this$pattern$toStrin,
        _this$pattern;

    return /*#__PURE__*/_react["default"].createElement("input", _extends({}, this.props, {
      ref: function ref(e) {
        _this3.inputRef = e;
      },
      value: this.state.value,
      onChange: function onChange(e) {
        return _this3.onChange(e);
      },
      onInvalid: function onInvalid(e) {
        return _this3.onInvalid(e);
      },
      pattern: (_this$pattern$toStrin = (_this$pattern = this.pattern) === null || _this$pattern === void 0 ? void 0 : _this$pattern.toString().substr(1, this.pattern.toString().length - 2)) !== null && _this$pattern$toStrin !== void 0 ? _this$pattern$toStrin : ".*"
    }));
  };

  return CommonInput;
}(_react.Component);

exports["default"] = CommonInput;

_defineProperty(CommonInput, "defaultProps", {
  value: "",
  onChange: function onChange() {}
});

CommonInput.propTypes = process.env.NODE_ENV !== "production" ? {
  value: _propTypes["default"].any,
  onChange: _propTypes["default"].func
} : {};
module.exports = exports.default;