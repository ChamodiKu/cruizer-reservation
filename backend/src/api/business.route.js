const express = require('express');
const app = express();
const businessRoutes = express.Router();
//var objectId = require('mongoose').Types.ObjectId;    //Added to be used for line 23 (get id thing)

// Require Business model in our routes module
let Business = require('../models/Business');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);    //this line imports the structure of our "business" collection from Business.js
  business.save()         //this line is used to save the record to the mongodb database
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//getting the details of a record using the id - taken from (at 29.04) https://www.youtube.com/watch?time_continue=474&v=fhRdqbEXp9Y
//uncomment the line 4 as well
// => localhost:4200/business/:id   n.s
// businessRoutes.get('/:id',(req,res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record with given id : ${req.params.id}`);

//   Employee.findById(req.params.id, (err, doc) => {
//     if (!err) {res.send(doc); }
//     else {console.log('Error in Retrieving Employee : ' + JSON.stringify(err, undefined, 2)); }
//   });
// });

// Defined get data(index or listing) route
// => localhost:4200/business   n.s
businessRoutes.route('/').get(function (req, res) {
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.job_id = req.body.job_id;
        business.technician_id = req.body.technician_id;
        business.date_serviced = req.body.date_serviced;
        // business.vehicle_no = req.body.vehicle_no;
        // business.make = req.body.make;
        // business.model = req.body.model;
        // business.owner_name = req.body.owner_name;
        // business.mileage = req.body.mileage;
        // business.lights_indicators = req.body.lights_indicators;
        // business.horn = req.body.horn;
        // business.wipers = req.body.wipers;
        // business.side_mirror = req.body.side_mirror;
        // business.power_windows = req.body.power_windows;
        // business.break_fluid = req.body.break_fluid;
        // business.engine_coolant = req.body.engine_coolant;
        // business.drive_belt = req.body.drive_belt;
        // business.ac_filter = req.body.ac_filter;
        // business.air_filter = req.body.air_filter;
        // business.front_brakes = req.body.front_brakes;
        // business.rear_breaks = req.body.rear_breaks;
        // business.engine_oil = req.body.engine_oil;
        // business.oil_filter = req.body.oil_filter;
        // business.shocks = req.body.shocks;
        // business.tyre_pressure = req.body.tyre_pressure;
        business.body_wash = req.body.body_wash;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;