const mongoose = require("mongoose")

const comments = mongoose.Schema ({

    uid : Number,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    date : Date,
    likes : [String],
    alerts : [String],
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    endDate : Date
 
})

const contributionSchema = mongoose.Schema({
    
    ctbUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    creationDate : Date,
    title : String,
    text : String,
    privacy : String,
    category : String,
    deadline : String,
    mainPicture : String,
    pictures : [String],
    mainVideo : String,
    videos : [String],
    files : [String],
    isVisible : Boolean,
    hashtags : [String],
    likes : [String],
    alerts : [String],
    comments: [comments],
    isDeleted: Boolean

});

const Contribution = mongoose.model('contributions', contributionSchema); 

module.exports = Contribution;




