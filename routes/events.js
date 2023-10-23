var express = require('express');
var router = express.Router();
const { default: mongoose } = require('mongoose');
// var fetch = require('node-fetch');
const User = require('../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');

// Import Project Modules
const results = require('../neoney_results/results_events.json');

// Création d'un nouvel événement
router.post('/new', async (req, res) => {

    const credentials = [{

      email : req.body.email,
      password: req.body.password,

    }]
  
    const result = await signin(credentials);
  
    res.json(result);
    
  })
  