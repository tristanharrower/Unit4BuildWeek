const attendingPotlucks = require('./attending-potlucks_model')

const express = require('express');
const {restricted} = require('../auth/auth_middleware');

const router = express.Router({mergeParams: true});

  //attends a potluck based on person_id in req.body
  router.post('/', restricted, (req, res, next) => {
    const requestPotluck = {
        ...req.body
    }
    attendingPotlucks.attendPotluck(requestPotluck)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
    })
    .catch(err => {
        next(err)
    })
  })

   //get all attending potlucks, can specify filter in req.body
  router.get('/', restricted,  async (req, res, next) => {
    const filter = {
        ...req.body
    }
    attendingPotlucks.findBy(filter)
    .then(potluck => {
        res.status(200).json(potluck)
    })
    .catch(err => {
        next(err)
    })
})

  //delete specific potluck
  router.delete('/:potluckid', restricted, (req, res, next) => {
      const filter = {
        potluck_id: req.params.potluckid,
        person_id: req.body.person_id,
      }
    attendingPotlucks.deleteBy(filter)
    .then(() => {
        res.status(200).json(`User ${req.body.person_id} no longer attending Potluck: ${req.params.potluckid}`)
    })
    .catch(err => {
        next(err)
    })
})


module.exports = router;