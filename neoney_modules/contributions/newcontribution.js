var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');
const Contribution = require('../../models/contributions')


// Import Neoney Modules

const results = require('../../neoney_results/results_contributions.json');
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const getprofiles = require('../../neoney_modules/profiles/getprofiles');
const generateuid = require('../../neoney_modules/_common/generateuid')
const gethashtags = require('../_common/gethashtags');


// Function

module.exports = async function newcontribution(contributiondata) {
  
  let result = [];

  const ctbUid = await generateuid('ctb');

    const checkowner = await checkuseruid(contributiondata[0].owner) // Vérifier que l'utilisateur existe

        if (checkowner[0].result) { // L'utilisateur existe

            const checksender = await getprofiles(contributiondata[0].sender) // Vérifier que le profil du sender existe

            if (checksender[0].result) { // Le profil du sender existe

                // Récupération des hashtags

      
                const hashtags = await gethashtags(contributiondata[0].text);

                // Création de la Contribution dans la base

                const newContribution = new Contribution({

                    ctbUid : ctbUid,

                    category : contributiondata[0].category,
                    subCategory : contributiondata[0].subCategory,
                    owner : checkowner[1].id,
                    sender : checksender[1].id,
                    text : contributiondata[0].text,
                    title : contributiondata[0].title,
                    privacy : contributiondata[0].privacy,
                    category : contributiondata[0].category,
                    deadline : contributiondata[0].deadline,
                    mainPicture : contributiondata[0].mainPicture,
                    creationDate : new Date(),
                    isVisible : true,
                    isDeleted: false,
                    hashtags : hashtags,
              
                  })
              
                  const newitem = await newContribution.save();
              
                  result.push(results[1]);
                  result.push(newitem);

                  return result;

            } else { // Le profil du sender n'existe pas

            const result = checksender;

            return result;

            }

        } else { // L'utilisateur n'existe pas

            const result = checkowner;

            return result;

        }


} 
