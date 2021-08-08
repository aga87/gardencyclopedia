const express = require('express');
const router = express.Router();

const Plant = require('../../models/Plant');

// @route GET api/plants
// @desc Get all plants
// @access Public
router.get('/', (req, res) => {
  Plant.find()
    .sort({ name: 1 })
    .then(plants => res.json(plants));
});

module.exports = router;
