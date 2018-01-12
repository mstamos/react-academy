import React from 'react';

export default class RightTopLogin extends React.Component {
  render() {
    return (
      <div className='right-top-login'>
        <input
          value={this.props.username}
          onChange={this.props.onUsernameChange}
          type="text"
          placeholder="Enter Username"
          name="uname"
        />
        <span className='right-space'/>
        <input
          value={this.props.password}
          onChange={this.props.onPasswordChange}
          type="password"
          placeholder="Enter Password"
          name="psw"
        />
        <span className='right-space'/>
        <button onClick={this.props.onButtonClick}>Submit</button>
      </div>
    )
  }
}
