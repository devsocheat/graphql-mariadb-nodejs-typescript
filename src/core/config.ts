import getOsEnv from "./env"

export default {
    APP_PORT: getOsEnv("APP_PORT"),
    NODE_ENV: getOsEnv("NODE_ENV", "development"),
    DB_HOST: getOsEnv("DB_HOST"),
    DB_PORT: getOsEnv("DB_PORT"),
    DB_USER: getOsEnv("DB_USER"),
    DB_PASSWORD: getOsEnv("DB_PASSWORD"),
    DB_NAME: getOsEnv("DB_NAME"),
    MIGRATION_TABLE : "migrations"
}