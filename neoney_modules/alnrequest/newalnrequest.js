var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const alnrequest = require('../../models/alnrequests')


// Import Neoney Modules

const results = require('../../neoney_results/results_alnrequest.json');
const checkuseruid = require('../../neoney_modules/_common/checkuseruid');
const getprofiles = require('../../neoney_modules/profiles/getprofiles');
const generateuid = require('../../neoney_modules/_common/generateuid');
const Alnrequest = require('../../models/alnrequests');

// Function

module.exports = async function newalnrequest(alnrequestdata) {
  
  let result = [];

  const alrUid = await generateuid('alr');

    const checkowner = await checkuseruid(alnrequestdata[0].owner) // Vérifier que l'utilisateur existe

        if (checkowner[0].result) { // L'utilisateur existe

            const checksender = await getprofiles(alnrequestdata[0].sender) // Vérifier que le profil du sender existe


            if (checksender[0].result) { // Le profil du sender existe


            const checkreceiver = await getprofiles(alnrequestdata[0].receiver) // Vérifier que le profil du receiver existe

                if (checkreceiver[0].result) { // Le profil du receiver existe

                // Création de la requette d'alignement dans la base

                const newAlnrequest = new Alnrequest({

                    alrUid : alrUid,
                    owner : checkowner[1].id,
                    sender : checksender[1].id,
                    receiver : checkreceiver[1].id,
                    message : alnrequestdata[0].message,
                    creationDate : new Date(),
                    isAccepted : false,
                    isCancelled : false,
                    isDeleted : false,
              
                  })

                  const newitem = await newAlnrequest.save();
              
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
