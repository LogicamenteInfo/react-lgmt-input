import CommonInput from './_CommonInput';

export default class ContaBancaria extends CommonInput {
  static defaultProps = {
    value: '0000-0'
  }

  masksRegex = /(\d)/g;

  masksReplacement = ['$1'];

  length = 12;

  pattern = /^\d{4,}-\d$/;

  invalidMessage = "Número da conta informada é inválido.";

  onChange(event) {
    let o = window.Event ? event.which : event.keyCode;
    let rValue;
    if (event.target && [35, 36, 37, 39].indexOf(o) === -1) {
      const previousValue = event.target.value.toString();
      const value = event.target.value
        .replace(/^0+|\D/g, "")
        .substring(0, this.length)
        .padStart(5, "0");
      const vector = value.split("").reverse();
      const start = event.target.selectionStart,
        end = event.target.selectionEnd;
      const out = [];
      vector.map((item, index) => {
        if (index === 1)
          out.push('-');
        out.push(item);
      });
      rValue = out.reverse().join("");
      const nonDigits = rValue.match(/(\D| )/g);
      const offset = nonDigits !== null && end === previousValue.length ? nonDigits.length : 0;
      this.setState({ value: rValue }, ((el) => {
        this.props.onChange(this.state.value);
        el.setSelectionRange(start + offset, end + offset);
        el.setCustomValidity("");
        if (typeof this.validator === 'function' && !this.validator()) {
          el.setCustomValidity(this.invalidMessage || 'O valor informado não é válido');
        }
      }).bind(this, event.target));
    }
  }

}