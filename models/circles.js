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

const members = mongoose.Schema({

    uid : NUMBER,
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'circlerequests' },
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    role : String,
    joinDate : Date,
    hasQuit : Boolean,
    quitter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    isDeleted : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    endDate : Date

})

const prices = mongoose.Schema ({

    uid : Number,
    label : String,
    title : String,
    amount : Number,
    cv : Number,
    qv : Number,
    qp : Number,
    frequency : Number,
    refundPolicy : String,
    paymentlink : String,
    isCurrent : Boolean,
    isDeleted : Boolean,

})

const coupons = mongoose.Schema ({
    
    uid : Number,
    name : String,
    expDate : Date,
    newPrice : Number,
    newCv : Number,
    newQv : Number,
    newQp : Number,
    quantityAvailable : Number,
    isExpired : Boolean,
    isDeleted : Boolean

})


const contacts = mongoose.Schema ({

    uid : Number,    
    label : String,
    sources : [String],
    ismanual: Boolean,
    displayName : String,
    title : String,
    organization : String,
    phone : String,
    email : String,
    fullAddress : String,
    comments : [String],
    isDeleted : Boolean,
    endDate : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
    })

const admins = mongoose.Schema ({

    uid : Number,
    profile : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'circlerequests' },
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

const pictureAlbums = mongoose.Schema ({
    
    uid : Number,
    Title : String,
    Description : String,
    CreationDate : Date,
    Pictures : [String],
    forMembers : Boolean

})
    
const videosAlbums = mongoose.Schema ({
    
    uid : NUMBER,
    title : String,
    description : String,
    creationDate : DATE,
    videos : [String],
    forMembers : Boolean
    
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

const circleSchema = mongoose.Schema({

    icUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    displayName : String,
    coverage : String,
    profilePicture : String,
    bannerPicture : String,
    mainVideo : String,
    creationDate : Date,
    category : String,
    subCategory : String,
    countries : [String],
    cities : [String],
    jobCategories : [String],
    jobSubCategories : [String],
    interests : [String],
    skills : [String],
    experienceLevels : [String],
    expertiseLevels : [String],
    events : [String],
    cards : [cards],
    contacts : [contacts],
    admins : [admins],
    legalinfos : [legalinfos],
    testimonials : [testimonials],
    pictureAlbums : [pictureAlbums],
    videosAlbums : [videosAlbums],
    website : String,
    socialLinkedIn : String,
    socialFacebook : String,
    socialInstagram : String,
    socialYoutube : String,
    socialTweeter : String,
    updates : [updates],
    prices : [prices],
    coupons : [coupons],
    members : [members],
    documents : [documents],
    isVisible : Boolean,
    privacy : String,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
});

const Circle = mongoose.model('circles', circleSchema);

module.exports = Circle;