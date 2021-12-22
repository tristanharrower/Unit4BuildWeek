const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const organizerRouter = require('../api/organizers/organizer_router');
const potlucksRouter = require('../api/potlucks/potlucks_router')

//starter middlwares
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//routers as middleware
server.use('/organizers', organizerRouter);
server.use('/potlucks', potlucksRouter)

//sanity check
server.get('/', async (req, res) => {
  res.json('heroku connected!')
})

//error handling middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
})


// table organizers & attendees
// + role 

/**create POTLUCK table
 * potluck_id
 * organizer_id: - foreign key -> organizer_id
 * event_name
 * description
 * event_date
 * event_time
 * location
 * 
 * 
 * add food as an organzier
 * foodtype, food item
 * 
 * 
 * attendee table
 * potluck_id - foreign key -> potluck_id -> organizer
 * event_name 
 * first_name
 * last_name
 * email:
 */


module.exports = server
