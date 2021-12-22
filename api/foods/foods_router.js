const Foods = require('./foods_model')

const express = require('express');
const router = express.Router();

  router.post('/', (req, res, next) => {
    Foods.insertFood(req.body)
    .then(newFood => {
        res.status(201).json(newFood)
    })
    .catch(err => {
        next(err)
    })
  })

  router.get('/:id', (req, res, next) => {
      const potluckFoods = {
          potluck_id:req.params.id
      }
    Foods.findBy(potluckFoods)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        next(err)
    })
  })

  router.delete('/:id', (req, res, next) => {
    Foods.deleteById(req.params.id)
    .then(() => {
        res.status(200).json('Food Deleted!')
    })
    .catch(err => {
        next(err)
    })
})



  module.exports = router