const mongoose = require('mongoose');

const guests = mongoose.Schema ({

    uid : Number,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    addDate : Date,
    adder : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

})

const messages = mongoose.Schema({

    uid : Number,
    sendDate : Date,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    msgSender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    text : String,
    hashText : String,
    likes : [String],
    dislikes : [String],
    readers : [String],
    deleters : [String],
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

})

const chatSchema = mongoose.Schema({

    chtUid: String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    subject : String,
    guests : [guests],
    messages : [messages],
    creationDate : Date,
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }

});

const Chat = mongoose.model('chats', chatSchema);

module.exports = Chat;
