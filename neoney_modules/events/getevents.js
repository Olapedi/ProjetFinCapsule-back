
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Event = require('../../models/events')

// Import Project Modules

const results = require('../../neoney_results/results_events.json')

// Function

module.exports = async function getevents(param){

    let result = [];

    if (param == 'all') {

        const data = await Event.find().populate('owner');
      
        if (data.length == 0) {

        result.push(results[7])

        return result;

        } else {
        
        result.push(results[8])

        data.map((item) => {

            result.push(item)

        })
        
        return result;

        }

    } else {

        // Vérification de l'existance de l'événement dans la base

        const data = await Event.findOne({evtUid: param}).populate('owner');

        if (data == null) {

        // La recherche n'a renvoyé aucun résultat. L'événement n'existe pas.
        const event = {evtUid: param};

        result.push(results[9]);
        result.push(event);

        return result;

        } else {

        // La recherche a renvoyé un résultat. Le profil existe.
        
        result.push(results[10]);
        result.push(data);

        return result;

    }



    }

}

