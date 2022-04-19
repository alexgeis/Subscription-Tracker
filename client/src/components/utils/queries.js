import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query {
    users {
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

export const QUERY_SUBSCRIPTION = gql`
  query Query {
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
`;
