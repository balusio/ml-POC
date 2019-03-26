
import React, { Component } from "react";
import './search-item.scss';
import mockImage from '../../../assets/image-iphone.png';
import iconShipping from '../../../assets/ic_shipping@2x.png';
class SearchItem extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo",
      img: mockImage
    };
  }
  render() {
    const backgroundImage = {
      backgroundImage: `url(${iconShipping})`
    }
    return (
      <div className="search-result-element">
        <div className="img-elem-wrapper"> 
          <img src={this.state.img} alt="mercado-libre"/>
        </div>
        <div className="text-elem-wrapper">
          <div className="location-elem-wrapper">
            <h3>$ 1500 <span className="free-shipping-icon" style={backgroundImage}></span></h3>  
            <p className="location-descp">Capital Federal</p>
          </div>
          <p className="description-elem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, ante quis mollis ullamcorper, nulla metus molestie diam, sit amet faucibus urna augue non orci. </p>
        </div>

      </div>
      
    );
  }
}
export default SearchItem;