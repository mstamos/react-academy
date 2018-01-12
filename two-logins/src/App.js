import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='right-top-login'>
          <input
            value={this.state.username}
            onChange={this.onUsernameChange}
            type="text"
            placeholder="Enter Username"
            name="uname"
          />
          <span className='right-space'/>
          <input
            value={this.state.password}
            onChange={this.onPasswordChange}
            type="password"
            placeholder="Enter Password"
            name="psw"
          />
          <span className='right-space'/>
          <button>Submit</button>
        </div>

        <div className='main-login'>
          <p>
            <input
              value={this.state.username}
              onChange={this.onUsernameChange}
              type="text"
              placeholder="Enter Username"
              name="uname"
            />
          </p>
          <p>
            <input
              value={this.state.password}
              onChange={this.onPasswordChange}
              type="password"
              placeholder="Enter Password"
              name="psw"
            />
          </p>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
