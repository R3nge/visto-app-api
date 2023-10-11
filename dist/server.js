"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://root:123@visto-app.n4j0sy1.mongodb.net/?retryWrites=true&w=majority")
    .then(function (data) {
    console.log("MongoDB Connection Succeeded", data.version);
})
    .catch(function (err) {
    console.log("Error in DB connection:", err.message);
});
app.listen(3333, function () {
    return console.log("Server running on port http://localhost:3333");
});
