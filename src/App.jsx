import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [Input, setInput] = useState('');
  const LastOp = (str) => ['+', '-', '*', '/'].includes(str.slice(-1));
  const LastCharIsNumber = (str) => {
    const lastChar = str.slice(-1);
    return !isNaN(lastChar) && lastChar.trim() !== '';
  };

  const handleNo = (No) => {
    if (Input === "Error") {
      setInput('');
      setInput(No);
    } else {
      setInput(Input + No);
    }
  };

  const handleOp = (Op) => {
  if (Op === '.') {
    const lastNumberSegment = Input.split(/[\+\-\*\/]/).pop();
    if (!lastNumberSegment.includes('.') && !LastOp(Input)) {
      setInput(Input + Op);
    }
  } 
  else if (LastCharIsNumber(Input)) {
    setInput(Input + Op);
  }
};
  

  const handleEqual = () => {
    let ans = '';
    try {
      ans = eval(Input).toString();
    } catch (error) {
      ans = 'Error';
    }
    setInput(ans);
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="container text-center my-5">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title text-muted">Calculator</h5>
          <div className="inputBox bg-light p-3 mb-3 rounded">{Input}</div>
          <div className="container">
            <div className="row">
              {[1, 2, 3, '+'].map((val, i) => (
                <button
                  key={i}
                  className="col-3 btn btn-outline-dark"
                  onClick={() => (typeof val === 'number' ? handleNo(val) : handleOp(val))}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="row">
              {[4, 5, 6, '-'].map((val, i) => (
                <button
                  key={i}
                  className="col-3 btn btn-outline-dark"
                  onClick={() => (typeof val === 'number' ? handleNo(val) : handleOp(val))}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="row">
              {[7, 8, 9, '*'].map((val, i) => (
                <button
                  key={i}
                  className="col-3 btn btn-outline-dark"
                  onClick={() => (typeof val === 'number' ? handleNo(val) : handleOp(val))}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="row">
              {['.', 0, '=', '/'].map((val, i) => (
                <button
                  key={i}
                  className="col-3 btn btn-outline-dark"
                  onClick={() => (val === '=' ? handleEqual() : typeof val === 'number' ? handleNo(val) : handleOp(val))}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="row mt-2">
              <button className="col-12 btn btn-outline-danger" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
