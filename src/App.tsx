import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import OneSignal from 'react-onesignal';

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "20af5bf8-55ae-4425-a62e-55b749a4ca7f"
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
