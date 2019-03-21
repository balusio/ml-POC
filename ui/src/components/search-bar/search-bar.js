
import React, { Component } from "react";
import './search-bar.scss';
import lupa from '../../assets/ic_Search.png';
import lupa2x from '../../assets/ic_Search@2x.png';
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
          <img src={lupa} srcSet={lupa2x} /> 
          <p>{this.props.title}</p>
        </div>
      </div>
      
    );
  }
}
export default SearchBar;