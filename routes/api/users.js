const router = require('express').Router();
const userCtrl = require('../../controllers/userCtrl');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', userCtrl.register); // FIXME: / register route ??

module.exports = router;
