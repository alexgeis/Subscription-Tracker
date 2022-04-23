const { AuthenticationError } = require("apollo-server-express");
const { User, Subscription } = require("../models");
const { signToken } = require("../utils/auth");
// import { resolvers as scalarResolvers } from "graphql-scalars";
// ScalarName: ScalarNameResolver,

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("subscriptions");
    },

    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId }).populate("subscriptions");
    },

    subscriptions: async () => {
      return await Subscription.find({});
    },

    subscription: async (parent, { subscriptionId }) => {
      return await Subscription.findOne({ _id: subscriptionId });
    },
  },

  Mutation: {
    //LOGIN
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    //CREATE MUTATIONS
    createUser: async (parent, { username, password, email }) => {
      const user = User.create({ username, password, email });
      const token = signToken(user);

      return { token, user };
    },
    createSubscription: async (
      parent,
      {
        userId,
        subscriptionName,
        monthlyCost,
        annualCost,
        paymentType,
        startDate,
        dueDate,
        autoPay,
        autoRenew,
      },
      context
    ) => {
      if (context.user) {
        const newSub = await Subscription.create({
          subscriptionName,
          monthlyCost,
          annualCost,
          paymentType,
          startDate,
          dueDate,
          autoPay,
          autoRenew,
        });
        return await User.findByIdAndUpdate(
          userId,
          {
            $addToSet: {
              subscriptions: newSub._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        ).populate("subscriptions");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //UPDATE MUTATIONS - NEED TO ADD TOKENS
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
          autoPay,
          autoRenew,
        },
        { new: true }
      );
    },
    //DELETE MUTATIONS
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeSubscription: async (parent, { userId, subscription }, context) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { subscriptions: subscription } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
