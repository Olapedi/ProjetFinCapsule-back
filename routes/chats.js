var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');

// Import Project Modules

const checkbodynewchat = require('../neoney_modules/chats/checkbodynewchat');
const getchats = require('../neoney_modules/chats/getchats');
const getprofiles = require('../neoney_modules/profiles/getprofiles');
const newchat = require('../neoney_modules/chats/newchat');
const getchatsprofile = require('../neoney_modules/chats/getchatsprofile');

/* Lister toutes les conversations de la base */

router.get('/', async function(req, res, next) {

  let chatDisplay = [];
  
  const result = await getchats('all');

  res.json(result);

});


//Rechercher une conversation par son Uid

router.get('/chtUid', async function(req, res, next) {

  let chatDisplay = [];

  const result = await getchats(req.params.chtUid);

  res.json(result);

});


//Rechercher toutes les conversations du profil par le proUid

router.get('/profile/:proUid', async function(req, res, next) {

  let chatDisplay = [];

  const data = await getprofiles(req.params.proUid) // Vérifier que le profil existe

  if (data[0].result) {

      const result = await getchatsprofile(req.params.proUid);

      res.json(result);

  } else {

    const result = data;

    res.json(result);

  }

});


// Créer une nouvelle conversation 

router.post('/new', async (req, res) => {

  const datareceived = [{

    owner : req.body.owner,
    sender : req.body.sender,
    receiver : req.body.receiver,
    subject : req.body.subject,
    text : req.body.text

  }]

  const checkresult = await checkbodynewchat(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés

  if (checkresult[0].result) { // Tous les champs sont remplis

        const result = await newchat(datareceived) // Appel de la fonction de création du chat
        
        res.json(result);

        } else { // Tous les champs ne sont pas remplis
        
        res.json(checkresult);

      }

  });

module.exports = router;
