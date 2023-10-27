var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');


// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Project Modules

const results = require('../neoney_results/results_profiles.json');
const newprofile = require('../neoney_modules/profiles/newprofile');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const checkbodynewprofile = require('../neoney_modules/profiles/checkbodynewprofile');
const getprofiles = require('../neoney_modules/profiles/getprofiles')
const getprofilesuser = require('../neoney_modules/profiles/getprofilesuser')
const getprofilesbydisplayname = require('../neoney_modules/profiles/getprofilesbydisplayname')

/* Lister tous les profils de la base */

router.get('/', async function(req, res, next) {

  let profileDisplay = [];

  const result = await getprofiles('all');

  res.json(result);

});

//Rechercher un profil par son Uid

router.get('/:proUid', async function(req, res, next) {

  let profileDisplay = [];

  const result = await getprofiles(req.params.proUid);

  res.json(result);

});

//Rechercher tous les profils de l'utilisateur par son usrUid 

router.get('/user/:usrUid', async function(req, res, next) {

  let profileDisplay = [];

  const data = await checkuseruid(req.params.usrUid) // Vérifier que l'utilisateur existe

  if (data[0].result) {

  const result = await getprofilesuser(req.params.usrUid);

  res.json(result);

  } else {

    const result = data;

    res.json(result);

  }

});

//Rechercher tous les profils qui matchent une regexp sur leur displayName

router.get('/displayname/:displayName', async function(req, res, next) {

  let result = await getprofilesbydisplayname(req.params.displayName)
  console.log(result)
  res.json(result)
})


// Créer un nouveau profil 

router.post('/new', async (req, res) => {

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
    
    const result = await newprofile(datareceived);
    res.json(result);

  } else {
    
    res.json(checkresult);

  }

  });

  
module.exports = router;
