var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alert = require('../../models/alerts');

// Import Project Modules

const results = require('../../neoney_results/results_alerts.json')

// Function

module.exports = async function getalerts(param){

    let result = [];

    if (param == 'all') {

        const data = await Alert.find().populate('owner').populate('sender').populate('receiver');
      
        if (data.length == 0) {

        result.push(results[0])

        return result;

        } else {
        
        result.push(results[4])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {
        
        // Vérification de l'existance de l'alerte dans la base

        const data = await Alert.findOne({altUid: param}).populate('owner').populate('sender').populate('receiver');

        if (data == null) {

        // La recherche n'a renvoyé aucun résultat. L'alerte n'existe pas.

        const alert = {altUid: param};

        result.push(results[5]);
        result.push(alert);

        return result;

        } else {

        // La recherche a renvoyé un résultat. L'alerte existe.
        
        result.push(results[6]);
        result.push(data);

        return result;

        }

    }

}


