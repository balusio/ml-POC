import React, { Component } from "react";
import './search-form.scss';
import lupa from '../../../assets/ic_Search.png';
import lupa2x from '../../../assets/ic_Search@2x.png';
import {Link} from 'react-router-dom';
class SearchForm extends Component {
  
  render() {
    return(
      <form className="search-box">
        <input className="input-search" placeholder="Nunca dejes de buscar" />
        <Link to="/items">
          <button type="submit" id="searchButton">
            <img src={lupa} srcSet={lupa2x} alt="buscar"/> 
          </button> 
        </Link> 
      </form>
    );
  }
}

export default SearchForm;