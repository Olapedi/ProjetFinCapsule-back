var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');

// Import Project Modules

const results = require('../neoney_results/results_alerts.json');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const checkbodynewalert = require('../neoney_modules/alerts/checkbodynewalert');
const getalerts = require('../neoney_modules/alerts/getalerts')
const newalert = require('../neoney_modules/alerts/newalert');

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

//Rechercher tous les alerts du profil par son proUid 

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



// Créer une nouvelle alerte

router.post('/new', async (req, res) => {

  const datareceived = [{

    category : req.body.category,
    subCategory : req.body.subCategory,
    owner : req.body.owner,
    sender : req.body.sender,
    receiver : req.body.receiver,
    testimonial : req.body.testimonial

  }]

  const checkresult = await checkbodynewalert(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés

  if (checkresult[0].result) { // Tous les champs sont remplis

        const result = await newalert(datareceived) // Appel de la fonction de création du alert
        
        res.json(result);

        } else { // Tous les champs ne sont pas remplis
        
        res.json(checkresult);

      }


  });

  
module.exports = router;
