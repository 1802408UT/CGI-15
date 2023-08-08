import {Request, Response} from 'express'
import {Tarea} from '../entities/tarea.entity'
import { Proyecto } from '../entities/proyecto.entity';
import { Persona } from '../entities/persona.entity';

export const createTarea = async (req: Request,res: Response) =>{
    try {
        const {Nombre, Estado, Descripcion, ProyectoId, PersonaId} = req.body;
        const tarea = new Tarea();
        tarea.Nombre = Nombre;
        tarea.Descripcion = Descripcion;
        tarea.Estado = Estado;

        const proyecto = new Proyecto();
        proyecto.ProyectoID = ProyectoId;
        const persona = new Persona();
        persona.PersonaID = PersonaId;

        tarea.proyecto = proyecto;
        tarea.persona = persona;

        await tarea.save();
        return res.json(proyecto);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getTarea = async (req: Request,res: Response) =>{
    try {
        const users = await Tarea.find();
        return res.json(users);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}

export const getByTarea = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const proyecto = await Tarea.findOneBy({ TareaID: parseInt(id) });
  
      if (!proyecto) return res.status(404).json({ message: "Tarea not found" });
  
      return res.json(proyecto);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateTarea = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const proyecto = await Tarea.findOneBy({ TareaID: parseInt(id) });
      if (!proyecto) return res.status(404).json({ message: "Not Proyecto found" });
  
      await Tarea.update({ TareaID: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteTarea = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Tarea.delete({ TareaID: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "Tarea not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  