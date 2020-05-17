const jwt = require("jsonwebtoken");
const config = require("../../config");

function createToken(data){
    const token = jwt.sign(
        data, 
        config.JWT_PASSWORD,
        { expiresIn : 60 }
        // { expiresIn: "7 days" }
    );

    return token;
}

function expiredToken(token){
    try{
        jwt.verify(token,config.JWT_PASSWORD);
        return false;
    }catch(e){
        console.log(e);
        return true;
    }
}

function decodeToken(token){
    const tokenDecode = jwt.decode(token,config.JWT_PASSWORD);
    return tokenDecode;
}

module.exports = {
    createToken,
    decodeToken,
    expiredToken
}