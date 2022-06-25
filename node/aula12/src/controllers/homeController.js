module.exports.homePage = (req, res) => {
    res.render('index')
}

module.exports.postPage = (req, res) => {
    if (req.body.usuario.includes('Barreto')) {
        req.body.usuario = req.body.usuario.replace('Barreto', 'Não use Barreto')
        res.send(`<h1>O nome enviado é inválido</h1>`)
    } else {
        res.send(`
            <h1>O nome enviado foi: ${req.body.usuario}</h1>
        `)
    }
}