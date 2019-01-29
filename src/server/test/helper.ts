import { Connection, ConnectionOptions, createConnection } from 'typeorm';

let connection: Connection;
let initPromise: Promise<void>;

const dbConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: '',
    synchronise: false,
    entities: [''],
} as ConnectionOptions;

export function initConnection() {
    if (initPromise) {
        return initPromise;
    }

    initPromise = createConnection(dbConfig).then((con) => {
        connection = con;
    }).catch((error) => { throw error; });

    return initPromise;
}

export function stopConnection(): Promise<void> {
    return connection.close();
}
