var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');
const Alert = require('../../models/alerts')


// Import Neoney Modules

const results = require('../../neoney_results/results_alerts.json');
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const getprofiles = require('../../neoney_modules/profiles/getprofiles');
const generateuid = require('../../neoney_modules/_common/generateuid')


// Function

module.exports = async function newalert(alertdata) {
  
  let result = [];
  const altUid = await generateuid('alt');

    const checkowner = await checkuseruid(alertdata[0].owner) // Vérifier que l'utilisateur existe

        if (checkowner[0].result) { // L'utilisateur existe


            const checksender = await getprofiles(alertdata[0].sender) // Vérifier que le profil du sender existe


            if (checksender[0].result) { // Le profil du sender existe


            const checkreceiver = await getprofiles(alertdata[0].receiver) // Vérifier que le profil du receiver existe

                
                if (checkreceiver[0].result) { // Le profil du receiver existe

                // Création du alert dans la base

                const newAlert = new Alert({

                    altUid : altUid,
                    category : alertdata[0].category,
                    subCategory : alertdata[0].subCategory,
                    owner : checkowner[1].id,
                    sender : checksender[1].id,
                    receiver : checkreceiver[1].id,
                    testimonial : alertdata[0].testimonial,
                    creationDate : new Date(),              
              
                  })
              
                  const newItem = await newAlert.save();
              
                  return newItem;

                } else {  // Le profil du receiver n'existe pas

                const result = checkreceiver;

                return result;

                } 


            } else { // Le profil du sender n'existe pas

            const result = checksender;

            return result;

            }

        } else { // L'utilisateur n'existe pas

            const result = checkowner;

            return result;

        }


} 
