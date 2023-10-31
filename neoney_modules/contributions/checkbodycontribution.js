var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


// Import Neoney Results

const results = require('../../neoney_results/results_contributions.json');

// Function

module.exports = async function checkbodycontribution(contributiondata){

    let result = [];

    //

      if (contributiondata.owner !== undefined) {

        if (contributiondata.owner == '') {

          result.push(results[7]);
          return result;
  
        } 

      } else {

        result.push(results[8]);
        return result;

      }

      // 

      if (contributiondata.sender !== undefined) {

        if (contributiondata.sender == '') {

          result.push(results[9]);
          return result;
  
        } 

      } else {

        result.push(results[10]);
        return result;

      }

      //

      if (contributiondata.text !== undefined) {

        if (contributiondata.text == '') {

          result.push(results[11]);
          return result;
  
        } 

      } else {

        result.push(results[12]);
        return result;

      }

      //

      if (contributiondata.title !== undefined) {

        if (contributiondata.title == '') {

          result.push(results[13]);
          return result;
  
        } 

      } else {

        result.push(results[14]);
        return result;

      }

      //

      if (contributiondata.privacy !== undefined) {

        if (contributiondata.privacy == '') {

          result.push(results[15]);
          return result;
  
        } 

      } else {

        result.push(results[16]);
        return result;

      }

      //

      if (contributiondata.category !== undefined) {

        if (contributiondata.category == '') {

          result.push(results[17]);
          return result;
  
        } 

      } else {

        result.push(results[18]);
        return result;

      }

        //



    if (contributiondata.deadline !== undefined) {

        if (contributiondata.deadline == '') {

            result.push(results[22]);
            return result;
    
        } 

        } else {

        result.push(results[23]);
        return result;

        }
    
    //

    if (contributiondata.mainPicture !== undefined) {

        if (contributiondata.mainPicture == '') {

            result.push(results[24]);
            return result;
    
        } 

        } else {

        result.push(results[25]);
        return result;

        }

      //

      result.push(results[19]);
      return result;


}
