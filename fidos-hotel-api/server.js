require('dotenv').config();
require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || '4000';
const app = express();
const routes = require('./routes');
const session = require('express-session')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(
  session({
    secret: process.env.SECRET_STRING,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api/v1/pets', routes.pets);
app.use('/api/v1/bookings', routes.bookings);

app.listen(port, () => console.log(`Listening to port ${port}`));