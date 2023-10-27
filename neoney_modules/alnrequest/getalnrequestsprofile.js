
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alnrequest = require('../../models/alnrequests')

// Import Project Modules

const results = require('../../neoney_results/results_alnrequest.json')

// Function

module.exports = async function getalnrequestsprofile(param){

    let result = {

        alnrequestsSent : [],
        alnrequestsReceived : []
    
    }

        // Recherche des demande d'alignement du profil

        const data = await Alnrequest.find().populate('sender').populate('receiver');

        const dataSender = data.filter((e) => e.sender.proUid == param)
        const dataReceiver = data.filter((e) => e.receiver.proUid == param)

        const dataAlnrequest = {

            alnrequestsSent : dataSender,
            alnrequestsReceived : dataReceiver
        
        }

        if (dataAlnrequest.alnrequestsSent.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucun boost.

        const profile = {proUid: param};
        
        result.alnrequestsSent.push(results[20]);
        result.alnrequestsSent.push(profile);


        } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des boosts

            result.alnrequestsSent.push(results[21]);
            result.alnrequestsSent.push(...dataSender);

        }

        if (dataAlnrequest.alnrequestsReceived.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucun boost.

            const profile = {proUid: param};
            
            result.alnrequestsReceived.push(results[22]);
            result.alnrequestsReceived.push(profile);
    
            } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des boosts
    
            result.alnrequestsReceived.push(results[23]);
            result.alnrequestsReceived.push(...dataReceiver);
            
        }

        return result;

}

