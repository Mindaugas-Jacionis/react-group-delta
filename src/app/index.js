import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="https://media.giphy.com/media/2inElen0t36MJ9vSSy/giphy.gif" 
          className="App-logo" 
          alt="logo" 
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <p>Hello My Name is: Mindaugas</p>
        <button onClick={() => alert('My Button is Cool')}>
          Button
        </button>
      </header>
    </div>
  );
}

export default App;
