import "./App.css";
import AppContainer from "./components/AppContainer";
<<<<<<< HEAD
// import NewSub from "./components/pages/NewSub/NewSub"
=======
import { UserProvider } from "./components/utils/UserContext";
>>>>>>> 9c608857b0d86cf03084ad9a50cc0c9b1b2a78f8

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
