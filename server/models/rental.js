const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
  image: { type: String, required: true },
  bedrooms: Number,
  bathroooms: Number,
  bed: Number,
  entire: Boolean,
  description: { type: String, required: true },
  dailyRate: Number,
  createdAt: { type: Date, default: Date.now },
  guests: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});


module.exports = mongoose.model('Rental', rentalSchema );
