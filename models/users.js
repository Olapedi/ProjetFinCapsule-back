const mongoose = require('mongoose');

const lastlogins = mongoose.Schema({

    uid: Number,
    date: Date,
    ip: String,
    Localisation: String,
   
    });

const userSchema = mongoose.Schema({

    usrUid : String,
    token : String,
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    signUpDate : String,
    blockedUsers : [String],
    isActivated : Boolean,    
    isCertified : Boolean,
    isDeleted : Boolean,
    isBanned : Boolean,
    mainCoupon : String,
    mainPicture : String,
    mainVideo : String,
    lastlogins : [lastlogins]

});

const User = mongoose.model('users', userSchema);

module.exports = User;