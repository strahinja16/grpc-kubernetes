import {Connection, createConnection} from "typeorm";
import {OrderResponse} from "./entities/order-response";
import {Order} from "./entities/order";
import {ProductType} from "./entities/product-type";
import {Product} from "./entities/product";
import {seedDatabase} from "./seeds";
import {OrderSpecification} from "./entities/order-specification";
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
            Order, OrderResponse,
            ProductType, Product, OrderSpecification,
        ],
        synchronize: false,
        cli: {
            entitiesDir: "src/db/entities",
            migrationsDir: "src/db/migrations"
        },
        logging: false
    })
        .then((connection: Connection) => {
            console.log('\n🚀  Postgres is now connected to execution-service');
            dbConnection = connection;

            return connection;
        })
        .then((connection: Connection) => {
            connection.synchronize()
                .then(() => seedDatabase(connection));

            return connection;
        })
        .catch((err: any) => console.log(err.toString()));
};

