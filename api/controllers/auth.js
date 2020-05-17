const { createToken } = require("../services/token");

function RegisterAppWeb(req,res){
    res.send("");
}

function LoginAppWeb(req,res){
    const { username , password } = req.body;

    if(username === "billy123" && password === "billy123"){
        const token = createToken({ username });
        res.json({ token });
    }else{
        res.json({ message : "User or Password is incorrect." })
    }
}

function LoginAppMobile(){
    const { username , password } = req.body;
}

module.exports = {
    RegisterAppWeb,
    LoginAppWeb
}