import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/AppContainer";
import { UserProvider } from "./components/utils/UserContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <AppContainer />
      </div>
    </UserProvider>
  );
}

export default App;
