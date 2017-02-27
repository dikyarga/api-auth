var express = require('express');
var router = express.Router();
var userController = require('../../controllers/users')

/* GET users listing. */
router.get('/', userController.all);

// Get one user by ID
router.get('/:id', userController.show)

// Store a new user
router.post('/', userController.create)

// Update data of a user
router.put('/:id', userController.update)

// delete a user
router.delete('/:id', userController.delete)

module.exports = router;
