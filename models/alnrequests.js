const mongoose = require('mongoose');

const alnrequestSchema = mongoose.Schema({

    alrUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    message : String,
    creationDate : Date,
    isAccepted : Boolean,
    isCancelled : Boolean,
    endDate : Date,
    enderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});
 
const Alnrequest = mongoose.model('alnrequests', alnrequestSchema);

module.exports = Alnrequest;
