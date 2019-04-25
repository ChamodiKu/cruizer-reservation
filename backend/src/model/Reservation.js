const mongoose = require('mongoose')

/**
 * Data model for Reservation.
 */
const reservationSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    createIndex: true,
    required: true,
    auto: true
  },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  created: Date,
  requested: Date,
  alloctated: Date,
  status: Number
})

module.exports = mongoose.model('Reservation', reservationSchema)
