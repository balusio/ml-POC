
import React, { Component } from "react";
import SearchItem from './search-item/search-item';
import './search-result.scss';
import BreadCrumb from '../breadcrumb/breadcrumb-list';
import {API_URL} from '../../env';
import axios from 'axios';
class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello washioooo",
      categories:[],
      elements:[],
      loading: false
    };
    this.onRouteChanged = this.onRouteChanged.bind(this);
    this.getParams = function (url) {
    var params = {};
    var query = url.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  };
  }
  loadingResults(){
    return (
      <div className="loader">
        <div className="lds-loading"><div></div><div></div><div></div></div>
      </div>
      
    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }
  componentWillMount(){
    this.onRouteChanged();
  }

  onRouteChanged(){
    console.log(this.props.history.location.search);
    const queryString= this.getParams(this.props.history.location.search);
    this.setState({loading: true})
    axios.get(`${API_URL}/items?search=${queryString.search}`).then((response)=>{
      console.log(response.data);
      this.setState({
        categories: response.data.categories,
        elements: response.data.items,
        loading: false
      });
    })
  }
  render() {
    return (
      <div>
        {this.state.loading ? this.loadingResults() : ' ' }
        <BreadCrumb elements={this.state.categories}/>
        <section className="container wrapper">
          <div className="search-wrapper"> 
            {this.state.elements.map((element,index)=>{
              return(
                <SearchItem product={element} key={index}/>
              )
              
            })}
          </div>
        </section>
      </div>
      
    );
  }
}
export default SearchResult;