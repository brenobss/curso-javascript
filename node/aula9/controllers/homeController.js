module.exports.homePage = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome completo: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
}

module.exports.postPage = (req, res) => {
    res.send(`
        <h1>O nome enviado foi: ${req.body.nome}</h1>
    `)
}