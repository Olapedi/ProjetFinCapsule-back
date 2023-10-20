
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
    isCurrent : Boolean,
    isDeleted : Boolean,

})

const coupons = mongoose.Schema ({
    
    uid : Number,
    name : String,
    expDate : Date,
    newPrice : Number,
    newCv : Number,
    newQv : Number,
    newQp : Number,
    quantityAvailable : Number,
    isExpired : Boolean,
    isDeleted : Boolean

})


const planSchema = mongoose.Schema({

    planUid : String,
    label : String,
    title : String,
    description : String,
    refundPolicy : String,
    prices : [prices],
    coupons : [coupons],

});

const Plan = mongoose.model('plans', planSchema);

module.exports = Plan;






