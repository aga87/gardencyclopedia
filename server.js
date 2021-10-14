const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// DB Config
const db = config.get('mongoURI');

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.log(err));

// Routes
app.use('/api/plants', require('./routes/api/plants'));
app.use('/api/users', require('./routes/api/users'));


const port = process.env.PORT || 5000; // Deploy to Heroku or 5000

app.listen(port, () => console.log(`Server started on port ${port}`));