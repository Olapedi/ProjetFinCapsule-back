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


}
    


  

