var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alnrequest = require('../../models/alnrequests');

// Import Project Modules

const results = require('../../neoney_results/results_alnrequest.json');

// Function

module.exports = async function getalnrequests(param){

    let result = [];

    if (param == 'all') {

        const data = await Alnrequest.find({isCancelled : false, isAccepted: false}).populate('owner').populate('sender').populate('receiver');

        if (data.length == 0) { // La recherche n'a renvoyé aucun résultat

        result.push(results[0])

        return result;

        } else { // La recherche a renvoyé des résultats
        
        result.push(results[4])
        result.push(...data)
        
        return result;

        }

    } else {
        
        // Vérification de l'existance de la demande d'alignement dans la base

        const data = await Alnrequest.findOne({alrUid: param}).populate('owner').populate('sender').populate('receiver');

        if (data == null) { // La recherche n'a renvoyé aucun résultat. La demande d'alignement n'existe pas.

        const alnrequest = {alrUid: param};

        result.push(results[5]);
        result.push(alnrequest);

        return result;

        } else {

        // La recherche a renvoyé un résultat. La demande d'alignement existe.
        
        result.push(results[6]);
        result.push(data);

        return result;

        }

    }

}


