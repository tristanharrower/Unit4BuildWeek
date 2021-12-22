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

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJvcmdhbml6ZXJuYW1lIjoidHJpc3RhbiIsImlhdCI6MTY0MDIwNDQyOSwiZXhwIjoxNjQwMjkwODI5fQ.Dxfb5Vt4ffWntdxiaeAs5Ll7g-AgEayNBceDqbgH-eE
module.exports = restricted