const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const routes = require('./routes/homeRoutes.js')

const server = express()

const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}

server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', routes)

module.exports = server
