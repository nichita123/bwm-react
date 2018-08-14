const express = require('express');
const mongoose = require('mongoose');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental');
const bodyParser = require('body-parser');
require('dotenv').config();

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  });

const app = express();

app.use(bodyParser.json());

app.use('/api/rentals', rentalRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
  console.log(`App is running on port ${PORT}`);
});
