import * as bodyParser from 'body-parser';
import * as express from 'express';
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import router from './router';

const app = express();

createConnection().then(async (connection: Connection) => {
    app.use(bodyParser.json());
    app.use((_req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,');
        next();
    });
    app.use('/api', router);
    app.set('port', 2000);
    app.listen(app.get('port'), () => {
        console.log('Node API is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
        console.log(`Connected to your ${connection.options.type} database`);
        console.log('press CTRL-C to stop\n');
    });
}).catch((error) => console.error(`typeORM connection error: ${error}`));
