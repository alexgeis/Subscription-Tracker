const db = require("../config/connection");
const { User, Subscription } = require("../models");
const userData = require("./userData.json");
const subscriptionData = require("./subscriptionData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Subscription.deleteMany({});
  await User.create(userData);
  await Subscription.create(subscriptionData);

  console.log("all done!");
  process.exit(0);
});
