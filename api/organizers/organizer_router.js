const express = require('express')

const router = express.Router();

const Organizer = require('./organizers_model')



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
  router.post('/', async (req, res, next) => {
      const newOrganizer = {
          username:req.body.username,
          password:req.body.password
      }
     Organizer.add(newOrganizer)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
  })


module.exports = router