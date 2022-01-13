const Potluck = require('./potlucks_model')

const express = require('express');
const {restricted} = require('../auth/auth_middleware');

const router = express.Router({mergeParams: true});

//create a new potluck for a user, person_id needed in req.body
router.post('/', restricted, (req, res, next) => {
    const requestPotluck = {
        ...req.body
    }
    Potluck.insertPotluck(requestPotluck)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
    })
    .catch(err => {
        next(err)
    })
  })

    //get all potlucks, can specify filter in req.body
router.get('/', restricted,  async (req, res, next) => {
    const filter = {
        ...req.body
    }
    Potluck.findBy(filter)
    .then(potluck => {
        res.status(200).json(potluck)
    })
    .catch(err => {
        next(err)
    })
})

  router.put('/:potluckid', restricted, (req, res, next) => {
    const updatePotluck = {
        ...req.body,
    }
  Potluck.update(req.body.potluck_id, updatePotluck)
  .then(newPotluck => {
      res.status(200).json(newPotluck)
  })
  .catch(err => {
      next(err)
  })
})

  //delete specific potluck
  router.delete('/:potluckid', restricted, (req, res, next) => {
    Potluck.deleteById(req.params.potluckid)
    .then(() => {
        res.status(200).json('Potluck Deleted!')
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router