const Foods = require('./foods_model')

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    Foods.getAllFoods()
    .then(allFoods => {
        res.status(200).json(allFoods)
    })
    .catch(err => {
        next(err)
    })
  })

  router.post('/', (req, res, next) => {
    Foods.insertFood(req.body)
    .then(neewFood => {
        res.status(201).json(neewFood)
    })
    .catch(err => {
        next(err)
    })
  })

  module.exports = router