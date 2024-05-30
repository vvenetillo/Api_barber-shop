import mysql from 'mysql2';
import { config as configDotenv } from 'dotenv';

configDotenv();

// Conexão com o banco de dados MySQL
const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'db_babershop'
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados.');
    }
});

export default conexao;
