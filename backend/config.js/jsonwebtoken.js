const jsonwebtoken = require("jsonwebtoken");

const generateToken = (id) =>{

   return jsonwebtoken.sign({id},process.env.JSN_SECRET_KEY , {
        expiresIn:"30d",
    })
}

module.exports = generateToken;



