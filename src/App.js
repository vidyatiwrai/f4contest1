import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Error');
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage('Invalid number format');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleOperation = (operation) => {
    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operation) {
        case 'add':
          setResult(number1 + number2);
          break;
        case 'subtract':
          setResult(number1 - number2);
          break;
        case 'multiply':
          setResult(number1 * number2);
          break;
        case 'divide':
       
          setResult(number1 / number2);
          break;
        default:
          break;
      }
    }
  };

  return (
   <center>
     <div className="container">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input type="text" placeholder="Num 1" value={num1} onChange={handleNum1Change} /><br/><br/>
        <input type="text" placeholder="Num 2" value={num2} onChange={handleNum2Change} />
      </div><br/>
      <div className="buttons">
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {result !== '' && (
         <div>
         <p className="success-message">Success!</p>
         <p className="result-message">Result: {result}</p>
       </div>

      )}

    </div>
   </center>
  );
}

export default App;