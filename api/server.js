const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const organizerRouter = require('../api/organizers/organizer_router');

//starter middlwares
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//organizer route as middleware
server.use('/organizers', organizerRouter);


//sanity check
server.get('/', async (req, res) => {
  res.json('heroku connected!')
})


/**
 * server.get('/api/users', async (req, res) => {
  res.json(await getAllUsers())
})

server.post('/api/users', async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

 */

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = server
