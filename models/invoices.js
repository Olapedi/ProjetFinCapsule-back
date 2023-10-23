
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

const invoiceSchema = mongoose.Schema({

    invUid : String,
    customer : { type: mongoose.Schema.Types.ObjectId, ref: 'legalinfos' },
    plan : { type: mongoose.Schema.Types.ObjectId, ref: 'plans' },
    price : Number,
    couponUsed : String,
    discount : Number,
    invToken : String,
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

const Invoice = mongoose.model('invoices', invoiceSchema);

module.exports = Invoice;






