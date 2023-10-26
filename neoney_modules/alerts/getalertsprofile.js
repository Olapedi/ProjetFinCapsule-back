
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alert = require('../../models/alerts')

// Import Project Modules

const results = require('../../neoney_results/results_alerts.json')

// Function

module.exports = async function getalertsprofile(param){

    let result = {

        alertsSent : [],
        alertsReceived : []
    
    }

        // Recherche des alerts du profil

        const data = await Alert.find().populate('sender').populate('receiver');

        const dataSender = data.filter((e) => e.sender.proUid == param)
        const dataReceiver = data.filter((e) => e.receiver.proUid == param)

        const dataBoost = {

            alertsSent : dataSender,
            alertsReceived : dataReceiver
        
        }

        if (dataBoost.alertsSent.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucune alert.

        const profile = {proUid: param};
        
        result.alertsSent.push(results[20]);
        result.alertsSent.push(profile);


        } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des alerts

            result.alertsSent.push(results[21]);
            result.alertsSent.push(...dataSender);

        }

        if (dataBoost.alertsReceived.length == 0) { // La recherche n'a renvoyé aucun résultat. Le profile n'a donné aucune alert.

            const profile = {proUid: param};
            
            result.alertsReceived.push(results[22]);
            result.alertsReceived.push(profile);
    
            } else { // La recherche a renvoyé un résultat. Le profil a déjà laissé des alerts
    
            result.alertsReceived.push(results[23]);
            result.alertsReceived.push(...dataReceiver);
            
        }

        return result;

}

