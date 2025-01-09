import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator container mt-5">
            <h2 className="text-center mb-4">React Calculator</h2>
            <div className="card p-3">
                <input
                    type="text"
                    className="form-control mb-3"
                    value={input}
                    readOnly
                />
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('7')}>7</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('8')}>8</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('9')}>9</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('/')}>/</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('4')}>4</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('5')}>5</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('6')}>6</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('1')}>1</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('2')}>2</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('3')}>3</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('0')}>0</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('.')}>.</button>
                    <button className="btn btn-success col-3" onClick={handleCalculate}>=</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('+')}>+</button>
                </div>
                <div className="row mt-3">
                    <button className="btn btn-danger col-12" onClick={handleClear}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
