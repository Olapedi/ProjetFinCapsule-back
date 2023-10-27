var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');

// Import Project Modules

const results = require('../neoney_results/results_alnrequest.json')
const checkbodyalnrequest = require('../neoney_modules/alnrequest/checkbodyalnrequest');
const getalnrequests = require('../neoney_modules/alnrequest/getalnrequests');
const getprofiles = require('../neoney_modules/profiles/getprofiles');
const newalnrequest = require('../neoney_modules/alnrequest/newalnrequest');
const putalnrequests = require('../neoney_modules/alnrequest/putalnrequests')
const getalnrequestsprofile = require('../neoney_modules/alnrequest/getalnrequestsprofile');
const checkalnrequests = require('../neoney_modules/alnrequest/checkalnrequests');
const checkbodyputalnrequest = require('../neoney_modules/alnrequest/checkbodyputalnrequest');

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

  res.json(results);

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


// Créer une nouvelle demande d'alignement 

router.post('/new', async (req, res) => {

  const datareceived = [{

    owner : req.body.owner,
    sender : req.body.sender,
    receiver : req.body.receiver,
    message : req.body.message

  }]

  const checkresult = await checkbodyalnrequest(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés

  if (checkresult[0].result) { // Tous les champs sont remplis

        const checkAlign = await checkalnrequests(datareceived[0].sender, datareceived[0].receiver); // Vérifier qu'il n'y ait pas de demande en attente entre ces 2 profils

              if (checkAlign[0].result) { // Si les deux profils ne sont pas déjà alignés. Result true.

                const result = await newalnrequest(datareceived) // Appel de la fonction de création de la requette d'alignement
              
                res.json(result);

              } else { // Si les deux profils sont déjà alignés. Demande refusée.

                res.json(checkAlign);

              }

        } else { // Tous les champs ne sont pas remplis
        
          res.json(checkresult);

      }


  });


// Renvoyer un message si le paramètre alrUid n'est pas ajouté à la route put d'une demande d'alignement

router.put('/', async function(req, res, next) {

  let alnrequestDisplay = [];
  
  let result = [];

  result.push(results[28])

  res.json(result);

});


// La bonne route pour Accepter ou refuser une demande d'alignement 

router.put('/:alrUid', async (req, res) => {

  const datareceived = [{

    alrUid : req.params.alrUid, // Uid de la demande d'alignement à modifier
    ender : req.body.ender, // Uid de l'utilisateur connecté qui fait la modififcation
    action : req.body.action // 0 pour accepter la demande / 1 pour refuser la demande / 2 pour supprimer la demande et bloquer l'utilisateur et le profile

  }]

  const checkresult = await checkbodyputalnrequest(datareceived[0]); // Vérifier si tous les champs ont bien été renseignés

  if (checkresult[0].result) { // Tous les champs sont remplis

        const checkAlign = await getalnrequests(datareceived[0].alrUid); // Vérifier que cette demande d'aligenement existe bien

              if (checkAlign[0].result) { // Si la demande d'alignement existe 

                  const result = await putalnrequests(checkAlign[1], datareceived[0]) // Appel de la fonction de modification de la demande d'alignement
                  
                  res.json(result);

              } else { // Si les deux profils sont déjà alignés. Demande refusée.

                res.json(checkAlign);
 
              }
 
        } else { // Tous les champs ne sont pas remplis
        
          res.json(checkresult);

      }


  });



module.exports = router;
