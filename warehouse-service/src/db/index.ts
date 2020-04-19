import {Connection, createConnection} from "typeorm";
import { MaterialType } from "./entities/material-type";
import { MaterialItem } from "./entities/material-item";
import {MaterialSpecification} from "./entities/material-specification";
import {Warehouse} from "./entities/warehouse";
import {ProductType} from "./entities/product-type";
import { seedDatabase } from './seeds';

export const getDbConnection = async (): Promise<Connection> => {
    return createConnection({
        type: "postgres",
        host: "warehousedb",
        port:  5432, // default port of postgres
        username: "root", // our created username, you can have your own user name
        password: "root", // our created username, you can have your own password
        database: "warehousedb", // our created database name, you can have your own
        entities: [
            MaterialType, MaterialItem, MaterialSpecification, Warehouse, ProductType
        ],
        synchronize: false,
        cli: {
            entitiesDir: "src/db/entities",
            migrationsDir: "src/db/migrations"
        },
        logging: false
    })
        .then((connection) => {
            console.log('\n🚀  Postgres is now connected to warehouse-service')
            return connection;
        })
        // .then((connection) => {
        //     connection.synchronize();
        //     seedDatabase(connection);
        //
        //     return connection;
        // })
        .catch((err: any) => console.log(err.toString()));
};

