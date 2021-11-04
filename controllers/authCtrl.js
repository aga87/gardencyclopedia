const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authCtrl = {
  authenticate: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(422).json('Please enter all fields.');
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json('User does not exist.');
    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json('Invalid credentials.');
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
  },

  getUser: async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  }
};

module.exports = authCtrl;
