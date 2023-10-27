
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../../models/profiles')

// Import Project Modules

const results = require('../../neoney_results/results_profiles.json')

// Function

module.exports = async function getprofilesuser(param){

    let result = [];

        // Recherche des profils de l'utilisateur

        const data = await Profile.find().populate('owner');


       await data.map((item) => {console.log(item + '------------')});

        return ('data')
        const data2 = data.filter((e) => e.owner.usrUid == param)


        if (data2.length == 0) {

        // La recherche n'a renvoyé aucun résultat. L'utilisateur n'a aucun profil.
        const user = {usrUid: param};

        result.push(results[27]);
        result.push(user);

        return result;

        } else {

        // La recherche a renvoyé un résultat. L'utilisateur a des profils dans la base.

        result.push(results[23]);
        result.push(data2[0]);

        return result;

    }

 
}

