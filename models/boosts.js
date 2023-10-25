const mongoose = require('mongoose');

const boostSchema = mongoose.Schema({

    bstUid : String,
    category : String,
    subCategory : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    likes : [String],
    alerts : [String],
    creationDate : Date,
    testimonial : String,
    isDeleted : Boolean,
    endDate : Date,
    deleter : String

});

const Boost = mongoose.model('boosts', boostSchema);

module.exports = Boost;