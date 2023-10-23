import * as path from 'path';
import Config from '../core/config';

const baseConfig = {
    client: 'mysql',
    connection: {
        host: Config.DB_HOST,
        port: parseInt(Config.DB_PORT),
        user: Config.DB_USER,
        password: Config.DB_PASSWORD,
        database: Config.DB_NAME,
    },
}

export default {
    development: {
        ...baseConfig,
        migrations: {
            directory: path.join(__dirname, 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'seeds'),
        },
    },
    production : {
        ...baseConfig,
        migrations: {
            directory: './build/db/migrations',
        },
        seeds: {
            directory: './build/db/seeds',
        },
    }
};
