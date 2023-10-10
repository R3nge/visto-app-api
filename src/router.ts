import { Router } from "express";
import ImovelController from "./controllers/ImovelController";
import ProprietarioController from "./controllers/PropietarioController";
import EnderecoController from "./controllers/EnderecoController";
import FuncionarioController from "./controllers/FuncionarioController";

const router = Router();

router.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
});

// Rotas para Imóvel
router.get("/imoveis", ImovelController.index);
router.get("/imovel/:id", ImovelController.findById);
router.post("/imovel", ImovelController.create);
router.put("/imovel/:id", ImovelController.update);
router.delete("/imovel/:id", ImovelController.delete);

// Rotas para Proprietário
router.get("/proprietarios", ProprietarioController.index);
router.get("/proprietario/:id", ProprietarioController.findById);
router.post("/proprietario", ProprietarioController.create);
router.put("/proprietario/:id", ProprietarioController.update);
router.delete("/proprietario/:id", ProprietarioController.delete);

// Rotas para Endereço
router.get("/enderecos", EnderecoController.index);
router.get("/endereco/:id", EnderecoController.findById);
router.post("/endereco", EnderecoController.create);
router.put("/endereco/:id", EnderecoController.update);
router.delete("/endereco/:id", EnderecoController.delete);

// Rotas para Funcionário
router.get("/funcionarios", FuncionarioController.index);
router.get("/funcionario/:id", FuncionarioController.findById);
router.post("/funcionario", FuncionarioController.create);
router.put("/funcionario/:id", FuncionarioController.update);
router.delete("/funcionario/:id", FuncionarioController.delete);

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

export default router;
