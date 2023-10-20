const mongoose = require('mongoose');


const tickets = mongoose.Schema ({

    uid : Number,    
    ticket : [String],
    attendee : [String],
    fullname : STRING,
    phone : STRING,
    email : STRING,
    country : STRING,
    city : STRING,

})


const eventrequestSchema = mongoose.Schema({

    evrUid : String,
    attendeeProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles'},
    senderAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    senderProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    receiverProfile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    event : { type: mongoose.Schema.Types.ObjectId, ref: 'events' },
    occurences : [String],
    tickets : [tickets],
    role : String,
    message : String,   
    date : Date,
    link : String,
    isCustomerPending : Boolean,
    isHostPending : Boolean,
    isCancelled : Boolean,
    isRefused : Boolean,
    isHostConfirmed : Boolean,
    isGuestConfirmed : Boolean,
    endDate : Date,
    ender : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Eventrequest = mongoose.model('eventrequests', eventrequestSchema);

module.exports = Eventrequest;
