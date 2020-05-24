# react-lgmt-input

```js
import CommonInput from './_CommonInput';

export default class MeuInput extends CommonInput {

  masksRegex = /(^(\d)+$)/g;

  masksReplacement = ["$2"];

  length = 10;

  pattern = /^\d{1,10}$/;

  invalidMessage = "Número informado é inválido.";

  validator: () => {
    if(this.state.value)
      return true;
    return false;
  }

}
```