import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state ={
      counter: 0
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

   render () {
    const counterColor = this.state.counter > 10 ? 'red' : '';
    return (
      <div>
        <div className={counterColor}>Counter: {this.state.counter}</div>
        <p></p>
        <button onClick={this.increaseCounter}> + </button>
        <button onClick={this.decreaseCounter}> - </button>
      </div>
     );
   }
}

ReactDOM.render(<Counter/>, document.body);
