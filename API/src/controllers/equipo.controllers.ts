import {Request, Response} from 'express'
import { Equipo } from '../entities/equipo.entity';

export const createEquipo = async (req: Request,res: Response) =>{
    try {
        const {Especialidad, Subespecialidad, Marca, Modelo, Concepto, Cantidad, Unidad, OC, Estado, ProyectoID} = req.body;
        const equipo = new Equipo();
        equipo.Especialidad = Especialidad;
        equipo.Subespecialidad = Subespecialidad;
        equipo.Marca = Marca;
        equipo.Modelo = Modelo;
        equipo.Concepto = Concepto;
        equipo.Cantidad = Cantidad;
        equipo.Unidad = Unidad;
        equipo.OC = OC;
        equipo.Estado = Estado;
        equipo.proyecto = ProyectoID;

        await equipo.save();
        return res.json(equipo);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getEquipo = async (req: Request,res: Response) =>{
    try {
        const equipo = await Equipo.find();
        return res.json(equipo);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}

export const getByEquipo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const equipo = await Equipo.findOneBy({ EquipoID: parseInt(id) });
  
      if (!equipo) return res.status(404).json({ message: "Equipo not found" });
  
      return res.json(equipo);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateEquipo = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const equipo = await Equipo.findOneBy({ EquipoID: parseInt(id) });
      if (!equipo) return res.status(404).json({ message: "Not Equipo found" });
  
      await Equipo.update({ EquipoID: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteEquipo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Equipo.delete({ EquipoID: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "Equipo not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  