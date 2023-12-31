var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');
const Boost = require('../models/boosts')

// Import Project Modules

const results = require('../neoney_results/results_boosts.json');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');
const checkbodynewboost = require('../neoney_modules/boosts/checkbodynewboost');
const getboosts = require('../neoney_modules/boosts/getboosts');
const getprofiles = require('../neoney_modules/profiles/getprofiles');
const newboost = require('../neoney_modules/boosts/newboost');
const getboostsprofile = require('../neoney_modules/boosts/getboostsprofile');

/* Lister tous les boosts de la base */

router.get('/', async function(req, res, next) {

  let boostDisplay = [];

  const sendEmail = require('../neoney_modules/_common/sendEmail');
  
  const result = await getboosts('all');

  res.json(result);

});

router.delete('/',(req,res)=>{
  Boost.deleteMany({})
})


//Rechercher un boost par son Uid

router.get('/:bstUid', async function(req, res, next) {

  let boostDisplay = [];

  const result = await getboosts(req.params.bstUid);

  res.json(result);

});


//Rechercher tous les boosts du profil par le proUid

router.get('/profile/:proUid', async function(req, res, next) {

  let boostDisplay = [];

  const data = await getprofiles(req.params.proUid) // Vérifier que le profil existe

  if (data[0].result) {

      const result = await getboostsprofile(req.params.proUid);

      res.json(result);

  } else {

    const result = data;

    res.json(result);

  }

});


// Créer un nouveau boost 

router.post('/new', async (req, res) => {

  const datareceived = [{

    category : req.body.category,
    subCategory : req.body.subCategory,
    owner : req.body.owner,
    sender : req.body.sender,
    receiver : req.body.receiver,
    testimonial : req.body.testimonial

  }]

  const checkresult = await checkbodynewboost(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés


  if (checkresult[0].result) { // Tous les champs sont remplis

        const result = await newboost(datareceived) // Appel de la fonction de création du boost
        
        res.json(result);

        } else { // Tous les champs ne sont pas remplis
        
        res.json(checkresult);

      }


  });

module.exports = router;
