var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const bcrypt = require('bcrypt');
const uid2 = require ('uid2');

const token = uid2(32);

// Import Project Modules

const results = require('../../neoney_results/results_users.json')

// Function

module.exports = async function checkuseruid(usrUid){

    let result = [];

      // Vérification de l'existance de l'utilisateur dans la base

      const data = await User.findOne({usrUid: usrUid});
  
      if (data == null) {
  
        // La recherche n'a renvoyé aucun résultat. L'utilisateur n'existe pas.
        const user = {usrUid: usrUid};

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
