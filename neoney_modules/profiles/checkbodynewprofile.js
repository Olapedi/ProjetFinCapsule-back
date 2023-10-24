var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Neoney Results

const results = require('../../neoney_results/results_profiles.json');

// Function

module.exports = async function checkbodynewprofile(userdata2){

    let result = [];

    console.log(userdata2.displayName);

      if (userdata2.displayName !== undefined) {

        if (userdata2.displayName == '') {

          result.push(results[3]);
          return result;
  
        } 

      } else {

        result.push(results[4]);
        return result;

      }


      if (userdata2.title !== undefined) {

        if (userdata2.title == '') {

          result.push(results[5]);
          return result;
  
        } 

      } else {

        result.push(results[6]);
        return result;

      }


      if (userdata2.organization !== undefined) {

        if (userdata2.organization == '') {

          result.push(results[7]);
          return result;
  
        } 

      } else {

        result.push(results[8]);
        return result;

      }


      if (userdata2.description !== undefined) {

        if (userdata2.description == '') {

          result.push(results[9]);
          return result;
  
        } 

      } else {

        result.push(results[10]);
        return result;

      }

      console.log(userdata2.jobCategories);

      if (userdata2.jobCategories !== undefined) {

        if (userdata2.jobCategories == '') {

          result.push(results[11]);
          return result;
  
        } 

      } else {

        result.push(results[12]);
        return result;

      }

      if (userdata2.jobSubCategories[0] !== undefined) {

        if (userdata2.jobSubCategories == '') {

          result.push(results[13]);
          return result;
  
        } 

      } else {

        result.push(results[14]);
        return result;

      }

      if (userdata2.website == undefined) {

        result.push(results[15]);
        return result;

      }


      if (userdata2.phone !== undefined) {

        if (userdata2.phone == '') {

          result.push(results[16]);
          return result;
  
        } 

      } else {

        result.push(results[17]);
        return result;

      }


      if (userdata2.email !== undefined) {

        if (userdata2.email == '') {

          result.push(results[18]);
          return result;
  
        } 

      } else {

        result.push(results[19]);
        return result;

      }


      if (userdata2.useUid !== undefined) {

        if (userdata2.useUid == '') {

          result.push(results[20]);
          return result;
  
        } 

      } else {

        result.push(results[21]);
        return result;

      }

      result.push(results[22]);
      return result;

}
