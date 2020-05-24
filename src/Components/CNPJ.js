import CommonInput from './_CommonInput';

export default class CNPJ extends CommonInput {

  masksRegex = /(^(\d{2})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{3})(\d{1,4})$)|(^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$)/g;

  masksReplacement = ["$2.$3", "$5.$6.$7", "$9.$10.$11/$12", "$14.$15.$16/$17-$18"];

  length = 14;

  pattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  invalidMessage = "CNPJ informado é inválido.";

  validator = () => {
    const cnpj = this.state.value.replace(/\D/g, "");
    if (cnpj === "00000000000000" || cnpj === "" || cnpj.length !== 14)
      return false;
    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    const digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) return false;
    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (let i = length; i >= 1; i--) {
      sum += numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) return false;
    return true;
  };

}