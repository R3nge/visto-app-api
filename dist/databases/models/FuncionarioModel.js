"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var FuncionarioModel = new mongoose_1.Schema({
    nome: String,
    tipo: String,
    departamento: String,
    ////enderecofunc: number,
    cpf: Number,
    usuario: String,
    senha: Number,
}, {
    timestamps: true,
});
exports.default = mongoose_2.default.model("funcionario", FuncionarioModel);
