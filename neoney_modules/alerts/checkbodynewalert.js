var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


// Import Neoney Results

const results = require('../../neoney_results/results_alerts.json');

// Function

module.exports = async function checkbodynewalert(alertdata){

    let result = [];

      if (alertdata.category !== undefined) {

        if (alertdata.category == '') {

          result.push(results[7]);
          return result;
  
        } 

      } else {   

        result.push(results[8]);
        return result;

      }

      if (alertdata.subCategory !== undefined) {

        if (alertdata.subCategory == '') {

          result.push(results[9]);
          return result;
  
        } 

      } else {

        result.push(results[10]);
        return result;

      }


      if (alertdata.owner !== undefined) {

        if (alertdata.owner == '') {

          result.push(results[11]);
          return result;
  
        } 

      } else {

        result.push(results[12]);
        return result;

      }

      if (alertdata.sender !== undefined) {

        if (alertdata.sender == '') {

          result.push(results[13]);
          return result;
  
        } 

      } else {

        result.push(results[14]);
        return result;

      }

      if (alertdata.receiver !== undefined) {

        if (alertdata.receiver == '') {

          result.push(results[15]);
          return result;
  
        } 

      } else {

        result.push(results[16]);
        return result;

      }

      if (alertdata.testimonial !== undefined) {

        if (alertdata.testimonial == '') {

          result.push(results[17]);
          return result;
  
        } 

      } else {

        result.push(results[18]);
        return result;

      }

      result.push(results[19]);
      return result;


}
