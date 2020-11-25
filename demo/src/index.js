import React, { Component } from "react";
import { render } from "react-dom";

import LgmtInput from "../../src";

export default class Demo extends Component {
  state = {
    moeda: "0,00",
  };

  componentDidMount() {
    this.inputAgencia.inputRef.focus();
  }

  render() {
    return (
      <div>
        <h1>react-lgmt-input Demo</h1>

        <form>
          <label>
            <b>Agência</b>
          </label>
          <LgmtInput.AgenciaBancaria
            ref={(e) => (this.inputAgencia = e)}
            className="class--test"
            value={this.state.agencia}
            onChange={(agencia) => this.setState({ agencia })}
          />
          <p>Você digitou o agência: {this.state.agencia}</p>
        </form>

        <form>
          <label>
            <b>Conta</b>
          </label>
          <LgmtInput.ContaBancaria
            value={this.state.conta}
            onChange={(conta) => this.setState({ conta })}
          />
          <p>Você digitou a conta: {this.state.conta}</p>
        </form>

        <form>
          <label>
            <b>CPF</b>
          </label>
          <LgmtInput.CPF
            value={this.state.cpf}
            onChange={(cpf) => this.setState({ cpf })}
          />
          <p>Você digitou o CPF: {this.state.cpf}</p>
        </form>

        <form>
          <label>
            <b>Documento</b>
          </label>
          <LgmtInput.Documento
            value={this.state.documento}
            onChange={(documento) => this.setState({ documento })}
          />
          <p>Você digitou o documento: {this.state.documento}</p>
        </form>

        <form>
          <label>
            <b>Moeda</b>
          </label>
          <LgmtInput.Moeda
            value={this.state.moeda}
            onChange={(moeda) => this.setState({ moeda })}
          />
          <p>Você digitou o valor : R$ {this.state.moeda}</p>
        </form>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
