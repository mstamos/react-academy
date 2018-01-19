import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favorite'>Favorite</Link></li>
          </ul>

          <Route path='/' component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
