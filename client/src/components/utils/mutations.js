import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        password
        email
        subscriptions {
          _id
          subscriptionName
          monthlyCost
          annualCost
          paymentType
          startDate
          dueDate
          autoPay
          autoRenew
        }
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $username: String
    $password: String
    $email: String
  ) {
    updateUser(
      _id: $id
      username: $username
      password: $password
      email: $email
    ) {
      _id
      username
      password
      email
      subscriptions {
        _id
        subscriptionName
        monthlyCost
        annualCost
        paymentType
        startDate
        dueDate
        autoPay
        autoRenew
      }
    }
  }
`;

// export const REMOVE_USER = gql`
//   mutation removeUser($userId: ID!) {
//   removeUser(userId: $userId) {
//   }
// }
// `;

export const CREATE_SUBSCRIPTION = gql`
  mutation CreateSubscription(
    $userId: ID!
    $subscriptionName: String!
    $monthlyCost: Int
    $annualCost: Int
    $paymentType: String
    $startDate: String
    $dueDate: String
    $autoPay: Boolean
    $autoRenew: Boolean
  ) {
    createSubscription(
      userId: $userId
      subscriptionName: $subscriptionName
      monthlyCost: $monthlyCost
      annualCost: $annualCost
      paymentType: $paymentType
      startDate: $startDate
      dueDate: $dueDate
      autoPay: $autoPay
      autoRenew: $autoRenew
    ) {
      _id
      username
      password
      email
      subscriptions {
        subscriptionName
        monthlyCost
        annualCost
        paymentType
        startDate
        dueDate
        autoPay
        autoRenew
      }
    }
  }
`;

export const UPDATE_SUBSCRIPTION = gql`
  mutation updateSubscription(
    $id: ID!
    $subscriptionName: String
    $monthlyCost: Int
    $annualCost: Int
    $paymentType: String
    $autoPay: Boolean
    $autoRenew: Boolean
  ) {
    updateSubscription(
      _id: $id
      subscriptionName: $subscriptionName
      monthlyCost: $monthlyCost
      annualCost: $annualCost
      paymentType: $paymentType
      autoPay: $autoPay
      autoRenew: $autoRenew
    ) {
      _id
      subscriptionName
      monthlyCost
      annualCost
      paymentType
      startDate
      dueDate
      autoPay
      autoRenew
    }
  }
`;

export const REMOVE_SUBSCRIPTION = gql`
  mutation removeSubscription($userId: ID!, $subscription: String!) {
    removeSubscription(userId: $userId, subscription: $subscription) {
      _id
    }
  }
`;
