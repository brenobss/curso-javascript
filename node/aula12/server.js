require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const { middlewareGlobal } = require('./src/middlewares/middleware')
const port = 3000

mongoose.connect(process.env.CONNECTSTRING)
    .then(() => {
        console.log('Conectado via mongoose')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))

app.set('views', './src/views')

app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
    })
})