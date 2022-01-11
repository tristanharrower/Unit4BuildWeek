const express = require('express')
const router = express.Router();


const User = require('./user_model')

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