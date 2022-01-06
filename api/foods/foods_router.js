const Foods = require('./foods_model')

const express = require('express');
const restricted = require('../potlucks/potlucks_middleware');
const router = express.Router({mergeParams: true});

  router.post('/', restricted, (req, res, next) => {
    const food = {
        potluck_id:req.params.potluckid,
        food_wanted: req.body.food_wanted
    }
    Foods.insertFood(food)
    .then(newFood => {
        res.status(201).json(newFood)
    })
    .catch(err => {
        next(err)
    })
  })

  //get all foods for a specific potluck
  router.get('/', restricted, (req, res, next) => {
      const potluckFoods = {
          potluck_id:req.params.potluckid
      }
    Foods.findBy(potluckFoods)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        next(err)
    })
  })

  router.delete('/:foodid', restricted, (req, res, next) => {
    Foods.deleteById(req.params.foodid)
    .then(() => {
        res.status(200).json('Food Deleted!')
    })
    .catch(err => {
        next(err)
    })
})

  module.exports = router