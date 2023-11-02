
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Boost = require('../../models/boosts')

// Import Project Modules

const results = require('../../neoney_results/results_boosts.json')

// Function

module.exports = async function getboostsprofile(param){

    let result = {

        boostsSent : [],
        boostsReceived : []
    
    }

        // Recherche des boosts du profil

        const data = await Boost.find().populate('sender').populate('receiver');
        
        const dataSender = data.filter((e) => e.sender.proUid == param)
        const dataReceiver = data.filter((e) => e.receiver.proUid == param)

        const dataBoost = {

            boostsSent : dataSender,
            boostsReceived : dataReceiver
        
        }

        if (dataBoost.boostsSent.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucun boost.

        const profile = {proUid: param};
        
        result.boostsSent.push(results[20]);
        result.boostsSent.push(profile);


        } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des boosts

            result.boostsSent.push(results[21]);
            result.boostsSent.push(...dataSender);

        }

        if (dataBoost.boostsReceived.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucun boost.

            const profile = {proUid: param};
            
            result.boostsReceived.push(results[22]);
            result.boostsReceived.push(profile);
    
            } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des boosts
    
            result.boostsReceived.push(results[23]);
            result.boostsReceived.push(...dataReceiver);
            
        }

        return result;

}

