import Client from 'pg-pool'
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port : process.env.DB_PORT
})

export default client;