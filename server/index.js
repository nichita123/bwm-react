const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental')
require('dotenv').config();

const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users'),
      bookingRoutes = require('./routes/bookings');

mongoose.connect(process.env.DATABASE_URL).then(() => {
  const fakeDb = new FakeDb();
  // fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/rentals', rentalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running!');
});
