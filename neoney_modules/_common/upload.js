const uniqid = require("uniqid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Import Neoney Results Token
const results = require("../../neoney_results/results_upload.json");

// Fonction qui :
//    - prend en paramètre un fichier (reçu du front)
//    - l'upload dans cloudinary
//    - renvoie l'URI créée
module.exports = async function uploadToCloudinary(
    fileFromFront,
    backIsLocal = false
) {
    // Initialisation à vide de la variable de résultat
    let result = [];

    // Stockage local temporaire du fichier avec nom unique
    let photoPath = ``;
    const ext = fileFromFront.name.split(".")[1];
    if (backIsLocal) {
        photoPath = `./tmp/${uniqid()}.${ext}`; // <= pour le local
    } else {
        photoPath = `/tmp/${uniqid()}.${ext}`; // <= pour le déploiement sur Vercel
    }
    // console.log(photoPath)
    const resultMove = await fileFromFront.mv(photoPath);

    // Upload du fichier sur cloudinary
    // Gestion conditionnelle des resultats - à améliorer
    // Investiguer le message de retour de cloudinary, et faire des messages d'erreurs potentielles + ciblés
    if (!resultMove) {
        const resultCloudinary = await cloudinary.uploader.upload(photoPath);
        fs.unlinkSync(photoPath);
        result.push(results[1]);
        result.push(resultCloudinary.url);
        return result;
    } else {
        result.push(results[0]);
        result.push(resultMove);
        return result;
    }

};
