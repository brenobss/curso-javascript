const express = require('express')
const routes = express.Router()
const homeController = require('./src/controllers/homeController')
const perfilController = require('./src/controllers/perfilController')

routes.get('/', homeController.homePage)
routes.post('/', homeController.postPage)

routes.get('/perfil/:id?', perfilController.getById)

module.exports = routes