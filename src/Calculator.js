import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((label) => (
          <button
            key={label}
            onClick={
              label === '='
                ? handleCalculate
                : label === 'C'
                ? handleClear
                : () => handleButtonClick(label)
            }
            className={`button ${label === '=' ? 'equals' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
