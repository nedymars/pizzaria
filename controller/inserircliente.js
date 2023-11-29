require("dotenv").config();

const db = require("../src/database/db")
const port = process.env.PORT;
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "funcionando!"
    })
})

app.get('/clientes/:id', async (req, res) => {
    const clientes = await db.selectCustomer(req.params.id);
    res.json(clientes)
})

app.get('/clientes', async (req, res) => {
    const clientes = await db.selectCustomers();
    res.json(clientes)
})


app.listen(port)