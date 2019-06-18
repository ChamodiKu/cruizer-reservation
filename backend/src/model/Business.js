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
  // vehicle_no: {
  //   type: String
  // },
  // make: {
  //   type: String
  // },
  // model: {
  //   type: String
  // },
  // owner_name: {
  //   type: String
  // },
  // mileage: {
  //   type: Number
  // },
  // lights_indicators: {
  //   type: Number
  // },
  // horn: {
  //   type: Number
  // },
  // wipers: {
  //   type: Number
  // },
  // side_mirror: {
  //   type: Number
  // },
  // power_windows: {
  //   type: Number
  // },
  // brake_fluid: {
  //   type: Number
  // },
  // engine_coolant: {
  //   type: Number
  // },
  // drive_belt: {
  //   type: Number
  // },
  // ac_filter: {
  //   type: Number
  // },
  // air_filter: {
  //   type: Number
  // },
  // front_brakes: {
  //   type: Number
  // },
  // rear_brakes: {
  //   type: Number
  // },
  // engine_oil: {
  //   type: Number
  // },
  // oil_filter: {
  //   type: Number
  // },
  // shocks: {
  //   type: Number
  // },
  // tyre_pressure: {
  //   type: Number
  // },
  body_wash: {
    type: Number
  }
},{
    collection: 'reports'      //change here to change the name of the collection. but u may need to consider other places as well.
});

module.exports = mongoose.model('Business', Business);