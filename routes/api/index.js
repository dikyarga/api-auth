var express = require('express');
var router = express.Router();
let base64 = require('base-64');
const crypto = require('crypto');

// call the models
let db = require('../../models')

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('Print hello, ' + req.query.name + ' !')
});

router.post('/signup', function(req, res, next){
  
})

module.exports = router;
