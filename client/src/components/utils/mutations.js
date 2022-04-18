import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $userName: String!, $password: String!) {
    addUser(username: $username, userName: $userName, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
