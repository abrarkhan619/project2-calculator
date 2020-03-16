import React from 'react';
import './App.css';
// import { wait } from '@testing-library/react';

class App extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    waitingForOperand: false,
    operator: null
  }

  inputDigit = (digit) => {
    const {displayValue, waitingForOperand} = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0'? String(digit) : displayValue + digit
      })
    }
  }

  inputDot = () => {
    const {displayValue, waitingForOperand} = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false
      })
    } else if (displayValue.indexOf('.') === -1)
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
  }

  clearDisplay = () => {
    this.setState({
      displayValue: '0'
    })
  }

  performOperation = (nextOperator) => {
    const {displayValue, operator, value} = this.state

    const nextValue = parseFloat(displayValue)

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue,
    }

    if (value == null) {
      this.setState({
        value: nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: computedValue,
        displayValue: String(computedValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

// https://www.youtube.com/watch?v=ZtU7Mhf9vN8
// 45 min

  render () {
    // const {displayValue} = this.state

    return(
      <div className="container">
        <div className="answerBox row1">
          <h1 className="display">{this.state.displayValue}</h1>
        </div>
        <div className="row2 rows">
          <button className="clearButton" onClick={() => this.clearDisplay()}>Clear</button>
          <button className="square method" onClick={() => this.performOperation("/")}>÷</button>
        </div>
        <div className="row3 rows">
          <button className="square" onClick={() => this.inputDigit(7)}>7</button>
          <button className="square" onClick={() => this.inputDigit(8)}>8</button>
          <button className="square" onClick={() => this.inputDigit(9)}>9</button>
          <button className="square method" onClick={() => this.performOperation("*")}>×</button>
        </div>
        <div className="row4 rows">
          <button className="square" onClick={() => this.inputDigit(4)}>4</button>
          <button className="square" onClick={() => this.inputDigit(5)}>5</button>
          <button className="square" onClick={() => this.inputDigit(6)}>6</button>
          <button className="square method" onClick={() => this.performOperation("+")}>+</button>
        </div>
        <div className="row5 rows">
          <button className="square" onClick={() => this.inputDigit(1)}>1</button>
          <button className="square" onClick={() => this.inputDigit(2)}>2</button>
          <button className="square" onClick={() => this.inputDigit(3)}>3</button>
          <button className="square method" onClick={() => this.performOperation("-")}>-</button>
        </div>
        <div className="row6 rows">
          <button className="zero" onClick={() => this.inputDigit(0)}>0</button>
          <button className="square" onClick={() => this.inputDot()}>.</button>
          <button className="equals method" onClick={() => this.performOperation("=")}>=</button>
        </div>
      </div>
    )
  }
}

export default App;
