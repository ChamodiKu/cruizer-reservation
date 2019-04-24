const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const config = require('../app.config')
const indexRouter = require('./api/index');
const authRouter = require('./api/auth');
const usersRouter = require('./api/users');
const carsRouter = require('./api/cars');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  }).catch(err => {
    console.log('Could not connect to MongoDB.');
    console.log(err);
    process.exit();
  });

app.use(indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

app.set('port', process.env.PORT || 3000);
module.exports = app;
