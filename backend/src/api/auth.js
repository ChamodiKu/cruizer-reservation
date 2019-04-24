const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../../app.config')
const verify = require('../auth/verify')
const User = require('../model/User')

router.get('/', function (req, res, next) {
  res.send({
    route: '/auth',
    description: 'Authentication service',
    endpoints: [
      { route: '/signin', description: 'Sign in to label lab backend.' },
      { route: '/signup', description: 'Sign up to label lab backend.' }
    ]
  })
})

router.post('/signup', [verify.checkDuplicateUserNameOrEmail], function (req, res) {
  console.log('Sign up')

  if (!!req.body.username && !!req.body.email && !!req.body.password) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: hash,
        email: req.body.email,
        isAdmin: false
      })
      user.save().then(_ => {
        res.status(200).send({ message: 'Success, User created!' })
      })
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'User creation error.' })
    })
  } else {
    res.status(400).send({ message: 'Missing fields' })
  }
})

router.post('/signin', function (req, res) {
  console.log('Sign in')

  if (!!req.body.username && !!req.body.password) {
    User.findOne({ username: req.body.username })
      .exec((err, user) => {
        console.log(user)
        if (err) {
          if (err.kind !== 'ObjectId') {
            return res.status(500).send({
              message: 'Error retrieving User with Username = ' + req.body.username
            })
          }
          return res.status(500).send({
            message: 'Error retrieving User with Username = ' + req.body.username
          })
        }

        bcrypt.compare(req.body.password, user.password).then(function (result) {
          if (result) {
            var token = jwt.sign({ id: user._id, isAdmin: !!user.isAdmin }, config.SECRET, {
              expiresIn: 86400 // expires in 24 hours
            })

            return res.status(200).send({ auth: true, accessToken: token })
          } else {
            return res.status(401).send({ auth: false, accessToken: null, reason: 'Invalid Password!' })
          }
        })
      })
  } else {
    res.status(400).send({ message: 'Missing fields' })
  }
})

router.post('/changePassword', [verify.decodeToken], function (req, res) {
  console.log('Change password')

  if (req.body.password) {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      return User.findById(req.uid).then(user => {
        user.password = hash
        user.save().then(_ => {
          return res.status(200).send({ message: 'Success, Password changed!' })
        })
      })
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'User creation error.' })
    })
  } else {
    res.status(400).send({ message: 'Missing fields' })
  }
})

module.exports = router
