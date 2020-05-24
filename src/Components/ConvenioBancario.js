import CommonInput from './_CommonInput';

export default class ConvenioBancario extends CommonInput {

  masksRegex = /(^(8\d{10})(\d)$)|(^(8\d{10})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)(\d{1,11})$)|(^(8\d{10})(\d)(\d{11})(\d)(\d{11})(\d)(\d{11})(\d)$)/g;

  masksReplacement = ["$2-$3 ", "$5-$6 $7", "$9-$10 $11-$12", "$14-$15 $16-$17 $18", "$20-$21 $22-$23 $24-$25", "$27-$28 $29-$30 $31-$32 $33", "$35-$36 $37-$38 $39-$40 $41-$42"];

  length = 48;

  pattern = /^\d{11}-\d{1} \d{11}-\d{1} \d{11}-\d{1} \d{11}-\d{1}$/;

  invalidMessage = "Número informado é inválido.";

  /**
   * @todo validator
   */

}