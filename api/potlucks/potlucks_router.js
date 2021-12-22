const Potluck = require('./potlucks_model')

const express = require('express');
const restricted = require('./potlucks_middleware');

const router = express.Router();

router.get('/', restricted, (req, res, next) => {
    Potluck.getAllPotlucks()
    .then(potlucks => {
        res.status(200).json(potlucks)
    })
    .catch(err => {
        next(err)
    })
  })

router.post('/', restricted, (req, res, next) => {
    Potluck.insertPotluck(req.body)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
    })
    .catch(err => {
        next(err)
    })
  })

  router.get('/:id', restricted, (req, res, next) => {
      const potluckId = {
        potluck_id: req.params.id
      }
    Potluck.findBy(potluckId)
    .then(potentialPotluck => {
        res.status(200).json(potentialPotluck)
    })
    .catch(err => {
        next(err)
    })
  })

  router.delete('/:id', (req, res, next) => {
    Potluck.deleteById(req.params.id)
    .then(() => {
        res.status(200).json('Potluck Deleted!')
    })
    .catch(err => {
        next(err)
    })
})




module.exports = router