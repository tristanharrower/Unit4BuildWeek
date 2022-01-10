const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router();

const User = require('./organizers_model')
const { BCRYPT_ROUNDS } = require('../../config')
const {tokenBuilder} = require('./utilities');
const restricted = require('../potlucks/potlucks_middleware');

  //register a new organizer
  router.post('/register', async (req, res, next) => {

    const newUser = {
        username:req.body.username,
        password:req.body.password
    }

    const hash = bcrypt.hashSync(newUser.password, BCRYPT_ROUNDS)
    
    newUser.password = hash

    if(req.body.role === "organizer"){
        User.insertOrganizer(newUser)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
    } else {
        User.insertGuest(newUser)
        .then(org => {
            res.status(201).json(org)
        })
        .catch(err => {
            next(err)
        })
    }
      
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


//get organizer by organizer_id
router.get('/:id', restricted, async (req, res, next) => {
    const organizerId = {
        organizer_id:req.params.id
    }
    User.findBy(organizerId)
    .then(org => {
        res.status(200).json(org)
    })
    .catch(err => {
        next(err)
    })
})



  //delete an organizer by id
  router.delete('/:id', restricted, async (req, res, next) => {
    User.deleteById(req.params.id)
    .then(() => {
        res.status(200).json('Organizer successfully deleted')
    })
    .catch(err => {
        next(err)
    })
})



module.exports = router