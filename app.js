const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const DatabaseConnect = require("./src/config/connfigDB");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./src/routes/api");
const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(bodyParser.json());

//Database Connection
DatabaseConnect();

app.use("/api", router);

module.exports = app;
