import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

[
  <li>mosxari</li>,
  <li>fasolada</li>
]
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

ReactDOM.render(<App foods={foods} />, document.getElementById('root'));
