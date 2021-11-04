const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authCtrl = require('../../controllers/authCtrl');

// @route POST api/auth
// @desc Authenticate user
// @access Public
router.post('/', authCtrl.authenticate);

// @route GET api/auth/user
// @desc Get user data to continuously authenticate a logged-in user
// @access Private
router.get('/user', auth, authCtrl.getUser);

module.exports = router;
