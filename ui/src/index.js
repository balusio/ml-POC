import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './components/app';
import './styles/main.scss';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <App />,
  document.getElementById('app')
);  