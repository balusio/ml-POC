import React, { Component } from "react";
import BreadCrumb from '../breadcrumb/breadcrumb-list';
import {API_URL} from '../../env';
import axios from 'axios';
import Loader from '../loader/loader';
import './item-detail.scss';
class ItemDetail extends Component {
  constructor(props){
    super(props);
    this.state ={
      loading: false,
      product : {
        categories: [],
        price:{
          amount:0,
          decimals:0,
          currency: 'ARS'
        }
      }
    }
  }
  setPriceFormat(priceObject){
    return  (priceObject.amount).toLocaleString(priceObject.currency).replace(/,/g, '.');
  }
  componentWillMount(){
    this.setState({loading: true});
  }
  componentDidMount(){
    const itemId = this.props.match.params.id;
    axios.get(`${API_URL}/items/${itemId}`).then((response)=>{
      console.log(response.data);
      this.setState({
        loading: false,
        product: response.data
      });
    })
  }

  render() {
    return(
      <div>
        <BreadCrumb elements={this.state.product.categories}/>
        {this.state.loading ? <Loader /> : ' ' }
        <section className="container wrapper item-detail-result">
          <div className="item-result-specs"> 
            <div className="item-image-container">
              <img src={this.state.product.picture} />
            </div>
            <div className="item-result-container">
              <div className="item-result-text">
                <span className="most-selled-element">{this.state.product.sold_quantity} vendidos</span>
                <h1> {this.state.product.title} </h1>
              </div>
              <div className="price-element"> 
                  <span>$ {this.setPriceFormat(this.state.product.price)} <sup>{this.state.product.price.decimals}</sup></span> 
                </div>
            <button className="item-button-action" alt="comprar">Comprar</button>
            </div>
          </div>
          <div className="item-detail-description">
            <h3>Descripción del Producto</h3>
            <p> {this.state.product.description}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default ItemDetail;