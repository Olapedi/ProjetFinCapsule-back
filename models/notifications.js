const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({

    notifUid : String,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    notifType : String,
    message : String,   
    date : Date,
    link : String,
    isRead : Boolean,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Notification = mongoose.model('notifications', notificationSchema);

module.exports = Notification;
