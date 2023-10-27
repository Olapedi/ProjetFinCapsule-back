
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alnrequest = require('../../models/alnrequests')

// Import Project Modules

const results = require('../../neoney_results/results_alnrequest.json')

// Function

module.exports = async function putalnrequestsprofile(param1, param2){

    let result = [];

    const action = param2.action
    const ender = param2.ender
    const alnrequest = param1;

    switch (action) { // En fonction de l'action demandée

        case '0' : // -- Demande d'acceptation
         
                if (!alnrequest.isAccepted) { // Si la demande n'a encore jamais été acceptée, alors on peut l'accepter 
    
                    const dataUpdate = await Alnrequest.updateOne( { alrUid: alnrequest.alrUid },  {$set: { "isAccepted": true, "ender" : ender }})

                    if (dataUpdate.modifiedCount == 1) { // Modification bien effectuée

                        result.push(results[33]);

                    } else { // Erreur dans la base

                        result.push(results[39]);
                    }


                } else { // Si la demande a déjà été acceptée

                    result.push(results[34]);

                }

                break;

        case '1' : // -- Demande d'annulation

                if (!alnrequest.isCancelled) { // Si la demande n'a encore jamais été annulée (refusée), alors on peut l'annuler 

                    const dataUpdate = await Alnrequest.updateOne( { alrUid: alnrequest.alrUid }, {$set: { "isCancelled": true, "ender" : ender }})

                    if (dataUpdate.modifiedCount == 1) { // Modification bien effectuée

                        result.push(results[35]);

                    } else { // Erreur dans la base

                        result.push(results[39]);
                    }


                } else { // Si la demande a déjà été annulée (refusée)

                    result.push(results[36]);

                }

                break;

        default: // -- Demande de suppression

                if (!alnrequest.isDeleted) { // Si la demande n'a encore jamais été supprimée, alors on peut la supprimer

                    const dataUpdate = await Alnrequest.updateOne( { alrUid: alnrequest.alrUid }, {$set: { "isDeleted": true, "ender" : ender }})

                    if (dataUpdate.modifiedCount == 1) { // Modification bien effectuée

                        result.push(results[37]);

                    } else { // Erreur dans la base

                        result.push(results[39]);

                    }

                } else { // Si la demande a déjà été supprimée

                    result.push(results[38]);

                }


      }

      
      return result;


}