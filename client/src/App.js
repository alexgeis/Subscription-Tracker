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
  return (
    <ApolloProvider client={client}>
      {/* <UserProvider> */}
      <div className="App">
        <AppContainer />
      </div>
      {/* </UserProvider> */}
    </ApolloProvider>
  );
}

<<<<<<< HEAD

export default App;

<<<<<<< HEAD

=======
>>>>>>> 38f7b96887c9ca4675ed9538ed22e0d6af1c1742
// function App() {
//   return (
//     <UserProvider>
//       <div className="App">
//         <AppContainer />
//       </div>
//     </UserProvider>
//   );
// }

<<<<<<< HEAD
// export default App;
=======
// export default App;
>>>>>>> 38f7b96887c9ca4675ed9538ed22e0d6af1c1742
=======

export default App;
>>>>>>> 44ee9c83330851098d9f7b2c2a3d7dad7811beac
