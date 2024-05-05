import express from 'express';
const app = express();

const clientes = []

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/clientes', (req, res) => {
    res.status(200).send(clientes)
})

app.post('/clientes', (req, res) => {
    clientes.push(req.body)
    res.status(201).send({msg: "Cliente agendado com sucesso"})
})

export default app;