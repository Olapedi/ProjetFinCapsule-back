var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/date', (req, res) => {
 const date = new Date();
 res.json({ now: date });
});

module.exports = router;
