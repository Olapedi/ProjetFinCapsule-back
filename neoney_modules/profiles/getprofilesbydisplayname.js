var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Profile = require("../../models/profiles");

// Import Project Modules

const results = require("../../neoney_results/results_profiles.json");

// Function

module.exports = async function getprofilesbydisplayname(param) {
    let result = [];

    // Création d'un pattern regExp à partir du param
    const pattern = new RegExp(`[a-z]*${param}[a-z]*`, "i");

    // Recherche dans le sous document cards de la collection profiles à partir du modèle Profile
    // const data = await Profile.find({'cards': {$elemMatch: {'displayName': pattern}}}) // fonctionne aussi
    const data = await Profile.find({ "cards.displayName": pattern });

    // Test et mise en forme conditonnelle des résultats
    if (data[0]) {
        result.push(results[23]);
        result.push(data);
        return result;
    } else {
        result.push(results[22]);
        result.push(data);
        return result;
    }
};
