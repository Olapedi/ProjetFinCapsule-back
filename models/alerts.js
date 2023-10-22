const mongoose = require('mongoose');



const alertSchema = mongoose.Schema({

    altUid : String,
    category : String,
    subCategory : String,
    creatorAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    creatorProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiverProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    content : [String],
    likes : [String],
    alerts : [String],
    creationDate : Date,
    message : String,
    isClosed : Boolean,
    isDeleted : Boolean,
    isCancelled : Boolean,
    endDate : Date,
    enderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Alert = mongoose.model('alerts', alertSchema);

module.exports = Alert;
