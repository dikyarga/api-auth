var jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
  let token = req.headers.token
  if(token){
    // verify a token symmetric - synchronous
    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded)
    if (decoded) {

      next()
    } else {
      res.send('Token not valid!')
    }
  } else {
    res.send('Auth fail')
  }
}
