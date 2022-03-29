import CommonInput from './_CommonInput';

export default class ContaBancaria extends CommonInput {
  static defaultProps = {
    value: '0,00',
    digits: 2,
  }

  masksRegex = /(\d)/g;

  masksReplacement = ['$1'];

  length = 50;

  pattern = /^\d+(\.\d{3})*?(,\d{1,2})?$/;

  invalidMessage = "Valor informado é inválido.";

  loadPattern() {
    this.pattern = new RegExp(`/^\d+(\.\d{3})*?(,\d{1,${this.props.digits}})?$/`);
  }

  onChange(event) {
    let o = window.Event ? event.which : event.keyCode;
    let rValue;
    if (event.target && [35, 36, 37, 39].indexOf(o) === -1) {
      this.loadPattern();
      const previousValue = event.target.value.toString();
      const value = event.target.value
        .replace(/^0+|\D/g, "")
        .padStart(3, '0')
      const start = event.target.selectionStart,
        end = event.target.selectionEnd;
      rValue = Intl.NumberFormat('pt-BR', { minimumFractionDigits: this.props.digits }).format(parseInt(value, 10) / Math.pow(10, this.props.digits));
      const nonDigits = rValue.match(/(\D| )/g);
      const allSelected = value.match(/^00\d$/g);
      const offset = allSelected ? 3 : nonDigits && end === previousValue.length ? nonDigits.length : 0;
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