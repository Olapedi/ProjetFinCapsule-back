var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');
const moment = require('moment');
const Boost = require('../../models/boosts')


// Import Neoney Modules

const results = require('../../neoney_results/results_boosts.json');
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const getprofiles = require('../../neoney_modules/profiles/getprofiles');
const generateuid = require('../../neoney_modules/_common/generateuid')


// Function

module.exports = async function newboost(boostdata) {
  
  let result = [];

  const bstUid = await generateuid('bst');

    const checkowner = await checkuseruid(boostdata[0].owner) // Vérifier que l'utilisateur existe

        if (checkowner[0].result) { // L'utilisateur existe


            const checksender = await getprofiles(boostdata[0].sender) // Vérifier que le profil du sender existe


            if (checksender[0].result) { // Le profil du sender existe


            const checkreceiver = await getprofiles(boostdata[0].receiver) // Vérifier que le profil du receiver existe

                
                if (checkreceiver[0].result) { // Le profil du receiver existe

                // Création du boost dans la base

                const newBoost = new Boost({

                    bstUid : bstUid,
                    category : boostdata[0].category,
                    subCategory : boostdata[0].subCategory,
                    owner : checkowner[1].id,
                    sender : checksender[1].id,
                    receiver : checkreceiver[1].id,
                    testimonial : boostdata[0].testimonial,
                    creationDate : new Date(),              
              
                  })
              
                  const newitem = await newBoost.save();
              
                  result.push(results[1]);
                  result.push(newitem);

                  return result;

                } else {  // Le profil du receiver n'existe pas

                result = checkreceiver;
                
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
