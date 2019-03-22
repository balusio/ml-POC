import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar/search-bar';
import SearchResult from './components/search-result/search-result';

import './styles/main.scss';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
  <SearchBar></SearchBar>
  <SearchResult></SearchResult>
  </div>,
  document.getElementById('app')
);