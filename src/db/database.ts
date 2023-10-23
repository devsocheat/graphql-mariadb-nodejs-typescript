import knex from 'knex';
import knexConfig from './knexfile';
import config from "../core/config";

const kConfig = (knexConfig as any)[config.NODE_ENV]
// console.log("kConfig", kConfig)
export default knex(kConfig)