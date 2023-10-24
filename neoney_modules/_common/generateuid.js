var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const uidcollection = require('../../neoney_datas/uidcollections.json')

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');


module.exports = function generateuid (param) {

  const datacollection = uidcollection.filter((e) => e.code == param)

  const prefix = param;
  const collection = datacollection[0].collection;

  function generate() {

    let randomNbr = Math.floor(Math.random() * 90000) + 10000;
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
      
   return`${param}${year}${month}${day}${randomNbr}`;


  }
  
  const Uid = generate();

  


    return Uid;
  
  }
