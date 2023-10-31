var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');
const User = require('../models/users');

// Import Project Modules

const signin = require('../neoney_modules/users/signin')
const signup = require('../neoney_modules/users/signup');
const activateuser = require('../neoney_modules/users/activateuser');
const newprofile = require('../neoney_modules/profiles/newprofile');
const checkbodynewprofile = require('../neoney_modules/profiles/checkbodynewprofile');
const getusers = require('../neoney_modules/users/getusers');
const checkbodysignup = require('../neoney_modules/users/checkbodysignup');
const sendEmail = require('../neoney_modules/_common/sendEmail');
const sendgridEmail = require('../neoney_modules/_common/sendgridEmail');
const uploadToCloudinary = require('../neoney_modules/_common/upload')


/* Lister tous les utilisateurs de la base */

router.get('/', async function(req, res, next) {

  let userDisplay = [];

  const result = await getusers('all');

  res.json(result);

});

//Rechercher un utilisateur par son Uid

router.get('/:usrUid', async function(req, res, next) {

  let userDisplay = [];

  const result = await getusers(req.params.usrUid);


  res.json(result);

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
    sponsor : req.body.sponsor

  }]

  const resultcheck = await checkbodysignup(datareceived[0]); // Vérifier que les données ne sont pas vides

  if (resultcheck[0].result) { // Tous les champs sont remplis

    const result = await signup(datareceived);
  
    res.json(result);

  } else { // Certains champs ne sont pas remplis 

    res.json(resultcheck);

  }


  
});


// Activation de l'utilisateur après son inscription et création du premier profil

router.post('/activate', async (req, res) => {

  //Envoi de l'image sur clouinary et récupération de l'url renvoyé
  const resultUpload = await uploadToCloudinary(req.files.picture, backIsLocal=true)
      
  const result = [];

  const userreceived = {
    
    usrUid : req.body.usrUid,
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
    usrUid : req.body.usrUid,
    mainPicture : resultUpload[1]
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
