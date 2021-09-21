const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantCategories = ['uncategorised', 'vegetables', 'fruits', 'herbs', 'flowers'];

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

const invalidMonthMsg = `{VALUE} is not a valid month. Valid months are: ${months.join(', ')}.`;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'This field is required.'],
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
      message: `{VALUE} is not a valid plant category. The allowed categories are: ${plantCategories.join(', ')}.`
    },
    default: plantCategories[0],
    trim: true
  },
  sowFrom: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasSowUntil,
      'The starting month of the sowing season is required if the ending month of the sowing season (sowUntil) is set.'
    ],
    trim: true
  },
  sowUntil: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasSowFrom,
      'The ending month of the sowing season is required if the starting month of the sowing season (sowFrom) is set.'
    ],
    trim: true
  },
  harvestFrom: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasHarvestUntil,
      'The starting month of the harvesting season is required if the ending month of the harvesting season (harvestUntil) is set.'
    ],
    trim: true
  },
  harvestUntil: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasHarvestFrom,
      'The ending month of the harvesting season is required if the starting month of the harvesting season (harvestFrom) is set.'
    ],
    trim: true
  }
});

// Validators

function hasSowFrom() {
  return this.sowFrom != null;
}

function hasSowUntil() {
  return this.sowUntil != null;
}

function hasHarvestFrom() {
  return this.harvestFrom != null;
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
