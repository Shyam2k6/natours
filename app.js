const express = require('express');

const app = express();
const tourRouter = require('./routes/tourRouter');
const userRoutes = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const errorMiddleware = require('./controllers/errorController');

app.set('query parser', 'extended');
app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} in this server!`, 404));
});

app.use(errorMiddleware);

module.exports = app;
