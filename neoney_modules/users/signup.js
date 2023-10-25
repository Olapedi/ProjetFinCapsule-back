var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Neoney Results

const results = require('../../neoney_results/results_users.json');

// Import Neoney Modules

const generateuid = require('../_common/generateuid');
const checkSponsor = require('./checksponsor');
const checkbodysignup = require('./checkbodysignup');
const activationcode = require('./activationcode');

// Function

module.exports = async function signup(userdata) {

  let result = [];

  const activationCode = activationcode();

  const firstname = userdata[0].firstname.trim();
  const lastname = userdata[0].lastname.trim();
  const email = userdata[0].email.trim();
  const password = userdata[0].password.trim();
  const hash = bcrypt.hashSync(password, 10)
  const token = uid2(32);
  const country = userdata[0].country.trim();
  const city = userdata[0].city.trim();
  const phone = userdata[0].phone.trim();
  const sponsor = userdata[0].sponsor.trim();
  const usrUid = await generateuid('usr');
  const neocode = usrUid;
  const isCountryLimited = true;
  const isCityLimited = true;
  const isJobLimited = true;
  const limitCount = 200;
  const isActivated = false;   
  const isCertified = false;
  const signUpDate = new Date;

  // Vérifier si les données reçues sont vides 

  const userdata2 = {

    firstname : firstname,
    lastname : lastname,
    email : email,
    password : password,
    hash : hash,
    token : token,
    country : country,
    city : city,
    phone : phone,
    sponsor : sponsor,
    usrUid : usrUid,
    neocode : neocode,
  
  }
  
  const checkbodyresult = await checkbodysignup(userdata2);

  if (!checkbodyresult[0].result) {

    // Un des champs est vide

    return checkbodyresult;

  } else {

    // Tous les champs sont remplis. Vérification de l'existence du sponsor dans la base.
  
  const validSponsor = await checkSponsor(sponsor);

  if (validSponsor) {

    // Si le sponsor existe, vérification du format de l'email reçu

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  
  function validateEmail(email) {
    return emailRegex.test(email);
  }
  
  const isValidEmail = validateEmail(email);
  
  if (!isValidEmail) {
    
    // Format email invalide

    result.push(results[0]);
    return result;

  } else {

    // Format email valide. Recherche de l'existence de l'utilisateur dans la base pour éviter de le créer 2 fois

    const data = await User.findOne({email: {$regex: new RegExp(email, 'i')}});
    const dataphone = await User.findOne({phone: {$regex: new RegExp(phone, 'i')}});

    if ((data !== null) || (dataphone !== null)) {

      result.push(results[5])
      return result;

    } else {

      const newUser = new User({
  
        firstname : firstname,
        lastname : lastname,
        email : email,
        password : hash,
        token : token,
        country : country,
        city : city,
        phone : phone,
        sponsor : sponsor,
        usrUid : usrUid,
        neocode : neocode,
        activationCode : activationCode,
        isCountryLimited : isCountryLimited,
        isCityLimited : isCityLimited,
        isJobLimited : isJobLimited,
        limitCount : limitCount,
        isActivated : isActivated,    
        isCertified : isCertified,
        signUpDate : signUpDate,
        
      });
      
       const newitem = await newUser.save();

       if (newitem) {

        let userSignedIn = {

                            firstname: newitem.firstname, 
                            lastname: newitem.lastname, 
                            email: newitem.email, 
                            token: newitem.token, 
                            usrUid: newitem.usrUid, 
                            neocode: newitem.neocode, 
                            activationCode : activationCode,
                            country: newitem.country, 
                            city: newitem.city, 
                            phone: newitem.phone, 
                            sponsor: newitem.sponsor, 
                            isCountryLimited : newitem.isCountryLimited,
                            isCityLimited : newitem.isCityLimited,
                            isJobLimited : newitem.isJobLimited,
                            limitCount : newitem.limitCount,
                            isActivated : newitem.isActivated,    
                            isCertified : newitem.isCertified,
                            signUpDate : newitem.signUpDate,

                          }

        result.push(results[6]);
        result.push(userSignedIn);
        return result;

       } else {

        result.push(results[7])
        return result;

       }

      }

    }

  } else {

    result.push(results[8])
    return result;

  }

}

}
    


  

