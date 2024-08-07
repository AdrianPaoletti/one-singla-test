import logo from "./logo.svg";
import "./App.css";
// import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    OneSignal.login("test");
    return () => {};
  }, []);

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
