const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const plantsCtrl = require('../../controllers/plantsCtrl');

// @route GET api/plants
// @desc Get all plants
// @access Private
router.get('/', auth, plantsCtrl.getAll);

// @route POST api/plants
// @desc Add a plant
// @access Private
router.post('/', auth, plantsCtrl.add);

// @route DELETE api/plants/:id
// @desc Delete a plant
// @access Private
router.delete('/:id', auth, plantsCtrl.delete);

// @route PUT api/plants/:id
// @desc Update a plant
// @access Private
router.put('/:id', auth, plantsCtrl.edit);

module.exports = router;
