import React, { Component } from 'react';
import logo from './castlevania1.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
         Castlevania Choose Your Own Adventure Game
        </div>
        <div className="Box">
         Your name is Richter Belmont and you are the destined Vampire Slayer. You must take your sacred whip,
         the holy Vampire Killer, and defeat Dracula. Will You enter Castlevania to defeat your mortal nemisis?
          <br />
         <button> Enter Castlevania </button>
         <button> Turn Back  </button>
        </div>
      </div>

    );
  }
}

export default App;
