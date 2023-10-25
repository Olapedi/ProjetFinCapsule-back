
const mongoose = require('mongoose');

const prices = mongoose.Schema ({

    prUid : Number,
    prLabel : String,
    prTitle : String,
    prAmount : Number,
    prCv : Number,
    prQv : Number,
    prQp : Number,
    prFrequency : Number,
    prPriority : Number,
    prIsDeleted : Boolean,

})

const coupons = mongoose.Schema ({
    
    cpUid : Number,
    cpLabel : String, 
    cpCode : String,
    cpExpDate : Date,
    cpPrice : Number,
    cpCv : Number,
    cpQv : Number,
    cpQp : Number,
    cpQuantity : Number,
    cpIsExpired : Boolean,
    cpIsDeleted : Boolean

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

const Plan = mongoose.model('plans', planSchema);

module.exports = Plan;






