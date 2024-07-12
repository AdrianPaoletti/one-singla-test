import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import runOneSignal from "./oneSignal";

function App() {
  useEffect(() => {
    runOneSignal();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main></main>
    </div>
  );
}

export default App;
