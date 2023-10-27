var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Import Neoney Results

const results = require('../../neoney_results/results_alnrequest.json');

// Function

module.exports = async function checkbodyputalnrequest(alnrequestdata){

    let result = [];


      if (alnrequestdata.ender !== undefined) {

        if (alnrequestdata.ender == '') {

          result.push(results[29]);
          return result;
  
        } 

      } else {

        result.push(results[30]);
        return result;

      }

      if (alnrequestdata.action !== undefined) {

        if (alnrequestdata.action == '') {

          result.push(results[31]);
          return result;
  
        } 

      } else {

        result.push(results[32]);
        return result;

      }

      result.push(results[19]);
      return result; 

 
}
