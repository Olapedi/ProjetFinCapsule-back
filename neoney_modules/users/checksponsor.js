var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Function

module.exports = async function checksponsor(neocode){

      // Vérification de l'existance de l'utilisateur dans la base

      const data = await User.findOne({neocode: neocode});
  
      if (data == null) {
  
        // La recherche n'a renvoyé aucun résultat. Le sponsor n'existe pas.

        return false;
  
      } else {

        // La recherche a renvoyé un résultat. L'utilisateur existe.

        return true;

      }

}
