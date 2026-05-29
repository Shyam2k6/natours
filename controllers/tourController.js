const express = require('express');
const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.send({
    status: 'success',
    message: 'Get Tours',
  });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).send({
      status: 'success',
      data: newTour,
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      message: err,
    });
  }
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
