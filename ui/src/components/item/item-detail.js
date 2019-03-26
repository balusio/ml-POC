import React, { Component } from "react";
import './item-detail.scss';
import mockimage from '../../assets/image-iphone.png';
import BreadCrumb from '../breadcrumb/breadcrumb-list';
class Item extends Component {
  
  render() {
    return(
      <div>
        <BreadCrumb />
        <section className="container wrapper item-detail-result">
          <div className="item-result-specs"> 
            <div className="item-image-container">
              <img src={mockimage} />
            </div>
            <div className="item-result-container">
              <div className="item-result-text">
                <span className="most-selled-element">Nuevo - 234 vendidos</span>
                <h1> Deco reverse sombrero super canchero </h1>
              </div>
              <div className="price-element"> 
                  <span>$ 1.98000 <sup>00</sup></span> 
                </div>
            <button className="item-button-action" alt="comprar">Comprar</button>
            </div>
          </div>
          <div className="item-detail-description">
            <h3>Descripción del Producto</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, ante quis mollis ullamcorper, nulla metus molestie diam, sit amet faucibus urna augue non orci. </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Item;