const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  job_id: {
    type: String
  },
  technician_id: {
    type: String
  },
  date_serviced: {
    type: Date
  },
  vehicle_no: {
    type: String
  },
  make: {
    type: String
  },
  model: {
    type: String
  },
  owner_name: {
    type: String
  },
  mileage: {
    type: Number
  },
  lights_indicators: {
    type: String
  },
  horn: {
    type: String
  },
  wipers: {
    type: String
  },
  side_mirror: {
    type: String
  },
  power_windows: {
    type: String
  },
  brake_fluid: {
    type: String
  },
  engine_coolant: {
    type: String
  },
  drive_belt: {
    type: String
  },
  ac_filter: {
    type: String
  },
  air_filter: {
    type: String
  },
  front_brakes: {
    type: String
  },
  rear_brakes: {
    type: String
  },
  engine_oil: {
    type: String
  },
  oil_filter: {
    type: String
  },
  shocks: {
    type: String
  },
  tyre_pressure: {
    type: String
  },
  body_wash: {
    type: String
  }
},{
    collection: 'reports'      //change here to change the name of the collection. but u may need to consider other places as well.
});

module.exports = mongoose.model('Business', Business);