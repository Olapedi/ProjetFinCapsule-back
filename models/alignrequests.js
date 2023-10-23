const mongoose = require('mongoose');

const alignrequestSchema = mongoose.Schema({

    arUid : String,
    senderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    senderProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiverProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    creationDate : Date,
    isCancelled : Boolean,
    isRefused : Boolean,
    isAccepted : Boolean,
    endDate : Date,
    enderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});
 
const Alignrequest = mongoose.model('alignrequests', alignrequestSchema);

module.exports = Alignrequest;
