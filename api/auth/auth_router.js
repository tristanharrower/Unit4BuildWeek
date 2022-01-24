const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router();

const User = require('./auth_model')
const { BCRYPT_ROUNDS } = require('../../config')
const {tokenBuilder, usernameCheck, emailCheck} = require('./auth_middleware');


  //register a new user
  router.post('/register', usernameCheck, emailCheck, (req, res, next) => {

    const newUser = {
        email:req.body.email,
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
    let { email, password } = req.body
    User.findBy({email})
    .then(([person]) => {
        if(person && bcrypt.compareSync(password, person.password)){
            const token = tokenBuilder(person)
            res.status(200).json({
                person_id:person.person_id,
                email:person.email,
                username:person.username,
                password:person.password,
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