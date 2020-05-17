const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./api/routes");
const config = require("./config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname,"src","build")));
app.use(router);

app.listen(config.SERVER_PORT, err => {
    if(err) console.log(err);
});