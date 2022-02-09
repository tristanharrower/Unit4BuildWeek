const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authorizationRouter = require('./auth/auth_router');
const userRouter = require('./user/user_router');
const potlucksRouter = require('./potlucks/potlucks_router')
const attendingPotlucksRouter = require('./attending-potlucks/attending-potlucks_router')
const foodsRouter = require('./foods/foods_router');
const messagesRouter = require('./messages/messages_router')

//starter middlwares
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//routers as middleware
server.use('/authorization', authorizationRouter);
server.use('/user', userRouter);
server.use('/potlucks', potlucksRouter)
server.use('/messages', messagesRouter)
server.use('/attending-potlucks', attendingPotlucksRouter)
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
