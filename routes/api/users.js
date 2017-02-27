var express = require('express');
var router = express.Router();
let base64 = require('base-64');
const crypto = require('crypto');

// call the models
let db = require('../../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.User.findAll().then(function(users){
    res.json(users);
  })
});

// Get one user by ID
router.get('/:id', function(req, res, next){
  db.User.findById(req.params.id).then((user) => {
    res.json(user)
  })
})

// Store a new user
router.post('/', function(req, res, next){
  let salt = base64.encode(req.body.email)
  db.User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    salt: salt,
    password: crypto.createHmac('sha256', salt)
                   .update(req.body.password)
                   .digest('hex')
  }).then(() => {
    res.json('A user created')
  })
})

// Update data of a user

router.put('/:id', function(req, res, next){
  db.User.update({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email
  }, {
    where: {
      id: req.params.id
    }
  }).then((user) => {
    if (user == 1) {
      res.json(user)
    } else {
      res.json({
        status: false,
        msg: 'User with id : ' + req.params.id + ' doesnt exist'
      })
    }
  })
})

// delete a user

router.delete('/:id', function(req, res, next){
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('User deleted.')
  })
})

module.exports = router;
