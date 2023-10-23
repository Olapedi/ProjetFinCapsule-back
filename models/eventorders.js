
const mongoose = require('mongoose');

const payments = mongoose.Schema ({

    uid : Number,
    isSuccess : Boolean,
    paymentMetthod : String,
    amount : Number,   
    date : DATE,
    stripeRef : String,
    bankTransferRef : String,
    proof : String,
    isReceived : Boolean,
    dateReceived : Date,

})

const eventorderSchema = mongoose.Schema({

    eorUid : String,
    customer : { type: mongoose.Schema.Types.ObjectId, ref: 'legalinfos' },
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'eventsrequests' },
    price : Number,
    couponUsed : String,
    discount : Number,
    orderToken : String,
    creationDate : Date,
    validUntil : Date,
    paymentTerms : String,
    paymentMetthod : String,
    isDue : Boolean,
    isPaid : Boolean,
    isRefunded : Boolean,
    isUnpaid : Boolean,
    payments : [payments],

});

const Eventorder = mongoose.model('eventorders', eventorderSchema);

module.exports = Eventorder;






