const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome completo: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
})

//A interrogação depois de "idUsuario" faz com que ele seja opcional
// e a rota perfil funcione normalmente sem parâmetro nenhum

// Para fazer uma query na rota se coloca uma interrogação antes da query
// exemplo: /perfil/?nome=andre&sobrenome=afonso
app.get('/perfil/:idUsuario?/:parametro?', (req, res) => {
    // res.send(req.query)
    // console.log(req.query.nome);
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send(`<h1>O nome enviado foi: ${req.body.nome}</h1>`)
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})