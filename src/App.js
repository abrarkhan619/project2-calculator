import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    equation: "",
    result: 0
  }

  handleInput (e) {
    console.log(e.target.value)
  }


  render () {
    return(
      <div className="container">
        <div className="answerBox row1 rows"><h1>{this.state.result}</h1></div>
        <div className="row2 rows">
          <button className="clearButton">Clear</button>
          <button className="square method">÷</button>
        </div>
        <div className="row3 rows">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
          <button className="square method">×</button>
        </div>
        <div className="row4 rows">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
          <button className="square method">+</button>
        </div>
        <div className="row5 rows">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
          <button className="square method">-</button>
        </div>
        <div className="row6 rows">
          <button className="zero">0</button>
          <button className="equals method">=</button>
        </div>
        <button onClick={this.handleInput} value="5">5</button>
        <button onClick={this.handleInput} value="+">+</button>
        <button onClick={this.handleInput} value="3">3</button>
        <button onClick={this.handleInput} value="=">=</button>
      </div>
    )
  }
}

export default App;
