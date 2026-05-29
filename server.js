const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

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
