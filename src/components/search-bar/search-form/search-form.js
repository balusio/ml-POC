import React, { Component } from "react";
import './search-form.scss';
import lupa from '../../../assets/ic_Search.png';
import lupa2x from '../../../assets/ic_Search@2x.png';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchQuery: '',
    };
   
  }
  handleChange(event){
    this.setState({searchQuery: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.searchQuery);
    console.log(this.props);
    const query = `/items?search=${this.state.searchQuery}`;
    this.props.history.push(query);
    
  }


  render() {
    return(
      <form className="search-box" onSubmit={this.handleSubmit}>
        <input className="input-search" placeholder="Nunca dejes de buscar" value={this.state.searchQuery} onChange={this.handleChange}  />
          <button type="submit" id="searchButton" >
            <img src={lupa} srcSet={lupa2x} alt="buscar"/> 
          </button> 
      </form>
    );
  }
}

export default withRouter(SearchForm);