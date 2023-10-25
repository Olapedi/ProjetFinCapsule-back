
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../../models/profiles')

// Import Project Modules

const results = require('../../neoney_results/results_profiles.json')

// Function

module.exports = async function getprofiles(param){

    let result = [];

    if (param == 'all') {

        const data = await Profile.find();
      
        if (data.length == 0) {

        result.push(results[22])

        return result;

        } else {
        
        result.push(results[23])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {
        
        return results[2];

    }

}

