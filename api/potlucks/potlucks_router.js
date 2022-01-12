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

    //get all potlucks, can specify person_id in req.body
router.get('/', restricted,  async (req, res, next) => {
    const personId = {
        ...req.body
    }
    Potluck.findBy(personId)
    .then(potluck => {
        res.status(200).json(potluck)
    })
    .catch(err => {
        next(err)
    })
})

//get specific potluck by potluck id
  router.get('/:potluckid', restricted, (req, res, next) => {
      const potluckId = {
        potluck_id: req.params.potluckid
      }
    Potluck.findBy(potluckId)
    .then(potentialPotluck => {
        res.status(200).json(potentialPotluck)
    })
    .catch(err => {
        next(err)
    })
  })
  router.post('/:potluckid', restricted, (req, res, next) => {
    const requestPotluck = {
        potluck_id:req.params.potluckid,
        ...req.body
    }
    Potluck.attendPotluck(requestPotluck)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
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