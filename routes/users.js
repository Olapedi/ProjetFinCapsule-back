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
const activateuser = require('../neoney_modules/users/activateuser');
const newprofile = require('../neoney_modules/profiles/newprofile');
const checkbodynewprofile = require('../neoney_modules/profiles/checkbodynewprofile');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const getusers = require('../neoney_modules/users/getusers')

/* Lister tous les utilisateurs de la base */

router.get('/', async function(req, res, next) {

  let userDisplay = [];

  const result = await getusers('all');

  res.json(result);

});

/*
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

*/


//Rechercher un utilisateur par son Uid

router.get('/:useUid', (req,res) =>{
  const data = checkuseruid(req.params.useUid)
  res.json({data})
  })

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

// Activation de l'utilisateur après son inscription et création du premier profil

router.post('/activate', async (req, res) => {

  const result = [];

  const userreceived = {
    
    useUid : req.body.useUid,
    activationCode : req.body.activationCode,

  }

  const datareceived = [{

    displayName : req.body.displayName,
    title : req.body.title,
    organization : req.body.organization,
    description : req.body.description,
    jobCategories : req.body.jobCategories,
    jobSubCategories : req.body.jobSubCategories,
    website : req.body.website,
    phone : req.body.phone,
    email : req.body.email,
    useUid : req.body.useUid

  }]
  
  const checkresult = await checkbodynewprofile(datareceived[0]);

  if (checkresult[0].result) {
    
    const activationResult = await activateuser(userreceived);

    if (activationResult[0].result) {
  
      const resultProfile = await newprofile(datareceived);
    
      result.push(activationResult[0]);
      result.push(resultProfile);
  
      res.json(result);
  
    } else {
  
      res.json(activationResult);
  
    }

  } else {
    
    res.json(checkresult);

  }
  
});

module.exports = router;
