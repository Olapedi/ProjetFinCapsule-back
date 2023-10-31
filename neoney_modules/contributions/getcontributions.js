var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Contribution = require('../../models/contributions')

// Import Project Modules

const results = require('../../neoney_results/results_contributions.json')

// Function

module.exports = async function getcontributions(param){

    let result = [];

    if (param == 'all') {

        const data = await Contribution.find().populate('owner').populate('sender');
      
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
        
        // Vérification de l'existance de la contribution dans la base

        const data = await Contribution.findOne({ctbUid: param}).populate('owner').populate('sender');

        if (data == null) {

        // La recherche n'a renvoyé aucun résultat. La contribution n'existe pas.

        const contribution = {ctbUid: param};

        result.push(results[5]);
        result.push(contribution);

        return result;

        } else {

        // La recherche a renvoyé un résultat. La contribution existe.
        
        result.push(results[6]);
        result.push(data);

        return result;

        }

    }

}


