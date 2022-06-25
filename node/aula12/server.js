const express = require('express')
const app = express()
const routes = require('./routes')
const { middlewareGlobal } = require('./src/middlewares/middleware')
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))

app.set('views', './src/views')

app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})