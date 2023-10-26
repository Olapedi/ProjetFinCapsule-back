var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');

// Import Project Modules

const checkbodyalnrequest = require('../neoney_modules/alnrequest/checkbodyalnrequest');
const getalnrequests = require('../neoney_modules/alnrequest/getalnrequests');
const getprofiles = require('../neoney_modules/profiles/getprofiles');
const newalnrequest = require('../neoney_modules/alnrequest/newalnrequest');
const getalnrequestsprofile = require('../neoney_modules/alnrequest/getalnrequestsprofile');

/* Lister toutes les requettes d'alignement de la base */

router.get('/', async function(req, res, next) {

  let alnrequestDisplay = [];
  
  const result = await getalnrequests('all');

  res.json(result);

});


//Rechercher une requette d'aligenement par son Uid

router.get('/:alrUid', async function(req, res, next) {

  let alnrequestDisplay = [];

  const result = await getalnrequests(req.params.alrUid);

  res.json(result);

});


//Rechercher toutes les requettes d'aligenement du profil par le proUid

router.get('/profile/:proUid', async function(req, res, next) {

  let alnrequestDisplay = [];

  const data = await getprofiles(req.params.proUid) // Vérifier que le profil existe

  if (data[0].result) {

      const result = await getalnrequestsprofile(req.params.proUid);

      res.json(result);

  } else {

    const result = data;

    res.json(result);

  }

});


// Créer une nouvelle requette d'alignement 

router.post('/new', async (req, res) => {

  const datareceived = [{

    owner : req.body.owner,
    sender : req.body.sender,
    receiver : req.body.receiver,
    message : req.body.message

  }]

  const checkresult = await checkbodyalnrequest(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés

  if (checkresult[0].result) { // Tous les champs sont remplis

        const result = await newalnrequest(datareceived) // Appel de la fonction de création de la requette d'alignement
        
        res.json(result);

        } else { // Tous les champs ne sont pas remplis
        
          res.json(checkresult);

      }


  });

module.exports = router;
