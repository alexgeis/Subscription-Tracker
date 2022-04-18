import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/AppContainer";

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
