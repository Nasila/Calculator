import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent.js';
import InputComponent from './InputComponent.js';
import './index.css'
import * as math from 'mathjs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = val => {

    if(val === 'C') {
      this.setState({
        result: ""
      })
    }

    else if(val === 'CE') {
      this.setState({
        result: this.state.result.slice(0,-1)
      })
    }

    else if(val === '=') {
      this.calculate();
    }

    else {
    this.setState({
      result: this.state.result + val })
    }
  }

  calculate = () => {
    try {
            this.setState({
        
                result: (math.evaluate(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Calculator</div>
        </header>
        <InputComponent result={this.state.result}/>
        <ButtonComponent handleClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
