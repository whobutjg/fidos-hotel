const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected succesfully'))
  .catch((err) => console.log(err));

module.exports = {
  Pet: require('./Pet'),
  Booking: require('./Booking'),
  User: require('./User')
};