require ('dotenv').config();


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var profilesRouter = require('./routes/profiles');
var plansRouter = require('./routes/plans');
var boostRouter = require('./routes/boosts');
var alertRouter = require('./routes/alerts');
var alnrequestRouter = require('./routes/alnrequests');
var uploadRouter = require('./routes/upload');
const fileUpload = require('express-fileupload');

var app = express();
const cors = require('cors');

const { default: mongoose } = require('mongoose');
require('./models/connection');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


// Autoriser toutes les origines (à des fins de démonstration, ne le faites pas en production sauf si c'est intentionnel)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/profiles', profilesRouter);
app.use('/plans', plansRouter);
app.use('/boosts', boostRouter);
app.use('/alerts', alertRouter);
app.use('/alnrequest', alnrequestRouter);
app.use('/upload', uploadRouter);

module.exports = app;