var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
var fetch = require('node-fetch');
const User = require('../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Project Modules

const results = require('../neoney_results/results_plans.json');
const getplans = require('../neoney_modules/plans/getplans');
const newplan = require('../neoney_modules/plans/newplan')


/* Lister tous les plans de la base */

router.get('/', async function(req, res, next) {

  let planDisplay = [];

  const result = await getplans('all');

  res.json(result);

});


// Créer un nouveau plan 

router.post('/new', async (req, res) => {

  const datareceived = [{

      label : req.body.label,
      title : req.body.title,
      subtitle : req.body.subtitle,
      description : req.body.description,
      refundPolicy : req.body.refundPolicy,
      limitCount : req.body.limitCount,
      isCountryLimited : req.body.isCountryLimited,
      isCityLimited : req.body.isCityLimited,
      isJobLimited : req.body.isJobLimited,
      prLabel : req.body.prLabel,
      prTitle : req.body.prTitle,
      prAmount : req.body.prAmount,
      prCv : req.body.prCv,
      prQv : req.body.prQv,
      prQp : req.body.prQp,
      prFrequency : req.body.prFrequency,
      prPriority : req.body.prPriority,

  }]

    const result = await newplan(datareceived);
    res.json(result);

  });




module.exports = router;







