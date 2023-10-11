"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var PropietarioModel = new mongoose_1.Schema({
    nomep: String,
    enderecop: String,
    emailp: String,
    telefonep: Number,
}, {
    timestamps: true,
});
exports.default = mongoose_2.default.model("propietario", PropietarioModel);
