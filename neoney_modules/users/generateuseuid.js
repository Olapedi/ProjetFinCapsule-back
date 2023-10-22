var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');


module.exports = function generateuid () {

    let randomNbr = Math.floor(Math.random() * 9000) + 1000;
    let date = new Date();
  
    let year = date.getFullYear();
  
    let day = date.getDate();
  
      if(day < 10){
  
        day = day.toString().padStart(2, '0')
  
      }
  
      let month = date.getMonth()+1;
  
      if(month < 10){
  
        month = month.toString().padStart(2, '0')
  
      }
      
    let useUid = `${year}${month}${day}${randomNbr}`;

   return useUid;
  
  }
