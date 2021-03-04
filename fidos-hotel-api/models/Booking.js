const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet',
    },
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;