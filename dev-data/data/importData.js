const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then((con) => {
  console.log('mongodb connected');
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`));
const importTours = async () => {
  try {
    await Tour.create(tours);
  } catch (err) {
    console.log(err);
  }
};

const deleteTours = async () => {
  try {
    await Tour.deleteMany();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] == '--import') importTours();
if (process.argv[2] == '--delete') deleteTours();
