const mongoose = require("mongoose")

const comments = mongoose.Schema ({

    uid : Number,
    writerAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    writerProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    date : Date,
    likes : [String],
    alerts : [String],
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    endDate : Date
 
})

const contributionSchema = mongoose.Schema({
    
    ctUid : String,
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    contentID : String,
    type : String,
    mainPicture : String,
    pictures : [String],
    mainVideo : String,
    videos : [String],
    message : String,
    isVisible : BOOLEAN,
    privacy : String,
    hashtags : [String],
    likes : [String],
    alerts : [String],
    comments: [comments],

});

const Contribution = mongoose.model('contributions', contributionSchema); 

module.exports = Contribution;




