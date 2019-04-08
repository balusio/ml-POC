
import React, { Component } from "react";
import './search-item.scss';
import mockImage from '../../../assets/image-iphone.png';
import iconShipping from '../../../assets/ic_shipping@2x.png';
import BreadCrumb from '../../breadcrumb/breadcrumb-list';
import {Link} from 'react-router-dom';
class SearchItem extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo",
      img: mockImage
    };
  }
  shipping(){
    const backgroundImage = {
      backgroundImage: `url(${iconShipping})`
    }
    return (
     
      <span className="free-shipping-icon" style={backgroundImage}></span>
    )
  }
  setPriceFormat(priceObject){
    return  (priceObject.amount).toLocaleString(priceObject.currency).replace(/,/g, '.');
  }

  render() {
   
    return (
      <div className="search-result-container" key={this.props.product.id}>
        <Link to={`/items/${this.props.product.id}`} className="search-result-element">
          <div className="img-elem-wrapper"> 
            <img src={this.props.product.picture} alt="mercado-libre"/>
          </div>
          <div className="text-elem-wrapper">
            <div className="location-elem-wrapper">
              <h3>$ {this.setPriceFormat(this.props.product.price)}  
              {this.props.product.shipping ? this.shipping() : ' '}
              </h3>  
              <p className="location-descp">Capital Federal</p>
            </div>
            <p className="description-elem">{this.props.product.title} </p>
          </div>
        </Link>
      </div>
      
    );
  }
}
export default SearchItem;