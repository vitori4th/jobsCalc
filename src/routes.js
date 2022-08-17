const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

routes.get('/', (req, res) => {
  return res.render(views + 'index')
})
routes.get('/job', (req, res) => {
  return res.render(views + 'job')
})
routes.get('/job/edit', (req, res) => {
  return res.render(views + 'job-edit')
})
routes.get('/profile', (req, res) => {
  return res.render(views + 'profile')
})

module.exports = routes
