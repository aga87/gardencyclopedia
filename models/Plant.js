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

const plantCategories = ['uncategorised', 'vegetables', 'fruits', 'herbs', 'flowers'];

const PlantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Give your plant a name'],
    maxLength: [20, 'Cannot be longer than 20 characters - {VALUE} exceeds the length limit.'],
    trim: true
  },
  desc: {
    type: String,
    maxLength: [30, 'Cannot be longer than 30 characters - {VALUE} exceeds the length limit.'],
    trim: true,
  },
  category: {
    type: String,
    lowercase: true,
    trim: true,
    enum: { 
      values: plantCategories,
      message: `The allowed categories are: ${plantCategories.join(', ')}`
    },
    default: plantCategories[0]
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

// FIXME: How to use the pre save middleware? 
// https://stackoverflow.com/questions/28116533/how-can-i-capitalize-strings-in-mongoose

// PlantSchema.pre('save', function (next) {
//   // capitalize
//   this.sowFrom.charAt(0).toUpperCase() + this.sowFrom.slice(1).toLowerCase();
//   next();
// });

module.exports = Plant = mongoose.model('plant', PlantSchema);
