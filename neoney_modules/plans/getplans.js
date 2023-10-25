var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Plan = require('../../models/plans');

// Import Project Modules

const results = require('../../neoney_results/results_plans.json')

// Function

module.exports = async function getplans(param){

    let result = [];

    if (param == 'all') {

        const data = await Plan.find();
      
        if (data.length == 0) {

        result.push(results[0])

        return result;

        } else {
        
        result.push(results[4])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {
        
        return results[2];

    }

}



/*
const prices = mongoose.Schema ({

    uid : Number,
    label : String,
    title : String,
    amount : Number,
    cv : Number,
    qv : Number,
    qp : Number,
    frequency : Number,
    priority : Number,
    isDeleted : Boolean,

})

const coupons = mongoose.Schema ({
    
    uid : Number,
    label : String, 
    code : String,
    expDate : Date,
    price : Number,
    cv : Number,
    qv : Number,
    qp : Number,
    quantity : Number,
    isExpired : Boolean,
    isDeleted : Boolean

})

const planSchema = mongoose.Schema({

    plaUid : String,
    label : String,
    title : String,
    subtitle : String,
    description : String,
    refundPolicy : String,
    limitCount : Number,
    isCountryLimited : Boolean,
    isCityLimited : Boolean,
    isJobLimited : Boolean,
    prices : [prices],
    coupons : [coupons],

});

*/