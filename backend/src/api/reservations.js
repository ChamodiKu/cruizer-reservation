const express = require('express')
const router = express.Router()
const verify = require('../auth/verify')
const Reservation = require('../model/Reservation')
const { ReservationStatus } = require('../common/constants')
const { from } = require('rxjs')
const { map, throwIfEmpty, flatMap, tap } = require('rxjs/operators')
const hukx = require('hukx')
const piper = hukx(router)

/**
 * Reservations get endpoint.
 *
 * Get all the reservations created by the authenticated user.
 *
 * @role User
 * @response List of reservations
 */
piper.get('/', [verify.decodeToken], piper.pipe(
  flatMap(req => from(Reservation.find({ createdBy: req.uid }))),
  throwIfEmpty(() => piper.error(500, { message: 'Error retrieving reservations' }))
))

/**
 * Reservations get by id endpoint.
 *
 * Get the reservation for the given reservation id if created by authenticated user.
 *
 * @params id
 * @role User
 * @response Reservation of the given id.
 */
piper.get('/:id', [verify.decodeToken], piper.pipe(
  flatMap(req => from(Reservation.find({ _id: req.params['id'], createdBy: req.uid }))),
  throwIfEmpty(() => piper.error(500, { message: 'Error retrieving the Reservation.' }))
))

/**
 * Reservations create endpoint.
 *
 * Create the given reservated for the authenticated user.
 *
 * @body Reservation data model exept id, status and created
 * @role User
 */
piper.post('/', [verify.decodeToken], piper.pipe(
  map(req => {
    if (!req.body.vehicle || !req.body.services || !req.body.requested)
      throw piper.error(500, { message: 'Missing fields' })

    return req
  }),
  map(req => new Reservation({
    vehicle: req.body.vehicle,
    services: req.body.services,
    requested: req.body.requested,
    status: ReservationStatus.CREATED,
    created: Date.now(),
    createdBy: req.uid
  })),
  flatMap(reservation => from(reservation.save())),
  map(() => {
    return { message: 'Success, Reservation created!' }
  })
))

/**
 * Reservations update endpoint.
 *
 * Update the services of the reservation by the given id created by authenticated user.
 *
 * @params id
 * @Body Updated services
 * @role User
 */
piper.put('/:id', [verify.decodeToken], piper.pipe(
  map(req => {
    const query = { _id: req.params['id'], createdBy: req.uid }
    const update = {}

    var isChanging = false

    if (req.body.services) {
      isChanging = true
      update.services = req.body.services
    }

    if (isChanging)
      update.status = ReservationStatus.CHANGED

    return { query: query, update: update }
  }),
  flatMap(res => from(Reservation.updateOne(res.query, res.update))),
  throwIfEmpty(() => piper.error(500, { message: 'Service update error.' })),
  map(() => {
    return { message: 'Success, Reservation updated!' }
  }),

))

/**
 * Reservations delete endpoint.
 *
 * Delete the reservation referenced to the given reservation id if created by authenticated user.
 *
 * @param id
 * @role User
 */
piper.delete('/:id', [verify.decodeToken], piper.pipe(
  flatMap(req => from(Reservation.deleteOne({ _id: req.params['id'], createdBy: req.uid }))),
  throwIfEmpty(() => piper.error(500, { message: 'Error deleting Reservation with id.' })),
  map(() => {
    return {
      message: 'Success, Reservation deleted!'
    }
  })
))

module.exports = router
