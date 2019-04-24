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


router.put('/current', [verify.decodeToken], function (req, res, next) {
  User.findById(req.uid).then(async (user) => {
    if (req.body.firstname) {
      user.firstname = req.body.firstname
    }

    if (req.body.lastname) {
      user.lastname = req.body.lastname
    }

    if (req.body.username) {
      const existingUser = await User.findOne({ username: req.body.username })
      if (existingUser) {
        return res.status(400).send({ message: 'Username is already in taken!' })
      }
      user.username = req.body.username
    }

    if (req.body.email) {
      const existingUser = await User.findOne({ email: req.body.email })
      if (existingUser) {
        return res.status(400).send({ message: 'Email is already in taken!' })
      }
      user.email = req.body.email
    }

    return user.save().then(_ => {
      res.status(200).send({ message: 'Success, User updated!' })
    })
  }).catch(err => {
    console.log(err)
    res.status(500).send({ message: 'User update error.' })
  })
})

router.post('/changePrivilege', [verify.decodeToken, verify.checkAdmin], function (req, res, next) {
  if (!!req.body.uid && !!req.body.isAdmin) {
    User.findById(req.body.uid).then((user) => {
      if (user) {
        user.isAdmin = req.body.isAdmin

        return user.save().then(_ => {
          res.status(200).send({ message: 'Success, User privilege updated!' })
        }).catch(err => {
          console.log(err)
          res.status(500).send({ message: 'User privilege update error.' })
        })
      } else {
        return res.status(500).send({
          message: 'Error retrieving User with id: ' + req.uid
        })
      }
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'User privilege update error.' })
    })
  } else {
    res.status(400).send({ message: 'Missing fields' })
  }
})

module.exports = router
