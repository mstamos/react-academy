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

        <div className='main-login'>
          <p>
            <input type="text" placeholder="Enter Username" name="uname"/>
          </p>
          <p>
            <input type="password" placeholder="Enter Password" name="psw"/>
          </p>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
