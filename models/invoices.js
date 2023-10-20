
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
    isDue : BOOLEAN,
    isPaid : BOOLEAN,
    isRefunded : BOOLEAN,
    isUnpaid : BOOLEAN,
    payments : [payments],

});

const Invoice = mongoose.model('invoices', invoiceSchema);

module.exports = Invoice;






