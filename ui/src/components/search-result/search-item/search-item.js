
import React, { Component } from "react";
import './search-item.scss';
import  img from '../../../assets/logo_ML@2x.png';
import iconShipping from '../../../assets/ic_shipping@2x.png';
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
      <div className="search-result-element">
        <div className="img-elem-wrapper"> 
          <img src={this.state.img} alt="mercado-libre"/>
        </div>
        <div className="text-elem-wrapper">
          <div className="location-elem-wrapper">
            <h3>$ 1500 <span className="free-shipping-icon" ></span></h3>  
            <p className="location-descp">Capital Federal</p>
          </div>
          <p className="description-elem"> subtitle </p>
        </div>

      </div>
      
    );
  }
}
export default SearchItem;