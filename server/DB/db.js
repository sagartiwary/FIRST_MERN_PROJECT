const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.DATABASE;
const connection = mongoose.connect(DB);

// const connection=mongoose
//   .connect(DB)
//   .then((res) => {
//     console.log("it has right access");
//   })
//   .catch((error) => {
//     console.log("it is failed");
//   });
module.exports = {
  connection,
};


