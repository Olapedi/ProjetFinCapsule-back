var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');


// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Project Modules

const results = require('../neoney_results/results_users.json');
const newprofile = require('../neoney_modules/profiles/newprofile');
const checkuseruid = require('../neoney_modules/_common/checkuseruid');

router.get('/', async function(req, res, next) {

  const result = await checkuseruid('20231022f1403');
  res.json(result);

});

module.exports = router;

// Créer un nouveau profil 

router.post('/new', async (req, res) => {

  const datareceived = [{

    displayName : req.body.displayName,
    title : req.body.title,
    organization : req.body.organization,
    description : req.body.description,
    type : req.body.type,
    jobCategories : req.body.jobCategories,
    jobSubCategories : req.body.jobSubCategories,
    website : req.body.website,
    phone : req.body.phone,
    email : req.body.email,
    useUid : req.body.useUid

  }]
  
  const result = await newprofile(datareceived);
  
  console.log(result)
  res.json(result);
  
  });

module.exports = router;
