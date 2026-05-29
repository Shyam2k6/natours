const express = require('express');

exports.getAllTours = (req, res) => {
  res.send({
    status: 'success',
    message: 'Get Tours',
  });
};

exports.createTour = (req, res) => {
  res.status(201).send({
    status: 'success',
    message: 'Create Tour',
  });
};

exports.updateTour = (req, res) => {
  res.status(200).send({
    status: 'success',
    message: 'Update Tour',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).send({
    status: 'success',
    message: 'Delete Tour',
  });
};
