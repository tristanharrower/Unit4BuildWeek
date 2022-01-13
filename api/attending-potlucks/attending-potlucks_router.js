const attendingPotlucks = require('./attending-potlucks_model')

const express = require('express');
const {restricted} = require('../auth/auth_middleware');

const router = express.Router({mergeParams: true});

  //attends a potluck based on person_id in req.body
  router.post('/', restricted, (req, res, next) => {
    const requestPotluck = {
        potluck_id:req.params.potluckid,
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


module.exports = router;