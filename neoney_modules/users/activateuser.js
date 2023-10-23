var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const bcrypt = require('bcrypt');
const uid2 = require ('uid2');

const token = uid2(32);

// Import Project Modules

const results = require('../../neoney_results/results_users.json');
const Profile = require('../../models/profiles');

// Function

module.exports = async function activateuser(userreceived){

    console.log(userreceived);

    let result = [];

      // Vérification de l'existance de l'utilisateur dans la base

      const data = await User.findOne({useUid: userreceived.useUid});
  
      if (data == null) {
  
        // La recherche n'a renvoyé aucun résultat. L'utilisateur n'existe pas.
        const user = {useUid: useUid};

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
          useUid: data.useUid, 
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

        if (userreceived.activationCode !== user.activationCode) {

            result.push(results[21]);
            result.push(user);

        } else {

            // Code d'activation correct. Modification de l'utilisateur 

        await  User.updateOne(

                    { useUid: user.useUid },
                    { isActivated: true }

                )
        
        const data2 = await User.findOne({useUid: userreceived.useUid});
        
            console.log(data2);

            result.push(results[22]);
            result.push(data2);


        }


        return result;

      }

}
