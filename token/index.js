
const jwt = require("jsonwebtoken");

module.exports =  {
        createToken : (id, isAdmin) => {
            const access_token = jwt.sign({id, isAdmin}, process.env.JWT_SEC, { expiresIn : "1d"});
            return access_token ;
        },

        verifyToken : async (token) => {
           return await jwt.verify(token, process.env.JWT_SEC) ;
        }
    }
