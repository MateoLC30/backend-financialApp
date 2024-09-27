import { config as dotenv } from "dotenv";
dotenv();

const config = {
    JWT_SECRET: process.env.JWT_SECRET || 'mi_super_secreta_clave_jwt',
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'admin',
        database: process.env.DB_DATABASE || 'financialAppDb'
    }
}

export default config;