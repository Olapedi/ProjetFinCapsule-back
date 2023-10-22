const mongoose = require('mongoose');

const circlerequestSchema = mongoose.Schema({

    crqUid : String,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    senderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    senderProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiverProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    circle : { type: mongoose.Schema.Types.ObjectId, ref: 'circles' },
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

const Circlerequest = mongoose.model('circlerequests', circlerequestSchema);

module.exports = Circlerequest;
