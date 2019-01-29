import * as bodyParser from 'body-parser';
import * as express from 'express';
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import router from './router';

const app = express();

app.use(bodyParser.json());
app.use((_req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    next();
});
app.use('/api', router);
app.set('port', 2000);

createConnection().then(async (connection: Connection) => {
    app.listen(app.get('port'), () => {
        console.log(`Node API is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
        console.log(`Connected to your ${connection.options.type} database`);
        console.log('Press CTRL-C to stop\n');
    });
}).catch((error) => console.error(`TypeORM connection ${error}`));

export default app;
