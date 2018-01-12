import React from 'react'

export default class MainLogin extends React.Component {
  render() {
    return (
        <div className='main-login'>
          <p>
            <input
              value={this.props.username}
              onChange={this.props.onUsernameChange}
              type="text"
              placeholder="Enter Username"
              name="uname"
            />
          </p>
          <p>
            <input
              value={this.props.password}
              onChange={this.props.onPasswordChange}
              type="password"
              placeholder="Enter Password"
              name="psw"
            />
          </p>
          <button onClick={this.props.onButtonClick}>Submit</button>
        </div>
    )
  }
}
