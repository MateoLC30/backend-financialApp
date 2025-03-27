import { config as dotenv } from "dotenv";
dotenv();

const config = {
    JWT_SECRET: process.env.JWT_SECRET || 'MaT0303**',
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'admin',
        database: process.env.DB_DATABASE || 'financialAppDb'
    }
}

export default config;