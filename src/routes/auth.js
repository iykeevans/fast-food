const express = require('express');
const Auth = require('../controllers/auth');

const router = express.Router();

router.post('/login', Auth.login);
router.post('/register', Auth.register);

module.exports = router;