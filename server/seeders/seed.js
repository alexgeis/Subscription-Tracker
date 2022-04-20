const db = require("../config/connection");
const { User, Subscription } = require("../models");
const userData = require("./userData.json");
const subscriptionData = require("./subscriptionData.json");

db.once("open", async () => {
  await Subscription.deleteMany({});
  await User.deleteMany({});
  await Subscription.create(subscriptionData);
  await User.create(userData);

  

  console.log("all done!");
  process.exit(0);
});

// Capture IDs, put them in an array, randomly put new ids into user arrays
