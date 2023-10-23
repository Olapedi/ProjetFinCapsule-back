var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

// Import Neoney Results Token
const results = require('../../neoney_results/results_token.json');

// Function
module.exports = async function checkusertoken(token){

    let result = [];

      // Vérification de l'existance de l'utilisateur dans la base

      const data = await User.findOne({useruid: useruid});
  
      if (data == null) {
  
        // La recherche n'a renvoyé aucun résultat. L'utilisateur n'existe pas.
        const user = {useruid: useruid};

        result.push(results[15]);
        result.push(user);

        return result;
  
      } else {

        // La recherche a renvoyé un résultat. L'utilisateur existe.

        const user = {firstname : data.firstname, email: data.email, token: data.token, useruid: data.useruid}

        result.push(results[14]);
        result.push(user);

        return result;

      }

}
