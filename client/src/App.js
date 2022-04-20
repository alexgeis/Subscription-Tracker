import "./App.css";
import AppContainer from "./components/AppContainer";
// import NewSub from "./components/pages/NewSub/NewSub"

import 'bootstrap/dist/css/bootstrap.min.css';

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
