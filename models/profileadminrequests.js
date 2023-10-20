const mongoose = require('mongoose');

const profileadminrequestSchema = mongoose.Schema({

    parUid : String,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    role : String,
    message : String,   
    date : Date,
    link : String,
    isCancelled : Boolean,
    isRefused : Boolean,
    isAccepted : Boolean,
    endDate : Date,
    ender : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Profileadminrequest = mongoose.model('profileadminrequests', profileadminrequestSchema);

module.exports = Profileadminrequest;
