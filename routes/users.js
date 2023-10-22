var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');
const User = require('../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Project Modules

const results = require('../neoney_results/results_users.json');
const signin = require('../neoney_modules/users/signin')
const signup = require('../neoney_modules/users/signup');

/* Lister tous les utilisateurs de la base */

router.get('/', function(req, res, next) {

  let userDisplay = [];

  User.find().then((data) => {

    data.map((item) => {

      userDisplay.push({
        
        firstname: item.firstname, 
        lastname: item.lastname, 
        email: item.email, 
        token: item.token, 
        useUid: item.useUid, 
        neocode: item.neocode, 
        country: item.country, 
        city: item.city, 
        phone: item.phone, 
        sponsor: item.sponsor, 
        isCountryLimited : item.isCountryLimited,
        isCityLimited : item.isCityLimited,
        isJobLimited : item.isJobLimited,
        limitCount : item.limitCount,
        isActivated : item.isActivated,    
        isCertified : item.isCertified,
        signUpDate : item.signUpDate,
      
      })

    })

    res.json(userDisplay);

  })

});

// Connecter un utilisateur avec son adresse mail et son mot de passe 

router.post('/signin', async (req, res) => {

  const credentials = [{
  
    email : req.body.email,
    password: req.body.password,
  
  }]

  const result = await signin(credentials);

  res.json(result);
  
})

// Inscrire un nouvel utilisateur 

router.post('/signup', async (req, res) => {

  const datareceived = [{

    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    password: req.body.password,
    country : req.body.country,
    city : req.body.city,
    phone : req.body.phone,
    sponsor : req.body.sponsor,

  }]
  
  const result = await signup(datareceived);
  
  res.json(result);
  
  });

module.exports = router;
