import React from 'react';
import './Button.css';

const NumberButton = props => (
  <button className={`number-button ${props.buttonStyle} ${props.className}`}>
    {props.text}
  </button>
);

export default NumberButton;
