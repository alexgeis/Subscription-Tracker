const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    subscriptions: [String]
  }

  type Subscription {
    _id: ID!
    subscriptionName: String!
    monthlyCost: Int
    annualCost: Int
    paymentType: String
    startDate: String
    dueDate: Int
    autoPay: Boolean
    autoRenew: Boolean
  }

  type Query {
    users: [User]
    subscriptions: [Subscription]
    # matchups(_id: String): [Matchup]
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): User
    updateUser(
      _id: ID!
      username: String
      password: String
      email: String
    ): User
    removeUser(userId: ID!): User

    createSubscription(password: String!, email: String!): User
    updateSubscription(
      _id: ID!
      subscriptionName: String
      monthlyCost: Int
      annualCost: Int
      paymentType: String
      startDate: String
      dueDate: Int
      autoPay: Boolean
      autoRenew: Boolean
    ): User
    removeSubscription(userId: ID!, subscription: String!): User
  }
`;

module.exports = typeDefs;
