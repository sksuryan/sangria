import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import twemoji from 'twemoji';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

twemoji.parse(document.body);
