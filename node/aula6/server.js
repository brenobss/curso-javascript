const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome completo: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send("<h1>Enviado com sucesso!</h1>")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})