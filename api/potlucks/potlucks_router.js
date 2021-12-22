const Potluck = require('./potlucks_model')

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    Potluck.getAllPotlucks()
    .then(potlucks => {
        res.status(200).json(potlucks)
    })
    .catch(err => {
        next(err)
    })
  })


router.post('/', (req, res, next) => {
    Potluck.insertPotluck(req.body)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
    })
    .catch(err => {
        next(err)
    })
  })








module.exports = router