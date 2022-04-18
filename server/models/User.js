const { Schema, model } = require("mongoose");
const Subscription = require("./Subscription");

const userModel = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 36,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 36,
  },
  email: {
    type: String,
    required: true,
  },
  subscriptions: [Subscription],
});

const User = model("User", userModel);

module.exports = User;
