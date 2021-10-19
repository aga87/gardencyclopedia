const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendMail = require('./sendMail')
const User = require('../models/User');

// FIXME: ? no object braces? 
const { CLIENT_URL } = config.get('CLIENT_URL');

const userCtrl = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password)
        return res.status(422).json('Please enter all fields.');
      if (password.length < 8)
        return res.status(400).json('Password must be at least 8 characters.');

      const user = await User.findOne({ email });
      if (user) return res.status(400).json('User already exists.');

      // Create password hash
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = { username, email, password: passwordHash };

      const activationToken = createActivationToken(newUser);
    //   FIXME: correct url? 
      const url = `${CLIENT_URL}/user/activate/${activationToken}`;
      sendMail(email, url);
      res.json('Register success. Please activate your email to start.');
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
};

const createActivationToken = (payload) => {
  return jwt.sign(payload, config.get('ACTIVATION_TOKEN_SECRET'), {
    expiresIn: '5m'
  });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, config.get('ACCESS_TOKEN_SECRET'), {
    expiresIn: '15m'
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, config.get('REFRESH_TOKEN_SECRET'), {
    expiresIn: '7d'
  });
};

module.exports = userCtrl;
