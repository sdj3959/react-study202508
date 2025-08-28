import React from 'react';
import './App.css';
import Player from "./components/TimerGame/Player.jsx";
import TimerChallenge from "./components/TimerGame/TimerChallenge.jsx";

const App = () => {

  return (
    <>
      <Player />
      <div id="challeges">
        <TimerChallenge />
      </div>
    </>
  );
};

export default App;
