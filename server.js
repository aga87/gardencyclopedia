const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const plants = require('./routes/api/plants');

const app = express();

// Bodyparser middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// DB Config
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.log(err));

// Routes
app.use('/api/plants', plants);

// Deployment: serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000; // Deploy to Heroku or 5000

app.listen(port, () => console.log(`Server started on port ${port}`));