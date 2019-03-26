import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar/search-bar';
import SearchResult from './components/search-result/search-result';
import BreadCrumb from './components/breadcrumb/breadcrumb-list';
import ItemDetail from './components/item/item-detail';
import './styles/main.scss';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>
  <SearchBar></SearchBar>
  <BreadCrumb> </BreadCrumb>
  <SearchResult></SearchResult> 
  <ItemDetail></ItemDetail>
  </div>,
  document.getElementById('app')
);