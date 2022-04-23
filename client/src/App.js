import "./App.css";
import AppContainer from "./components/AppContainer";
// import NewSub from "./components/pages/NewSub/NewSub"
import { UserProvider } from "./components/utils/UserContext";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/utils/Global";
import { lightTheme, darkTheme } from "./components/utils/ThemeContext";
import { useDarkMode } from "./components/utils/DarkMode";

import "bootstrap/dist/css/bootstrap.min.css";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  console.log({ token });

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="App">
          <AppContainer toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
