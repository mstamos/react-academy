import React from 'react';
import './App.css';
import MainLogin from './mainLogin';
import RightTopLogin from './rightTopLogin';

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
        <RightTopLogin
          username={this.state.username}
          password={this.state.password}
          onPasswordChange={this.onPasswordChange}
          onUsernameChange={this.onUsernameChange}
          onButtonClick={this.onButtonClick}
        />
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
