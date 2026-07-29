const express = require('express');

const app = express();
const tourRouter = require('./routes/tourRouter');
const AppError = require('./utils/appError');

app.set('query parser', 'extended');
app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} in this server!`));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  err.message = err.message || 'Server error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
