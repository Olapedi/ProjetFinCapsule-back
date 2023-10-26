const mongoose = require('mongoose');

const alignrequestSchema = mongoose.Schema({

    arqUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    creationDate : Date,
    isCancelled : Boolean,
    isAccepted : Boolean,
    endDate : Date,
    enderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});
 
const Alignrequest = mongoose.model('alignrequests', alignrequestSchema);

module.exports = Alignrequest;
