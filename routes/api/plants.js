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
    .then(plants => 
      {
        const plantsWithCount = {
          count: plants.length,
          plants
        };
        
        res.status(200).json(plantsWithCount)
      }
    );
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
  .then(plant => res.status(201).json({
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

// TODO: 
// GET: User hit a wrong api endpoint e.g. api/plantss
// https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
// POST: Error 400 - Bad Request (bad syntax)