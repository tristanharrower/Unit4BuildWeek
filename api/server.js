const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const organizerRouter = require('./auth/auth_router');
const potlucksRouter = require('./potlucks/potlucks_router')
const foodsRouter = require('./foods/foods_router');

//starter middlwares
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//routers as middleware
server.use('/organizers', organizerRouter);
server.use('/organizers/:id/potlucks', potlucksRouter)
server.use('/potlucks/:potluckid/foods', foodsRouter)

//sanity check
server.get('/', async (req, res) => {
  res.json('heroku connected!')
})

//error handling middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
})


module.exports = server
