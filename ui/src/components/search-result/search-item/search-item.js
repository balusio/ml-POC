
import React, { Component } from "react";
import './search-item.scss';
import  img from '../../../assets/logo_ML@2x.png';
class SearchItem extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo",
      img: img
    };
  }
  render() {
    return (
      <div className="Item">
        <div className="img-wrapper"> 
          <img src={this.state.img} alt="mercado-libre"/>
        </div>
        <div className="text-container">
        <div></div>
        </div>

      </div>
      
    );
  }
}
export default SearchItem;