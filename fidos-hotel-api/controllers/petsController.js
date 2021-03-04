const db = require('../models');

// const index = (req, res) => {
//   // Query DB for all pets
//   db.Pet.find({}, (err, allPets) => {
//     if (err) return console.log(err);
//     return res.json(allPets);
//   });
// };

const index = (req, res) => {
  db.Pet.find({}, (err, allPets) => {
        if (err) return console.log(err);
        return res.json(allPets);
      })
    .populate('bookings')
    .exec((err, foundBookings) => {
    if (err) {
      console.log(err);
      return res.json(foundBookings) 
    }
  });
}

const show = (req, res) => {
  // Query Pet from DB by ID
  db.Pet.findOne({ _id: req.params.id }, (err, foundPet) => {
    if (err) return console.log(err);
    return res.json(foundPet);
  });
};

const create = (req, res) => {
  // Query DB to create a new Pet
  db.Pet.create(req.body, (err, newPet) => {
    if(err) return console.log(err);
    return res.json(newPet);
  });
};

const update = (req, res) => {
  // Query DB to update Pet
  db.Pet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPet) => {
      if (err) return console.log(err);
      return res.json(updatedPet);
    }
  );
};

const destroy = (req, res) => {
  // Query DB to delete Pet
  db.Pet.findByIdAndDelete(req.params.id, (err, deletedPet) => {
    if(err) return console.log(err);
    return res.json(deletedPet);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};