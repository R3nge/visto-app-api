import { Schema } from "mongoose";
import mongoose from "mongoose";

const PropietarioModel = new Schema(
  {
    nomep: String,
    enderecop: String,
    emailp: String,
    telefonep: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("propietario", PropietarioModel);
