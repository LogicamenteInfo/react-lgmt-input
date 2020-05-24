import CommonInput from './_CommonInput';

export default class CPF extends CommonInput {

  masksRegex = /(^(\d{4})$)|(^(\d{4})(\d{1})$)/g;

  masksReplacement = ['$2', '$4-$5'];

  length = 5;

  pattern = /^\d{4}(-\d{1})?$/;

  invalidMessage = "Número da agência informada é inválido.";

}