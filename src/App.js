import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    firstValues: '',
    currentOperator: '',
    secondValues: '',
    result: "",
    displayValue: ""
  }

  numValue = (number) => {
    if (this.state.firstValues === '') {
      this.setState({
        firstValues: this.state.firstValues + [number]
      })
    } else {
      this.setState({
        secondValues: this.state.secondValues + [number]
      })
    }

    // this.setState({
    //   firstValues: this.state.firstValues + [number]
    // })
    console.log(this.state.secondValues);
  }

  useOperator = (operator) => {
    this.setState({
      currentOperator: [operator]
    })
  }

  // display = () => {
  //   this.setState({
  //     display: [firstValues] + [operator]
  //   })
  // }

  // getAnswer = () => {
    
  // }

  // storeValue = (value) => {
  //   if (vlaue  )
  // }


  render () {
    return(
      <div className="container">
        <div className="answerBox row1">
          <h1 className="answer">0</h1>
          <h2 className="display">{this.state.firstValues}</h2>
        </div>
        <div className="row2 rows">
          <button className="clearButton">Clear</button>
          <button className="square method" onClick={() => this.useOperator("/")}>÷</button>
        </div>
        <div className="row3 rows">
          <button className="square" onClick={() => this.numValue(7)}>7</button>
          <button className="square" onClick={() => this.numValue(8)}>8</button>
          <button className="square" onClick={() => this.numValue(9)}>9</button>
          <button className="square method" onClick={() => this.useOperator("*")}>×</button>
        </div>
        <div className="row4 rows">
          <button className="square" onClick={() => this.numValue(4)}>4</button>
          <button className="square" onClick={() => this.numValue(5)}>5</button>
          <button className="square" onClick={() => this.numValue(6)}>6</button>
          <button className="square method" onClick={() => this.useOperator("+")}>+</button>
        </div>
        <div className="row5 rows">
          <button className="square" onClick={() => this.numValue(1)}>1</button>
          <button className="square" onClick={() => this.numValue(2)}>2</button>
          <button className="square" onClick={() => this.numValue(3)}>3</button>
          <button className="square method" onClick={() => this.useOperator("-")}>-</button>
        </div>
        <div className="row6 rows">
          <button className="zero" onClick={() => this.numValue(0)}>0</button>
          <button className="equals method" onClick={() => this.useOperator("=")}>=</button>
        </div>
      </div>
    )
  }
}

export default App;
