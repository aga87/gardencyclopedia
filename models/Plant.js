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
    default: '',
    maxLength: [30, 'Cannot be longer than 30 characters - {VALUE} exceeds the length limit.'],
    trim: true
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
    required: [
      hasSowUntil,
      'The starting month of the sowing season is required if the ending month of the sowing season (sowUntil) is specified.'
    ],
    default: '',
    enum: {
      values: ['', ...months],
      message: invalidMonthMsg
    },
    trim: true
  },
  sowUntil: {
    type: String,
    required: [
      hasSowFrom,
      'The ending month of the sowing season is required if the starting month of the sowing season (sowFrom) is specified.'
    ],
    default: '',
    enum: {
      values: ['', ...months],
      message: invalidMonthMsg
    },
    trim: true
  },
  harvestFrom: {
    type: String,
    required: [
      hasHarvestUntil,
      'The starting month of the harvesting season is required if the ending month of the harvesting season (harvestUntil) is specified.'
    ],
    default: '',
    enum: {
      values: ['', ...months],
      message: invalidMonthMsg
    },
    trim: true
  },
  harvestUntil: {
    type: String,
    required: [
      hasHarvestFrom,
      'The ending month of the harvesting season is required if the starting month of the harvesting season (harvestFrom) is specified.'
    ],
    default: '',
    enum: {
      values: ['', ...months],
      message: invalidMonthMsg
    },
    trim: true
  }
});

// Validators

function hasSowFrom() {
  return this.sowFrom != '';
}

function hasSowUntil() {
  return this.sowUntil != '';
}

function hasHarvestFrom() {
  return this.harvestFrom != '';
}

function hasHarvestUntil() {
  return this.harvestUntil != '';
}

module.exports = Plant = mongoose.model('plant', PlantSchema);
