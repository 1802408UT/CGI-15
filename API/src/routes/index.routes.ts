import { Router } from "express";
import invetario from "./invetario.routes";
import  user from "./user.routes"
import proyecto from "./proyecto.routes"
import tarea from "./tarea.routes"
import persona from "./persona.routes"
import equipo from "./equipo.routes"
const routes = Router();

routes.use('/users', user);
routes.use('/invetario', invetario);
routes.use('/proyecto', proyecto);
routes.use('/tarea', tarea);
routes.use('/persona', persona);
routes.use('/equipo', equipo);

export default routes;
