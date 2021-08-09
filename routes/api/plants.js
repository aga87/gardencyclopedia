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

// @route POST api/plants
// @desc Add a plant
// @access Public
router.post('/', (req, res) => {
  const newPlant = new Plant({
    name: req.body.name
  })

  newPlant.save().then(plant => res.json(plant));
});

// @route DELETE api/plants/:id
// @desc Delete a plant
// @access Public
router.delete('/:id', (req, res) => {
  Plant.findById(req.params.id)
    .then(plant => plant.remove().then(() => res.json("The plant was deleted successfully.")))
    .catch(err => res.status(404).json("Something went wrong. Please try again."));
});


module.exports = router;
