const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: "data added successfully to the db" });
});

// router.get("/about", (req, res) => {
//   console.log("it is about page");
//   res.send("About Page");
// });
// router.get("/contact", middleware, (req, res) => {
//   console.log("hello contact page");
//   res.send("Contact Page");
// });
// router.get("/login", (req, res) => {
//   res.send("Login Page");
// });
// router.get("/signup", (req, res) => {
//   res.send("Registration Page");
// });
module.exports = {
  router,
};
