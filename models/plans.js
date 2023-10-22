
const mongoose = require('mongoose');

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

const Plan = mongoose.model('plans', planSchema);

module.exports = Plan;






