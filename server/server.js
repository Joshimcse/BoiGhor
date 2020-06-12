/**
 * server.js
 *
 * @description :: Main Server file also Entry point
 * @author      ::
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// set up express app
const app = express();

// Middleware

// configure morgan for loggin
app.use(require('morgan')('dev'));
// .env configuration
require('dotenv').config();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
// parse cookies
app.use(cookieParser());

// initialize users routes
// app.use('/api/users', require('./routes/userRoutes'));
// initialize foods routes
// app.use('/api/foods', require('./routes/foodRoutes'));

// Error handling Middleware

// listen for request
const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
  // MongoDB configuration
  mongoose.Promise = global.Promise;
  mongoose.connect(
    process.env.MLAB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
      if (err) console.error(err);
      else console.log('Connected to Database');
    }
  );
});
