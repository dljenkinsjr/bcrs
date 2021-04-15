/*
============================================
; Title:  user-api.js
; Author: Professor Krasso
; Date:   15 April 2021
; Modified by: Karina Alvarez
; Description: User APIs
;===========================================
*/

//require files to export
const express = require('express');
const User = require('../models/user')
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response')
const bcrypt = require('bcrypt');
const RoleSchema = require('../schemas/user-role')


//It defines router variables - configuration
const router = express.Router();
const saltRounds = 10; //default salt rounds for hashing algorithm

/**
 * FindAll API
 */

/**
 * FindById API
 */

/**
 * UpdateUser API
 */

/**
 * DeleteUser API
 */

/**
 * FindSelectedSecurityQuestions API
 */

/**
 * FindUserRole API
 */
