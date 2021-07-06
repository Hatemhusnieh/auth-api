'use strict';
const mongoose = require('mongoose');
require('dotenv').config();
const server = require('./src/server');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(() => server.start(process.env.PORT))
  .catch(e => console.error(e));