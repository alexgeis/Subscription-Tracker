const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLScalarType, Kind } = require("graphql");
// import { typeDefs as scalarTypeDefs } from "graphql-scalars";
// code above is to use npm "graphql-scalars" to introduce scalar types that work well with dates: add ...scalarTypeDefs, to the begin of the gql code below

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    subscriptions: [Subscription]
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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    subscriptions: [Subscription]
    subscription(subscriptionId: ID!): Subscription
    # matchups(_id: String): [Matchup]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createUser(username: String!, password: String!, email: String!): Auth
    updateUser(
      _id: ID!
      username: String
      password: String
      email: String
    ): User
    removeUser(userId: ID!): User

    createSubscription(
      subscriptionName: String!
      monthlyCost: Int
      annualCost: Int
      paymentType: String
      startDate: String
      dueDate: Int
      autoPay: Boolean
      autoRenew: Boolean
    ): User

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
    ): Subscription
    removeSubscription(userId: ID!, subscription: String!): Subscription
  }
`;

// const dateScalar = new GraphQLScalarType({
//   // See definition above
// });

module.exports = typeDefs;
