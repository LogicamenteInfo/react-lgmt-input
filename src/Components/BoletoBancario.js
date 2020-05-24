import CommonInput from './_CommonInput';

export default class BoletoBancario extends CommonInput {

  masksRegex = /(^(\d{5})(\d{1,5})$)|(^(\d{5})(\d{5})(\d{1,5})$)|(^(\d{5})(\d{5})(\d{5})(\d{1,6})$)|(^(\d{5})(\d{5})(\d{5})(\d{6})(\d{1,5})$)|(^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{1,6})$)|(^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d)$)|(^(\d{5})(\d{5})(\d{5})(\d{6})(\d{5})(\d{6})(\d)(\d{1,14})$)/g;

  masksReplacement = ["$2.$3", "$5.$6 $7", "$9.$10 $11.$12", "$14.$15 $16.$17 $18", "$20.$21 $22.$23 $24.$25", "$27.$28 $29.$30 $31.$32 $33", "$35.$36 $37.$38 $39.$40 $41 $42"];

  length = 47;

  pattern = /^\d{5}\.\d{5} \d{5}\.\d{6} \d{5}\.\d{6} \d \d{14}$/;

  invalidMessage = "Número informado é inválido.";

  /**
   * @todo validator
   */

}