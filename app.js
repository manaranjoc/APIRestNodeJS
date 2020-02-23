/*jshint esversion: 6 */

const express = require('express');

const app = express();
const productionRoutes = require('./api/routes/production');
const workerRoutes = require('./api/routes/worker');

app.use('/production', productionRoutes);
app.use('/worker', workerRoutes);

module.exports = app;