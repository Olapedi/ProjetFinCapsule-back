const mongoose = require('mongoose');

const participants = mongoose.Schema ({

    uid : Number,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    addDate : Date,
    adder : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

})

const messages = mongoose.Schema({

    sendDate : Date,
    senderUser : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    senderProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    text : String,
    hashText : String,
    likes : [String],
    dislike : [String],
    readers : [String],
    deleters : [String],
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

})


const chatSchema = mongoose.Schema({

    chUid: String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    participants : [participants],
    creationDate : Date,
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }

});

const Chat = mongoose.model('chats', chatSchema);

module.exports = Chat;
