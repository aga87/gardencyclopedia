const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    trim: true,
    maxLength: 100
  },
  category: {
    type: String,
    enum: ['Uncategorised', 'Vegetables', 'Fruits', 'Herbs', 'Flowers'],
    default: 'Uncategorised'
  },
  sowFrom: {
    type: String,
    enum: months,
    required: [
      hasSowUntil,
      'You need to specify the starting month if the sowing end date is specified.'
    ]
  },
  sowUntil: {
    type: String,
    enum: months
  },
  harvestFrom: {
    type: String,
    enum: months,
    required: [
      hasHarvestUntil,
      'You need to specify the starting month if the harvesting end date is specified.'
    ]
  },
  harvestUntil: {
    type: String,
    enum: months
  }
});

// Validators

function hasSowUntil() {
  return this.sowUntil != null;
}

function hasHarvestUntil() {
  return this.harvestUntil != null;
}

module.exports = Plant = mongoose.model('plant', PlantSchema);
