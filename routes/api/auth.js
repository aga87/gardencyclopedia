const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

// @route POST api/auth
// @desc Authenticate user
// @access Public

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).json({ Error: 'Please enter all fields.' });

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ Message: 'User does not exist.' });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ Error: 'Invalid credentials.' });
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

module.exports = router;
