import * as dotenv from "dotenv";
import * as path from "path";

const envFile = process.env.NODE_ENV || 'development';
//console.log(path.resolve(__dirname, `../../.env.${envFile}`))
dotenv.config({ path: path.resolve(__dirname, `../../.env.${envFile}`) });

const getOsEnv = (key: string, defaultValue?: string): string => {
    const envValue = process.env[key];
    if (typeof envValue === "undefined") {
        if (defaultValue === undefined) {
            throw new Error(`Environment variable ${key} is not set, and no default value provided.`);
        }
        return defaultValue;
    }
    return envValue;
};

export default getOsEnv;