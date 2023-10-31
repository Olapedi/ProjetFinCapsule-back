var express = require("express");
var router = express.Router();
const Event = require("../models/events");
const results = require("../neoney_results/results_events.json");

const uploadToCloudinary = require('../neoney_modules/_common/upload')


// Import Project Modules
const newEvent = require("../neoney_modules/events/newevent");
const newEvent_formData = require("../neoney_modules/events/newevent_formdata");
const getEventFromEvUid = require("../neoney_modules/events/getevent");
const getevents = require("../neoney_modules/events/getevents");

// Consultation de tous les événements (pour verif pour l'instant)
router.get("/", async (req, res) => {
    let result = []
    resultAwait = await Event.find();
    result.push(results[5])
    result.push(...resultAwait)
    res.json(result);
});

// Consultation d'un événement en particulier
router.get("/:evtUid", async (req, res) => {
    let result = await getEventFromEvUid(req.params.evtUid);
    console.log("From route - get '/:evtUid' ", result);
    res.json(result);
});

// Création d'un nouvel événement
router.post("/new", async (req, res) => {
    console.log('files : ',req.files)
    //Envoi de l'image sur clouinary et récupération de l'url renvoyé
    const resultUpload = await uploadToCloudinary(req.files.picture, backIsLocal=true)
    console.log('resultUpload url : ', resultUpload[1])
    
    // On passe tout le body
    let fullBody = req.body
    fullBody['bannerPicture'] = resultUpload[1]
    console.log('fullBody : ',fullBody)
    let result = await newEvent(fullBody);

    console.log('result of the newEvent : ',result);

    // Renvoie du résultat
    res.json(result);
});

// Création d'un nouvel événement
router.post("/newformdata", async (req, res) => {
    // On passe tout le body
    // let result = await newEvent_formData(req.body);
    const result = await uploadToCloudinary(req.files.picture, backIsLocal=true)
    console.log(req.body)
    console.log(result);

    // Renvoi du résultat
    res.json(result)

});


// Recherche d'événements (test Kodzo)

router.get("/test/1/", async (req, res) => {

    let eventDisplay = [];

    const result = await getevents('all');
  
    res.json(result);

});

// Recherche d'événements par Uid (test Kodzo)

router.get("/test/1/:evtUid", async (req, res) => {

    let eventDisplay = [];

    const result = await getevents(req.params.evtUid);
  
    res.json(result);

});


module.exports = router;
