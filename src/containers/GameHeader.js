import React from 'react';
import { connect } from 'react-redux';
import GameLogo from './GameLogo.js';
import GameRank from '../components/GameRank.js';
import GameButton from '../components/GameButton.js';
import calculate from '../utils/calculate.js';
import { initGame, deleteGameLists } from '../reducers/gameApp.js';    

function GameHeader(props) {
  const handleClickInit = () => {
    props.onInitGame();
  };

  const handleClickDelete = () => {
    props.onDeleteGameLists();
  }

  return (
    <div className="header">
      <GameLogo />
      <div className="header-column">
        <GameRank title="分数" value={props.rank} />
        <GameButton onClick={handleClickInit}>重新开始</GameButton>
      </div>
      <div className="header-column">
        <GameRank title="可撤销步数" value={props.step} />
        <GameButton onClick={handleClickDelete} >撤销</GameButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rank: calculate(state.list),
    step: state.gameLists.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGame: () => { dispatch(initGame()); },
    onDeleteGameLists: () => { dispatch(deleteGameLists()); }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameHeader);