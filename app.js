/*jshint esversion: 6 */

const express = require('express');

const app = express();
const productionRoutes = require('./api/routes/production');
const workerRoutes = require('./api/routes/worker');
const emeraldRoutes = require('./api/routes/emeralds');

app.use('/production', productionRoutes);
app.use('/worker', workerRoutes);
app.use('/emerald', emeraldRoutes);

module.exports = app;