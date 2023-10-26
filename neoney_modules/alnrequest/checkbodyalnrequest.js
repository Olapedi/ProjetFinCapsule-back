var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


// Import Neoney Results

const results = require('../../neoney_results/results_alnrequest.json');

// Function

module.exports = async function checkbodyalnrequest(alnrequestdata){

    let result = [];


      if (alnrequestdata.owner !== undefined) {

        if (alnrequestdata.owner == '') {

          result.push(results[11]);
          return result;
  
        } 

      } else {

        result.push(results[12]);
        return result;

      }

      if (alnrequestdata.sender !== undefined) {

        if (alnrequestdata.sender == '') {

          result.push(results[13]);
          return result;
  
        } 

      } else {

        result.push(results[14]);
        return result;

      }

      if (alnrequestdata.receiver !== undefined) {

        if (alnrequestdata.receiver == '') {

          result.push(results[15]);
          return result;
  
        } 

      } else {

        result.push(results[16]);
        return result;

      }

      if (alnrequestdata.message !== undefined) {

        if (alnrequestdata.message == '') {

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
