const express = require('express');
const multer = require('multer');
const Users = require('../controllers/users');
const Meals = require('../controllers/meals');

const router = express.Router();

router.get('/', User.getAllUsers);
router.get('/:id', User.getOneUser);
router.put('/:id/profile', Users.updateUserProfile);
router.put('/:id/password', Users.updateUserPassword);
router.put('/:id/photo', Users.updateUserPhoto);

module.exports = router;