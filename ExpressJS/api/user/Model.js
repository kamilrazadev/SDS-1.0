const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: false,
  },
  joining: {
    type: Date,
    default: Date.now,
  },
});

const user = model("user", userSchema);

module.exports = user;
