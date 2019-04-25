import React from 'react';
import PropTypes from 'prop-types';

function GameBoxShape(props) {
  return (
    <div className="box-shape">
      <div className="box-shape-fill" />
    </div>
  );
}


GameBoxShape.propTypes = {
  value: PropTypes.string
}

export default GameBoxShape;