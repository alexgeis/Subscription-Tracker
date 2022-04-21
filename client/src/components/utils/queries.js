import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users {
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
  query subscriptions {
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

export const QUERY_SINGLE_SUBSCRIPTION = gql`
  query subscription($subscriptionId: ID!) {
    subscriptions (subscriptionId: $subscriptionId){
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
`

export const QUERY_SINGLE_USER = gql`
  query user($userId: ID!) {
    users(userId: $userId){
    username
    subscriptions {
      subscriptionName
      monthlyCost
      dueDate
    }
   }
  }
`