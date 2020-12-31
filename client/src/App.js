import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {

    getGameSettings()
      .then(res => console.log( res.express))
      .catch(err => console.log(err));

    getGameStats()
      .then(res => console.log( res.express))
      .catch(err => console.log(err));

    getGameMetadata()
      .then(res => console.log( res.express))
      .catch(err => console.log(err));

    getPlayers()


  });

  const getGameSettings = async () => {
    const response = await fetch('/settings');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  const getGameMetadata = async () => {
    const response = await fetch('/game');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  const getGameData = async () => {
    const response = await fetch('/game');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  const getPlayers = async() => {
    let gameData = await getGameData();
    let players = gameData.express.metadata.players;
  }


  const getGameStats = async () => {
    const response = await fetch('/stats');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
  );

}


export default App;
