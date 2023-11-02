var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../../models/profiles')
const User = require('../../models/users')

module.exports = async function deleteAccount(body){

    let result = {}
    if(!body.proUid || !body.usrUid){
        result = {message : "ID du profil ou de l'utilisateur manquant", result : false}
    }
    else{
        const proDeletion = await Profile.deleteOne({proUid : body.proUid})
        console.log('profilDeleteResult', proDeletion.deletedCount)

        const usrDeletion = await User.deleteOne({usrUid : body.usrUid})
        console.log('userDeleteResult', usrDeletion.deletedCount)

        if (proDeletion.deletedCount && usrDeletion.deletedCount){
            result = {message : 'Le compte a bien été supprimé', result : true}
        }  
    }
    return result
}
