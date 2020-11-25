import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommonInput extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: "",
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value.toString(),
    };
  }

  componentDidMount() {
    if (this.masksRegex === undefined)
      throw "O atributo `masksRegex` é obrigatório.";
    if (
      typeof this.masksRegex !== "object" ||
      this.masksRegex.constructor.name !== "RegExp"
    )
      throw "O atributo `masksRegex` precisa ser uma expressão regular.";
    if (this.masksReplacement === undefined)
      throw "O atributo `masksReplacement` é obrigatório.";
    if (!Array.isArray(this.masksReplacement))
      throw "O atributo `masksReplacement` precisa ser um array.";
    if (this.length === undefined) throw "O atributo `length` é obrigatório.";
    if (typeof this.length !== "number")
      throw "O atributo `length` precisa ser um número inteiro.";
    if (
      this.pattern &&
      (typeof this.pattern !== "object" ||
        this.pattern.constructor.name !== "RegExp")
    )
      throw "O atributo `pattern` precisa ser uma expressão regular.";
    if (this.invalidMessage && typeof this.invalidMessage !== "string")
      throw "O atributo `invalidMessage` precisa ser um string.";
    if (this.validator && typeof this.validator !== "function")
      throw "O atributo `validator` precisa ser uma função.";
  }

  componentDidUpdate(pProps) {
    if (this.props.value !== pProps.value) {
      this.setState({ value: this.props.value.toString() });
    }
  }

  onChange(event) {
    let o = window.Event ? event.which : event.keyCode;
    let rValue;
    if (event.target && [35, 36, 37, 39].indexOf(o) === -1) {
      const previousValue = event.target.value.toString();
      const value = event.target.value
        .replace(/\D/g, "")
        .substring(0, this.length);
      const start = event.target.selectionStart,
        end = event.target.selectionEnd;
      for (let i = this.masksReplacement.length - 1; i >= 0; i--) {
        rValue = value.replace(this.masksRegex, this.masksReplacement[i]);
        if (rValue.replace(/\D/g, "").length > 0) break;
      }
      const nonDigits = rValue.match(/(\D| )/g);
      const offset =
        nonDigits !== null && end === previousValue.length
          ? nonDigits.length
          : 0;
      this.setState(
        { value: rValue },
        ((el) => {
          this.props.onChange(this.state.value);
          el.setSelectionRange(start + offset, end + offset);
          el.setCustomValidity("");
          if (
            this.state.value.toString().length > 0 &&
            typeof this.validator === "function" &&
            !this.validator()
          ) {
            el.setCustomValidity(
              this.invalidMessage || "O valor informado não é válido"
            );
          }
        }).bind(this, event.target)
      );
    }
  }

  onInvalid(event) {
    if (this.invalidMessage && !event.target.validity.valid) {
      event.target.setCustomValidity(
        this.invalidMessage || "O valor informado não é válido"
      );
    }
  }

  render() {
    return (
      <input
        {...this.props}
        ref={(e) => {
          this.inputRef = e;
        }}
        value={this.state.value}
        onChange={(e) => this.onChange(e)}
        onInvalid={(e) => this.onInvalid(e)}
        pattern={
          this.pattern
            ?.toString()
            .substr(1, this.pattern.toString().length - 2) ?? ".*"
        }
      />
    );
  }
}
