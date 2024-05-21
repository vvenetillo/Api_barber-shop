import express from 'express';
import conexao from '../../infra/conexao.js';
const app = express();



app.get('/clientes', (req, res) => {
    const sql = `SELECT * FROM agendamento;`
    conexao.query(sql, (error, result) =>{
        if(error){
            res.status(404).json({'error': error})
        } else {
            res.status(200).json(result)

        }
    })
})

app.get('/clientes/:id', (req, res) => {
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
})

app.post('/clientes', (req, res) => {
    const cliente = req.body;
    const sql = `INSERT INTO agendamento SET ?;`
    conexao.query(sql, cliente, (error, result) =>{
        if(error){
            res.status(404).json({'error': error})
        } else {
            res.status(201).json(result)

        }
    })
    
})

export default app;