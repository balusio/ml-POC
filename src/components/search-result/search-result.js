
import React, { Component } from "react";
import SearchItem from './search-item/search-item';
import './search-result.scss';
import BreadCrumb from '../breadcrumb/breadcrumb-list';
class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo",
      items:['one','two','three','four']
    };
  }
  render() {
    const elements = ['one', 'two', 'three','four'];

    const items = []
  
    for (const [index, value] of elements.entries()) {
      items.push(<SearchItem />)
    }
    return (
      <div>
        <BreadCrumb />
        <section className="container wrapper">
          <div className="search-wrapper"> 
            {items}
          </div>
        </section>
      </div>
      
    );
  }
}
export default SearchResult;