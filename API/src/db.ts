import {DataSource} from 'typeorm';
import { User } from './entities/user';
import { Inventario } from './entities/inventario';
import { Equipo } from './entities/equipo.entity';
import { Proyecto } from './entities/proyecto.entity';
import { Tarea } from './entities/tarea.entity';
import { Persona } from './entities/persona.entity';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cgi",
    synchronize: true,
    logging: true,
    entities: [User,Inventario, Proyecto, Persona, Tarea, Equipo],
    subscribers: [],
    migrations: [],
})
