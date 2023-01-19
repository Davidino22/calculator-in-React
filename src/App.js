import './App.css';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const clickHandle = (e) => setResult(result.concat(e.target.value));
  const clearDisplay = () => setResult('');
  const calculate = () => setResult(eval(result).toString());

  return (
    <div className="container">
      <input type="text" placeholder="0" value={result} id="display"></input>

      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandle}
      ></input>
      <input
        type="button"
        value="DEL"
        className="button1"
        onClick={clearDisplay}
      ></input>
      <input
        type="button"
        value="="
        className="button1"
        onClick={calculate}
      ></input>
    </div>
  );
}

export default App;
