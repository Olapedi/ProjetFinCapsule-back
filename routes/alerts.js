var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');

// Import Project Modules

const results = require('../neoney_results/results_alerts.json');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const checkbodynewalert = require('../neoney_modules/alerts/checkbodynewalert');
const getalerts = require('../neoney_modules/alerts/getalerts')

/* Lister toutes les alertes de la base */

router.get('/', async function(req, res, next) {

  let alertDisplay = [];

  const result = await getalerts('all');

  res.json(result);

});

//Rechercher une alerte par son Uid

router.get('/:altUid', async function(req, res, next) {

  let alertDisplay = [];

  const result = await getalerts(req.params.altUid);

  res.json(result);

});

//Rechercher tous les boosts du profil par son proUid 

router.get('/profile/:usrUid', async function(req, res, next) {

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
