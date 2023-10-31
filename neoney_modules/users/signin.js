var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/users');

// Authentication tools
const bcrypt = require('bcrypt');
const uid2 = require ('uid2');

const token = uid2(32);

// Import Project Modules

const results = require('../../neoney_results/results_users.json');
const getprofilesuser = require('../../neoney_modules/profiles/getprofilesuser');

// Function

module.exports = async function signin(credentials){

let result = [];

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/; // Initialisation du regex pour tester le format de l'email

function validateEmail(email) {

  return emailRegex.test(email);

}


const email = credentials[0].email.trim();
const password = credentials[0].password.trim();

const isValidEmail = validateEmail(email);

if (!isValidEmail) {

  result.push(results[0]) 

  return result;

} else {

    let data = await User.findOne({email: {$regex: new RegExp(email, 'i')}})
      
        if (data == null) {

          result.push(results[1]);

          return result;
          
          } else {

            if (!bcrypt.compareSync(password, data.password)) {

              result.push(results[2]);

              return result;

              } else {

                  const userProfiles = await getprofilesuser(data.usrUid); // Récupération des profiles de l'utilisateur

                  if (userProfiles[0].result) {

                    const profileDisplay = { // Initialisation des informations du profil nécessaires à l'affichage

                      result : true,
                      proUid : userProfiles[1].proUid,  
                      mainPicture: userProfiles[1].mainPicture,
                      
                      cards: [
            
                            {
                                uid: userProfiles[1].cards[0].uid,
                                displayName : userProfiles[1].cards[0].displayName,
                                title : userProfiles[1].cards[0].title,
                                organization : userProfiles[1].cards[0].organization,
                                description : userProfiles[1].cards[0].description,
                                phone : userProfiles[1].cards[0].phone,
                                email : userProfiles[1].cards[0].email,
                                website : userProfiles[1].cards[0].website,
                                isMain : userProfiles[1].cards[0].isMain,
            
                            }
                        ],
                        
                    }
                    

                    let userSignedIn = {
                              
                      firstname: data.firstname, 
                      lastname: data.lastname,
                      email: data.email, 
                      token: data.token, 
                      usrUid: data.usrUid, 
                      neocode: data.neocode, 
                      country: data.country, 
                      city: data.city, 
                      phone: data.phone, 
                      sponsor: data.sponsor, 
                      isCountryLimited : data.isCountryLimited,
                      isCityLimited : data.isCityLimited,
                      isJobLimited : data.isJobLimited,
                      limitCount : data.limitCount,
                      isActivated : data.isActivated,    
                      isCertified : data.isCertified,
                      signUpDate : data.signUpDate,
                      profile : profileDisplay,
                  
                      }

                  result.push(results[3]);
                  result.push(userSignedIn);

                  return result;


                  } else {

                    let userSignedIn = {
                              
                      firstname: data.firstname, 
                      lastname: data.lastname,
                      email: data.email, 
                      token: data.token, 
                      usrUid: data.usrUid, 
                      neocode: data.neocode, 
                      country: data.country, 
                      city: data.city, 
                      phone: data.phone, 
                      sponsor: data.sponsor, 
                      isCountryLimited : data.isCountryLimited,
                      isCityLimited : data.isCityLimited,
                      isJobLimited : data.isJobLimited,
                      limitCount : data.limitCount,
                      isActivated : data.isActivated,    
                      isCertified : data.isCertified,
                      signUpDate : data.signUpDate,
                      profile : { result : false },
                  
                  }

                  result.push(results[3]);
                  result.push(userSignedIn);

                  return result;

              }
              
            }

          }

      }

}