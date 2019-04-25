import React, { Component } from 'react';
import GameHeader from './GameHeader';
import GameBody from './GameBody';
import GameRole from '../components/GameRole';


class GameApp extends Component {
  componentDidMount() {
    const fontListener = function() {
      const docEl = window.document.documentElement;
      const clientWidth = docEl.clientWidth;
      clientWidth > 750 
      ? docEl.style.fontSize = '50px'
      : docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };

    fontListener();
    window.addEventListener('resize', fontListener);
  }

  render() {
    return (
      <div className="wrapper">
        <GameHeader />
        <GameRole />
        <GameBody />
      </div>
    );
  }
}

export default GameApp;