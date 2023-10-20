const mongoose = require('mongoose');

const affiliateSchema = mongoose.Schema({

afUid: String,
sponsor : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
affiliate : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
date : Date

});

const Affiliate = mongoose.model('affiliates', affiliateSchema);

module.exports = Affiliate;
