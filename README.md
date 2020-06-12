# React-Lgmt-Input

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

Este componente cria inputs mascarados para alguns dados utilizados em cadastros
aqui no Brasil.

Ele também da uma base para a criação de inputs personalizados com suas
próprias máscaras através de expressões regulares e permite determinar uma
função de validação para o input.

Para uma demonstração, faça o download e execute `yarn start`.

## Instalação

```bash
$ npm i -S @logicamente.info/react-lgmt-input # NPM user
$ yarn add @logicamente.info/react-lgmt-input # NPM user
```

## Uso

```js
import React from 'react';
import LgmtInput from '@logicamente.info/react-select-brasil';

export default class Demo extends React.Component {
  render() {
    return (
      <LgmtInput.CPF
        value={this.state.cpf}
        onChange={(e) => this.setState({ cpf: e.target.value })}>
    );
  }
}
```

## Tipos implementados

| Componente | Temática |
| :-- | :-- |
| `LgmtInput.CommonInput` | Componente base para a criação de novos componentes input, não é possível renderizar este componente diretamente |
| `LgmtInput.AgenciaBancaria` | Input formatado para número de agências bancárias |
| `LgmtInput.BoletoBancário` | Input formatado para números de boletos com 47 dígitos |
| `LgmtInput.CEP` | Input formatado para CEP brasileiro |
| `LgmtInput.CNPJ` | Input formatado para número de registro de pessoa jurídica |
| `LgmtInput.ContaBancaria` | Input formatado para contas bancárias |
| `LgmtInput.ConvenioBancario` | Input formatado para números de boletos com 48 dígitos (água, luz, telefone...) |
| `LgmtInput.CPF` | Input formatado para número de registro de pessoa física |
| `LgmtInput.Documento` | Input formatado para CPF ou CNPJ, adaptando-se de acordo com a quantidade dígitos inseridos |
| `LgmtInput.Moeda` | Input formatado para valores monetários, com duas casas decimais |
| `LgmtInput.Telefone` | Input formatado para telefones com DDD |

## Props

Este componente é um DOM Input padrão do **HTML de texto**, portanto todas as propriedades de um
*input[type="text"]* são aplicáveis a este componente como, por exemplo, `required`.

## Como criar seus próprios inputs

Para criar inputs com suas próprias opções e formatos, crie uma classe que extenda `CommonInput` e defina as propriedades conforme tabela a seguir.

<table>
<tr>
  <th>Propriedade</th>
  <th>Descrição</th>
  <th>Exemplo</th>
</tr>
<tr>
  <td><code>masksRegex</code></td>
  <td>Demostra através de expressões regulares a evolução da aplicação da máscara</td>
  <td>

  ```js
    masksRegex = /(^(\d)|(\d)(\d)|(\d)(\d)(\d)|(\d)(\d)(\d)(\d)$)/g
  ```
  </td>
</tr>
<tr>
  <td><code>masksReplacement</code></td>
  <td>Informa como os grupos capturados pelas expressões regulares vão compor a máscara</td>
  <td>

  ```js
    masksReplacement = ["$2", "$4.$5", "$7.$8.$9", "$11.$12.$12-$13"]
  ```
  </td>
</tr>
<tr>
  <td><code>length</code></td>
  <td>Tamanho máximo permitido para o input <i>desconsiderando</i> os caracteres da máscara</td>
  <td>

  ```js
    length = 4
  ```
  </td>
</tr>
<tr>
  <td><code>pattern</code></td>
  <td>Expressão regular que validará o valor final do input depois de aplicada a máscara</td>
  <td>

  ```js
    pattern = /^(\d\.){3}\d$/
  ```
  </td>
</tr>
<tr>
  <td><code>invalidMessage</code></td>
  <td>Mensagem que será exibida caso o valor do input seja inválido utilizando a validação padrão do HTML5 (anterior ao evento <code>submit</code>)</td>
  <td>

  ```js
    invalidMessage = "Preencha corretamente."
  ```
  </td>
</tr>
<tr>
  <td><code>validator</code></td>
  <td>Uma função <b>opcional</b> executada durante a validação de <code>pattern</code> que avalia o valor do input para determinar sua validade</td>
  <td>

  ```js
    const v = this.state.value
                .replace(/\D/g, '')
                .split('').map((e) => parseInt(e));
    const ultimoDigito = v.pop();
    const somaDigitos = v.reduce((acc, cur) => acc + cur);
    return somaDigitos === ultimoDigito;
  ```
  </td>
</tr>

</table>

### Exemplo completo de classe

```js
import LgmtInput from '@logicamente.info/react-lgmt-input';

export default class MeuInput extends LgmtInput.CommonInput {

  masksRegex = /(^(\d)|(\d)(\d)|(\d)(\d)(\d)|(\d)(\d)(\d)(\d)$)/g;

  masksReplacement = ["$2", "$4.$5", "$7.$8.$9", "$11.$12.$12-$13"];

  length = 4;

  pattern = /^(\d\.){3}\d$/;

  invalidMessage = "Preencha corretamente.";

  validator: () => {
    const v = this.state.value
                .replace(/\D/g, '') // remove a mascara
                .split('').map((e) => parseInt(e)); // transforma em um vetor de int
    const ultimoDigito = v.pop(); // retira o ultimo digito
    const somaDigitos = v.reduce((acc, cur) => acc + cur); // soma os tres primeiros
    return somaDigitos === ultimoDigito;
  }

}
```

[build-badge]: https://img.shields.io/travis/logicamenteinfo/react-lgmt-input/master.png?style=flat-square
[build]: https://travis-ci.org/logicamenteinfo/react-lgmt-input

[npm-badge]: https://img.shields.io/npm/v/@logicamente.info/react-lgmt-input.png?style=flat-square
[npm]: https://www.npmjs.org/@logicamente.info/react-lgmt-input