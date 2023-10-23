var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Import Neoney Results Token
const results = require('../../neoney_results/results_token.json');

// Function
module.exports = async function checkUserToken(token){

    let result = [];

      // Vérification de l'existance de l'utilisateur dans la base
      const data = await User.findOne({token: token});
  
      if (data == null) {
  
        // La recherche n'a renvoyé aucun résultat. L'utilisateur n'existe pas.
        const user = {token: token};
        result.push(results[0]); // Token non valide
        result.push(user);

        return result;
  
      } else {

        // La recherche a renvoyé un résultat. L'utilisateur existe bien.
        result.push(results[1]);
        result.push(data);

        return result;

      }

}
