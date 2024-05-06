import mysql from  'mysql2';
import { configDotenv } from 'dotenv';

const env = configDotenv()

const conexao = mysql.createConnection({
    host: `process.${env}`.DB_HOST,
    port: `process.${env}`.DB_PORT,
    user: 'root',
    password: `process.${env}`.DB_PASSWORD,
    database: 'db_babershop'
});

export default conexao;