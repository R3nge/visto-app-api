import { Request, Response } from "express";
import Propietario from "../databases/models/PropietarioModel";

//Inicia o Controlador
const PropietarioController = {
  async index(req: Request, res: Response): Promise<Response> {
    let propietarios = await Propietario.find();

    return res.json(propietarios);
  },

  //Função achar pelo ID
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let propietarios = await Propietario.findById(id);

    return res.json(propietarios);
  },

  //Função Criar
  async create(req: Request, res: Response): Promise<Response> {
    await Propietario.create(req.body)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });

    return res.status(500);
  },

  //Função Update
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nomep, enderecop, emailp, telefonep } = req.body;

    await Propietario.findByIdAndUpdate(id, {
      nomep,
      enderecop,
      emailp,
      telefonep,
    })
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });

    return res.status(500);
  },

  //Função Deletar

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await Propietario.findByIdAndDelete(id)

      .then((data) => {
        return res.json({ message: `${id} exluido com sucesso!` });
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });
    return res.status(500);
  },
};

export default PropietarioController;
