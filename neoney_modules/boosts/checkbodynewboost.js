var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


// Import Neoney Results

const results = require('../../neoney_results/results_boosts.json');

// Function

module.exports = async function checkbodynewboost(boostdata){

    let result = [];

      if (boostdata.category !== undefined) {

        if (boostdata.category == '') {

          result.push(results[7]);
          return result;
  
        } 

      } else {

        result.push(results[8]);
        return result;

      }

      if (boostdata.subCategory !== undefined) {

        if (boostdata.subCategory == '') {

          result.push(results[9]);
          return result;
  
        } 

      } else {

        result.push(results[10]);
        return result;

      }


      if (boostdata.owner !== undefined) {

        if (boostdata.owner == '') {

          result.push(results[11]);
          return result;
  
        } 

      } else {

        result.push(results[12]);
        return result;

      }

      if (boostdata.sender !== undefined) {

        if (boostdata.sender == '') {

          result.push(results[13]);
          return result;
  
        } 

      } else {

        result.push(results[14]);
        return result;

      }

      if (boostdata.receiver !== undefined) {

        if (boostdata.receiver == '') {

          result.push(results[15]);
          return result;
  
        } 

      } else {

        result.push(results[16]);
        return result;

      }

      if (boostdata.testimonial !== undefined) {

        if (boostdata.testimonial == '') {

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
