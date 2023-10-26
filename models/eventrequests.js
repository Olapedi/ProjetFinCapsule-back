const mongoose = require('mongoose');

const tickets = mongoose.Schema ({

    uid : Number,
    attendee : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    occurences : [String],
    fullname : STRING,
    phone : STRING,
    email : STRING,
    country : STRING,
    city : STRING,

})

const eventrequestSchema = mongoose.Schema({

    erqUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    event : { type: mongoose.Schema.Types.ObjectId, ref: 'events' },
    tickets : [tickets],
    role : String,
    message : String,
    creationDate : Date,
    link : String,
    isPending : Boolean,
    isCancelled : Boolean,
    endDate : Date,
    ender : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Eventrequest = mongoose.model('eventrequests', eventrequestSchema);

module.exports = Eventrequest;
