var express = require("express");
var router = express.Router();
const uniqid = require("uniqid");
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// const Event = require("../models/events");
// const results = require("../neoney_results/results_events.json");

// Import Project Modules
// const createNewEvent = require("../neoney_modules/events/newevent");
// const getEventFromEvUid = require("../neoney_modules/events/getevent");

// Consultation de tous les événements (pour verif pour l'instant)
router.post("/", async (req, res) => {
    // let result = []
    // console.log('coucou from route upload', req.files)
    // if (!req.files || Object.keys(req.files).length === 0) {
    //     return res.status(400).send("Aucun fichier n'a été téléchargé.");
    //   }
    // console.log(req.files.file);
    // res.json({ result: true });
    // res.json(result);

    const ext = req.files.photoFromFront.name.split('.')[1]
    // const photoPath = `./tmp/${uniqid()}.${ext}`; // <= pour le local
    const photoPath = `/tmp/${uniqid()}.${ext}`;  // <= pour le déploiement sur Vercel
    console.log(photoPath)
    const resultMove = await req.files.photoFromFront.mv(photoPath);

    if (!resultMove) {
        const resultCloudinary = await cloudinary.uploader.upload(photoPath);
        fs.unlinkSync(photoPath);
        res.json({ result: true, url: resultCloudinary.secure_url });
        // res.json({ result: true, resultMove });
    } else {
        res.json({ result: false, error: resultMove });
    }
});

module.exports = router;
