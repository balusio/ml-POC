import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar/search-bar';

import './styles/main.scss';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <SearchBar></SearchBar>,
  document.getElementById('app')
);