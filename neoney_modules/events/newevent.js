const Event = require('../../models/events');
const checkUserToken = require('../_common/checkusertoken')
const generateuid = require('../users/generateuid');
const results = require('../../neoney_results/results_events.json');
const { default: mongoose } = require('mongoose');


// Fonction Helper pour traiter les requêtes depuis la route events/new
// Prend 1 argument :
//  - eventData : correspond aux informations provenant du front reçues par le back
module.exports = async function newEvent(eventData) {

        // Initilisation de la variable stockant les objets à renvoyer
        // 2 objets à priori :
        //    - message technique standardisé (objet avec 3 propriétés : id, message, result)
        //    - data
        let result = []

        // Vérificattion de l'existence du token dans la base
        const checkUserTokenResult = await checkUserToken(eventData.token)

        // Exploitation conditionnelle du résultat
        if (!checkUserTokenResult[0].result) {
            result.push(checkUserTokenResult)
            return result
        } else if (!checkUserTokenResult[1].isActivated) {
            result.push(results[0])
            result.push(checkUserTokenResult[1])

            // console.log("From noeney_modules/events/newevents.js - if !isActivated =>", !checkUserTokenResult[1].isActivated)

            return result
        } else {

            // Cas où l'on peut effectivement créer le nouvel événement

            let userData = checkUserTokenResult[1]

            // TODO : faire la vérification que le uvUid n'existe pas déjà dans la base
            // avec un "while"
            let evtUid = generateuid("evt")

            // sous-document occurences
            const occurences = {

                uid : 0, // Number - pourra changer lorsqu'on gérera le multi-occurences
                // location : '', // { type: mongoose.Schema.Types.ObjectId, ref: 'locations' },
                // label : '', // String,
                title : eventData.title, // String,
                shortDescription : eventData.shortDescription, // String,
                // timeZone : '', // String,
                startDate : Date(eventData.startDate), // Date,
                startHour : Date(eventData.startHour), // Date,
                endDate : Date(eventData.endDate), // Date,
                endHour : Date(eventData.endHour), // Date,
                // instructions : '', // String,
                // isDeleted : '', // String,
                // deleter : null, // { type: mongoose.Schema.Types.ObjectId, ref: 'users' }

            }

            // Déclaration du document principal
            const newEvent = new Event({
                evtUid : evtUid, //String,
                owner : userData._id, //{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
                creationDate : Date.now(), //Date,
                // category : '', //String,
                // subCategory : '', //String,
                countries : [eventData.country], //[String],
                cities : [eventData.city], //[String],
                // coverage : '', //String,
                // jobCategories : [''], //[String],
                // jobSubCategories : [''], //[String],
                // interests : [''], //[String],
                // skills : [''], //[String],
                // experienceLevels : [''], //[String],
                // expertiseLevels : [''], //[String],
                title : eventData.title, //String,
                // shortDescription : '', //String,
                longDescription : eventData.longDescription, //String,
                // profilePicture : '', //String,
                // bannerPicture : '', //String,
                // mainVideo : '', //String,
                // pictures : '', //[String],
                // videos : [''], //[String],
                // cards : [null], //[cards],
                occurences : occurences, //[occurences],
                // admins : [null], //[admins],
                // legalinfos : [null], //[legalinfos],
                // testimonials : [null], //[testimonials],
                // updates : [null], //[updates],
                // tickets : [null], //[tickets],
                // coupons : [null], //[coupons],
                // attendees : [null], //[attendees],
                // documents : [null], //[documents],
                // isNetworking : '', //Boolean,
                isUniqueOccurence : true, //Boolean,
                isVisible : true, //Boolean,
                // privacy : '', //String,
                isDeleted : false, //Boolean,
                // endDate : null, //Date,
                // deleter : null, //{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }
            })

            // Création et sauvegarde de l'énévement
            const newEventCreated = await newEvent.save()

            // console.log("From noeney_modules/events/newevents.js - newEventCreated =>", newEventCreated)

            // Verif que l'événement 
            if (newEventCreated) {
                result.push(results[3])
                result.push(newEventCreated)
                return result
            } else {
                result.push(results[1])
                result.push(newEventCreated)
                return result
            }
        }


}

