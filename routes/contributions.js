var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');

// Import Project Modules

const results = require('../neoney_results/results_contributions.json');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const checkbodycontribution = require('../neoney_modules/contributions/checkbodycontribution');
const getcontributions = require('../neoney_modules/contributions/getcontributions');
const getprofiles = require('../neoney_modules/profiles/getprofiles');
const newcontribution = require('../neoney_modules/contributions/newcontribution');
const getcontributionsprofile = require('../neoney_modules/contributions/getcontributionsprofile');

/* Lister toutes les contributions de la base */

router.get('/', async function(req, res, next) {

  let contributionDisplay = [];

  const result = await getcontributions('all');

  res.json(result);

});


//Rechercher une contribution par son Uid

router.get('/:ctbUid', async function(req, res, next) {

  let contributionDisplay = [];

  const result = await getcontributions(req.params.ctbUid);

  res.json(result);

});


//Rechercher toutes les contributions du profil par le proUid

router.get('/profile/:proUid', async function(req, res, next) {

  let ContributionDisplay = [];

  const data = await getprofiles(req.params.proUid) // Vérifier que le profil existe

  if (data[0].result) {

      const result = await getcontributionsprofile(req.params.proUid);

      res.json(result);

  } else {

    const result = data;

    res.json(result);

  }

});


// Créer une nouvelle contribution 

router.post('/new', async (req, res) => {

  const datareceived = [{

    owner : req.body.owner,
    sender : req.body.sender,
    text : req.body.text,
    title : req.body.title,
    privacy : req.body.privacy,
    category : req.body.category,
    deadline : req.body.deadline,
    mainPicture : req.body.mainPicture,

  }]

  const checkresult = await checkbodycontribution(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés


  if (checkresult[0].result) { // Tous les champs sont remplis

        const result = await newcontribution(datareceived) // Appel de la fonction de création du contribution
        
        res.json(result);

        } else { // Tous les champs ne sont pas remplis
        
        res.json(checkresult);

      }


  });

module.exports = router;
