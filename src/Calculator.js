
import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = (value) => {
        if (value === '±') {
            setInput((prev) => (prev ? (-1 * parseFloat(prev)).toString() : ''));
        } else if (value === '√') {
            setInput((prev) => Math.sqrt(parseFloat(prev)).toString());
        } else if (value === 'CE') {
            setInput(input.slice(0, -1));
        } else if (value === '%') {
            setInput((prev) => (parseFloat(prev) / 100).toString());
        } else {
            setInput(input + value);
        }
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

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`calculator container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
            <h2 className="text-center mb-4">React Calculator</h2>
            <div className="card p-3">
                <input
                    type="text"
                    className="form-control mb-3"
                    value={input}
                    readOnly
                />
                <div className="row">
                    <button className="btn btn-danger col-3" onClick={handleClear}>C</button>
                    <button className="btn btn-secondary col-3" onClick={() => handleClick('CE')}>CE</button>
                    <button className="btn btn-secondary col-3" onClick={() => handleClick('%')}>%</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('/')}>/</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('7')}>7</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('8')}>8</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('9')}>9</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('4')}>4</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('5')}>5</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('6')}>6</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('1')}>1</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('2')}>2</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('3')}>3</button>
                    <button className="btn btn-warning col-3" onClick={() => handleClick('+')}>+</button>
                </div>
                <div className="row">
                    <button className="btn btn-light col-3" onClick={() => handleClick('±')}>±</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('0')}>0</button>
                    <button className="btn btn-light col-3" onClick={() => handleClick('.')}>.</button>
                    <button className="btn btn-success col-3" onClick={handleCalculate}>=</button>
                </div>
                <div className="row mt-4">
                    <button className="btn btn-dark col-12" onClick={toggleDarkMode}>
                        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
