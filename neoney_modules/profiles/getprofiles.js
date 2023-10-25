
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../../models/profiles')

// Import Project Modules

const results = require('../../neoney_results/results_profiles.json')

// Function

module.exports = async function getprofiles(param){

    let result = [];

    if (param == 'all') {

        const data = await Profile.find();
      
        if (data.length == 0) {

        result.push(results[22])

        return result;

        } else {
        
        result.push(results[23])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {

        // Vérification de l'existance du profil dans la base

        const data = await Profile.findOne({proUid: param});

        if (data == null) {

        // La recherche n'a renvoyé aucun résultat. Le profil n'existe pas.
        const profile = {proUid: param};

        result.push(results[26]);
        result.push(profile);

        return result;

        } else {

        // La recherche a renvoyé un résultat. Le profil existe.
        
        /*
        const profile = {
            
            id: data._id, 
            firstname: data.firstname, 
            lastname: data.lastname, 
            email: data.email, 
            token: data.token, 
            usrUid: data.usrUid, 
            neocode: data.neocode,
            activationCode : data.activationCode, 
            country: data.country, 
            city: data.city, 
            phone: data.phone, 
            sponsor: data.sponsor, 
            isCountryLimited : data.isCountryLimited,
            isCityLimited : data.isCityLimited,
            isJobLimited : data.isJobLimited,
            limitCount : data.limitCount,
            isActivated : data.isActivated,    
            isCertified : data.isCertified,
            signUpDate : data.signUpDate,
            
        }
        */

        result.push(results[25]);
        result.push(data);

        return result;

    }



    }

}

