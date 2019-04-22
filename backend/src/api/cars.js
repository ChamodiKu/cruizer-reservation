const express = require('express')
const router = express.Router()
const verify = require('../auth/verify')
const Car = require('../model/Car')
const mongoose = require('mongoose')

router.get('/', [verify.decodeToken], function (req, res, next) {
  Car.find({ ownerId: new mongoose.Types.ObjectId(req.uid) }).exec((err, cars) => {
    if (err || cars == null) {
      return res.status(500).send({
        message: 'Error retrieving User with id: ' + req.uid
      })
    }

    res.status(200).send(cars)
  })
})

router.get('/:id', [verify.decodeToken], function (req, res, next) {
  Car.findById(req.params['id']).exec((err, car) => {
    console.log(car)
    if (err || car == null) {
      return res.status(500).send({
        message: 'Error retrieving User with id: ' + req.uid
      })
    }

    if (car.ownerId != req.uid) {
      res.status(400).send({
        message: 'Unauthorized for the resource'
      })
    }

    res.status(200).send(car)
  })
})

router.post('/', [verify.decodeToken], function (req, res, next) {
  if (!!req.body.model && !!req.body.vendor && !!req.body.number) {
    const car = new Car({
      model: req.body.model,
      vendor: req.body.vendor,
      number: req.body.number,
      milage: req.body.milage,
      ownerId: new mongoose.Types.ObjectId(req.uid)
    })
    car.save().then(_ => {
      res.status(200).send({ message: 'Success, Car created!' })
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'Car creation error.' })
    })
  } else {
    res.status(400).send({ message: 'Missing fields' })
  }
})

router.put('/:id', [verify.decodeToken], function (req, res, next) {
  Car.findById(req.params['id']).exec((err, car) => {
    if (err || car == null) {
      return res.status(500).send({
        message: 'Error updating Car with id: ' + req.params['id']
      })
    }

    if (car.ownerId != req.uid) {
      res.status(400).send({
        message: 'Unauthorized for the resource'
      })
    }

    if (!!req.body.model) {
      car.model = req.body.model
    }

    if (!!req.body.vendor) {
      car.vendor = req.body.vendor
    }

    if (!!req.body.number) {
      car.number = req.body.number
    }

    if (!!req.body.milage) {
      car.milage = req.body.milage
    }
    car.save().then(_ => {
      res.status(200).send({ message: 'Success, Car updated!' })
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'Car update error.' })
    })
  })
})

router.delete('/:id', [verify.decodeToken], function (req, res, next) {
  Car.findById(req.params['id']).exec((err, car) => {
    if (err || car == null) {
      return res.status(500).send({
        message: 'Error deleting Car with id: ' + req.params['id']
      })
    }

    if (car.ownerId != req.uid) {
      res.status(400).send({
        message: 'Unauthorized for the resource'
      })
    }

    car.delete().then(_ => {
      res.status(200).send({ message: 'Success, Car deleted!' })
    }).catch(err => {
      console.log(err)
      res.status(500).send({ message: 'Car delete error.' })
    })
  })
})

router.delete

module.exports = router
