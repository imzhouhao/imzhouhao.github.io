import React from 'react';
import PropTypes from 'prop-types'

function GameButton(props) {
  return (
    <a className="button"
      onClick={props.onClick}>
      <span>{props.children}</span>
    </a>
  );
}

GameButton.propTypes = {
  onClick: PropTypes.func
}

export default GameButton;