const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
  }

  type Subscription {
    _id: ID!
    subscriptionName: String!
    monthlyCost: Int,
    annualCost: Int,
    paymentType: String,
    startDate: Date,
    dueDate: Number,
    autoPay: Boolean,
    autoRenew: Boolean,
  }

  type Query {
    user: User
    # matchups(_id: String): [Matchup]
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): User
    updateUser(_id: ID!, username: String!, password: String!, email: String!): User
    # removeUser(_id: ID!): User

    createSubscription(password: String!, email: String!): User
    updateSubscription(_id: ID!, password: String!, email: String!): User
  }
`;

module.exports = typeDefs;
