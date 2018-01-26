import React, {Component} from 'react';

export const Emoji = () => <h3>:-)</h3>;

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.addValue = this.addValue.bind(this);
    this.removeValue = this.removeValue.bind(this);
  }

  addValue() {
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    });
  }

  removeValue() {
    this.setState(state => {
      return {
        counter: state.counter - 1
      }
    });
  }

  render() {
    const counter = this.state.counter;

    return (
      <div>
        <div>
          <h2 className='counter-text'>Counter: {counter}</h2>
          <button className='add' onClick={this.addValue}>+</button>
          <button className='remove' onClick={this.removeValue}>-</button>
        </div>
        <div>
          {(counter > 0 && counter % 2 === 0) && <Emoji/>}
        </div>
      </div>
    );
  }
}

export default App;
