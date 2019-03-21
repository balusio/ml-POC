
import React, { Component } from "react";
import './search-bar.scss';
import img from '../../assets/ic_Search.png';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo"
    };
  }
  render() {
    return (
      <div className="search-bar">
        <div className="container">
          <img src={img} /> 
          <p>{this.props.title}</p>
        </div>
      </div>
      
    );
  }
}
export default SearchBar;