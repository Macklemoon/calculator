// calculator app tutorial: https://dev.to/uzomezu/react-calculator-app-54ha

import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Button from './Button.js';
import Clear from './Clear.js';
import Solve from './Solve.js';

function Calculator(props) {
    const [input, setInput] = useState('');
    const [prev, setPrev] = useState('');
    const [curr, setCurr] = useState('');
    const [op, setOp] = useState('');

    useEffect(() => {
        const ops = {
            '+': function(x, y) { return x + y; },
            '-': function(x, y) { return x - y; },
            '*': function(x, y) { return x * y; },
            '/': function(x, y) { return x / y; }
        };

        if(curr !== '') {
            if(op !== '') {
                let soln = ops[op](parseFloat(prev), parseFloat(curr));
                setInput(soln);
                setOp('');
                setCurr('');
            }
        }

    }, [curr, op, prev]);

    const clickButton = (e) => {
        if(e === "+/-" && op === '+') {
            setOp('-');
        } else if(e === "+/-" && op === '-') {
            setOp('+');
        } else if(e === "+/-" && op === '') {

        } else if (e === '+' || e === '-' || e === '*' || e === '/') {
            setOp(e);
        } else {
            setInput(input + e);
        }
    }

    const setDefaultInput = (e) => {
        if(input !== '') {
            setInput(input + e);
        }
    }

    const addDecimal = (e) => {
        if(input.indexOf('.')=== -1) {
            setInput(input + e);
        } else {
            // error
        }
    }

    const solve = () => {
        setCurr(input);
    }

    function opFunction(e) {
        setPrev(input);
        setInput('');
        setOp(e);
    }

    const handleClear = () => {
        setInput('');
        setPrev('');
        setCurr('');
        setOp('');
    }

    return(
        <React.Fragment>
            <CalcContainer>
                <div>
                    <input type="text" size="15" readOnly className="output" value={input} placeholder="0"/>
                </div>
                <Row>
                    <Button handleClick={clickButton}>7</Button>
                    <Button handleClick={clickButton}>8</Button>
                    <Button handleClick={clickButton}>9</Button>  
                    <Button handleClick={opFunction}>/</Button>
                </Row>
                <Row>
                    <Button handleClick={clickButton}>4</Button>
                    <Button handleClick={clickButton}>5</Button>
                    <Button handleClick={clickButton}>6</Button>
                    <Button handleClick={opFunction}>*</Button>
                </Row>
                <Row>
                    <Button handleClick={clickButton}>+/-</Button>
                    <Button handleClick={clickButton}>3</Button>
                    <Button handleClick={clickButton}>2</Button>
                    <Button handleClick={clickButton}>1</Button>
                    <Button handleClick={opFunction}>-</Button>
                </Row>
                <Row>
                    <Clear handleClear={handleClear}>CE</Clear>
                    <Button handleClick={setDefaultInput}>0</Button>
                    <Button handleClick={addDecimal}>.</Button>
                    <Solve handleSolve={solve}>=</Solve>
                    <Button handleClick={opFunction}>+</Button>
                </Row>
            </CalcContainer>
        </React.Fragment>
    );
}
const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #7F85F4;
    width: 140px
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`

export default Calculator