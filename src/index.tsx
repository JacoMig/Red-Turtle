import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './styles/index.scss';

// override console.log
if (process.env.NODE_ENV !== 'development') {
  console.log = function () {};
  console.info = function () {};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);