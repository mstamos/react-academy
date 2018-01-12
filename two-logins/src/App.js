import React from 'react';
import './App.css';
import MainLogin from './mainLogin';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    alert(this.state.username);
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
          <button onClick={this.onButtonClick}>Submit</button>
        </div>

        <MainLogin
          username={this.state.username}
          password={this.state.password}
          onPasswordChange={this.onPasswordChange}
          onUsernameChange={this.onUsernameChange}
          onButtonClick={this.onButtonClick}
        />

      </div>
    )
  }
}
