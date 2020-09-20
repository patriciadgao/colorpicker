import React, { useState, useEffect } from 'react';

import './App.css';
import Picker from './Picker';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div> Color Picker! <br>
        </br>Generate a random color, and try your best to match it on the picker! Good luck!
        </div>
        <br></br>

        <div>Your Guess:</div>
        <div id="color-box"></div>

        <Picker />

      </header>
    </div>
  );
}

export default App;
