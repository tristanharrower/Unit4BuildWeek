const Potluck = require('./potlucks_model')

const express = require('express');
const restricted = require('./potlucks_middleware');

const router = express.Router({mergeParams: true});

//create a new potluck for an organizer
router.post('/', restricted, (req, res, next) => {
    const requestPotluck = {
        person_id:req.params.id,
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

    //get all potlucks from specific organizer
router.get('/', restricted,  async (req, res, next) => {
    const personId = {
        person_id:req.params.id
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