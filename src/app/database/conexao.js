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

/**
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */


export const consulta = (sql, value='', messageReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, value, (error, result) => {
          if (error) return reject(messageReject);
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
}

export default conexao;
