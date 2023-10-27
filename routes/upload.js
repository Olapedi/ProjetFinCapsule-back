var express = require("express");
var router = express.Router();
const uniqid = require("uniqid");
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const uploadToCloudinary = require('../neoney_modules/_common/upload')


router.post("/", async (req, res) => {
    const result = await uploadToCloudinary(req.files.photoFromFront, backIsLocal=true)
    console.log(req.body)
    res.json(result)

    // const ext = req.files.photoFromFront.name.split('.')[1]
    // // const photoPath = `./tmp/${uniqid()}.${ext}`; // <= pour le local
    // const photoPath = `/tmp/${uniqid()}.${ext}`;  // <= pour le déploiement sur Vercel
    // console.log(photoPath)
    // const resultMove = await req.files.photoFromFront.mv(photoPath);

    // if (!resultMove) {
    //     const resultCloudinary = await cloudinary.uploader.upload(photoPath);
    //     fs.unlinkSync(photoPath);
    //     res.json({ result: true, url: resultCloudinary.secure_url });
    //     // res.json({ result: true, resultMove });
    // } else {
    //     res.json({ result: false, error: resultMove });
    // }
});

module.exports = router;
