const Event = require("../../models/events");
const results = require("../../neoney_results/results_events.json");

// Fonction Helper pour traiter les requêtes depuis la route events/:evUid
// Prend 1 argument :
//  - evUid : correspond aux informations provenant du front reçues par le back
module.exports = async function getEventFromEvUid(evUid) {
    // Initilisation de la variable stockant les objets à renvoyer
    // 2 objets à priori :
    //    - message technique standardisé (objet avec 3 propriétés : id, message, result)
    //    - data
    let result = [];

    // Récupération de l'événement en base
    let searchedEvent = await Event.findOne({evUid}); // on reçoit null si rien n'a été trouvé
    console.log(evUid, searchedEvent)
    if (searchedEvent) {
        result.push(results[4]);
        result.push(searchedEvent);
        return result;
    } else {
        result.push(results[2]);
        result.push({});
        return result;
    }
};
