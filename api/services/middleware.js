const { expiredToken } = require("./token");

function isLogged(req,res,next){
    const Headertoken = req.headers["authorization"];

    if(Headertoken){
        const token = Headertoken.split(" ")[1];
        if(expiredToken(token)){
            req.token = token;
            next();
        }else{
            res.status(403).json({ message : "Token expired" });
        }
    }

    res.status(403).json({ message : "Auth is not defined" });
}

module.exports = {
    isLogged
}