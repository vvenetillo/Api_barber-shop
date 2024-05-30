import conexao from "../database/conexao.js";

class ClienteRepository {
// CRUD
  create() {
    const sql = `INSERT INTO agendamento SET ?;`;
    return new Promise((resolve, reject) => {
        conexao.query(sql, clientes, (error, result) => {
          if (error) return reject("Não foi possível cadastrar");
          //parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
  }
  findAll() {
    const sql = `SELECT * FROM agendamento;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if (error) return reject("Não foi possível localizar");
        //parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  findById() {
    const sql = `SELECT * FROM agendamento WHERE id=?;`;
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if (error) return reject("Não foi possível localizar");
        // parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  update(clientes, id) {
    const sql = 'UPDATE agendamento SET ? WHERE ? WHERE id=?;'
    return new Promise((resolve, reject) => {
        conexao.query(sql, [clientes, id], (error, result) => {
          if (error) return reject("Não foi possível modificar");
          // parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
  }
  delete(id) {
    const sql = 'DELETE FROM agendamento WHERE id=?;'
    return new Promise((resolve, reject) => {
        conexao.query(sql, id, (error, result) => {
          if (error) return reject("Não foi possível deletar");
          // parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
  }
}

export default new ClienteRepository();
