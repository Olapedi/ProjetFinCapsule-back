var express = require('express');
var router = express.Router();
// var fetch = require('node-fetch');
const Event = require('../models/events');

// Import Project Modules
// const results = require('../neoney_results/results_events.json');
const newEvent = require('../neoney_modules/events/newevent');

// Création d'un nouvel événement
router.post('/new', async (req, res) => {
      
    console.log("From route events/new - req.body =>", req.body)

    // A priori on passe tout le body
    let result = await newEvent(req.body)

    console.log("From route events/new - tableau result =>", result)
    res.json(result);
    
  })
  

module.exports = router;
