'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const v1Routes = require('./routes/v1.js');
const authRoutes = require('./routes/routes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use('/api/v1', v1Routes);
app.use(authRoutes);

app.get('/', (req, res)=>{
  res.status(200).send('Sie sing das Essen, und wir sind die Jäger - "Shingeki no Kyojin"');
});

app.use('*', errorHandler);
app.use(notFoundHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};