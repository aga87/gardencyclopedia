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
      message: `{VALUE} is not a valid plant category. The allowed categories are: ${plantCategories.join(', ')}.`
    },
    default: plantCategories[0]
  },
  sowFrom: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasSowUntil,
      'You need to specify the starting month if the sowing end date is specified.'
    ]
  },
  sowUntil: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasSowFrom,
      'You need to specify the end month if the sowing start date is specified.'
    ]
  },
  harvestFrom: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasHarvestUntil,
      'You need to specify the starting month if the harvesting end date is specified.'
    ]
  },
  harvestUntil: {
    type: String,
    enum: {
      values: months,
      message: invalidMonthMsg
    },
    required: [
      hasHarvestFrom,
      'You need to specify the end month if the harvesting start date is specified.'
    ]
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
