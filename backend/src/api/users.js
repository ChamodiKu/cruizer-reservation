const express = require('express')
const router = express.Router()
const verify = require('../auth/verify')
const User = require('../model/User')

router.get('/', [verify.decodeToken, verify.checkAdmin], function (req, res, next) {
  User.find(null).exec((err, users) => {
    if (err) {
      return res.status(500).send({
        message: 'Error retrieving Users'
      })
    }

    // Remove password attribute from the user
    users.map(user => user.password = undefined)

    res.status(200).send(users)
  })
})

router.get('/current', [verify.decodeToken], function (req, res, next) {
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
