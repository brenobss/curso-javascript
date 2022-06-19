

module.exports.homePage = (req, res) => {
    res.render('index')
}

module.exports.postPage = (req, res) => {
    res.send(`
        <h1>O nome enviado foi: ${req.body.nome}</h1>
    `)
}