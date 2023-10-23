var express = require("express");
var router = express.Router();
const Event = require("../models/events");

// Import Project Modules
const createNewEvent = require("../neoney_modules/events/newevent");
const getAllEvents = require("../neoney_modules/events/newevent");

// Consultation de tous les événements (pour verif pour l'instant)
router.get("/", async (req, res) => {
    let result = await Event.find()
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
