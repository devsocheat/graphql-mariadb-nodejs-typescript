import express from 'express';
import config from './core/config';
import * as db from './db/database';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))

db

app.get('/', (req, res) => {
    res.send('GraphQL + Express + MariaDB');
});

app.listen(config.APP_PORT, () => {
    console.log(`Server is running on ${config.NODE_ENV} port ${config.APP_PORT}`);
});
