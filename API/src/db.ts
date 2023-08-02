import {DataSource} from 'typeorm';
import { User } from './entities/user';
import { Inventario } from './entities/inventario';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cgi",
    synchronize: true,
    logging: true,
    entities: [User,Inventario],
    subscribers: [],
    migrations: [],
})
