const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config')
const User = require('./auth_model');

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

function tokenBuilder(organizer) {
    const payload = {
        subject:organizer.organizer_id,
        organizername:organizer.username,
    }

    const options = {
        expiresIn: '1d'
    }

    const result =  jwt.sign(payload, JWT_SECRET, options)

    return result;
}

const usernameCheck = async (req, res, next) => {
    try{
        const potentialUsername = {
            username:req.body.username
        }
        const check = await User.findBy(potentialUsername)
            if(check.length===0){
                next()
            } else {
                next({
                    status:409, 
                    message:"Username taken"
                })
            }
    } catch (err) {
        next(err)
    }    
}
module.exports = {
    tokenBuilder,
    usernameCheck, 
    restricted
}
