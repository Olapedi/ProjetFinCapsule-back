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

})
    
const videosAlbums = mongoose.Schema ({
    
    uid : NUMBER,
    title : String,
    description : String,
    creationDate : DATE,
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

const profileSchema = mongoose.Schema({

    pflUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    activeplan : { type: mongoose.Schema.Types.ObjectId, ref: 'plans' },
    mainCircle : { type: mongoose.Schema.Types.ObjectId, ref: 'circles'},
    displayName : String,
    coverage : String,
    profilePicture : String,
    bannerPicture : String,
    mainVideo : String,
    creationDate : Date,
    countries : [String],
    cities : [String],
    profiletype : String,
    jobCategories : [String],
    jobSubCategories : [String],
    interests : [String],
    skills : [String],
    experienceLevel : String,
    expertiseLevel : String,
    eventsInterestedIn : [String],
    cards : [cards],
    contacts : [contacts],
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
    isPartner : Boolean,
    isMentor : Boolean,
    isCoach : Boolean,
    isCloser : Boolean,
    isMember : Boolean,
    isVisible : Boolean,
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
});

const Profile = mongoose.model('profiles', profileSchema);

module.exports = Profile;