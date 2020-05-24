import CommonInput from './_CommonInput';
import CPF from './CPF';
import CNPJ from './CNPJ';

export default class Documento extends CommonInput {

  masksRegex = /(^(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{1,3})$)|(^(\d{3})(\d{3})(\d{3})(\d{1,2})$)|(^(\d{2})(\d{3})(\d{3})(\d{1,4})$)|(^(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})$)/g;

  masksReplacement = ["$2.$3", "$5.$6.$7", "$9.$10.$11-$12", "$14.$15.$16/$17", "$19.$20.$21/$22-$23"];

  length = 14;

  pattern = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/;

  invalidMessage = "Documento informado é inválido.";

  validator = () => {
    const doc = this.state.value.replace(/\D/g, "");
    switch (doc.length) {
      case 11:
        return new CPF({ value: this.state.value }).validator(doc);
      case 14:
        return new CNPJ({ value: this.state.value }).validator(doc);
      default:
        return false;
    }
  }

}