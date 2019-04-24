const express = require('express')
const router = express.Router()
const verify = require('../auth/verify')

/**
 * Index endpoint.
 *
 * Provide information about the API.
 */
router.get('/', function (req, res, next) {
  res.send({
    title: 'Cruizer'
  })
})

router.get('/authed', [verify.decodeToken], function (req, res, next) {
  res.send({
    title: 'Authed page'
  })
})

module.exports = router
