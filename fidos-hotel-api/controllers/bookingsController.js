const db = require('../models');

const index = (req, res) => {
  // Query DB for all bookings
  db.Booking.find({}, (err, allBookings) => {
    if (err) return console.log(err);
    return res.json(allBookings);
  });
};

const show = (req, res) => {
  // Query Booking from DB by ID
  db.Booking.findOne({ _id: req.params.id }, (err, foundBooking) => {
    if (err) return console.log(err);
    return res.json(foundBooking);
  });
};

const create = (req, res) => {
  // Query DB to create a new Booking
  db.Booking.create(req.body, (err, newBooking) => {
    if(err) return console.log(err);
    return res.json(newBooking);
  });
};

const update = (req, res) => {
  // Query DB to update Booking
  db.Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBooking) => {
      if (err) return console.log(err);
      return res.json(updatedBooking);
    }
  );
};

const destroy = (req, res) => {
  // Query DB to delete Booking
  db.Booking.findByIdAndDelete(req.params.id, (err, deletedBooking) => {
    if(err) return console.log(err);
    return res.json(deletedBooking);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};