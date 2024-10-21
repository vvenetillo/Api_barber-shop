import { consulta } from "../database/conexao.js";

class ClienteRepository {
// CRUD
  create(clientes) {
    const sql = `INSERT INTO agendamento SET ?;`;
    return consulta(sql, clientes, 'Não foi possível criar!')
  }
  findAll() {
    const sql = `SELECT * FROM agendamento;`;
    return consulta(sql, 'Não foi possível localizar!')

  }
  findById(id) {
    const sql = `SELECT * FROM agendamento WHERE id=?;`;
    return consulta(sql, id, 'Não foi possível localizar!')

  }
  update(clientes, id) {
    const sql = 'UPDATE agendamento SET ? WHERE ? WHERE id=?;'
    return consulta(sql, [clientes, id], 'Não foi possível atualizar!')

  }
  delete(id) {
    const sql = 'DELETE FROM agendamento WHERE id=?;'
    return consulta(sql, id, 'Não foi possível deletar!')

  }
}

export default new ClienteRepository();
