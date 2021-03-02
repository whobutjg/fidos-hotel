const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }, 
    petId: {
      type: String
    },
    bookings: 
      [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      }],
    type: {
      type: String
    },
    breed: {
      type: String
    },
    size: {
      type: String
    }
  }
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;