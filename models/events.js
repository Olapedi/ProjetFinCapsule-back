const mongoose = require('mongoose');

const cards = mongoose.Schema ({

    uid : NUMBER,    
    label : String,
    displayName : String,
    title : String,
    organization : String,
    phone : String,
    email : String,
    fullAddress : String,
    isMain : Boolean,
    isDeleted : Boolean,
    endDate : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
    })

const attendees = mongoose.Schema({

    uid : NUMBER,
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'eventrequests' },
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    role : String,
    joinDate : Date,
    hasQuit : Boolean,
    quitter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    absence : Boolean,
    warned : Boolean,
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    endDate : Date

})

const tickets = mongoose.Schema ({

    uid : Number,
    label : String,
    title : String,
    description : String,
    role : String,
    price : Number,
    cv : Number,
    qv : Number,
    qp : Number,
    refundPolicy : String,
    paymentlink : String,
    isMain : Boolean,
    isDeleted : Boolean,

})

const coupons = mongoose.Schema ({
    
    uid : Number,
    label : String,
    name : String,
    description : String,
    expDate : Date,
    role : String,
    newPrice : Number,
    newCv : Number,
    newQv : Number,
    newQp : Number,
    quantityAvailable : Number,
    isExpired : Boolean,
    isDeleted : Boolean

})

const occurences = mongoose.Schema ({

    uid : Number,    
    location : { type: mongoose.Schema.Types.ObjectId, ref: 'locations' },
    label : String,
    title : String,
    shortDescription : String,
    timeZone : String,
    startDate : Date,
    startHour : Date,
    endDate : Date,
    endHour : Date,
    isDeleted : String,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
})

const admins = mongoose.Schema ({

    uid : Number,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'eventrequests' },
    role : String,
    creationDate : Date,
    isDeleted : Boolean,
    isCancelled : Boolean,
    isBlocked : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }

})

const legalinfos = mongoose.Schema ({

    uid : Number,
    legalInfo : { type: mongoose.Schema.Types.ObjectId, ref: 'legalinfos' },
    isMain : Boolean,
    isDeleted : Boolean,    
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
})

const testimonials = mongoose.Schema ({

    uid : Number,
    type : String,
    video : String,
    picture : SRING,
    description : String,
    priority : Number,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
        
})

const documents = mongoose.Schema ({
    
    uid : NUMBER,
    title : String,
    description : String,
    creationDate : DATE,
    files : [String],
    forMembers : Boolean
    
})

const updates = mongoose.Schema ({

    uid : Number,
    field : String,
    oldValue : String,
    newValue : String,
    date : Date,
    connectedUser : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
        
})

const eventSchema = mongoose.Schema({

    evUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    creationDate : Date,
    category : String,
    subCategory : String,
    countries : [String],
    cities : [String],
    coverage : String,
    jobCategories : [String],
    jobSubCategories : [String],
    interests : [String],
    skills : [String],
    experienceLevels : [String],
    expertiseLevels : [String],
    title : String,
    shortDescription : String,
    longDescription : String,
    profilePicture : String,
    bannerPicture : String,
    mainVideo : String,
    pictures : [String],
    videos : [String],
    cards : [cards],
    occurences : [occurences],
    admins : [admins],
    legalinfos : [legalinfos],
    testimonials : [testimonials],
    updates : [updates],
    tickets : [tickets],
    coupons : [coupons],
    attendees : [attendees],
    documents : [documents],
    isNetworking : Boolean,
    isUniqueOccurence : Boolean,
    isVisible : Boolean,
    privacy : String,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;