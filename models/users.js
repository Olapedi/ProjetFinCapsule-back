const mongoose = require('mongoose');

const lastlogins = mongoose.Schema({

    uid: Number,
    date: Date,
    ip: String,
    Localisation: String,
   
    });

const userSchema = mongoose.Schema({

    usrUid : String,
    neocode : String,
    activationCode : String,
    token : String,
    firstname : String,
    lastname : String,
    email : String,
    phone : String,
    password : String,
    sponsor : String,
    country : String,
    city : String,
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
    isActivated : Boolean,    
    isCertified : Boolean,
    isDeleted : Boolean,
    isBanned : Boolean,
    blockedUids : [String],
    lastlogins : [lastlogins]

});

const User = mongoose.model('users', userSchema);

module.exports = User;