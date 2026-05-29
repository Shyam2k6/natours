const express = require('express');

const app = express();
const tourRouter = require('./routes/tourRouter');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/v1/tours', tourRouter);

module.exports = app;
