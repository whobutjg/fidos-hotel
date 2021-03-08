const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ status: 400, message: 'All fields are required!' });
  }

  
  try {
   // Find user by email
  const user = await db.User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.status(400).json({status: 400, message: 'Invalid credentials. Please try again!'});
  }

  // Verify supplied password matches found user pasword
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log('Login passwords do not match');
    return res.status(400).json({ status: 400, message: 'Invalid Credentials. Please try again!'});
  }

  // Create a jwt with userId
  const payload = { userId: user._id };
  const secret = process.env.JWT_SECRET;
  const expiration = { expiresIn: '30d' };

  // Sign the JWT
  const token = await jwt.sign(payload, secret, expiration);

  res.json({ status: 200, token });
 } catch (err) {
  console.log(err);
  return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.'});
 }
}

async function verify(req, res) {
  res.json({ status: 200, userId: req.currentUserId});
}

async function create(req, res) {
  const { name, email, password } = req.body; // Spread Operator to parse all keys to req.body instead of constantly naming req.body.name, req.body.password, etc
  // Validate create userform inputs
  if(!name || !email || !password) {
    res.json({status: 400, message: 'All field are required!'});
  }


  try {
    const foundUser = await db.User.findOne({ email: email });
    if (foundUser) {
      console.log('User account already exists: ', foundUser);
      return res.json({ status: 400, message: 'User already exists! Please login'});
    }

    // Create Salt for password hash
    const salt = await bcrypt.genSalt(10);

    // Hash user plain text password
    const hash = await bcrypt.hash(password, salt);


    const newUser = await db.User.create({...req.body, password: hash});

    // Respond back to client
    res.json(newUser);
  } catch(err) {
    return res.json({ status: 500, error: 'Something went wrong, please try again'})
  }
}

async function show(req, res) {
  try {
    const user = await db.User.findById(req.currentUser);
    if(user) {
      return res.json({ status: 200, profile: user })
    } else {
      return res.status(404).json({ status: 404, message: 'User not found!' })
    }
  
} catch(err) {
   console.log(err);
   return res.status(500).json({ status: 500, error: 'Something went wrong. Please try again!'});
 }
}

const update = (req, res) => {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) return console.log(err);
			return res.json(updatedPost);
		}
	);
};

const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) return console.log(err);
		return res.json(deletedPost);
	});
};

module.exports = {
	login,
  verify,
	show,
	create,
	update,
	destroy,
};
