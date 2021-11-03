const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const plantCtrl = require('../../controllers/plantCtrl');

// @route GET api/plants
// @desc Get all plants
// @access Private
router.get('/', auth, plantCtrl.getAll);

// @route POST api/plants
// @desc Add a plant
// @access Private
router.post('/', auth, plantCtrl.add);

// @route DELETE api/plants/:id
// @desc Delete a plant
// @access Private
router.delete('/:id', auth, plantCtrl.delete);

// @route PUT api/plants/:id
// @desc Update a plant
// @access Private
router.put('/:id', auth, plantCtrl.edit);

module.exports = router;
