var express = require('express');
var router = express.Router();

let authController = require('../../controllers/auth')

router.post('/signup', authController.signup)

router.post('/signin', authController.signin)


/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('Print hello, ' + req.query.name + ' !')
});

module.exports = router;
