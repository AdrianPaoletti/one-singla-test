import logo from "./logo.svg";
import "./App.css";
import OneSignal from "react-onesignal";
import { useEffect, useState } from "react";

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    OneSignal.init({ appId: "267a9b97-eabb-4f1e-8418-24960db42dd1" }).then(
      () => {
        setInitialized(true);
        // do other stuff
      }
    );
  }, []);
  useEffect(() => {
    if (initialized) {
      OneSignal.login("test");
    }

    return () => {};
  }, [initialized]);

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
