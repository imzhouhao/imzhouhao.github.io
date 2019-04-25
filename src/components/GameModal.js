import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function GameModal(props) {
  
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-title">{props.title}</div>
      <button className="modal-button"
        onClick={props.onClick}>重新开始</button>
    </div>,
    document.getElementById('app')
  )
}

GameModal.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GameModal;