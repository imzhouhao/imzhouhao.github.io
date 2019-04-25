import React from 'react';
import PropTypes from 'prop-types';

function style(length) {
  if (length > 2) {
    return { fontSize: '.28rem' };
  }
  return {};
}

function GameRank(props) {
  return (
    <div className="rank">
      <div className="rank-title"
        style={style(props.title.length)}
      >{props.title}</div>
      <span>{props.value}</span>
    </div>
  );
}

GameRank.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default GameRank;