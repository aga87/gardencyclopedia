const express = require('express');
const router = express.Router();

const Plant = require('../../models/Plant');

// @route GET api/plants
// @desc Get all plants
// @access Public
router.get('/', (req, res) => {
  Plant.find()
    .select('-__v')
    .sort({ name: 1 })
    .then(plants => res.status(200).json(plants));
});

// @route POST api/plants
// @desc Add a plant
// @access Public
router.post('/', (req, res) => {
  const newPlant = new Plant({
    name: req.body.name,
    desc: req.body.desc,
    category: req.body.category,
    sowFrom: req.body.sowFrom,
    sowUntil: req.body.sowUntil,
    harvestFrom: req.body.harvestFrom,
    harvestUntil: req.body.harvestUntil
  });

  newPlant.save()
  .then(plant => res.status(201).json(plant))
  .catch(err => res.status(422).json({Error: err.message}));
});

// @route DELETE api/plants/:id
// @desc Delete a plant
// @access Public
router.delete('/:id', (req, res) => {
  Plant.findById(req.params.id)
    .then(plant =>
      plant.remove().then(() => res.json('The plant was deleted successfully.'))
    )
    .catch(err =>
      res.status(404).json('The plant you are trying to delete does not exist.')
    );
});

module.exports = router;
