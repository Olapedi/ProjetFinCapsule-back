const mongoose = require('mongoose');

const strengths = mongoose.Schema ({

    uid : Number,
    text : String,
    likes : [String],

})

const cards = mongoose.Schema ({

    uid : Number,    
    label : String,
    displayName : String,
    title : String,
    organization : String,
    description : String,
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

const documents = mongoose.Schema ({
    
    uid : Number,
    title : String,
    description : String,
    creationDate : Date,
    files : [String],
    privacy : String,
    
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
    
    uid : Number,
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

const profileSchema = mongoose.Schema({

    proUid : String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    mainCircle : { type: mongoose.Schema.Types.ObjectId, ref: 'circles'},
    type : String,
    mainPicture : String,
    bannerPicture : String,
    mainVideo : String,
    creationDate : Date,
    coverage : String,
    countries : [String],
    cities : [String],
    jobCategories : [String],
    jobSubCategories : [String],
    interests : [String],
    strengths : [strengths],
    experience : String,
    expertise : String,
    cards : [cards],
    contacts : [contacts],
    admins : [admins],
    legalinfos : [legalinfos],
    testimonials : [testimonials],
    pictureAlbums : [pictureAlbums],
    videosAlbums : [videosAlbums],
    eventsFavorites : [String],
    profilesFavorites : [String],
    documents : [documents],
    updates : [updates],
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
    isDeleted : Boolean,
    endDate : Date,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
    
});

const Profile = mongoose.model('profiles', profileSchema);

module.exports = Profile;