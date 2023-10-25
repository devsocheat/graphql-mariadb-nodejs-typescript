import * as path from 'path';
import config from '../core/config';

const baseConfig = {
    client: 'mysql',
    connection: {
        host: config.DB_HOST,
        port: parseInt(config.DB_PORT),
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        timezone : 'UTC'
    },
    migrations: {
        tableName: config.MIGRATION_TABLE,
        directory: path.join(__dirname, 'migrations'),
    },
    seeds: {
        directory: path.join(__dirname, 'seeds'),
    },
}

export default {
    development: {
        ...baseConfig
    },
    production : {
        ...baseConfig
    }
};
