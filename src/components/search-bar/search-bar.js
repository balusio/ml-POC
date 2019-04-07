
import React, { Component } from "react";
import SearchForm from './search-form/search-form';
import './search-bar.scss';
import lupa from '../../assets/ic_Search.png';
import lupa2x from '../../assets/ic_Search@2x.png';
import logo_ML from '../../assets/logo_ML.png';
import logo_ML2x from '../../assets/logo_ML@2x.png';
import {withRouter} from 'react-router';class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello washioooo",
      logo: logo_ML
    };
  }
  render() {
    return (
      <nav className="container container-search">
        <div className="search-bar wrapper">
          <div className="logo">
            <img src={this.props.logo} srcSet={logo_ML2x}  alt="mercado-libre"/>
          </div>
          <SearchForm />
          <p>{this.props.title}</p>
        </div>
      </nav>
      
    );
  }
}
export default SearchBar;