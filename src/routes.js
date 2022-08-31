const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
  name: 'Vitória',
  avatar: 'https://github.com/vitori4th.png',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4
}

const jobs = [{
  id:1,
  name: "Pizzaria",
  "daily-hours":2,
  "total-hours": 60,
  created_at: Date.now()
}]

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
  return res.render(views + 'profile', { profile: profile })
})
routes.post('/job', (req, res) => {
  const lastId = jobs[jobs.length - 1]?.id || 1;

  jobs.push({
    id: lastId+1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    created_at: Date.now() // atribuindo data de hoje
  })
  
  return res.redirect('/')
})

module.exports = routes
