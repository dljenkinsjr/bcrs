/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   15 April 2021
; Modified by: Karina Alvarez, Douglas Jenkins, Arlix Sorto
; Description: application file
;===========================================
*/

/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

/**
 * Routes
 */
const SecurityQuestionAPI = require('./routes/security-question-api');
const UserAPI = require('./routes/user-api');
const SessionAPI = require('./routes/session-api');


/**
 * App configurations
 */
let app = express();
app.use(express.json());
app.use(express.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/bcrs')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs')));

/**
 * Variables
 */
const port = process.env.PORT || 3000; // server port

//mongo db connection with username and password to access database
const conn = 'mongodb+srv://superadmin:s3cret@cluster0-lujih.mongodb.net/bcrs?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection

/**
 * APIs
 */
app.use('api/security-question', SecurityQuestionAPI);
//app.use('/api/users', UserAPI);
//app.use('/api/session', SessionAPI);

/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); // end http create server function
