var express = require("express");
var router = express.Router();
const Event = require("../models/events");
const results = require('../neoney_results/results_events.json');


// Import Project Modules
const createNewEvent = require("../neoney_modules/events/newevent");
const getEventFromEvUid = require("../neoney_modules/events/getevent");

// Consultation de tous les événements (pour verif pour l'instant)
router.get("/", async (req, res) => {
    let result = await Event.find()
    res.json(result);
});

// Consultation d'un événement en particulier
router.get("/:evUid", async (req, res) => {
    let result = await getEventFromEvUid(req.params.evUid)
    console.log("From route - get '/:evUid' ", result)
    res.json(result);
});

// Création d'un nouvel événement
router.post("/new", async (req, res) => {
    // On passe tout le body
    let result = await createNewEvent(req.body);

    // Renvoie du résultat
    res.json(result);
});

module.exports = router;
