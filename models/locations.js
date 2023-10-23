const mongoose = require('mongoose');

const cards = mongoose.Schema ({

    uid : Number,    
    label : String,
    displayName : String,
    title : String,
    organization : String,
    phone : String,
    email : String,
    fullAddress : String,
    website : String,
    socialLinkedIn : String,
    socialFacebook : String,
    socialInstagram : String,
    socialYoutube : String,
    socialTweeter : String,
    isMain : Boolean,
    isDeleted : Boolean,
    endDate : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
    })

const offers = mongoose.Schema ({

    uid : Number,    
    label : String,
    title : String,
    description : String,
    price : Number,
    coupon : String,
    couponExpDate : Date,
    couponNewPrice : Number,
    isDeleted : Boolean,
    endDate : Boolean,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
    })

const admins = mongoose.Schema ({

    uid : Number,
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
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
    picture : String,
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

})
    
const videosAlbums = mongoose.Schema ({
    
    uid : NUMBER,
    title : String,
    description : String,
    creationDate : Date,
    videos : [String]
    
})

const updates = mongoose.Schema ({

    uid : Number,
    field : String,
    oldValue : String,
    newValue : String,
    date : Date,
    connectedUser : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
        
})

const locationSchema = mongoose.Schema({

    pflUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    category : String,
    subCategory : String,
    label : String,
    country : String,
    city : String,
    address : String,
    locationTerms : String,
    socialLinkedIn : String,
    socialFacebook : String,
    socialInstagram : String,
    socialYoutube : String,
    profilePicture : String,
    bannerPicture : String,
    mainVideo : String,
    creationDate : Date,
    interests : [String],
    skills : [String],
    cards : [cards],
    offers : [offers],
    admins : [admins],
    legalinfos : [legalinfos],
    testimonials : [testimonials],
    pictureAlbums : [pictureAlbums],
    videosAlbums : [videosAlbums],
    updates : [updates],
    website : String,
    socialLinkedIn : String,
    socialFacebook : String,
    socialInstagram : String,
    socialYoutube : String,
    socialTweeter : String,
    isVisible : Boolean,
    privacy : String,
    isPrivate : Boolean,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
});

const Location = mongoose.model('locations', locationSchema);

module.exports = Location;