const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router();

const User = require('./auth_model')
const { BCRYPT_ROUNDS } = require('../../config')
const {tokenBuilder} = require('./auth_utilities');

  //register a new user
  router.post('/register', async (req, res, next) => {

    const newUser = {
        username:req.body.username,
        password:req.body.password
    }

    const hash = bcrypt.hashSync(newUser.password, BCRYPT_ROUNDS)
    
    newUser.password = hash

    User.insert(newUser)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
      
  })

  //login as organizer
  router.post('/login', async (req, res, next) => {
    let { username, password } = req.body
    User.findBy({username})
    .then(([org]) => {
        if(org && bcrypt.compareSync(password, org.password)){
            const token = tokenBuilder(org)
            res.status(200).json({
                organizer_id:org.organizer_id,
                username:org.username,
                password:org.password,
                token
            })
        }else{
            next({
                status:401,
                message:'invalid credentials'
            })
        }
    })
    .catch(next)
})


module.exports = router