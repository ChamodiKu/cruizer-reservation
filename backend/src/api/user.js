const express = require('express')
const router = express.Router()
const verify = require('../auth/verify')
const User = require('../model/User')

router.get('/', [verify.decodeToken], function (req, res, next) {
  User.findById(req.uid).exec((err, user) => {
    if (err) {
      return res.status(500).send({
        message: 'Error retrieving User with id: ' + req.uid
      })
    }

    // Remove password attribute from the user
    user.password = undefined
    
    res.status(200).send(user)
  })
})

module.exports = router
