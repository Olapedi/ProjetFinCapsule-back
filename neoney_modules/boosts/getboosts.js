var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Boost = require('../../models/boosts')

// Import Project Modules

const results = require('../../neoney_results/results_boosts.json')

// Function

module.exports = async function getboosts(param){

    let result = [];

    if (param == 'all') {

        const data = await Boost.find();
      
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
        
        // Vérification de l'existance du boost dans la base

        const data = await Boost.findOne({bstUid: param});

        if (data == null) {

        // La recherche n'a renvoyé aucun résultat. Le boost n'existe pas.

        const boost = {bstUid: param};

        result.push(results[5]);
        result.push(boost);

        return result;

        } else {

        // La recherche a renvoyé un résultat. Le boost existe.
        
        result.push(results[6]);
        result.push(data);

        return result;

        }

    }

}


