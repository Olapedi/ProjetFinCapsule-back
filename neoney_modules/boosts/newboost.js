var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');
const Boost = require('../../models/boosts')

// Import Neoney Results

const results = require('../../neoney_results/results_boosts.json');

// Import Neoney Modules

const checkbodynewboost = require('./checkbodynewboost')
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const generateuid = require('../../neoney_modules/_common/generateuid');
const random = require('../../neoney_modules/_common/random')
const getprofile = require('../../neoney_modules/profiles/getprofiles')

// Function

module.exports = async function newboost(boostdata) {
  
    console.log(boostdata);
    
  let result = [];

  // Informations de l'utilisateur

  const user = await checkuseruid(boostdata[0].usrUid);

  return user;

  if (user[0].result) {

    const usrUid = boostdata[0].usrUid;

    const owner = user[1].id;

    // Informations sur les profils

    const senderProfile = await getprofile(boostdata[0].sender);
    const receiverProfil = await getprofile(boostdata[0].receiver);

    const bstUid = await generateuid('bst');

    return bstUid;

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
    


  

