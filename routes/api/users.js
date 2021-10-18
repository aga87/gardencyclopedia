const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(422).json('Please enter all fields.');

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json('User already exists.');
    if (password.length < 8) return res.status(400).json('Password must be at least 8 characters.');

    const newUser = new User({ email, username, password });
    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          // Create jwt token
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 36000 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
