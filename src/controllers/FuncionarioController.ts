import { Request, Response } from "express";
import Funcionario from "../databases/models/FuncionarioModel";

const FuncionarioController = {
  async index(req: Request, res: Response): Promise<Response> {
    let funcionarios = await Funcionario.find();

    return res.json(funcionarios);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let funcionarios = await Funcionario.findById(id);

    return res.json(funcionarios);
  },

  async create(req: Request, res: Response): Promise<Response> {
    await Funcionario.create(req.body)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });

    return res.status(500);
  },

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      nome,
      tipo,
      departamento,
      ////enderecofunc,
      cpf,
      usuario,
      senha,
    } = req.body;

    await Funcionario.findByIdAndUpdate(id, {
      nome,
      tipo,
      departamento,
      ////enderecofunc,
      cpf,
      usuario,
      senha,
    })
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });

    return res.status(500);
  },

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await Funcionario.findByIdAndDelete(id)

      .then((data) => {
        return res.json({ message: `${id} exluido com sucesso!` });
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });
    return res.status(500);
  },
};

export default FuncionarioController;
