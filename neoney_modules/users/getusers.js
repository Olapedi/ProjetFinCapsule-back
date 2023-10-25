
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users')

// Import Project Modules

const results = require('../../neoney_results/results_users.json')

// Function

module.exports = async function getprofiles(param){

    let result = [];

    if (param == 'all') {

        const data = await User.find();
      
        if (data.length == 0) {

        result.push(results[24])

        return result;

        } else {
        
        result.push(results[25])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {
        
        return results[2];

    }

}

