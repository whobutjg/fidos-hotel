const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    userIdForPet: mongoose.Schema.ObjectId
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;