var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Neoney Results

const results = require('../../neoney_results/results_profiles.json');

// Import Neoney Modules

const checkbodynewprofile = require('./checkbodynewprofile')
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const Profile = require('../../models/profiles');
const generateuid = require('../../neoney_modules/_common/generateuid');
const random = require('../../neoney_modules/_common/random')

// Function

module.exports = async function newprofile(profiledata) {
  
  let result = [];

  // Informations de l'utilisateur

  const user = await checkuseruid(profiledata[0].usrUid);

  if (user[0].result) {

    const usrUid = profiledata[0].usrUid;
    const owner = user[1].id;

    let countries = [];
    let cities = [];

    countries.push(user[1].country);
    cities.push(user[1].city);

    // Informations de profil
  
    let jobCategories = [];
    let jobSubCategories = [];
    
    jobCategories.push(profiledata[0].jobCategories);
    jobSubCategories.push(profiledata[0].jobSubCategories);

    const creationDate = new Date();
    const label = 'Main';
    const isVisible = true;
    const privacy = 'public';
    const isPartner = false;
    const isMentor = false;
    const isCoach = false;
    const isCloser = false;
    const isDeleted = false;

    const proUid = await generateuid('pro');

    //Information de Carte de visite

    const displayName = profiledata[0].displayName;
    const title = profiledata[0].title;
    const organization = profiledata[0].organization;
    const description = profiledata[0].description;
    const website = profiledata[0].website;
    const phone = profiledata[0].phone;
    const email = profiledata[0].email;
    const isMain = true;

    const newProfile = new Profile({

      owner : owner,
      usrUid : usrUid,
      proUid : proUid,
      creationDate : creationDate,
      label : label,
      countries : countries,
      cities : cities,
      jobCategories : jobCategories,
      jobSubCategories : jobSubCategories,
      isVisible : isVisible,
      privacy : privacy,
      isPartner : isPartner,
      isMentor : isMentor,
      isCoach : isCoach,
      isCloser : isCloser,
      isDeleted : isDeleted,

      cards : {

        uid : random(),
        displayName : displayName,
        title : title,
        organization : organization,
        description : description,
        website : website,
        phone : phone,
        email : email,
        isMain : isMain,

      }

    })

    const newitem = await newProfile.save();

   
    return newitem;


  }




        /*
  
  // Vérifier si les données reçues sont vides 

  const profiledata2 = {

    displayName : displayName,
    title : title,
    organisation : organization,
    description : description,
    type : type,
    jobCategories : jobCategories,
    jobSubCategories : jobSubCategories,
    website : website,
    phone : phone,
    email : email,
    usrUid : usrUid
  
  }
  
  const checkbodyresult = await checkbodynewprofile(userdata2);

  console.log(checkbodyresult);

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



*/

}
    


  

