const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
    trim: true,
    maxLength: [
      20,
      'Cannot be longer than 20 characters - {VALUE} exceeds the length limit.'
    ]
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
    maxLength: [
      254,
      'Cannot be longer than 254 characters - {VALUE} exceeds the length limit.'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxLength: [
      128,
      'Cannot be longer than 128 characters - {VALUE} exceeds the length limit.'
    ]
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
