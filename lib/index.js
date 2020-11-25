"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _CommonInput = _interopRequireDefault(require("./Components/_CommonInput"));

var _AgenciaBancaria = _interopRequireDefault(require("./Components/AgenciaBancaria"));

var _BoletoBancario = _interopRequireDefault(require("./Components/BoletoBancario"));

var _CEP = _interopRequireDefault(require("./Components/CEP"));

var _CNPJ = _interopRequireDefault(require("./Components/CNPJ"));

var _ContaBancaria = _interopRequireDefault(require("./Components/ContaBancaria"));

var _ConvenioBancario = _interopRequireDefault(require("./Components/ConvenioBancario"));

var _CPF = _interopRequireDefault(require("./Components/CPF"));

var _Documento = _interopRequireDefault(require("./Components/Documento"));

var _Moeda = _interopRequireDefault(require("./Components/Moeda"));

var _Telefone = _interopRequireDefault(require("./Components/Telefone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  CommonInput: _CommonInput["default"],
  AgenciaBancaria: _AgenciaBancaria["default"],
  BoletoBancario: _BoletoBancario["default"],
  CEP: _CEP["default"],
  CNPJ: _CNPJ["default"],
  ContaBancaria: _ContaBancaria["default"],
  ConvenioBancario: _ConvenioBancario["default"],
  CPF: _CPF["default"],
  Documento: _Documento["default"],
  Moeda: _Moeda["default"],
  Telefone: _Telefone["default"]
};
exports["default"] = _default;
module.exports = exports.default;