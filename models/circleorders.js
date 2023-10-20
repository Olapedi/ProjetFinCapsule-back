
const mongoose = require('mongoose');

const payments = mongoose.Schema ({

    uid : NUMBER,
    isSuccess : BOOLEAN,
    paymentMetthod : String,
    amount : NUMBER,   
    date : DATE,
    stripeRef : String,
    bankTransferRef : String,
    proof : String,
    isReceived : BOOLEAN,
    dateReceived : Date,

})

const circleorderSchema = mongoose.Schema({

    icoUid : String,
    customer : { type: mongoose.Schema.Types.ObjectId, ref: 'legalinfos' },
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'circlerequests' },
    price : Number,
    couponUsed : String,
    discount : Number,
    orderToken : String,
    creationDate : Date,
    validUntil : Date,
    paymentTerms : String,
    paymentMetthod : String,
    isDue : BOOLEAN,
    isPaid : BOOLEAN,
    isRefunded : BOOLEAN,
    isUnpaid : BOOLEAN,
    payments : [payments],

});

const Circleorder = mongoose.model('circleorders', circleorderSchema);

module.exports = Circleorder;






