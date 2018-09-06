const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: {
    type: String
  },
  info_1: {
    type: String
  },
  info_2: {
    type: String
  },
  info_3: {
    type: String
  },
  pricePerNight: Number
});


module.exports = mongoose.model('Service', serviceSchema );