var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

module.exports = function random () {

let randomNbr = Math.floor(Math.random() * 900) + 100;

   return randomNbr;
  
  }
