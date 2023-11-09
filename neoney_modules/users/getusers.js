
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users')

// Import Project Modules

const results = require('../../neoney_results/results_users.json')

// Function

module.exports = async function getusers(param){

    let result = [];

    if (param == 'all') {

        const data = await User.find();
      
        if (data.length == 0) {

        result.push(results[24])

        return result;

        } else {
        
        result.push(results[25])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {
        
            // Vérification de l'existance de l'utilisateur dans la base

            const data = await User.findOne({usrUid: param});
            
            if (data == null) {

            // La recherche n'a renvoyé aucun résultat. L'utilisateur n'existe pas.
            const user = {usrUid: param};

            result.push(results[1]);
            result.push(user);

            return result;

            } else {

            // La recherche a renvoyé un résultat. L'utilisateur existe.

            const user = {
                
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

            result.push(results[20]);
            result.push(user);

            return result;

        }

    }

}
