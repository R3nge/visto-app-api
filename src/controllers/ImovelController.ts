import { Request, Response } from "express";
import Imovel from "../databases/models/ImovelModel";

const ImovelController = {
  async index(req: Request, res: Response): Promise<Response> {
    let imoveis = await Imovel.find();

    return res.json(imoveis);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    let imoveis = await Imovel.findById(id);

    return res.json(imoveis);
  },

  async create(req: Request, res: Response): Promise<Response> {
    await Imovel.create(req.body)
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
    const { propietario, endereco } = req.body;

    await Imovel.findByIdAndUpdate(id, {
      propietario,
      endereco,
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

    await Imovel.findByIdAndDelete(id)

      .then((data) => {
        return res.json({ message: `${id} exluido com sucesso!` });
      })
      .catch((error) => {
        return res.status(400).json(error.original);
      });
    return res.status(500);
  },
};

export default ImovelController;
