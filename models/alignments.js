const mongoose = require('mongoose');

const alignmentSchema = mongoose.Schema({

    alnUid : String,
    request : { type: mongoose.Schema.Types.ObjectId, ref: 'alignrequests' },
    profileone : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    profiletwo : { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
    date : Date,
    isDeleted : BOOLEAN,
    endDate : DATE,
    deleter : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },

});

const Alignment = mongoose.model('alignments', alignmentSchema);

module.exports = Alignment;
