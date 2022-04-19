const { User, Subscription } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    subscriptions: async () => {
      return await Subscription.find({});
    },
  },

  Mutation: {
    //CREATE MUTATIONS
    createUser: async (parent, { username, password, email }) => {
      return User.create({ username, password, email });
    },
    createSubscription: async (parent, args) => {
      const subscription = await Subscription.create(args);
      return subscription;
    },
    //UPDATE MUTATIONS
    updateUser: async (parent, { _id, username, password, email }) => {
      return await User.findOneAndUpdate(
        { _id },
        { username, password, email },
        { new: true }
      );
    },
    updateSubscription: async (
      parent,
      {
        _id,
        subscriptionName,
        monthlyCost,
        annualCost,
        paymentType,
        startDate,
        dueDate,
        autoPay,
        autoRenew,
      }
    ) => {
      return await Subscription.findOneAndUpdate(
        { _id },
        {
          subscriptionName,
          monthlyCost,
          annualCost,
          paymentType,
          startDate,
          dueDate,
          autoPay,
          autoRenew,
        },
        { new: true }
      );
    },
    //DELETE MUTATIONS
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeSubscription: async (parent, { userId, subscription }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { subscriptions: subscription } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
