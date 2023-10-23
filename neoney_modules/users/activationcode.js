var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');


module.exports = function activationCode () {

    let randomNbr = Math.floor(Math.random() * 900000) + 100000;

     let activationCode = randomNbr.toString();

     console.log(activationCode);

   return activationCode;
  
  }
