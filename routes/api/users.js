const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/usersCtrl');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', usersCtrl.register);

module.exports = router;
