var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Alnrequest = require('../../models/alnrequests');

// Import Project Modules

const results = require('../../neoney_results/results_alnrequest.json');

// Function

module.exports = async function checkalnrequests(param1, param2){

    let result = [];

    if (param1 == param2) {

        const profiles = { profil1 : param1, profil2 : param2 };

        result.push(results[26]);
        result.push(profiles);

        return result;

    } else {


            const data = await Alnrequest.find().populate('owner').populate('sender').populate('receiver');

            const sentData = await data.filter((e) => e.sender.proUid == param1); // Liste des demandes d'alignement envoyées par param1
            
            const receivedData = await data.filter((e) => e.receiver.proUid == param1); // Liste des demandes d'alignement reçues par param1

            const sentDuo = await sentData.filter((e) => e.receiver.proUid == param2); // Liste des demandes d'alignement envoyées par param1 à param2
            const receivedDuo = await receivedData.filter((e) => e.sender.proUid == param2); // Liste des demandes d'alignement reçues par param1 de la part de param2


            if (sentDuo.length == 0) { // Param1 n'a encore jamais envoyé de demande à param2

                if (receivedDuo.length == 0) { // Param1  n'a jamais rien reçu non plus de param2. L'envoi de la demande est autorisé.

                    result.push(results[25])

                    return result;

                } else { // Param1 a déjà reçu une demande de la part de Param2. L'envoie de la demande est refusé.

                    result.push(results[24])
                    result.push(...receivedDuo);

                    return result;
                }
            
            } else { // Param1 a déjà reçu une demande de la part de Param2. L'envoie de la demande est refusé.


                    result.push(results[24])
                    result.push(...sentDuo);

                    return result;

            }


    }

}
