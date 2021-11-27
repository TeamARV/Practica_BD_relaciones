var jwt = require('jsonwebtoken');


const TokenGenerado = (payload) =>{
 return jwt.sign(payload, 'shhhhh',{
    expiresIn: "16h"
 });
}


module.exports = {TokenGenerado} 