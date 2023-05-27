const mongoose = require("mongoose");

// schema for defining the structure of the documents

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpasssword: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("USER", userSchema);
module.exports = {
  UserModel,
};
