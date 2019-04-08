

import iconShipping from '../../../assets/ic_shipping@2x.png';
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './search-item.scss';

const SearchItem = (props) => {
  const shipping = () => {
    const backgroundImage = {
      backgroundImage: `url(${iconShipping})`
    }
    return (
      <span className="free-shipping-icon" style={backgroundImage}></span>
    )
  }
  const setPriceFormat = (priceObject) => {
    return  (priceObject.amount).toLocaleString(priceObject.currency).replace(/,/g, '.');
  } 
  return (
    <div className="search-result-container" key={props.product.id}>
      <Link to={`/items/${props.product.id}`} className="search-result-element">
        <div className="img-elem-wrapper"> 
          <img src={props.product.picture} alt="mercado-libre"/>
        </div>
        <div className="text-elem-wrapper">
          <div className="location-elem-wrapper">
            <h3>$ {setPriceFormat(props.product.price)}  
            {props.product.shipping ? shipping() : ' '}
            </h3>  
            <p className="location-descp">Capital Federal</p>
          </div>
          <p className="description-elem">{props.product.title} </p>
        </div>
      </Link>
    </div>
    
  );
}
export default SearchItem;