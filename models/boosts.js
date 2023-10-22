const mongoose = require('mongoose');

const boostSchema = mongoose.Schema({

    bstUid : String,
    category : String,
    subCategory : String,
    creatorAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    creatorProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiverProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    content : [String],
    likes : [String],
    alerts : [String],
    creationDate : Date,
    text : String,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Boost = mongoose.model('boosts', boostSchema);

module.exports = Boost;