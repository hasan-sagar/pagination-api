const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODBURL =
  "mongodb+srv://<username>:<password>@atlascluster.cmljbv0.mongodb.net/pagination-api?retryWrites=true&w=majority";
let OPTION = { user: "sagar", pass: "sagar", autoIndex: true };
const DatabaseConnect = () => {
  mongoose.connect(MONGODBURL, OPTION, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("DB CONNECTED");
    }
  });
};

module.exports = DatabaseConnect;
