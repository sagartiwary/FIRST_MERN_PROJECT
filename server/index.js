// import express
const express = require("express");
const app = express();
const { connection } = require("./DB/db");
const { router } = require("./route/user.router");
require("dotenv").config();
const middleware = (req, res, next) => {
  console.log("it is a middleware");
  next();
};
const port = process.env.PORT;
app.use(express.json());
app.use("/user", router);

app.listen(port, async () => {
  try {
    await connection;
    console.log("it is connected now");
    console.log(`it is ruuning at ${port}`);
  } catch (error) {
    console.log("it has some error");
  }
});
