import {Connection, createConnection} from "typeorm";
import {Personnel} from "./entities/personnel";
import {seedDatabase} from "./seeds";

export var dbConnection: Connection;

export const getDbConnection = async (): Promise<Connection> => {
    return createConnection({
        type: "postgres",
        host: "personneldb",
        port:  5432, // default port of postgres
        username: "root", // our created username, you can have your own user name
        password: "root", // our created username, you can have your own password
        database: "personneldb", // our created database name, you can have your own
        entities: [
            Personnel
        ],
        synchronize: false,
        cli: {
            entitiesDir: "src/db/entities",
            migrationsDir: "src/db/migrations"
        },
        logging: false
    })
        .then((connection) => {
            console.log('\n🚀  Postgres is now connected to personnel-service');
            dbConnection = connection;

            return connection;
        })
        .then((connection) => {
            // connection.synchronize();
            // seedDatabase(connection);

            return connection;
        })
        .catch((err: any) => console.log(err.toString()));
};

