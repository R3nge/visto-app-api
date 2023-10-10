import { Schema } from "mongoose";
import mongoose from "mongoose";

const ImovelModel = new Schema(
  {
    propietario: String,
    endereco: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("imovel", ImovelModel);
