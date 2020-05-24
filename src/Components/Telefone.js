import CommonInput from './_CommonInput';

export default class Telefone extends CommonInput {

  masksRegex = /(^\d{1}$)|(^\d{2}$)|(^(\d{2})(\d{1,4})$)|(^(\d{2})(\d{4})(\d{1,4})$)|(^(\d{2})(\d{5})(\d{4})$)/g;

  masksReplacement = ["($1", "($2", "($4) $5", "($7) $8-$9", "($11) $12-$13"];

  length = 11;

  pattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;

  invalidMessage = "Telefone precisa estar no formato (00) 0000-0000.";

}