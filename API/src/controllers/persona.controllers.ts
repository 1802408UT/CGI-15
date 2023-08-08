import {Request, Response} from 'express'
import {Persona} from '../entities/persona.entity'
import { Tarea } from '../entities/tarea.entity';

export const createPersona = async (req: Request,res: Response) =>{
    try {
        const {Nombre, Estado, ProyectoID} = req.body;
        
        const persona = new Persona();
        persona.Nombre = Nombre;
        persona.Estado = Estado;
        persona.proyecto = ProyectoID;
        /*console.log(req.body);*/
        await persona.save();
        return res.json(persona);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getPersona = async (req: Request,res: Response) =>{
    try {
        const persona = await Persona.find();
        return res.json(persona);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}

export const getByPersona = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const persona = await Persona.findOneBy({ PersonaID: parseInt(id) });
  
      if (!persona) return res.status(404).json({ message: "Persona not found" });
  
      return res.json(persona);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updatePersona = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const persona = await Persona.findOneBy({ PersonaID: parseInt(id) });
      if (!persona) return res.status(404).json({ message: "Not Persona found" });
  
      await Persona.update({ PersonaID: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deletePersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await Persona.delete({ PersonaID: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "Persona not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  