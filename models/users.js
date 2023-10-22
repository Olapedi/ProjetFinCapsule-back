const mongoose = require('mongoose');

const lastlogins = mongoose.Schema({

    uid: Number,
    date: Date,
    ip: String,
    Localisation: String,
   
    });

const userSchema = mongoose.Schema({

    useUid : String,
    neocode : String,
    token : String,
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    signUpDate : String,
    picture : String,
    video : String,
    language : String,
    timeZone : String,
    currentPlan : { type: mongoose.Schema.Types.ObjectId, ref: 'plans' },
    isCountryLimited : Boolean,
    isCityLimited : Boolean,
    isJobLimited : Boolean,
    limitCount : Number,
    limitCountry : String,
    limitCity : String,
    isActivated : Boolean,    
    isCertified : Boolean,
    isDeleted : Boolean,
    isBanned : Boolean,
    blockedUsers : [String],
    lastlogins : [lastlogins]

});

const User = mongoose.model('users', userSchema);

module.exports = User;