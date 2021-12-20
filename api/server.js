const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const organizerRouter = require('../api/organizers/organizer_router');

function getAllUsers() { return db('users') }

async function insertUser(organizer) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newOrganizer] = await db('organizers').insert(organizer, ['organizer_id', 'username', 'password'])
  return newOrganizer // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/organizers', organizerRouter);


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
