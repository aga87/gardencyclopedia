const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate user
// @access Public
router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json('Please enter all fields.');

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json('User does not exist.');

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json('Invalid credentials.');
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

// @route GET api/auth/user
// @desc Get user data to continuously authenticate a logged-in user
// @access Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
});

module.exports = router;