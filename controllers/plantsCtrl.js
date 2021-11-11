const Plant = require('../models/Plant');

const plantCtrl = {
  getAll: async (req, res) => {
    try {
      const userId = req.user.id; // comes from auth middleware (and is included in the signed jwt token: jwt.sign(...))
      const plants = await Plant.find({ userId })
        .select('-__v')
        .sort({ name: 1 });
      const plantsWithCount = {
        count: plants.length,
        plants
      };
      res.status(200).json(plantsWithCount);
    } catch (err) {
      return res.status(500).json({ Error: 'Server error.' });
    }
  },

  add: async (req, res) => {
    try {
      const newPlant = new Plant({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        sowFrom: req.body.sowFrom,
        sowUntil: req.body.sowUntil,
        harvestFrom: req.body.harvestFrom,
        harvestUntil: req.body.harvestUntil,
        userId: req.user.id // comes from auth middleware (and is included in the signed jwt token: jwt.sign(...))
      });

      const plant = await newPlant.save();
      //  Don't output __v or userId fields
      res.status(201).json({
        _id: plant._id,
        name: plant.name,
        desc: plant.desc,
        category: plant.category,
        sowFrom: plant.sowFrom,
        sowUntil: plant.sowUntil,
        harvestFrom: plant.harvestFrom,
        harvestUntil: plant.harvestUntil
      });
    } catch (err) {
      return res.status(422).json({ Error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const plantToDelete = await Plant.findById(req.params.id);
      if (!plantToDelete)
        return res.status(404).json({
          Error: 'The plant you are trying to delete does not exist.'
        });
      await plantToDelete.remove();
      res.json('Plant was deleted successfully.');
    } catch (err) {
      res.status(500).json({ Error: err.message });
    }
  },

  edit: (req, res) => {
    Plant.findById(req.params.id, async (err, plant) => {
      if (!plant)
        return res.status(404).json({
          Error: 'The plant you are trying to update does not exist.'
        });
      try {
        plant.name = req.body.name || plant.name;
        plant.desc = req.body.desc || plant.desc;
        plant.category = req.body.category || plant.category;
        plant.sowFrom = req.body.sowFrom || plant.sowFrom;
        plant.sowUntil = req.body.sowUntil || plant.sowUntil;
        plant.harvestFrom = req.body.harvestFrom || plant.harvestFrom;
        plant.harvestUntil = req.body.harvestUntil || plant.harvestUntil;

        const updatedPlant = await plant.save();
        res.status(200).json(updatedPlant);
      } catch (err) {
        return res.status(422).json({ Error: err.message });
      }
    });
  }
};

module.exports = plantCtrl;
