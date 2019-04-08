import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './components/app';
import './styles/main.scss';
const title = 'My Minimal React Webpack Babel Setup';
const render = document.querySelector('#app');
if (typeof window !== 'undefined') {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    render
  ); 
}   