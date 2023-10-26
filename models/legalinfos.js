const mongoose = require('mongoose');

const legalinfoSchema = mongoose.Schema({

    lglUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    type : String,
    label : String,
    legalName : String,
    commercialName : String,
    legalStatus : String,
    incorporationID : String,
    incorporationDate : Date,
    incorporationCountry : String,
    incorporationPostalCode : String,
    incorporationCity : String,
    incorporationAddress : String,
    vatNumber : String,
    activity : String,
    contactName : String,
    contactTitle : String,
    website : String,
    phone : String,
    email : String,
    isDeleted : Boolean

});

const Legalinfo = mongoose.model('legalinfos', legalinfoSchema);

module.exports = Legalinfo;