import conexao from '../database/conexao.js';

class ClienteController {

    index(req, res){
        const sql = `SELECT * FROM agendamento;`
        conexao.query(sql, (error, result) =>{
            if(error){
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
    
            }
        })
    }

    show(req, res){
        const id = req.params.id;
        const sql = `SELECT * FROM agendamento WHERE id=?;`
        conexao.query(sql, id, (error, result) =>{
            const linha = result[0]
            if(error){
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(linha)
    
            }
        })
    }

    store(req, res){
    const cliente = req.body;
    const sql = `INSERT INTO agendamento SET ?;`
    conexao.query(sql, cliente, (error, result) =>{
        if(error){
            res.status(404).json({'error': error})
        } else {
            res.status(201).json(result)

        }
    })
    
}

    update(req, res){
        const id = req.params.id
        const cliente = req.body
        const sql = 'UPDATE agendamento SET ? WHERE ? WHERE id=?;'
        conexao.query(sql, [cliente, id], (error, result) => {
            if(error){
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
    
            }
        })
    }

    delete(req, res){
        const id = req.params.id
        const sql = 'DELETE FROM agendamento WHERE id=?;'
        conexao.query(sql, id, (error, result) => {
            if(error){
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
    
            }
        })
    }

}

export default new ClienteController();