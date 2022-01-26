const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router();

const { BCRYPT_ROUNDS } = require('../../config')

//middlewares and model
const {restricted, usernameCheck} = require('../auth/auth_middleware');
const User = require('./user_model');
const Potluck = require('../potlucks/potlucks_model')
const AttendingPotlucks = require('../attending-potlucks/attending-potlucks_model')


//returns all users

router.get('/', restricted,(req, res, next) => {

    User.getAllUsers()
     .then(users => {
         res.status(201).json(users)
     })
     .catch(err => {
         next(err)
     })
      
  })


//returns a single user by id
router.get('/:id', restricted, async (req, res, next) => {
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

  router.get('/:id/potlucks', restricted, async (req, res, next) => {
    const potentialUser = {
        person_id:req.params.id
    }

    Potluck.findBy(potentialUser)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
  })

  router.get('/:id/attending-potlucks', restricted, async (req, res, next) => {
    const potentialUser = {
        person_id:req.params.id
    }

    AttendingPotlucks.findBy(potentialUser)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
  })



router.put('/:id', restricted, usernameCheck, (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, BCRYPT_ROUNDS)
    
    req.body.password = hash

    const updateUser = {
        person_id:req.params.id,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    }
    User.update(req.params.id, updateUser)
      .then(person => {
          res.status(200).json(person);
      })
      .catch(next);
  });
  

  //deletes a user by id
  router.delete('/:id', restricted, async (req, res, next) => {

    User.deleteById(req.params.id)
     .then(org => {
         res.status(201).json(org)
     })
     .catch(err => {
         next(err)
     })
      
  })

module.exports = router