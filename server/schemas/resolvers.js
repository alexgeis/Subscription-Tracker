const { User, Subscription } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    subscriptions: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Subscription.find(params);
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    createSubscription: async (parent, args) => {
      const user = await Subscription.create(args);
      return user;
    },
    updateUser: async (parent, { _id, techNum }) => {
      const vote = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    updateSubscription: async (parent, { _id, techNum }) => {
      const vote = await Subscription.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
