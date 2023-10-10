import { Request, Response } from "express";
import Endereco from "../databases/models/EnderecoModel";

// Define um objeto chamado EnderecoController para agrupar funções relacionadas a endereços.
const EnderecoController = {
  // Função para listar todos os endereços.
  async index(req: Request, res: Response): Promise<Response> {
    // Busca todos os endereços na base de dados.
    let enderecos = await Endereco.find();

    // Retorna os endereços em formato JSON.
    return res.json(enderecos);
  },

  // Função para encontrar um endereço por ID.
  async findById(req: Request, res: Response): Promise<Response> {
    // Obtém o ID do parâmetro da URL.
    const { id } = req.params;

    // Busca um endereço pelo ID.
    let enderecos = await Endereco.findById(id);

    // Retorna o endereço encontrado em formato JSON.
    
    return res.json(enderecos);
  },

  // Função para criar um novo endereço.
  async create(req: Request, res: Response): Promise<Response> {
    // Cria um novo endereço com base nos dados do corpo da requisição.
    await Endereco.create(req.body)
      .then((data) => {
        // Se a criação for bem-sucedida, retorna os dados do novo endereço em formato JSON.
        return res.json(data);
      })
      .catch((error) => {
        // Se houver um erro na criação, retorna um status de erro 400 e os detalhes do erro em formato JSON.
        return res.status(400).json(error.original);
      });

    // Retorna um status 500 (erro interno do servidor).
    return res.status(500);
  },

  // Função para atualizar um endereço existente por ID.
  async update(req: Request, res: Response): Promise<Response> {
    // Obtém o ID do parâmetro da URL e os dados do corpo da requisição.
    const { id } = req.params;
    const {
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais,
      cep,
    } = req.body;

    // Atualiza o endereço com base no ID fornecido.
    await Endereco.findByIdAndUpdate(id, {
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais,
      cep,
    })
      .then((data) => {
        // Se a atualização for bem-sucedida, retorna os dados atualizados em formato JSON.
        return res.json(data);
      })
      .catch((error) => {
        // Se houver um erro na atualização, retorna um status de erro 400 e os detalhes do erro em formato JSON.
        return res.status(400).json(error.original);
      });

    // Retorna um status 500 (erro interno do servidor).
    return res.status(500);
  },

  // Função para excluir um endereço por ID.
  async delete(req: Request, res: Response): Promise<Response> {
    // Obtém o ID do parâmetro da URL.
    const { id } = req.params;

    // Exclui o endereço com base no ID fornecido.
    await Endereco.findByIdAndDelete(id)
      .then((data) => {
        // Se a exclusão for bem-sucedida, retorna uma mensagem de sucesso em formato JSON.
        return res.json({ message: `${id} excluído com sucesso!` });
      })
      .catch((error) => {
        // Se houver um erro na exclusão, retorna um status de erro 400 e os detalhes do erro em formato JSON.
        return res.status(400).json(error.original);
      });

    // Retorna um status 500 (erro interno do servidor).
    return res.status(500);
  },
};

// Exporta o objeto EnderecoController para ser usado em outros lugares.
export default EnderecoController;
