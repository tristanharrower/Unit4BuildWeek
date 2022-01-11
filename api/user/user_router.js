const express = require('express')
const router = express.Router();


const User = require('./user_model')


//returns all users
router.get('/', async (req, res, next) => {

    User.getAll()
     .then(users => {
         res.status(201).json(users)
     })
     .catch(err => {
         next(err)
     })
      
  })

//returns a single user by id
router.get('/:id', async (req, res, next) => {
    const potentialUser = {
        person_id:req.params.id
    }

    User.findBy(potentialUser)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
      
  })


  //deletes a user by id
  router.delete('/:id', async (req, res, next) => {


    User.deleteById(req.params.id)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
      
  })







module.exports = router