import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='right-top-login'>
          <input type="text" placeholder="Enter Username" name="uname"/>
          <span className='right-space'/>
          <input type="password" placeholder="Enter Password" name="psw"/>
          <span className='right-space'/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
