const Foods = require('./foods_model')

const express = require('express');
const {restricted} = require('../auth/auth_middleware');
const router = express.Router({mergeParams: true});

  router.post('/', restricted, (req, res, next) => {
        const food = {
            potluck_id:req.params.potluckid,
            food_wanted: req.body.food_wanted, 
            person_id:req.body.person_id
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

 router.put('/:foodid', restricted, (req, res, next) => {
    const updateFood = {
        food_id:req.params.foodid, 
        potluck_id:req.params.potluckid,
        person_id:req.body.person_id,
        food_wanted:req.body.food_wanted
    }
  Foods.update(req.params.foodid, updateFood)
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