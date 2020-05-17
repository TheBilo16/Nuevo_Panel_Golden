const express = require("express");
const path = require("path");
const config = require("../../config");
const app = express.Router();

const auth = require("../controllers/auth");
const { getUsersById, updateUserById, deleteUserById } = require("../controllers/user");
const { isLogged } = require("../services/middleware");

app.post("/api/admin/register",auth.RegisterAppWeb);
app.post("/api/admin/login",auth.LoginAppWeb);
app.post("/api/admin/get/:id_user",isLogged,getUsersById);
app.post("/api/admin/update/:id_user",isLogged,updateUserById);
app.delete("/api/admin/delete/:id_user",isLogged,deleteUserById);

app.get("*",(req,res) => {
    const route = path.join(config.INITIAL_PATH,"src","build","index.html")
    res.sendFile(route);
})

module.exports = app;