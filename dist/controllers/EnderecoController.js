"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnderecoModel_1 = __importDefault(require("../databases/models/EnderecoModel"));
// Define um objeto chamado EnderecoController para agrupar funções relacionadas a endereços.
var EnderecoController = {
    // Função para listar todos os endereços.
    index: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var enderecos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, EnderecoModel_1.default.find()];
                    case 1:
                        enderecos = _a.sent();
                        // Retorna os endereços em formato JSON.
                        return [2 /*return*/, res.json(enderecos)];
                }
            });
        });
    },
    // Função para encontrar um endereço por ID.
    findById: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, enderecos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, EnderecoModel_1.default.findById(id)];
                    case 1:
                        enderecos = _a.sent();
                        // Retorna o endereço encontrado em formato JSON.
                        return [2 /*return*/, res.json(enderecos)];
                }
            });
        });
    },
    // Função para criar um novo endereço.
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Cria um novo endereço com base nos dados do corpo da requisição.
                    return [4 /*yield*/, EnderecoModel_1.default.create(req.body)
                            .then(function (data) {
                            // Se a criação for bem-sucedida, retorna os dados do novo endereço em formato JSON.
                            return res.json(data);
                        })
                            .catch(function (error) {
                            // Se houver um erro na criação, retorna um status de erro 400 e os detalhes do erro em formato JSON.
                            return res.status(400).json(error.original);
                        })];
                    case 1:
                        // Cria um novo endereço com base nos dados do corpo da requisição.
                        _a.sent();
                        // Retorna um status 500 (erro interno do servidor).
                        return [2 /*return*/, res.status(500)];
                }
            });
        });
    },
    // Função para atualizar um endereço existente por ID.
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, logradouro, numero, complemento, bairro, cidade, estado, pais, cep;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, logradouro = _a.logradouro, numero = _a.numero, complemento = _a.complemento, bairro = _a.bairro, cidade = _a.cidade, estado = _a.estado, pais = _a.pais, cep = _a.cep;
                        // Atualiza o endereço com base no ID fornecido.
                        return [4 /*yield*/, EnderecoModel_1.default.findByIdAndUpdate(id, {
                                logradouro: logradouro,
                                numero: numero,
                                complemento: complemento,
                                bairro: bairro,
                                cidade: cidade,
                                estado: estado,
                                pais: pais,
                                cep: cep,
                            })
                                .then(function (data) {
                                // Se a atualização for bem-sucedida, retorna os dados atualizados em formato JSON.
                                return res.json(data);
                            })
                                .catch(function (error) {
                                // Se houver um erro na atualização, retorna um status de erro 400 e os detalhes do erro em formato JSON.
                                return res.status(400).json(error.original);
                            })];
                    case 1:
                        // Atualiza o endereço com base no ID fornecido.
                        _b.sent();
                        // Retorna um status 500 (erro interno do servidor).
                        return [2 /*return*/, res.status(500)];
                }
            });
        });
    },
    // Função para excluir um endereço por ID.
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        // Exclui o endereço com base no ID fornecido.
                        return [4 /*yield*/, EnderecoModel_1.default.findByIdAndDelete(id)
                                .then(function (data) {
                                // Se a exclusão for bem-sucedida, retorna uma mensagem de sucesso em formato JSON.
                                return res.json({ message: "".concat(id, " exclu\u00EDdo com sucesso!") });
                            })
                                .catch(function (error) {
                                // Se houver um erro na exclusão, retorna um status de erro 400 e os detalhes do erro em formato JSON.
                                return res.status(400).json(error.original);
                            })];
                    case 1:
                        // Exclui o endereço com base no ID fornecido.
                        _a.sent();
                        // Retorna um status 500 (erro interno do servidor).
                        return [2 /*return*/, res.status(500)];
                }
            });
        });
    },
};
// Exporta o objeto EnderecoController para ser usado em outros lugares.
exports.default = EnderecoController;
