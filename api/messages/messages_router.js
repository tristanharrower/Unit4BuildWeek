const Messages = require('./messages_model')

const express = require('express');
const {restricted} = require('../auth/auth_middleware');

const router = express.Router({mergeParams: true});


router.post('/', restricted, (req, res, next) => {
    const newMessage = {
        ...req.body
    }
    Messages.createMessage(newMessage)
    .then(newPotluck => {
        res.status(201).json(newPotluck)
    })
    .catch(err => {
        next(err)
    })
  })

router.get('/', restricted,  async (req, res, next) => {
    const filter = {
        ...req.query
    }
    Messages.findBy(filter)
    .then(messages => {
        res.status(200).json(messages)
    })
    .catch(err => {
        next(err)
    })
})


router.delete('/:messageid', restricted, (req, res, next) => {
    const filter = {
      message_id: req.params.messageid,
    }
  Messages.deleteBy(filter)
  .then(() => {
      res.status(200).json(`Message Deleted: ${req.params.messageid}`)
  })
  .catch(err => {
      next(err)
  })
})

module.exports = router;