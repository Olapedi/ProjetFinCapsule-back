const mongoose = require('mongoose');

const alertSchema = mongoose.Schema({

    altUid : String,
    category : String,
    subCategory : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    likes : [String],
    alerts : [String],
    creationDate : Date,
    message : String,
    isDeleted : Boolean,
    endDate : Date,
    deleter : String,

});

const Alert = mongoose.model('alerts', alertSchema);

module.exports = Alert;
