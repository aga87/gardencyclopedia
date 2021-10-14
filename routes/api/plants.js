const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Plant = require('../../models/Plant');

// @route GET api/plants
// @desc Get all plants
// @access Private
router.get('/', auth, (req, res) => {
  Plant.find()
    .select('-__v')
    .sort({ name: 1 })
    .then(plants => {
      const plantsWithCount = {
        count: plants.length,
        plants
      };
      res.status(200).json(plantsWithCount)})
    .catch(err => res.status(500).json({Error: "Server error."}));
});

// @route POST api/plants
// @desc Add a plant
// @access Private
router.post('/', auth, (req, res) => {
  const newPlant = new Plant({
    name: req.body.name,
    desc: req.body.desc,
    category: req.body.category,
    sowFrom: req.body.sowFrom,
    sowUntil: req.body.sowUntil,
    harvestFrom: req.body.harvestFrom,
    harvestUntil: req.body.harvestUntil
  });

  newPlant.save().then(plant => res.status(201).json({
    _id: plant._id,
    name: plant.name,
    desc: plant.desc,
    category: plant.category,
    sowFrom: plant.sowFrom,
    sowUntil: plant.sowUntil,
    harvestFrom: plant.harvestFrom,
    harvestUntil: plant.harvestUntil
  }))
  .catch(err => res.status(422).json({Error: err.message}));
});

// @route DELETE api/plants/:id
// @desc Delete a plant
// @access Private
router.delete('/:id', auth, (req, res) => {
  Plant.findById(req.params.id)
    .then(plant =>
      plant.remove().then(() => res.json('The plant was deleted successfully.'))
    )
    .catch(err =>
      res.status(404).json({Error: 'The plant you are trying to delete does not exist.'})
    );
});

// @route PUT api/plants/:id
// @desc Update a plant
// @access Private
router.put('/:id', auth, (req, res) => {
  Plant.findById(req.params.id, function(err, plant) {
    if (!plant) return res.status(404).json({Error: 'The plant you are trying to update does not exist.'});
    plant.name = req.body.name || plant.name;
    plant.desc = req.body.desc || plant.desc;
    plant.category = req.body.category || plant.category;
    plant.sowFrom = req.body.sowFrom || plant.sowFrom;
    plant.sowUntil = req.body.sowUntil || plant.sowUntil;
    plant.harvestFrom = req.body.harvestFrom || plant.harvestFrom;
    plant.harvestUntil = req.body.harvestUntil || plant.harvestUntil;
    plant.save().then(updatedPlant => res.status(200).json(updatedPlant)).catch(err => res.status(422).json({Error: err.message}));
  })
});

module.exports = router;
