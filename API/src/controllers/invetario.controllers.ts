import {Request, Response} from 'express'
import { Inventario} from '../entities/inventario'

export const createProduct = async (req: Request,res: Response) =>{
    try {
        const {Modelo, Marca, Descripcion, cantidad, udm, estado, area} = req.body;
        const user = new Inventario();
        user.Modelo = Modelo;
        user.Marca = Marca;
        user.Descripcion = Descripcion;
        user.cantidad = cantidad;
        user.udm = udm;
        user.estado = estado;
        user.area = area;
        
        /*console.log(req.body);*/
        await user.save();    
        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getProduct = async (req: Request,res: Response) =>{
    try {
        const users = await Inventario.find();
        return res.json(users);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}
export const getByIDProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await Inventario.findOneBy({ id: parseInt(id) });
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      return res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await Inventario.findOneBy({ id: parseInt(id) });
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await Inventario.update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Inventario.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };