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

            const newItem = {

                ctbUid : item.ctbUid,
                usrUid : item.owner.usrUid,
                proUid : item.sender.proUid,
                neocode : item.owner.neocode,
                country : item.owner.country,
                city : item.owner.city,
                senderDisplayName : item.sender.cards[0].displayName,
                senderTitle : item.sender.cards[0].title,
                sendrOrganization : item.sender.cards[0].organization,
                title : item.title,
                text : item.text,
                privacy : item.privacy,
                category : item.category,
                deadline : item.deadline,
                mainPicture : item.mainPicture,
                hashtags : item.hashtags,
                likes : item.likes,
                alerts : item.alerts,
                comments : item.comments

            }

            result.push(newItem)

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
        

            const newItem = {

                ctbUid : data.ctbUid,
                usrUid : data.owner.usrUid,
                proUid : data.sender.proUid,
                neocode : data.owner.neocode,
                country : data.owner.country,
                city : data.owner.city,
                senderDisplayName : data.sender.cards[0].displayName,
                senderTitle : data.sender.cards[0].title,
                sendrOrganization : data.sender.cards[0].organization,
                title : data.title,
                text : data.text,
                privacy : data.privacy,
                category : data.category,
                deadline : data.deadline,
                mainPicture : data.mainPicture,
                hashtags : data.hashtags,
                likes : data.likes,
                alerts : data.alerts,
                comments : data.comments

            }

        result.push(results[6]);
        result.push(newItem);

        return result;

        }

    }

}


