const express = require('express')
const router = express.Router()
const Rate = require('../model/Rate')
const verify = require('../auth/verify')

/**
 * Rating get endpoint.
 *
 * Create a rating.
 *
 * 
 * 
 */
router.post('/', [verify.decodeToken, verify.checkAdmin], function (req, res) {
    if (req.body.rate) {
        const rating = new Rate({
            rate: req.body.rate,
            comment: req.body.comment
        })
        rating.save.then(() => {
            res.status(200).send({
                message: 'Success, rate created!'
            })
        }).catch(() => {
            res.status(500).send({
                message: 'Rate creation error.'
            })
        })
    } else {
        res.status(400).send({
            message: 'Missing Fields'
        })
    }
})

module.exports = router