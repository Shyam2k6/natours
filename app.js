const express = require('express');

const app = express();
const tourRouter = require('./routes/tourRouter');

app.use(express.static('public'));
app.use('/tours', tourRouter);

module.exports = app;
