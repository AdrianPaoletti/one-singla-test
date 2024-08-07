import logo from "./logo.svg";
import "./App.css";
// import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "267a9b97-eabb-4f1e-8418-24960db42dd1",
    });
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
