"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ImovelController_1 = __importDefault(require("./controllers/ImovelController"));
var PropietarioController_1 = __importDefault(require("./controllers/PropietarioController"));
var EnderecoController_1 = __importDefault(require("./controllers/EnderecoController"));
var FuncionarioController_1 = __importDefault(require("./controllers/FuncionarioController"));
var router = (0, express_1.Router)();
router.use(function (req, res, next) {
    console.log(req.method, req.url, res.statusCode);
    next();
});
// Rotas para Imóvel
router.get("/imoveis", ImovelController_1.default.index);
router.get("/imovel/:id", ImovelController_1.default.findById);
router.post("/imovel", ImovelController_1.default.create);
router.put("/imovel/:id", ImovelController_1.default.update);
router.delete("/imovel/:id", ImovelController_1.default.delete);
// Rotas para Proprietário
router.get("/proprietarios", PropietarioController_1.default.index);
router.get("/proprietario/:id", PropietarioController_1.default.findById);
router.post("/proprietario", PropietarioController_1.default.create);
router.put("/proprietario/:id", PropietarioController_1.default.update);
router.delete("/proprietario/:id", PropietarioController_1.default.delete);
// Rotas para Endereço
router.get("/enderecos", EnderecoController_1.default.index);
router.get("/endereco/:id", EnderecoController_1.default.findById);
router.post("/endereco", EnderecoController_1.default.create);
router.put("/endereco/:id", EnderecoController_1.default.update);
router.delete("/endereco/:id", EnderecoController_1.default.delete);
// Rotas para Funcionário
router.get("/funcionarios", FuncionarioController_1.default.index);
router.get("/funcionario/:id", FuncionarioController_1.default.findById);
router.post("/funcionario", FuncionarioController_1.default.create);
router.put("/funcionario/:id", FuncionarioController_1.default.update);
router.delete("/funcionario/:id", FuncionarioController_1.default.delete);
// Rotas para Inquilino
//router.get("/inquilinos", InquilinosController.index);
//router.get("/inquilino/:id", InquilinosController.findById);
//router.post("/inquilino", InquilinosController.create);
//router.put("/inquilino/:id", InquilinosController.update);
//router.delete("/inquilino/:id", InquilinosController.delete);
// Rotas para Materiais
//router.get("/materiais", MateriaisController.index);
//router.get("/material/:id", MateriaisController.findById);
//router.post("/material", MateriaisController.create);
//router.put("/material/:id", MateriaisController.update);
//router.delete("/material/:id", MateriaisController.delete);
// Rotas para Cor
//router.get("/cores", CorController.index);
//router.get("/cor/:id", CorController.findById);
//router.post("/cor", CorController.create);
//router.put("/cor/:id", CorController.update);
//router.delete("/cor/:id", CorController.delete);
exports.default = router;
