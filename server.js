const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log(err.message);
  process.exit(1);
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then((con) => {
  console.log(`mongodb connected to ${mongoose.connection.name}`);
});

app.listen(3000, () => {
  console.log('Listening to http://localhost:3000');
});

process.on('unhandledRejection', (err) => {
  console.log(err.message);
  process.exit(1);
});
