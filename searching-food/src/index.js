import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const foods = [
  {
    name: 'mosxari',
    portions: 10
  },
  {
    name: 'fasolada',
    portions: 0
  },
  {
    name: 'tzatziki',
    portions: 15
  },
  {
    name: 'mousakas',
    portions: 0
  },
  {
    name: 'fasolakia',
    portions: 8
  }
];

ReactDOM.render(<App />, document.getElementById('root'));
