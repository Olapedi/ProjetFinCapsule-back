var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');

// Import Neoney models

const Profile = require('../../models/profiles');
const Plan = require('../../models/plans')

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Neoney Results

const results = require('../../neoney_results/results_plans.json');

// Import Neoney Modules

const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const generateuid = require('../../neoney_modules/_common/generateuid');

// Function

module.exports = async function newplan(plandatareceived) {
  
    const plandata = plandatareceived[0];

    let result = [];

    // Informations sur le plan

        const plaUid = await generateuid('pla');
        const label = plandata.label;
        const title = plandata.title;
        const subtitle = plandata.subtitle;
        const description = plandata.description;
        const refundPolicy = plandata.refundPolicy;
        const limitCount = plandata.limitCount;
        const isCountryLimited = plandata.isCityLimited;
        const isCityLimited = plandata.isCityLimited;
        const isJobLimited = plandata.isJobLimited;

    // Informations sur le prix
  
        const prUid = Math.floor(Math.random() * 90) + 10;; 
        const prLabel = plandata.prlabel; 
        const prTitle = plandata.prtitle;
        const prAmount = plandata.pramount; 
        const prCv = plandata.prcv;
        const prQv = plandata.prqv; 
        const prQp = plandata.prqp;
        const prFrequency = plandata.prfrequency;
        const prPriority = plandata.prpriority; 
        const prIsDeleted = false;

    // Création du plan

    const newPlan = new Plan({

        plaUid : plaUid,
        label : label,
        title : title,
        subtitle : subtitle,
        description : description,
        refundPolicy : refundPolicy,
        limitCount : limitCount,
        isCountryLimited : isCountryLimited,
        isCityLimited : isCityLimited,
        isJobLimited : isJobLimited,

      prices : {

        prUid : prUid,
        prLabel : prLabel,
        prTitle : prTitle,
        prAmount : prAmount,
        prCv : prCv,
        prQv : prQv,
        prQp : prQp,
        prFrequency : prFrequency,
        prPriority : prPriority,
        prIsDeleted : prIsDeleted

      }

    })

    const newitem = await newPlan.save();

    return newitem;


  }
