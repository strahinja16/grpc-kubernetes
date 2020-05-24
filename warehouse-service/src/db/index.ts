import {Connection, createConnection} from "typeorm";
import { MaterialType } from "./entities/material-type";
import { MaterialItem } from "./entities/material-item";
import {MaterialSpecification} from "./entities/material-specification";
import {Warehouse} from "./entities/warehouse";
import {ProductType} from "./entities/product-type";
import { seedDatabase } from './seeds';
import {config} from "../config";

export var dbConnection: Connection;

export const getDbConnection = async (): Promise<Connection> => {
    return createConnection({
        type: "postgres",
        host: config.db.host,
        port:  config.db.port as number,
        username: config.db.user,
        password: config.db.pass,
        database: config.db.database,
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
            console.log('\n🚀  Postgres is now connected to warehouse-service');
            dbConnection = connection;

            return connection;
        })
        .then((connection) => {
            connection.synchronize()
              .then(() => seedDatabase(connection));

            return connection;
        })
        .catch((err: any) => console.log(err.toString()));
};

