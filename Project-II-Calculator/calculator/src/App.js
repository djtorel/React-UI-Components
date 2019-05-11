import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />
      <div className="button-container">
        <ActionButton text="clear" />
        <NumberButton buttonStyle="red-button" text="÷" />
      </div>
      <div className="button-container">
        <NumberButton buttonStyle="white-button" text="7" />
        <NumberButton buttonStyle="white-button" text="8" />
        <NumberButton buttonStyle="white-button" text="9" />
        <NumberButton buttonStyle="red-button" text="×" />
      </div>
      <div className="button-container">
        <NumberButton buttonStyle="white-button" text="4" />
        <NumberButton buttonStyle="white-button" text="5" />
        <NumberButton buttonStyle="white-button" text="6" />
        <NumberButton buttonStyle="red-button" text="−" />
      </div>
      <div className="button-container">
        <NumberButton buttonStyle="white-button" text="1" />
        <NumberButton buttonStyle="white-button" text="2" />
        <NumberButton buttonStyle="white-button" text="3" />
        <NumberButton buttonStyle="red-button" text="+" />
      </div>
      <div className="button-container">
        <ActionButton text="0" />
        <NumberButton buttonStyle="red-button" text="=" />
      </div>
    </div>
  );
};

export default App;
