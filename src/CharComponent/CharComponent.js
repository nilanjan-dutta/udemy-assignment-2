import React from 'react';
import './Char.css';

const Char = props => {
  return (
    <div className="Char">
      <span onClick = {props.click}>{props.char}</span>
    </div>
  );
};

export default Char;
