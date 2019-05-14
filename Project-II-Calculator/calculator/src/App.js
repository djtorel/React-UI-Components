import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay />

      <ActionButton className="span-3" text="clear" />
      <NumberButton className="span-1" buttonStyle="red-button" text="÷" />

      <NumberButton className="span-1" buttonStyle="white-button" text="7" />
      <NumberButton className="span-1" buttonStyle="white-button" text="8" />
      <NumberButton className="span-1" buttonStyle="white-button" text="9" />
      <NumberButton className="span-1" buttonStyle="red-button" text="×" />

      <NumberButton className="span-1" buttonStyle="white-button" text="4" />
      <NumberButton className="span-1" buttonStyle="white-button" text="5" />
      <NumberButton className="span-1" buttonStyle="white-button" text="6" />
      <NumberButton className="span-1" buttonStyle="red-button" text="−" />

      <NumberButton className="span-1" buttonStyle="white-button" text="1" />
      <NumberButton className="span-1" buttonStyle="white-button" text="2" />
      <NumberButton className="span-1" buttonStyle="white-button" text="3" />
      <NumberButton className="span-1" buttonStyle="red-button" text="+" />

      <ActionButton className="span-3" text="0" />
      <NumberButton className="span-1" buttonStyle="red-button" text="=" />
    </div>
  );
};

// mvp complete

export default App;
