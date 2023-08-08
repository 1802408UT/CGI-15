import {Request, Response} from 'express'
import {Proyecto} from '../entities/proyecto.entity'

export const createProyecto = async (req: Request,res: Response) =>{
    try {
        const {Nombre, Descripción, FechaInicio, FechaFinalización} = req.body;
        const proyecto = new Proyecto();
        proyecto.Nombre = Nombre;
        proyecto.Descripción = Descripción;
        proyecto.FechaInicio = FechaInicio;
        proyecto.FechaFinalización = FechaFinalización;
        /*console.log(req.body);*/
        await proyecto.save();
        return res.json(proyecto);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getProyecto = async (req: Request,res: Response) =>{
    try {
        const users = await Proyecto.find();
        return res.json(users);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}

export const getByProyecto = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const proyecto = await Proyecto.findOneBy({ ProyectoID: parseInt(id) });
  
      if (!proyecto) return res.status(404).json({ message: "Proyecto not found" });
  
      return res.json(proyecto);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const proyecto = await Proyecto.findOneBy({ ProyectoID: parseInt(id) });
      if (!proyecto) return res.status(404).json({ message: "Not Proyecto found" });
  
      await Proyecto.update({ ProyectoID: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteProyecto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Proyecto.delete({ ProyectoID: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "Proyecto not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  