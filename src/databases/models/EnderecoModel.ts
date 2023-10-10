import { Schema } from "mongoose";
import mongoose from "mongoose";

const EnderecoModel = new Schema(
  {
    logradouro: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
    pais: String,
    cep: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("endereco", EnderecoModel);
