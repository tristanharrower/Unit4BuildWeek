const bcrypt = require('bcryptjs')

const express = require('express')
const router = express.Router();

const Organizer = require('./organizers_model')
const Potlucks = require('../potlucks/potlucks_model')
const { BCRYPT_ROUNDS } = require('../../config')
const {tokenBuilder} = require('./organizer_utilities')

// TO-DO change create organizer to have a /register endpoint
//TO_DO create a login endpoint for returning Organizers
//Create enpoints for attendees
//create endpoints and table for potluck that connects to organizer

//get all organizers
router.get('/', (req, res, next) => {
    Organizer.getAllOrganizers()
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        next(err)
    })
  })


  //create a new organizer
  router.post('/register', async (req, res, next) => {
      const newOrganizer = {
          username:req.body.username,
          password:req.body.password
      }

      const hash = bcrypt.hashSync(newOrganizer.password, BCRYPT_ROUNDS)
      
      newOrganizer.password = hash

     Organizer.insertOrganizer(newOrganizer)
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
    Organizer.findBy({username})
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
router.get('/:id', async (req, res, next) => {
    const organizerId = {
        organizer_id:req.params.id
    }
    Organizer.findBy(organizerId)
    .then(org => {
        res.status(200).json(org)
    })
    .catch(err => {
        next(err)
    })
})

//get all potlucks from specific organizer
router.get('/:id/potlucks', async (req, res, next) => {
    const organizerId = {
        organizer_id:req.params.id
    }
    Potlucks.findBy(organizerId)
    .then(org => {
        res.status(200).json(org)
    })
    .catch(err => {
        next(err)
    })
})

  //delete an organizer by id
  router.delete('/:id', async (req, res, next) => {
    Organizer.deleteById(req.params.id)
    .then(() => {
        res.status(200).json('Organizer successfully deleted')
    })
    .catch(err => {
        next(err)
    })
})



module.exports = router