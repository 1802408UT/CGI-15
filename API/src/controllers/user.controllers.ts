import {Request, Response} from 'express'
import {User} from '../entities/user'

export const createUser = async (req: Request,res: Response) =>{
    try {
        const {first_name, second_name, first_apellido, second_apellido, birthday , email, password, area} = req.body;
        const user = new User();
        user.first_name = first_name;
        user.second_name = second_name;
        user.first_apellido = first_apellido;
        user.second_apellido = second_apellido;
        user.birthday = birthday;
        user.email = email;
        user.password = password;
        user.area = area;
        /*console.log(req.body);*/
        await user.save();    
        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
        return res.status(500).json({message: error.message});
    }    }
}

export const getUser = async (req: Request,res: Response) =>{
    try {
        const users = await User.find();
        return res.json(users);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
}
export const getByUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.findOneBy({ id: parseInt(id) });
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      return res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const user = await User.findOneBy({ id: parseInt(id) });
      if (!user) return res.status(404).json({ message: "Not user found" });
  
      await User.update({ id: parseInt(id) }, req.body);
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

  export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await User.delete({ id: parseInt(id) });
  
      if (result.affected === 0)
        return res.status(404).json({ message: "User not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };