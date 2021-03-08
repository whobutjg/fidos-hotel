const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
  console.log(req.headers);
  const token  = req.headers.auth;
  console.log('Req Headers - ', token);
 
  if (!token) {
    return res.status(400).json({ status: 400, error: 'You are not authenticated! Please login and try again!'});
  }
 
  try {
     const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
 
    req.currentUser = decodedToken.userId;
    next();

   } catch(err) {
     return res.status(500).json({ status: 200, message: 'Something went wrong, please try again!'})
   }
 
 }

 module.exports = auth;