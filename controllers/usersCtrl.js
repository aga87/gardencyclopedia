const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const usersCtrl = {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    // Validate
    if (!username || !email || !password)
      return res.status(422).json('Please enter all fields.');
    if (password.length < 8)
      return res.status(400).json('Password must be at least 8 characters.');
    // Check if user is already registered (unique email)
    const user = await User.findOne({ email });
    if (user) return res.status(400).json('User already exists.');

    // Create new user
    const newUser = new User({ email, username, password });

    //  Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        // Save new user
        const savedUser = await newUser.save();
        // Create jwt token
        jwt.sign(
          { id: savedUser.id },
          config.get('jwtSecret'),
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                id: savedUser.id,
                username: savedUser.username,
                email: savedUser.email
              }
            });
          }
        );
      });
    });
  }
};

module.exports = usersCtrl;
