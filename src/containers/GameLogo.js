import React from 'react';
import GameBoxShape from '../components/GameBoxShape.js'

function GameLogo() {
  return (
    <div className="logo">
      <div className="logo-content">2048</div>
      <GameBoxShape />
    </div>
  );
}

export default GameLogo;