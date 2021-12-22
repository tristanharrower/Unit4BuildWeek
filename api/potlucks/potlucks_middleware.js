const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config')


// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if(!token){
    return next ({
      status:401,
      message:'Token authentication required, must login to get token!'
    })
  }
  jwt.verify(token, JWT_SECRET, (err, decoded)=> {
    if(err){
      return next({ status:401, message:'token invalid'})
    }else{
      req.decodedJWT = decoded
      next()
    }
  })
}

module.exports = restricted