import { Schema } from "mongoose";
import mongoose from "mongoose";

const FuncionarioModel = new Schema(
  {
    nome: String,
    tipo: String,
    departamento: String,
    ////enderecofunc: number,
    cpf: Number,
    usuario: String,
    senha: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("funcionario", FuncionarioModel);
