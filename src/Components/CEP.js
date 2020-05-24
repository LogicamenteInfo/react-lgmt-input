import CommonInput from './_CommonInput';

export default class CEP extends CommonInput {

  masksRegex = /(^(\d{2})(\d{1,3})$)|(^(\d{2})(\d{3})(\d{1,3})$)/g;

  masksReplacement = ["$2.$3", "$5.$6-$7"];

  length = 8;

  pattern = /^\d{2}\.\d{3}-\d{3}$/;

  invalidMessage = "CEP informado é inválido.";

}