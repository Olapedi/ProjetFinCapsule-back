var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Neoney Results

const results = require('../../neoney_results/results_users.json');

// Function

module.exports = async function checkbodysignup(userdata2){

    let result = [];

        if (userdata2.firstname !== undefined) {

          if (userdata2.firstname == '') {

            result.push(results[9]);
            return result;

          } 

        } else {


          result.push(results[26]);
          return result;

        }


        if (userdata2.lastname !== undefined) {

          if (userdata2.lastname == '') {

            result.push(results[10]);
            return result;

          }

        } else {


          result.push(results[27]);
          return result;


        }



        if (userdata2.email !== undefined) {


          if (userdata2.email == '') {

            result.push(results[11]);
            return result;

          }

        } else {


          result.push(results[28]);
          return result;


        }


        if (userdata2.password !== undefined) {


          if (userdata2.password == '') {

            result.push(results[12]);
            return result;

          }

        } else {


          result.push(results[29]);
          return result;


        }



        if (userdata2.country !== undefined) {

          if (userdata2.country == '') {

            result.push(results[13]);
            return result;

          }

        } else {


          result.push(results[30]);
          return result;


        }


        if (userdata2.city !== undefined) {

          if (userdata2.city == '') {

            result.push(results[14]);
            return result;

          }


        } else {


          result.push(results[31]);
          return result;


        }


        if (userdata2.phone !== undefined) {

          if (userdata2.phone == '') {

            result.push(results[15]);
            return result;

          }


        } else {


          result.push(results[32]);
          return result;


        }

        if (userdata2.sponsor !== undefined) {


          if (userdata2.sponsor == '') {

            result.push(results[16]);
            return result;

          }


        } else {


          result.push(results[33]);
          return result;


        }


      result.push(results[17]);
      return result;

}
