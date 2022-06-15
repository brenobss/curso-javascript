const express = require('express')
const routes = express.Router()
const homeController = require('./controllers/homeController')
const perfilController = require('./controllers/perfilController')

routes.get('/', homeController.homePage)
routes.post('/', homeController.postPage)

routes.get('/perfil/:id?', perfilController.getById)

module.exports = routes